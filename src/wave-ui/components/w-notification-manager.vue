<template lang="pug">
transition-group(tag="div" class="w-notification-manager" name="slide-left" appear)
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
import NotificationManager from '../utils/notification-manager'

export default {
  name: 'w-notification-manager',

  data: () => ({
    notifManager: null
  }),

  computed: {
    notifications () {
      return this.notifManager.notifications
    }
  },

  beforeMount () {
    this.notifManager = new NotificationManager()
    this.notifManager.init()
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
