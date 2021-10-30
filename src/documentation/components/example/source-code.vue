<template lang="pug">
.language
  ssh-pre(
    :label="$store.state.tabsView ? '' : item.title"
    v-if="$slots[item.id] !== undefined"
    :language="item.language"
    copy-button
    @copied="onCopied(item.title)"
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
    item: { type: Object, required: true },
    // slots: { type: Object, required: true },
    reactive: { type: Boolean, default: false }
  },

  data: () => ({
    showCopied: false
  }),

  methods: {
    onCopied (source) {
      this.showCopied = source
      setTimeout(() => (this.showCopied = false), 3000)
    }
  }
}
</script>

<style lang="scss" scoped>
.language {
  position: relative;
}

.ssh-pre[data-label]:before {
  top: 8px !important;
  right: 30px !important;
}
</style>
