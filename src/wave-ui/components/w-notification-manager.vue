<template lang="pug">
transition-group(
  tag="div"
  class="w-notification-manager"
  :class="{ 'w-notification-manager--left': notifManager.align === 'left' }"
  :name="transition"
  appear)
  template(v-for="notif in notifications")
    w-alert.white--bg(
      v-if="notif._value"
      :key="notif._uid"
      v-model="notif._value"
      @close="notifManager.dismiss(notif._uid)"
      v-bind="notif")
      | {{ notif.message }}
</template>

<script>
import config from '../utils/config'
import NotificationManager from '../utils/notification-manager'

export default {
  name: 'w-notification-manager',

  data: () => ({
    notifManager: null
  }),

  computed: {
    notifications () {
      return this.notifManager.notifications
    },
    // Possible transitions: slide-fade-down, slide-fade-left, slide-fade-right,
    // slide-left, slide-right, bounce, twist, fade, scale, scale-fade.
    transition () {
      return this.notifManager.transition
        .replace('default', `slide-${this.notifManager.align === 'left' ? 'right' : 'left'}`)
    }
  },

  beforeMount () {
    this.notifManager = new NotificationManager()
  },

  beforeUnmount () {
    this.notifManager.notifications = []
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
  overflow: auto;

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
