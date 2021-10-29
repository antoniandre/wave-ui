<template lang="pug">
.example
  //- .fill-height in case the example is in a flex column.
  .w-flex.fill-height
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
      w-tabs(:items="sourceCodeTabs" content-class="pa0" no-slider)
        template(#tabs-bar-extra)
          w-tooltip(left menu-class="sh2" detach-to=".w-app")
            template(#activator="{ on }")
              w-button.mr1.pa0.text-center.justify-center.d-flex(
                v-on="on"
                @click="usePug = !usePug"
                round
                text
                width="2.3rem"
                height="2.3rem"
                :color="usePug ? 'brown-light1' : 'grey-light2'")
                svg.pug-icon(
                  width="1.9rem"
                  height="1.9rem"
                  viewBox="0 0 512 512")
                  path(d="M426 123c27 13 88 79 86 84-2 4-31 29-40 38-19 44-36 75-43 41-7 42-22 38-27 58-9 43-34 44-45 52-10 10-25 4-36 10-29 11-97 13-125 1-14-7-21 3-63-25-22-22-15-32-23-47-12-21-17-7-27-55-2 39-23 18-43-35 0 0-38-34-40-38-2-5 59-71 86-84 76-35 256-34 340 0zM296 239c41 14 80 58 74 98 0 21-2 35-5 45 35-23 19-30 33-52 13-23 16-15 23-45-4-31-8-84-13-101-4-13-25-42-38-60-65-25-193-17-226-1-13 18-34 48-39 62-4 15-8 67-12 98 3 30 25 43 29 59 3 25 15 33 31 42-4-10-6-25-6-47-7-47 39-87 76-99 10-27 65-24 73 1zm7 113c0-29-23-53-41-54l1-42c34-3 30-27-4-29-26 0-45 24-4 29v42c-18 0-41 24-41 53 3-29 25-44 46-44 21 1 39 16 43 45zM166 210c0-7-7-11-14-8a9 9 0 1 0 14 8zm-36 46a35 35 0 1 1 35-60 35 35 0 0 1-35 60zm220 0a35 35 0 1 1 36-60 35 35 0 0 1-36 60zm18-46c0-7-8-11-14-8s-6 13 0 16 14-1 14-8z")
            | Do you prefer the examples source code in Pug?#[br]The examples will also open in Pug in Codepen.
        template(#item-content="{ item }")
          ssh-pre(
            v-if="$slots[item.id] !== undefined"
            :language="item.language"
            copy-button
            @copied="copied(item.title)"
            :reactive="reactive || ['pug', 'html'].includes(item.id)")
            template(#copy-button)
              w-icon.ma1(color="primary") mdi mdi-content-copy
            slot(:name="item.id")
          w-notification.mr6.mt-1(
            :value="!!showCopied"
            transition="slide-fade-left"
            plain
            absolute
            sm
            success) {{ showCopied }} code copied to clipboard
</template>

<script>
export default {
  props: {
    flex: { type: Boolean }, // Removes the `block` prop off the `w-app` component.
    contentClass: { type: String },
    externalJs: { type: String },
    externalCss: { type: String },
    reactive: { type: Boolean }, // By default the pre-ssh component is not reactive.
    // An array of languages (html, pug, css, scss, js) to keep a blank Codepen template on.
    blankCodepen: { type: Array }
  },

  data: () => ({
    showSource: false,
    showCopied: false
  }),

  computed: {
    usePug: {
      get () {
        return this.$store.state.usePug
      },
      set (value) {
        this.$store.commit('setUsePug', value)
      }
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
            content: (this.$slots[key] && this.$slots[key][0].text) || ''
          }

          // If the user prefers Pug, and there is a pug source code (otherwise show HTML).
          if (this.usePug && key === 'html' && this.$slots.pug && this.$slots.pug[0].text) {
            object.id = 'pug'
            object.language = 'pug'
            object.title = 'Pug'
            object.content = this.$slots.pug[0].text
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
    createCodepen (e) {
      const openEditors = [
        (!!this.$slots.html || !!this.$slots.pug) * 1,
        (!!this.$slots.css || !!this.$slots.scss) * 1,
        (!!this.$slots.js) * 1
      ]

      const cssDeps = [
        'https://unpkg.com/wave-ui@latest/dist/wave-ui.css',
        'https://cdn.materialdesignicons.com/5.1.45/css/materialdesignicons.min.css'
      ]
      if (this.externalCss) cssDeps.push(this.externalCss)

      const jsDeps = [
        'https://unpkg.com/vue@latest/dist/vue.js',
        'https://unpkg.com/wave-ui@latest/dist/wave-ui.umd.js'
      ]
      if (this.externalJs) jsDeps.push(this.externalJs)

      const slots = {
        html: (this.$slots.html && this.$slots.html[0].text) || '',
        pug: ((this.$slots.pug && this.$slots.pug[0].text) || '').replace(/(#[\w.-]+)(?=\s|\))(?!\n)/gi, '$1=""'),
        js: (this.$slots.js && this.$slots.js[0].text) || '',
        css: (this.$slots.css && this.$slots.css[0].text) || '',
        scss: (this.$slots.scss && this.$slots.scss[0].text) || ''
      }
      let html = ''
      let css = ''
      let js = ''
      const blanks = this.blankCodepen || []

      // Pug & HTML.
      if (this.usePug && slots.pug) {
        if (blanks.includes('pug')) html = slots.pug.replace(/\n+$/, '')
        else {
          html = `w-app#app${this.flex ? '' : '(block)'}\n  ` +
                 slots.pug.replace(/\n+$/, '').replace(/\n/g, '\n  ')
        }
      }
      else {
        if (blanks.includes('html')) html = slots.html.replace(/\n+$/, '')
        else {
          html = `<w-app id="app"${this.flex ? '' : ' block'}>\n  ` +
                 slots.html.replace(/\n+$/, '').replace(/\n/g, '\n  ') +
                 '\n</w-app>\n'
        }
      }

      // CSS / SCSS.
      if (blanks.includes('css') || blanks.includes('scss')) css = slots.css || slots.scss
      else css = '.w-app {font: 14px sans-serif;padding: 24px;}\n\n' + (slots.css || slots.scss)

      // JS.
      if (blanks.includes('js')) js = slots.js
      else {
        js = 'new Vue({' +
                '\n  waveui: new WaveUI()' + (slots.js ? ',\n  ' : '') +
                slots.js.replace(/\n$/, '').replace(/\n/g, '\n  ') +
                '\n}).$mount(\'#app\')'
      }

      const data = {
        title: `Wave UI - ${this.currentPage} example`,
        editors: openEditors.join(''),
        layout: 'top',
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
    },

    copied (source) {
      this.showCopied = source
      setTimeout(() => (this.showCopied = false), 3000)
    }
  }
}
</script>

<style lang="scss">
.pug-icon {
  fill: currentColor;
  margin-top: 3px;
}

.example {
  position: relative;
  margin-top: 1em;
  margin-bottom: 1em;
  border: 1px solid #eee;
  background-color: #fcfcfc;
  border-radius: 3px;

  .w-tabs {border-radius: 0;border-width: 1px 0 0;}

  .buttons {
    border-left: 1px solid #eee;
    display: flex;
    flex-direction: column;
    padding: 4px;
    background: #f0f8ff;

    .w-button {width: 30px;height: 30px;}
  }

  &__render {padding: 12px;overflow: auto;}

  &__source {position: relative;}

  &__source .w-tabs__bar-item {
    font-size: 0.95rem;
    padding: 2px 8px;
  }

  &__source .w-alert {
    padding: 2px 4px;
    font-size: 13px !important;
    border-top: 1px solid #ddd;

    &:after {background-color: #b0dcff;}
  }

  .ssh-pre {
    margin: 0 !important;
    border: solid rgba(0, 0, 0, 0.1);
    border-width: 1px 0 0;
    border-radius: 0;
    line-height: 1.3;
  }

  .ssh-pre[data-label]:before {
    font-family: 'Arial Narrow', Arial, sans-serif;
    bottom: auto;
    top: 5px;
    right: 26px;
    padding: 0;
    background-color: transparent;
    border: none;
    color: #aaa;
  }

  .ssh-pre__copy {
    border: none;
    background: none;
    top: 1px;
    right: 1px;

    .w-icon {
      padding: 12px 0;
      width: 24px; // For IE11.
      transition: 0.25s;
    }
    &:hover .w-icon {background-color: rgba(35, 71, 129, 0.15);}
    &:active .w-icon {background-color: rgba(35, 71, 129, 0.25);}
  }

  .codepen-form {
    position: absolute;
    z-index: -100;
    opacity: 0;
  }
}

.w-tooltip.w480 {max-width: 480px;}
</style>
