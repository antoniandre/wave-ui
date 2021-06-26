<template lang="pug">
.w-app(:class="{ 'theme--dark': dark, 'd-block': block }")
  slot
  transition-group(tag="div" class="w-notification-manager" name="slide-left" appear)
    w-alert.white--bg(
      v-for="notif in notifications"
      :key="notif._uid"
      v-model="notif._value"
      v-if="notif._value"
      @close="notifManager.dismiss(notif._uid)"
      v-bind="notif")
      | {{ notif.message }}
</template>

<script>
import config from '../utils/config'
import NotificationsManager from '../utils/notifications-manager'
import DynamicCSS from '../utils/dynamic-css'

const breakpointsNames = Object.keys(config.breakpoints)
const breakpointsValues = Object.values(config.breakpoints)

export default {
  name: 'w-app',
  props: {
    dark: { type: Boolean },
    block: { type: Boolean }
  },

  data: () => ({
    currentBreakpoint: null,
    notifManager: null
  }),

  computed: {
    notifications () {
      return this.notifManager.notifications
    }
  },

  methods: {
    getBreakpoint () {
      const width = window.innerWidth
      const breakpoints = breakpointsValues.slice(0)
      // Most performant lookup.
      breakpoints.push(width)
      breakpoints.sort((a, b) => a - b)
      const breakpoint = breakpointsNames[breakpoints.indexOf(width)] || 'xl'

      if (breakpoint !== this.currentBreakpoint) {
        this.currentBreakpoint = breakpoint
        this.$waveui.breakpoint = {
          name: breakpoint,
          xs: breakpoint === 'xs',
          sm: breakpoint === 'sm',
          md: breakpoint === 'md',
          lg: breakpoint === 'lg',
          xl: breakpoint === 'xl',
          width
        }
      }

      this.$waveui.breakpoint.width = width
    },

    dynamicStyles () {
      return DynamicCSS()
    }
  },

  beforeMount () {
    this.notifManager = new NotificationsManager()
    this.notifManager.init()
  },

  mounted () {
    // Inject global dynamic CSS classes in document head.
    if (!document.getElementById('wave-ui-styles')) {
      const css = document.createElement('style')
      css.id = 'wave-ui-styles'
      css.innerHTML = this.dynamicStyles()

      document.head.appendChild(css)
    }

    this.getBreakpoint(window.innerWidth)
    window.addEventListener('resize', this.getBreakpoint)
  },

  beforeDestroy () {
    window.removeEventListener('resize', this.getBreakpoint)
    this.notifManager.notifications = []
  }
}
</script>

<style lang="scss">
@import '../scss/index';

.w-app {
  position: relative; // Make the .w-app a referential for tooltips / menus.
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &.d-block {display: block;}
}

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
