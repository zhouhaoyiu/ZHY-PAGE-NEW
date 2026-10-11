function prepare_waveform
% Read GeoNet's documented 10I8 / 10F8 V2A blocks without altering the record.
root = fileparts(fileparts(mfilename('fullpath')));
source = fullfile(root, 'scripts', 'waveform-data');
target = fullfile(root, 'public', 'research');
filename = '20110221_235142_RHSC.V2A';
fid = fopen(fullfile(source, filename), 'r');
assert(fid >= 0, 'Missing GeoNet V2A source');
cleanup = onCleanup(@() fclose(fid));
digest = java.security.MessageDigest.getInstance('SHA-256');
digest.update(fread(fid, Inf, '*uint8'));
source_hash = lower(reshape(dec2hex(typecast(digest.digest(), 'uint8'), 2)', 1, []));
assert(strcmp(source_hash, 'e3f68f134c4fb7d554f79665d102f3a649e2a94830e8eef2b94850437e4c5f0c'), 'Source hash changed');
frewind(fid);
headings = cell(3, 1);
ints = zeros(40, 3);
floats = zeros(60, 3);
acceleration = cell(3, 1);
for component = 1:3
    heading = strings(16, 1);
    for line = 1:16
        value = fgetl(fid);
        assert(ischar(value), 'Truncated V2A heading');
        heading(line) = string(value);
    end
    assert(startsWith(heading(1), 'Corrected accelerogram'));
    headings{component} = heading;
    ints(:, component) = read_fixed(fid, 40);
    floats(:, component) = read_fixed(fid, 60);
    acceleration{component} = read_fixed(fid, ints(34, component));
    read_fixed(fid, ints(35, component)); % Velocity retained in the source.
    read_fixed(fid, ints(36, component)); % Displacement retained in the source.
end
assert(all(ints(34, :) == 3329));
assert(all(abs(floats(26, :) - 0.02) < 1e-10));
assert(all(ints(28, 1:2) == [274, 184]));
data_mm = cat(2, acceleration{:});
assert(all(isfinite(data_mm), 'all'));
peak_mm = max(abs(data_mm), [], 1);
assert(all(abs(peak_mm - abs(floats(36, :))) < 0.11), 'PGA does not match source header');
data = data_mm / 1000; % Published mm/s^2 -> m/s^2 only; no new filtering.
dt = floats(26, 1);
time = (0:size(data, 1)-1)' * dt;
scale = max(abs(data), [], 'all');
metadata = struct;
metadata.source = 'GeoNet / GNS Science, corrected Vol2 accelerogram';
metadata.sourceUrl = ['https://geonet-open-data.s3-ap-southeast-2.amazonaws.com/' ...
    'seismic-products/strong-motion/volume-products/2011/' ...
    '02_Christchurch_mainshock_extended_pass_band/Vol2/data/' filename];
metadata.documentationUrl = 'https://www.geonet.org.nz/data/types/strong_motion';
metadata.licenseUrl = 'https://www.geonet.org.nz/policy';
metadata.sourceFile = filename;
metadata.sourceSha256 = 'e3f68f134c4fb7d554f79665d102f3a649e2a94830e8eef2b94850437e4c5f0c';
metadata.doi = 'https://doi.org/10.21420/X0MD-MV58';
metadata.acknowledgement = 'Data supplied by GeoNet and its sponsors NHC, Earth Sciences NZ, LINZ, NEMA and MBIE.';
metadata.station = 'RHSC';
metadata.site = 'Riccarton High School';
metadata.event = 'Christchurch, 2011';
metadata.eventOriginUtc = '2011-02-21T23:51:42Z';
metadata.channels = {'N86W', 'S04W', 'UP'};
metadata.units = 'm/s^2';
metadata.samplingRate = 1 / dt;
metadata.sampleCount = size(data, 1);
metadata.duration = time(end);
metadata.displayScale = scale;
metadata.channelPeaks = peak_mm / 1000;
metadata.timeReference = 'Seconds from the start of the published V2 record, including its 5-second leading and trailing padding.';
metadata.processing = 'Source: sensitivity and cross-axis correction; filter transition bands 0.05-0.10 Hz and 24.50-25.50 Hz. Website: convert mm/s^2 to m/s^2; common vertical display scale across all components. No further filtering, detrending, resampling, cropping, picking, or model inference.';
metadata.sourceHeader = cellstr(headings{1});
metadata.validation = struct('finiteSamples', true, 'headerPgaMatches', true, ...
    'originalSamplesPerChannel', ints(34, :), 'sampleIntervalSeconds', floats(26, :), ...
    'meanAcceleration', mean(data, 1), 'peakAbsoluteAcceleration', peak_mm / 1000);
write_json(fullfile(target, 'waveform-metadata.json'), metadata);
metadata.samples = round(data, 7);
write_json(fullfile(target, 'waveform.json'), metadata);
for component = 1:3
    writematrix([time, 4-component + 0.34*data(:,component)/scale], ...
        fullfile(source, sprintf('channel%d.tsv', component)), ...
        'FileType', 'text', 'Delimiter', 'tab');
end
save(fullfile(source, 'corrected-waveform.mat'), 'data', 'dt', 'time', 'metadata');
fprintf('Validated %d samples x 3; %.2f s; PGA %.4f / %.4f / %.4f m/s^2\n', ...
    size(data, 1), time(end), peak_mm/1000);
end

function values = read_fixed(fid, count)
values = zeros(count, 1);
cursor = 1;
for row = 1:ceil(count/10)
    line = fgetl(fid);
    assert(ischar(line), 'Truncated V2A data');
    needed = min(10, count-cursor+1);
    assert(numel(line) >= needed*8, 'Short fixed-width V2A row');
    fields = reshape(line(1:needed*8), 8, [])';
    parsed = str2double(string(fields));
    assert(all(isfinite(parsed)), 'Invalid V2A numeric field');
    values(cursor:cursor+needed-1) = parsed;
    cursor = cursor + needed;
end
end

function write_json(path, value)
fid = fopen(path, 'w');
assert(fid >= 0, 'Cannot write waveform export');
cleanup = onCleanup(@() fclose(fid));
fprintf(fid, '%s', jsonencode(value));
end
