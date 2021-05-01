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
      ssh-pre(
        v-if="$slots.html"
        language="html-vue"
        label="TEMPLATE"
        copy-button
        @copied="copied('TEMPLATE')"
        :reactive="reactive")
        template(#copy-button)
          w-icon(color="primary") mdi mdi-content-copy
        slot(name="html")
      w-tooltip.d-block(v-if="$slots.pug" tooltip-class="pa3 w480" color="blue")
        template(#activator="{ on }")
          w-alert.text-light.ma0(v-on="on" sm info no-border tile)
            | What is Pug?
        | Wave UI Vue templates are coded in Pug.#[br]The examples will soon be rewritten in HTML.
        | For now, if you are not familiar with Pug, you can edit in Codepen and view the compiled HTML.#[br]
        | But now you are here, hold on a minute and look how concise it is! You could get to like it!
      ssh-pre(
        v-if="$slots.pug"
        language="pug"
        label="TEMPLATE (PUG)"
        copy-button
        @copied="copied('TEMPLATE (PUG)')"
        :reactive="reactive")
        template(#copy-button)
          w-icon(color="primary") mdi mdi-content-copy
        slot(name="pug")
      ssh-pre(
        v-if="$slots.js"
        language="js"
        label="JS"
        copy-button
        @copied="copied('JS')"
        :reactive="reactive")
        template(#copy-button)
          w-icon(color="primary") mdi mdi-content-copy
        slot(name="js")
      ssh-pre(
        v-if="$slots.css"
        language="css"
        label="CSS"
        copy-button
        @copied="copied('CSS')"
        :reactive="reactive")
        template(#copy-button)
          w-icon(color="primary") mdi mdi-content-copy
        slot(name="css")
      ssh-pre(
        v-if="$slots.scss"
        language="scss"
        label="SCSS"
        copy-button
        @copied="copied('SCSS')"
        :reactive="reactive")
        template(#copy-button)
          w-icon(color="primary") mdi mdi-content-copy
        slot(name="scss")
      w-notification.mr5.mt-1(
        :model-value="!!showCopied"
        transition="slide-fade-left"
        plain
        absolute
        sm
        success) {{ showCopied }} code copied to clipboard
</template>

<script>
export default {
  props: {
    contentClass: { type: String },
    externalJs: { type: String },
    externalCss: { type: String },
    reactive: { type: Boolean },
    // An array of languages (html, pug, css, scss, js) to keep a blank Codepen template on.
    blankCodepen: { type: Array }
  },
  data: () => ({
    showSource: false,
    showCopied: false
  }),

  methods: {
    createCodepen (e) {
      const openEditors = [
        (!!this.$slots.html || !!this.$slots.pug) * 1,
        (!!this.$slots.css || !!this.$slots.scss) * 1,
        (!!this.$slots.js) * 1
      ]

      const cssDeps = [
        'https://unpkg.com/wave-ui@next/dist/wave-ui.css',
        'https://cdn.materialdesignicons.com/5.1.45/css/materialdesignicons.min.css'
      ]
      if (this.externalCss) cssDeps.push(this.externalCss)

      const jsDeps = [
        'https://unpkg.com/vue@3',
        'https://unpkg.com/wave-ui@next/dist/wave-ui.umd.min.js'
      ]
      if (this.externalJs) jsDeps.push(this.externalJs)

      const { html: htmlSlot, pug, js: jsSlot, css: cssSlot, scss } = this.$slots
      const slots = {
        html: htmlSlot && htmlSlot()[0].children || '',
        pug: pug && pug()[0].children || '',
        js: jsSlot && jsSlot()[0].children || '',
        css: cssSlot && cssSlot()[0].children || '',
        scss: scss && scss()[0].children || ''
      }
      let html = ''
      let css = ''
      let js = ''
      const blanks = this.blankCodepen || []

      // Pug & HTML.
      if (slots.pug) {
        if (blanks.includes('pug')) html = slots.pug.replace(/\n+$/, '')
        else {
          html = '#app\n' +
                 '  w-app(block)\n' +
                 '    ' + slots.pug.replace(/\n+$/, '').replace(/\n/g, '\n    ')
        }
      }
      else {
        if (blanks.includes('html')) html = slots.html.replace(/\n+$/, '')
        else {
          html = '<div id="app">\n' +
                 '  <w-app block>\n' +
                 '    ' + slots.html.replace(/\n+$/, '').replace(/\n/g, '\n    ') +
                 '\n  </w-app>\n' +
                 '</div>\n'
        }
      }

      // CSS / SCSS.
      if (blanks.includes('css') || blanks.includes('scss')) css = slots.css || slots.scss
      else css = '.w-app {font: 14px sans-serif;padding: 24px;}\n\n' + (slots.css || slots.scss)

      // JS.
      if (blanks.includes('js')) js = slots.js
      else js = 'const app = Vue.createApp({\n' +
                '  ' + slots.js.replace(/\n+$/, '').replace(/\n/g, '\n  ') + '\n' +
                '})\n\n' +
                'new WaveUI(app, {})\n\n' +
                'app.mount(\'#app\')'

      const data = {
        title: 'Wave UI Example Pen',
        editors: openEditors.join(''),
        layout: 'top',
        html,
        html_pre_processor: slots.pug ? 'pug' : 'none',
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
.example {
  position: relative;
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

  &__render {padding: 12px;overflow: auto;}

  &__source {position: relative;}

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

    &[data-type="pug"] {border-width: 0;}
    & + .ssh-pre {border-top-width: 3px;}
    &:last-child {border-radius: 0 0 4px 4px;}
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
