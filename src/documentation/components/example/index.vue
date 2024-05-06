<template lang="pug">
.example
  //- .fill-height in case the example is in a flex column.
  .w-flex.grow
    .example__render.grow(:class="contentClass")
      slot
    .buttons
      w-tooltip(left)
        template(#activator="{ on }")
          w-button(
            v-on="on"
            @click="showSource = !showSource"
            lg
            icon="mdi mdi-code-tags"
            text
            color="primary")
        | View the source code
      w-tooltip(left)
        template(#activator="{ on }")
          w-button(
            v-on="on"
            @click="createCodepen"
            lg
            icon="mdi mdi-codepen"
            text
            color="primary")
        | Edit in Codepen

  w-transition-expand(y)
    .example__source(v-show="showSource")
      w-tabs(v-if="tabsView" :items="sourceCodeTabs" content-class="pa0" no-slider)
        template(#tabs-bar-extra)
          preference-buttons.no-grow(:has-pug="!!$slots.pug")
        template(#item-content="{ item }")
          source-code(:item="item" :reactive="reactive")
            template(#[item.id])
              slot(:name="item.id")
      //- See all languages at once.
      div.bdt1(v-else)
        w-flex.top-bar(justify-space-between align-center)
          label.pl2
            w-icon.mr2 mdi mdi-code-tags
            | Source code
          preference-buttons.no-grow(:has-pug="!!$slots.pug")
        template(v-for="(item, i) in sourceCodeTabs" :key="i")
          source-code(:item="item" :reactive="reactive")
            template(#[item.id])
              slot(:name="item.id")
</template>

<script>
import PreferenceButtons from './preference-buttons.vue'
import SourceCode from './source-code.vue'

export default {
  props: {
    // Pass props to the w-app component as a string (way simpler to pass it to Codepen).
    appClassesString: { type: String, default: 'block' },

    contentClass: { type: String },
    externalJs: { type: String },
    externalCss: { type: String },
    reactive: { type: Boolean }, // By default the pre-ssh component is not reactive.
    // An array of languages (html, pug, css, scss, js) to keep a blank Codepen template on.
    blankCodepen: { type: Array }
  },

  components: { PreferenceButtons, SourceCode },

  data: () => ({
    showSource: false
  }),

  computed: {
    usePug () {
      return this.$store.state.usePug
    },

    tabsView () {
      return this.$store.state.tabsView
    },

    sourceCodeTabs () {
      const tabs = {
        html: { language: 'html-vue', title: 'HTML', content: '' },
        js: { language: 'js', title: 'JS', content: '' },
        css: { language: 'css', title: 'CSS', content: '' }
      }
      return Object.entries(tabs)
        .map(([key, obj]) => {
          const object = {
            ...obj,
            id: key,
            content: (this.$slots[key] && this.getSlotChildrenText(this.$slots[key]())) || ''
          }

          const pugSlotContent = this.$slots.pug && this.getSlotChildrenText(this.$slots.pug())
          // If the user prefers Pug, and there is a pug source code (otherwise show HTML).
          if (this.usePug && key === 'html' && pugSlotContent) {
            object.id = 'pug'
            object.language = 'pug'
            object.title = 'Pug'
            object.content = pugSlotContent
          }

          return object
        })
        .filter(item => item.content)
    },

    currentPage () {
      return this.$store.state.currentPage
    }
  },

  methods: {
    getSlotChildrenText (children) {
      // eslint-disable-next-line array-callback-return
      return children.map(node => {
        if (!node.children || typeof node.children === 'string') return node.children || ''
        else if (Array.isArray(node.children)) return this.getSlotChildrenText(node.children)
        else if (node.children.default) return this.getSlotChildrenText(node.children.default())
      }).join('')
    },

    createCodepen (e) {
      const openEditors = [
        (!!this.$slots.html || !!this.$slots.pug) * 1,
        (!!this.$slots.css || !!this.$slots.scss) * 1,
        (!!this.$slots.js) * 1
      ]

      const cssDeps = [
        'https://unpkg.com/wave-ui/dist/wave-ui.css',
        'https://cdn.materialdesignicons.com/5.1.45/css/materialdesignicons.min.css'
      ]
      if (this.externalCss) cssDeps.push(this.externalCss)

      const jsDeps = [
        'https://unpkg.com/vue',
        'https://unpkg.com/wave-ui/dist/wave-ui.umd.js'
      ]
      if (this.externalJs) jsDeps.push(this.externalJs)

      const { html: htmlSlot, pug, js: jsSlot, css: cssSlot, scss } = this.$slots
      const slots = {
        html: (htmlSlot && htmlSlot()[0].children) || '',
        pug: ((pug && pug()[0].children) || '').replace(/(#[\w.-]+)(?=\s|\))(?!\n)/gi, '$1=""'),
        js: (jsSlot && jsSlot()[0].children) || '',
        css: (cssSlot && cssSlot()[0].children) || '',
        scss: (scss && scss()[0].children) || ''
      }
      let html = ''
      let css = ''
      let js = ''
      const blanks = this.blankCodepen || []

      // Pug.
      if (this.usePug && slots.pug) {
        if (blanks.includes('pug')) html = slots.pug.replace(/\n+$/, '')
        else {
          html = `#app${this.appClassesString ? `.${this.appClassesString.replaceAll(' ', '.')}` : ''}\n  ` +
                 slots.pug.replace(/\n+$/, '').replace(/\n/g, '\n  ')
        }
      }

      // HTML.
      else {
        if (blanks.includes('html')) html = slots.html.replace(/\n+$/, '')
        else {
          html = `<div id="app"${this.appClassesString ? ` class="${this.appClassesString}"` : ''}>\n  ` +
                    slots.html.replace(/\n+$/, '').replace(/\n/g, '\n  ') + '\n' +
                 '</div>\n'
        }
      }

      // CSS / SCSS.
      if (blanks.includes('css') || blanks.includes('scss')) css = slots.css || slots.scss
      else {
        css = ':root {\n' +
              '  background-color: rgb(var(--w-base-bg-color-rgb));\n' +
              '  color: rgb(var(--w-base-color-rgb));\n' +
              '  font: 14px sans-serif;\n' +
              '  padding: 24px;\n' +
              '}\n\n' +
              (slots.css || slots.scss)
      }

      // JS.
      if (blanks.includes('js')) js = slots.js
      else {
        js = 'const app = Vue.createApp({\n' +
                '  ' + slots.js.replace(/\n+$/, '').replace(/\n/g, '\n  ') + '\n' +
              '})\n\n' +
              'app.use(WaveUI, { theme: \'auto\' })\n\n' +
              'app.mount(\'#app\')'
      }

      const data = {
        title: `Wave UI - ${this.currentPage} example`,
        editors: openEditors.join(''),
        html,
        html_pre_processor: this.usePug && slots.pug ? 'pug' : 'none',
        css,
        css_pre_processor: 'scss',
        css_starter: 'normalize',
        css_prefix: 'autoprefixer',
        js,
        js_pre_processor: 'babel',
        css_external: cssDeps.join(';'),
        js_external: jsDeps.join(';')
      }
      const JSONstring = JSON.stringify(data).replace(/"/g, '&quot;').replace(/'/g, '&apos;')

      e.target.insertAdjacentHTML(
        'afterend',
        `<form class="codepen-form" action="https://codepen.io/pen/define" method="POST" target="_blank">
          <input type="hidden" name="data" value="${JSONstring}">
        </form>`
      )

      const form = document.querySelector('.codepen-form')
      form.submit()
      form.parentNode.removeChild(form) // el.remove() doesn't work on IE11.
    }
  }
}
</script>

<style lang="scss">
.pug-icon {
  fill: currentColor;
  margin-top: 2px;
}

.example {
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 1em;
  margin-bottom: 1em;
  border: 1px solid #eee;
  background-color: #fcfcfc;
  border-radius: 3px;

  .buttons {
    border-left: 1px solid #eee;
    display: flex;
    flex-direction: column;
    padding: 4px;
    background: #f0f8ff;

    .w-button {width: 30px;height: 30px;}
  }

  &__render {
    position: relative;
    padding: 12px;
    overflow: auto;
  }

  &__source {
    position: relative;

    > .w-tabs {
      border-radius: 0;
      border-width: 1px 0 0;

      .w-tabs__bar {overflow: hidden;}
      .w-tabs__bar-item {font-size: 0.95rem;padding: 2px 8px;}
    }

    label .w-icon {margin-bottom: 2px;}
  }

  .codepen-form {
    position: absolute;
    z-index: -100;
    opacity: 0;
  }
}

.w-tooltip.w480 {max-width: 480px;}
</style>
