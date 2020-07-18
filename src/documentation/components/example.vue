<template lang="pug">
  .example
    .w-flex
      .example__render.grow
        slot
      .buttons
        w-button(
          @click="showSource = !showSource"
          lg
          icon="mdi mdi-code-tags"
          text
          color="primary")
        w-button(
          @click="createCodepen"
          lg
          icon="mdi mdi-codepen"
          text
          color="primary")
    w-transition-expand(y)
      .example__source(v-show="showSource")
        ssh-pre(
          v-if="$slots.html"
          language="html-vue"
          label="TEMPLATE"
          copy-button
          @copied="copied")
          template(#copy-button)
            w-icon(color="primary") mdi mdi-content-copy
          slot(name="html")
        ssh-pre(
          v-if="$slots.js"
          language="js"
          label="JS"
          copy-button
          @copied="copied")
          template(#copy-button)
            w-icon(color="primary") mdi mdi-content-copy
          slot(name="js")
        ssh-pre(
          v-if="$slots.css"
          language="css"
          label="CSS"
          copy-button
          @copied="copied")
          template(#copy-button)
            w-icon(color="primary") mdi mdi-content-copy
          slot(name="css")
        w-notification.mr-5.mt-n1(
          v-model="showCopied"
          transition="slide-fade-left"
          plain
          absolute
          sm
          type="success") Text copied to clipboard
</template>

<script>
export default {
  data: () => ({
    showSource: false,
    showCopied: false
  }),

  methods: {
    createCodepen (e) {
      const openEditors = [
        (!!this.$slots.html) * 1,
        (!!this.$slots.css) * 1,
        (!!this.$slots.js) * 1
      ]

      const cssDeps = [
        'https://unpkg.com/the-wave-ui@alpha/dist/wave-ui.css',
        'https://cdn.materialdesignicons.com/5.1.45/css/materialdesignicons.min.css'
      ]

      const jsDeps = [
        'https://unpkg.com/vue@latest/dist/vue.js',
        'https://unpkg.com/the-wave-ui@alpha/dist/wave-ui.umd.min.js'
      ]

      const slots = {
        html: this.$slots.html && this.$slots.html[0].text || '',
        js: this.$slots.js && this.$slots.js[0].text || '',
        css: this.$slots.css && this.$slots.css[0].text || ''
      }
      const html = '<div id="app">\n' +
                   '  <w-app>\n    ' +
                   slots.html.replace(/\n$/, '').replace(/\n/g, '\n    ') +
                   '\n  </w-app>\n' +
                   '</div>'
      const css = 'body {font-family: sans-serif;padding: 24px;}\n\n' + slots.css
      const js = 'new Vue({\n  ' +
                 slots.js.replace(/\n$/, '').replace(/\n/g, '\n  ') +
                 '\n}).$mount(\'#app\')'

      const data = {
        title: 'Wave UI Example Pen',
        editors: openEditors.join(''),
        layout: 'top',
        html,
        html_pre_processor: 'none',
        css,
        css_pre_processor: 'scss',
        css_starter: 'reset',
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
      form.remove()
    },
    copied () {
      this.showCopied = true
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
  overflow: hidden;

  .buttons {
    border-left: 1px solid #eee;
    display: flex;
    flex-direction: column;
    padding: 4px;
    background: #f0f8ff;

    .w-button {width: 30px;height: 30px;}
  }

  &__render {padding: 12px;}

  &__source {position: relative;}

  .ssh-pre {
    margin: 0 !important;
    border: solid rgba(0, 0, 0, 0.1);
    border-width: 1px 0 0;
    border-radius: 0;
    line-height: 1.3;

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

    .w-icon {
      padding: 10px;
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
</style>
