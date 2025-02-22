<script lang="ts" setup>
import { onMounted } from 'vue'

onMounted(() => {
  document.addEventListener('keydown', (e) => {
    applyStatus(e, true)
  })

  document.addEventListener('keyup', (e) => {
    applyStatus(e, false)
  })

  document.querySelector('input')!.value = 'Leopold FC750R PD'
})

// 这个函数用来给按键添加按下和松开的效果
function applyStatus(e: KeyboardEvent, pressed = false) {
  e.preventDefault()
  const { keyCode } = e as any
  const keys = document.querySelectorAll(`div.key[data-keyCode="${keyCode}"]`)
  if (keys) {
    keys.forEach((key) => {
      if (pressed) {
        key.classList.add('pressed')
      }
      else {
        key.classList.remove('pressed')
      }
    })
  }
}
</script>

<template>
  <div class="leopold-fc750">
    <header>
      <div class="key-wrapper esc">
        <div class="key normal dark" data-keyCode="27">
          <div class="display center">
            ★
          </div>
        </div>
      </div>
      <div class="key-wrapper f1-to-f4">
        <div class="key normal light" data-keyCode="112">
          <div class="display left-center">
            <span>F1</span>
          </div>
        </div>
        <div class="key normal light" data-keyCode="113">
          <div class="display left-center">
            <span>F2</span>
          </div>
        </div>
        <div class="key normal light" data-keyCode="114">
          <div class="display left-center">
            <span>F3</span>
          </div>
        </div>
        <div class="key normal light" data-keyCode="115">
          <div class="display left-center">
            <span>F4</span>
          </div>
        </div>
      </div>

      <div class="key-wrapper f5-to-f8">
        <div class="key normal dark" data-keyCode="116">
          <div class="display left-center">
            <span>F5</span>
          </div>
        </div>
        <div class="key normal dark" data-keyCode="117">
          <div class="display left-center">
            <span>F6</span>
          </div>
        </div>
        <div class="key normal dark" data-keyCode="118">
          <div class="display left-center">
            <span>F7</span>
          </div>
        </div>
        <div class="key normal dark" data-keyCode="119">
          <div class="display left-center">
            <span>F8</span>
          </div>
        </div>
      </div>

      <div class="key-wrapper f9-to-f12">
        <div class="key normal light" data-keyCode="120">
          <div class="display left-center">
            <span>F9</span>
          </div>
        </div>
        <div class="key normal light" data-keyCode="121">
          <div class="display left-center">
            <span>F10</span>
          </div>
        </div>
        <div class="key normal light" data-keyCode="122">
          <div class="display left-center">
            <span>F11</span>
          </div>
        </div>
        <div class="key normal light" data-keyCode="123">
          <div class="display left-center">
            <span>F12</span>
          </div>
        </div>
      </div>

      <div class="key-wrapper function-panel">
        <div class="key normal dark">
          <div class="display left-center">
            <span>PrtSc</span>
          </div>
        </div>
        <div class="key normal dark">
          <div class="display left-center">
            <span>Scroll</span>
          </div>
        </div>
        <div class="key normal dark">
          <div class="display left-center">
            <span>Pause</span>
          </div>
        </div>
      </div>
    </header>

    <main>
      <div class="key-wrapper main">
        <!-- row-1 -->
        <div data-keyCode="192" class="key normal light">
          <div class="display">
            <span>~</span>
            <span>·</span>
          </div>
        </div>
        <div data-keyCode="49" class="key normal light">
          <div class="display">
            <span>!</span>
            <span>1</span>
          </div>
        </div>
        <div data-keyCode="50" class="key normal light">
          <div class="display">
            <span>@</span>
            <span>2</span>
          </div>
        </div>
        <div data-keyCode="51" class="key normal light">
          <div class="display">
            <span>#</span>
            <span>3</span>
          </div>
        </div>
        <div data-keyCode="52" class="key normal light">
          <div class="display">
            <span>$</span>
            <span>4</span>
          </div>
        </div>
        <div data-keyCode="53" class="key normal light">
          <div class="display">
            <span>%</span>
            <span>5</span>
          </div>
        </div>
        <div data-keyCode="54" class="key normal light">
          <div class="display">
            <span>^</span>
            <span>6</span>
          </div>
        </div>
        <div data-keyCode="55" class="key normal light">
          <div class="display">
            <span>&</span>
            <span>7</span>
          </div>
        </div>
        <div data-keyCode="56" class="key normal light">
          <div class="display">
            <span>*</span>
            <span>8</span>
          </div>
        </div>
        <div data-keyCode="57" class="key normal light">
          <div class="display">
            <span>(</span>
            <span>9</span>
          </div>
        </div>
        <div data-keyCode="48" class="key normal light">
          <div class="display">
            <span>)</span>
            <span>0</span>
          </div>
        </div>
        <div data-keyCode="189" class="key normal light">
          <div class="display">
            <span>_</span>
            <span>-</span>
          </div>
        </div>
        <div data-keyCode="187" class="key normal light">
          <div class="display">
            <span>+</span>
            <span>=</span>
          </div>
        </div>
        <div data-keyCode="8" class="key dark backspace">
          <div class="display center">
            <span style="transform-origin: center;">&nbsp;←&nbsp;Backspace</span>
          </div>
        </div>

        <!-- row-2 -->
        <div data-keyCode="9" class="key dark tab">
          <div class="display center">
            <span>
              <span>Tab</span>
              <span>⇥</span>
            </span>
          </div>
        </div>
        <div data-keyCode="81" class="key normal light">
          <div class="display">
            <span>Q</span>
          </div>
        </div>
        <div data-keyCode="87" class="key normal light">
          <div class="display">
            <span>W</span>
          </div>
        </div>
        <div data-keyCode="69" class="key normal light">
          <div class="display">
            <span>E</span>
          </div>
        </div>
        <div data-keyCode="82" class="key normal light">
          <div class="display">
            <span>R</span>
          </div>
        </div>
        <div data-keyCode="84" class="key normal light">
          <div class="display">
            <span>T</span>
          </div>
        </div>
        <div data-keyCode="89" class="key normal light">
          <div class="display">
            <span>Y</span>
          </div>
        </div>
        <div data-keyCode="85" class="key normal light">
          <div class="display">
            <span>U</span>
          </div>
        </div>
        <div data-keyCode="73" class="key normal light">
          <div class="display">
            <span>I</span>
          </div>
        </div>
        <div data-keyCode="79" class="key normal light">
          <div class="display">
            <span>O</span>
          </div>
        </div>
        <div data-keyCode="80" class="key normal light">
          <div class="display">
            <span>P</span>
          </div>
        </div>
        <div data-keyCode="219" class="key normal light">
          <div class="display">
            <span>{</span>
            <span>[</span>
          </div>
        </div>
        <div data-keyCode="221" class="key normal light">
          <div class="display">
            <span>}</span>
            <span>]</span>
          </div>
        </div>
        <div data-keyCode="220" class="key light row2-end">
          <div class="display">
            <span>|</span>
            <span>\</span>
          </div>
        </div>

        <!-- row-3 -->
        <div data-keyCode="20" class="key dark caps">
          <div class="display left-center">
            <span>CapsLock</span>
          </div>
        </div>
        <div data-keyCode="65" class="key normal light">
          <div class="display">
            <span>A</span>
          </div>
        </div>
        <div data-keyCode="83" class="key normal light">
          <div class="display">
            <span>S</span>
          </div>
        </div>
        <div data-keyCode="68" class="key normal light">
          <div class="display">
            <span>D</span>
          </div>
        </div>
        <div data-keyCode="70" class="key normal light">
          <div class="display">
            <span>F</span>
          </div>
        </div>
        <div data-keyCode="71" class="key normal light">
          <div class="display">
            <span>G</span>
          </div>
        </div>
        <div data-keyCode="72" class="key normal light">
          <div class="display">
            <span>H</span>
          </div>
        </div>
        <div data-keyCode="74" class="key normal light">
          <div class="display">
            <span>J</span>
          </div>
        </div>
        <div data-keyCode="75" class="key normal light">
          <div class="display">
            <span>K</span>
          </div>
        </div>
        <div data-keyCode="76" class="key normal light">
          <div class="display">
            <span>L</span>
          </div>
        </div>
        <div data-keyCode="186" class="key normal light">
          <div class="display">
            <span>:</span>
            <span>;</span>
          </div>
        </div>
        <div data-keyCode="222" class="key normal light">
          <div class="display">
            <span>"</span>
            <span>'</span>
          </div>
        </div>
        <div data-keyCode="13" class="key dark enter">
          <div class="display">
            <span>Enter</span>
            <span>⏎</span>
          </div>
        </div>

        <!-- row-4 -->
        <div data-keyCode="16" class="key dark shift-l">
          <div class="display left-center">
            <span style="display: flex; align-items: center">
              <span style="margin-right: 5px;">⇧</span>
              <span>Shift</span>
            </span>
          </div>
        </div>
        <div data-keyCode="90" class="key normal light">
          <div class="display">
            <span>Z</span>
          </div>
        </div>
        <div data-keyCode="88" class="key normal light">
          <div class="display">
            <span>X</span>
          </div>
        </div>
        <div data-keyCode="67" class="key normal light">
          <div class="display">
            <span>C</span>
          </div>
        </div>
        <div data-keyCode="86" class="key normal light">
          <div class="display">
            <span>V</span>
          </div>
        </div>
        <div data-keyCode="66" class="key normal light">
          <div class="display">
            <span>B</span>
          </div>
        </div>
        <div data-keyCode="78" class="key normal light">
          <div class="display">
            <span>N</span>
          </div>
        </div>
        <div data-keyCode="77" class="key normal light">
          <div class="display">
            <span>M</span>
          </div>
        </div>
        <div data-keyCode="188" class="key normal light">
          <div class="display">
            <span>&lt;</span>
            <span>,</span>
          </div>
        </div>
        <div data-keyCode="190" class="key normal light">
          <div class="display">
            <span>&gt;</span>
            <span>.</span>
          </div>
        </div>
        <div data-keyCode="191" class="key normal light">
          <div class="display">
            <span>?</span>
            <span>/</span>
          </div>
        </div>
        <div data-keyCode="16" class="key dark shift-r">
          <div class="display left-center">
            <span style="display: flex; align-items: center">
              <span style="margin-right: 5px;">⇧</span>
              <span>Shift</span>
            </span>
          </div>
        </div>

        <!-- row-4 -->
        <div data-keyCode="17" class="key dark wide">
          <div class="display left-center">
            <span>⌃</span>
            <span style="transform: scale(0.75)">Control</span>
          </div>
        </div>
        <div data-keyCode="18" class="key dark wide">
          <div class="display left-center">
            <span>⌥</span>
            <span style="transform: scale(0.7)">Option</span>
          </div>
        </div>
        <div data-keyCode="91" class="key dark wide">
          <div class="display left-center">
            <span>⌘</span>
            <span style="transform: scale(0.6)">Command</span>
          </div>
        </div>
        <div data-keyCode="32" class="key light whitespace">
          <div class="display" />
        </div>
        <div data-keyCode="93" class="key dark wide">
          <div class="display left-center">
            ⌘
          </div>
        </div>
        <div class="key dark wide">
          <div class="display left-center">
            <span>Fn</span>
          </div>
        </div>
        <div class="key dark wide">
          <div class="display left-center">
            ⚙︎
          </div>
        </div>
        <div data-keyCode="17" class="key dark wide">
          <div class="display left-center">
            <span style="transform: scale(0.7);">Control</span>
          </div>
        </div>
      </div>
      <div class="function-panel">
        <div class="key-wrapper fuc">
          <div class="key normal dark">
            <div class="display left-center">
              <span>Ins</span>
            </div>
          </div>
          <div class="key normal dark">
            <div class="display left-center">
              <span>Home</span>
            </div>
          </div>
          <div class="key normal dark">
            <div class="display left-center">
              <span>PgUp</span>
            </div>
          </div>
          <div class="key normal dark">
            <div class="display left-center">
              <span>Del</span>
            </div>
          </div>
          <div class="key normal dark">
            <div class="display left-center">
              <span>End</span>
            </div>
          </div>
          <div class="key normal dark">
            <div class="display left-center">
              <span>PgDn</span>
            </div>
          </div>
        </div>

        <div class="directions">
          <div class="key-wrapper">
            <div data-keyCode="38" class="key normal dark">
              <div class="display left-center">
                ↑
              </div>
            </div>
          </div>
          <div class="key-wrapper">
            <div data-keyCode="37" class="key normal dark">
              <div class="display left-center">
                ←
              </div>
            </div>
            <div data-keyCode="40" class="key normal dark">
              <div class="display left-center">
                ↓
              </div>
            </div>
            <div data-keyCode="39" class="key normal dark">
              <div class="display left-center">
                →
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <input type="text" disabled>
  </div>
</template>

<style lang="scss" scoped>
html,
body {
  width: 100%;
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-text-size-adjust: none;
}
body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.leopold-fc750 {
  width: 1020px;
  height: 382px;
  background: linear-gradient(135deg, #8f0710, #af0914);
  padding: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow:
    10px 10px 10px rgba(0, 0, 0, 0.1),
    20px 20px 40px rgba(0, 0, 0, 0.1),
    0px 40px 30px rgba(0, 0, 0, 0.12),
    0px 20px 60px rgba(0, 0, 0, 0.1),
    0px 0px 40px rgba(0, 0, 0, 0.1);
  position: relative;
  border-top-right-radius: 5px;
}

.leopold-fc750 header {
  display: flex;
}

.leopold-fc750::before,
.leopold-fc750::after {
  content: '';
  position: absolute;
}

.leopold-fc750::before {
  width: 7px;
  height: 100%;
  background-color: #ce4c55;
  right: 100%;
  top: 0;
  -webkit-transform-origin: right bottom;
  transform-origin: right bottom;
  -webkit-transform: skewY(-45deg);
  transform: skewY(-45deg);
  border-top-left-radius: 2px;
}

.leopold-fc750::after {
  width: 100%;
  height: 7px;
  background-color: #aa262e;
  top: 100%;
  -webkit-transform-origin: left top;
  transform-origin: left top;
  -webkit-transform: skewX(-45deg);
  transform: skewX(-45deg);
  border-bottom-right-radius: 2px;
}

.key-wrapper {
  border-radius: 5px;
  background-color: #000;
  width: auto;
  padding: 2px;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  align-items: flex-start;
  align-content: flex-start;
}

.key-wrapper::after {
  border-radius: inherit;
  content: '';
  position: absolute;
  box-shadow: inset 0 0 8px #000;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

.key {
  margin: 2px;
  border-width: 2px 8px 13px;
  border-style: solid;
  border-radius: 4px;
  padding: 2px;
  background-color: #000;
  flex-shrink: 0;
  position: relative;
  flex-grow: 0;
}

.key > .display {
  width: calc(100% + 2px);
  height: calc(100% + 2px);
  position: absolute;
  left: -1px;
  top: -1px;
  border-radius: 2px;
}

.key {
  width: 50px;
  height: 50px;
  transition: all 0.12s ease;
}

.key .display {
  transition: all 0.12s ease;
}

.key.normal {
  width: 50px;
  height: 50px;
}

.key.backspace {
  width: 86px;
}

.key.tab {
  width: 70px;
}

.key.row2-end {
  width: 66px;
}

.key.caps {
  width: 86px;
}

.key.enter {
  width: 104px;
}

.key.shift-l {
  width: 120px;
}

.key.shift-r {
  width: 124px;
}

.key.wide {
  width: 60px;
}

.key.whitespace {
  width: 340px;
}

.key.dark {
  background-color: #374366;
  border-color: #15183f #121a2b #283137 #605775;
}

.key.dark .display {
  background-color: #374366;
  color: #ccc;
}

.key.light {
  background-color: #fff;
  border-color: #777 #bbb #ccc #eee;
}

.key.light .display {
  background-color: #fff;
  color: #ce3c46;
}

.key.pressed {
  -webkit-transform: scale(0.92);
  transform: scale(0.92);
}

.key.pressed.whitespace {
  -webkit-transform: scale(0.98);
  transform: scale(0.98);
}

.key.pressed.dark {
  border-color: #111331 #0d121d #232b30 #453e55;
}

.key.pressed.light {
  border-color: #666 #aaa #bbb #ccc;
  background-color: #eee;
}

.key.pressed.light .display {
  background-color: #eee;
}

header .key-wrapper.f1-to-f4 {
  margin-left: 40px;
}

header .key-wrapper.f5-to-f8,
header .key-wrapper.f9-to-f12 {
  margin-left: 20px;
}

header .function-panel {
  margin-left: 10px;
}

main {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
}

main .key-wrapper.main {
  width: 797px;
  height: calc(5 * (50px + 4px) + 4px);
  flex-shrink: 0;
}

main .function-panel {
  margin-left: 10px;
  height: calc(5 * (50px + 4px) + 4px);
  display: flex;
  width: calc(3 * (50px + 4px) + 4px);
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
}

main .function-panel .directions {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

main .function-panel .directions > .key-wrapper:nth-child(1) {
  width: auto;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.key .display {
  display: flex;
  flex-direction: column;
  padding: 2px;
  font-size: 0.8rem;
  font-weight: bold;
}

.key .display > span {
  -webkit-transform: scale(0.8);
  transform: scale(0.8);
  -webkit-transform-origin: 0% 50%;
  transform-origin: 0% 50%;
}

.key .display.center {
  align-items: center;
  justify-content: center;
}

.key .display.left-center {
  align-items: flex-start;
  justify-content: center;
  padding-left: 5px;
}

.key .display.left-end {
  align-items: flex-start;
  justify-content: flex-end;
}

main .function-panel .key .display > span {
  -webkit-transform: scale(0.7);
  transform: scale(0.7);
}

main .function-panel .directions .key .display {
  font-weight: bold;
  font-size: 0.7rem;
}

input {
  width: 500px;
  height: 44px;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.1);
  border: none;
  outline: none;
  padding: 5px 10px;
  margin-top: 60px;
  font-weight: bold;
  text-align: center;
  color: #af0914;
  font-size: 1.2rem;
}

input:active {
  outline: none;
}

@media (prefers-color-scheme: dark) {
  body {
    background-color: #272e46;
  }
}
</style>
