export const projects = [
  {
    id: 'cspp',
    title: 'CSPP',
    category: 'P-WAVE PICKING',
    subtitle: '逐包因果 P 波候选拾取',
    description:
      '从连续三分量波形中识别 P 波候选并估计到时。模型逐包处理新数据，通过跨包状态保留历史信息。',
    details: [
      ['输入', '连续三分量地震波形。'],
      ['处理', '每个新数据包编码一次，更新跨包状态。'],
      ['输出', 'P 波候选与到时。'],
    ],
    url: 'https://github.com/zhouhaoyiu/CSPP',
  },
  {
    id: 'database',
    title: '地震数据库',
    category: 'STRONG-MOTION DATA',
    subtitle: '全球强震记录下载与归档',
    description:
      '从多个台网下载强震记录，按事件整理波形、元数据和文件清单。支持按日期或事件检索、恢复下载进度和归档校验。',
    details: [
      [
        '数据源',
        'AFAD、ITACA、ESM、GeoNet、P-Alert、GDMS、CESMD、CNSN 和 CSN。',
      ],
      ['下载', '按日期、事件或时间窗口获取记录，保存下载状态。'],
      ['归档', '保留数据来源、事件信息和原始单位，生成 CSV 与 Excel 清单。'],
    ],
    url: '',
  },
  {
    id: 'history',
    title: '历史地震查询',
    category: 'EARTHQUAKE CATALOG',
    subtitle: '震中区历史地震与活动简报',
    description:
      '围绕指定震中检索历史地震，设置查询半径和最低震级，查看地震分布并生成简报。',
    details: [
      ['检索', '手动填写主震参数，输入事件 ID，或从地震目录选择事件。'],
      ['地图', '查看历史地震分布与活动断层，按震级或时间显示事件。'],
      ['导出', '下载目录、分布图及 Word、PDF 简报。'],
    ],
    url: 'https://github.com/zhouhaoyiu/quake-report',
  },
]
