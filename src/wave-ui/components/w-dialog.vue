<template lang="pug">
  w-overlay.w-dialog(
    v-if="value"
    :value="value"
    @input="onOutsideClick"
    :class="classes")
    w-card.w-dialog__content(no-border :style="contentStyles")
      template(v-slot:title)
        slot(name="title")
      slot
      template(v-slot:actions)
        slot(name="actions")
</template>

<script>
export default {
  name: 'w-dialog',
  props: {
    value: { type: Boolean, default: false },
    maxWidth: { type: Number, default: 0 },
    fullscreen: { type: Boolean, default: false },
    persistent: { type: Boolean, default: false },
    persistentNoAnimation: { type: Boolean, default: false },
    tile: { type: Boolean, default: false },
  },

  data: () => ({
    persistentAnimate: false
  }),

  computed: {
    classes () {
      return {
        'w-dialog--fullscreen': this.fullscreen,
        'w-dialog--persistent': this.persistent,
        'w-dialog--no-animation': this.persistentNoAnimation,
        'w-dialog--persistent-animate': this.persistentAnimate
      }
    },
    contentStyles () {
      return {
        maxWidth: this.maxWidth ? `${this.maxWidth}px` : false
      }
    }
  },

  methods: {
    onOutsideClick (value) {
      if (!this.persistent) this.$emit('input', value)
      if (this.persistent && !this.persistentNoAnimation) {
        this.persistentAnimate = true
        setTimeout(() => (this.persistentAnimate = false), 100)
      }
    }
  }
}
</script>

<style lang="scss">
.w-dialog {
  &__content {
    display: flex;
    flex-direction: column;
    overflow: auto;
    background-color: #fff;
    width: 95%;
    max-width: 95%;

    .w-dialog--fullscreen & {
      flex: 1 1 auto;
      height: 100%;
      max-width: none;
    }

    .w-dialog--persistent & {
      transition: 0.1s transform cubic-bezier(0.6, -0.28, 0.74, 0.05);
    }
    .w-dialog--persistent-animate & {transform: scale(1.06);}
  }
}
</style>
