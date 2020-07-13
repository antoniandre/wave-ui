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
          @click=""
          lg
          icon="mdi mdi-codepen"
          text
          color="primary")
    w-transition-expand(y)
      .example__source(v-show="showSource")
        ssh-pre(v-if="$slots.html" language="html-vue" label="TEMPLATE")
          slot(name="html")
        ssh-pre(v-if="$slots.js" language="js" label="JS")
          slot(name="js")
        ssh-pre(v-if="$slots.css" language="css" label="CSS")
          slot(name="css")
</template>

<script>
import SshPre from 'simple-syntax-highlighter'
import 'simple-syntax-highlighter/dist/sshpre.css'

export default {
  components: { SshPre },
  data: () => ({
    showSource: false
  })
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

  &__source {
    .ssh-pre {
      padding: 0.7em;
      margin: 0;
      border: 1px solid rgba(255, 255, 255, 0.25);
      border-width: 1px 0 0;
      background-color: rgba(0, 0, 0, 0.8);
      border-radius: 0;
      font-family: arial;
      color: rgba(255, 255, 255, 0.85);
    }

    .ssh-pre[data-label]:before {
      content: attr(data-label);
      bottom: auto;
      top: 2px;
      right: 4px;
      padding: 0;
      background-color: transparent;
      border: none;
      color: #797979;
      text-shadow: -1px -1px 0 #1b1b1b;
      font-weight: bold;
    }
  }
}
</style>
