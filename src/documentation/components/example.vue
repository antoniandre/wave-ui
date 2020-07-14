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
        w-button(@click="copySource($event, 'html')" xs text color="primary") Copy
        ssh-pre(v-if="$slots.html" language="html-vue" label="TEMPLATE")
          slot(name="html")
        ssh-pre(v-if="$slots.js" language="js" label="JS")
          slot(name="js")
        ssh-pre(v-if="$slots.css" language="css" label="CSS")
          slot(name="css")
</template>

<script>
export default {
  data: () => ({
    showSource: false,
  }),

  methods: {
    createCodepen (e) {
      const openEditors = [
        (!!this.$slots.html) * 1,
        (!!this.$slots.css) * 1,
        (!!this.$slots.js) * 1
      ]

      const cssDeps = [
        'https://cdn.materialdesignicons.com/5.1.45/css/materialdesignicons.min.css',
        'https://cdn.jsdelivr.net/npm/the-wave-ui@0.1.0-alpha.2/dist/wave-ui.css'
      ]

      const jsDeps = [
        'https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.js',
        'https://cdn.jsdelivr.net/npm/the-wave-ui@0.1.0-alpha.2/dist/wave-ui.umd.min.js'
      ]

      const html = '<div id="app">\n' +
                   '  <w-app>\n' +
                   `    ${this.$slots.html && this.$slots.html[0].text || ''}` +
                   '  </w-app>\n' +
                   '</div>'
      const css = 'body {font-family: sans-serif;padding: 24px;}\n' +
                  (this.$slots.css && this.$slots.css[0].text || '')
      const js = 'new Vue({\n' +
                 '  el: \'#app\',\n' +
                 '  data: () => ({\n' +
                 '  })\n' +
                 '})\n'

      const data = {
        title: 'Wave UI Example Pen',
        editors: openEditors.join(''),
        layout: 'top',
        html,
        html_pre_processor: 'none',
        css,
        css_pre_processor: 'scss',
        css_starter: 'reset',
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
      );

      const form = document.querySelector('.codepen-form')
      form.submit()
      form.remove()
    },

    copySource (e, source) {
      const content = this.$slots[source][0].text
      e.target.insertAdjacentHTML('afterend', `<textarea id="clipboard-textarea">${content}</textarea>`)
      const textarea = document.getElementById('clipboard-textarea')

      textarea.select()
      textarea.setSelectionRange(0, 99999) // For mobile devices.
      document.execCommand('copy')
      textarea.remove()

      // console.log('Text copied to clipboard!')
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
    padding: 4px 6px;
    background: #f0f8ff;

    .w-button {width: 30px;height: 30px;}
  }

  &__render {padding: 12px;}

  pre.ssh-pre {
    margin: 0;
    border: solid rgba(0, 0, 0, 0.1);
    border-width: 1px 0 0;
    border-radius: 0;
    line-height: 1.3;

    &:last-child {border-radius: 0 0 4px 4px;}
  }

  pre.ssh-pre[data-label]:before {
    font-family: 'Arial Narrow', Arial, sans-serif;
    bottom: auto;
    top: 4px;
    right: 6px;
    padding: 0;
    background-color: transparent;
    border: none;
    color: #aaa;
  }

  .codepen-form, #clipboard-textarea {
    position: absolute;
    z-index: -100;
    opacity: 0;
  }
}
</style>
