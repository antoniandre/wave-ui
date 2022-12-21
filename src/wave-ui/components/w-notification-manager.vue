<template lang="pug">
transition-group(
  tag="div"
  class="w-notification-manager"
  :class="{ 'w-notification-manager--left': conf.align === 'left' }"
  :name="transition"
  appear)
  template(v-for="notif in notifications")
    w-alert.white--bg(
      v-if="notif._value"
      :key="notif._uid"
      v-model="notif._value"
      @close="notifManager.dismiss(notif._uid)"
      v-bind="notifProps(notif)")
      div(v-html="notif.message")
</template>

<script>
import NotificationManager from '../utils/notification-manager'

export default {
  name: 'w-notification-manager',

  data: () => ({
    notifManager: null
  }),

  computed: {
    conf () {
      return this.$waveui.config.notificationManager
    },
    notifications () {
      return this.notifManager?.notifications || []
    },
    // Possible transitions: slide-fade-down, slide-fade-left, slide-fade-right,
    // slide-left, slide-right, bounce, twist, fade, scale, scale-fade.
    transition () {
      return this.conf.transition
        ? this.conf.transition.replace('default', `slide-${this.conf.align === 'left' ? 'right' : 'left'}`)
        : ''
    }
  },

  methods: {
    notifProps (notif) {
      const { _value, _uid, message, timeout, ...props } = notif
      return props
    }
  },

  created () {
    this.notifManager = new NotificationManager()
  },

  beforeUnmount () {
    this.notifManager.notifications = []
    delete this.notifManager
  }
}
</script>

<style lang="scss">
.w-notification-manager {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 1000;
  pointer-events: none;
  width: 280px;
  overflow-x: hidden;

  &--left {right: auto;left: 0;}

  .w-alert {
    position: relative;
    z-index: 400;
    left: 0;
    right: 0;
    margin: 8px;
    flex-grow: 1;
    pointer-events: all;
  }
}
</style>
