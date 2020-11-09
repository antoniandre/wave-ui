<template lang="pug">
main
  title-link.mt4(h1) Splitter

  p
    | The work is already done in this library! Check out
    a.mx1(href="https://antoniandre.github.io/splitpanes" target="_blank") Splitpanes
    | by the same awesome author! ;)

  .w-flex.align-center.wrap.mt8
    w-icon.grey-light4.ml-2.mr2(xl) mdi mdi-chevron-right
    a.title2.my0.mr2(href="https://antoniandre.github.io/splitpanes" target="_blank") Splitpanes
    a.my2.mr1(href="https://www.npmjs.com/package/splitpanes" target="_blank")
      img.mb-1(src="https://img.shields.io/npm/dt/splitpanes.svg")
    a.my2(href="https://www.npmjs.com/package/splitpanes" target="_blank")
      img.mb-1(src="https://img.shields.io/npm/dw/splitpanes.svg")

  ssh-pre.mt6(language="shell") npm i splitpanes

  splitpanes.default-theme.mt8
    pane(min-size="20")
      span 1
      em.specs I have a min width of 20%
    pane
      splitpanes.default-theme(horizontal)
        pane(min-size="15")
          span 2
          em.specs I have a min height of 15%
        pane
          span 3
        pane
          span 4
    pane
      span 5


  title-link(h2) Features
  w-list(:items="listItems" icon="wi-check")
</template>

<script>
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'

export default {
  components: { Splitpanes, Pane },
  data: () => ({
    listItems: [
      { label: 'Light weight & no dependencies (only Vue JS)' },
      { label: 'Define your panes, the splitters are added automatically' },
      { label: 'Fully responsive' },
      { label: 'Supports touch devices' },
      { label: 'Supports nesting' },
      { label: 'Push other panes or not' },
      { label: 'Double click a splitter to maximize pane' },
      { label: 'Programmatically set pane width or height' },
      { label: 'Programmatically add and remove panes' },
      { label: 'Supports v-if directive and v-router component' }
    ]
  })
}
</script>

<style lang="scss">
.splitpanes {height: 300px}
.splitpanes__pane {
  box-shadow: inset 0 0 3px rgba(0,0,0,.2);
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
}
.splitpanes__pane > span {
  color: #fff;
  font-size: 5em;
  opacity: 0.7;
}

em.specs {
  font-size: 0.8em;
  line-height: 1;
  position: absolute;
  color: #999;
  bottom: 0.5em;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
