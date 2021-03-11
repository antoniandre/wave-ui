<template lang="pug">
w-alert.w-alert--docs(
  icon-outside
  v-bind="$props"
  :class="classes"
  :icon="tip ? 'mdi mdi-lightbulb-on' : ''")
  slot
</template>

<script>
export default {
  props: {
    success: { type: Boolean },
    error: { type: Boolean },
    warning: { type: Boolean },
    info: { type: Boolean },
    tip: { type: Boolean }
  },

  computed: {
    classes () {
      const Class = (this.success && 'success') || (this.error && 'error') ||
                    (this.warning && 'warning') || (this.info && 'info') || (this.tip && 'tip')
      return `alert--${Class}`
    }
  }
}
</script>

<style lang="scss">
.w-alert.w-alert--docs {
  color: rgba(0, 0, 0, 0.6) !important;
  font-weight: normal;

  &:after {display: none;}
  .w-icon {height: auto;}

  &.alert--success {
    background-color: rgba(102, 204, 0, 0.1);

    &:before {background-color: #6c0;}
    > .w-icon {color: #6c0;}
  }

  &.alert--info {
    background-color: rgba(0, 183, 255, 0.1);

    &:before {background-color: #09c;}
    > .w-icon {color: #09c;}
  }

  &.alert--warning {
    background-color: rgba(255, 143, 0, 0.15);

    &:before {background-color: #ffa600;}
    > .w-icon {color: #ffa600;}
  }

  &.alert--error {
    background-color: rgba(255, 0, 0, 0.1);

    &:before {background-color: #ff3700;}
    > .w-icon {color: #ff3700;}
  }

  &.alert--tip {
    background-color: rgba(255, 255, 0, 0.15);

    &:before {background-color: #fd0;}
    > .w-icon {background-color: #ffd849;border-color: #ffd849;color: #fff;}
    > .w-icon:before {font-size: 0.9em;}
  }
}
</style>
