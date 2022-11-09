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

<style lang="scss">
.example {
  .language {position: relative;}

  .ssh-pre {
    margin: 0 !important;
    border: solid rgba(0, 0, 0, 0.1);
    border-width: 1px 0 0;
    border-radius: 0;
    line-height: 1.3;
  }

  .top-bar + .language .ssh-pre {border-top-color: rgba(0, 0, 0, 0.05);}

  .ssh-pre[data-label]:before {
    font-family: 'Arial Narrow', Arial, sans-serif;
    bottom: auto;
    top: 8px;
    right: 32px;
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
      width: 24px;
      transition: 0.25s;
    }
    &:hover .w-icon {background-color: rgba(35, 71, 129, 0.15);}
    &:active .w-icon {background-color: rgba(35, 71, 129, 0.25);}
  }

  &__source .w-alert {
    padding: 2px 4px;
    font-size: 13px !important;
    border-top: 1px solid #ddd;

    &:after {background-color: #b0dcff;}
  }
}
</style>
