import { createApp, defineComponent } from 'vue'
import WNotificationManager from '../components/w-notification-manager.vue'

export class NotificationManager {
  static #instance
  notifications
   // Private fields.
  _uid // A unique ID for each notification.
  _notificationDefaults

  constructor () {
    // Singleton pattern.
    if (NotificationManager.#instance) return NotificationManager.#instance

    this.notifications = []
    this._uid = 0
    this._notificationDefaults = {
      _uid: 0,
      _value: true,
      message: '',
      timeout: 4000,
      dismiss: true
    }
    NotificationManager.#instance = this
  }

  notify (...args) {
    let notification = {
      ...this._notificationDefaults,
      _uid: this._uid++
    }

    if (typeof args[0] === 'object') notification = { ...notification, ...args[0] }
    else {
      const [message, type, timeout] = args
      notification = {
        ...notification,
        message: message || '',
        [type === undefined ? 'info' : type]: true,
        timeout: timeout || timeout === 0 ? parseFloat(timeout) : 4000
      }
    }

    // Allow calling notification.dismiss().
    if (notification.dismiss) notification.dismiss = () => this.dismiss(notification._uid)

    this.notifications.push(notification)
    if (~~notification.timeout !== 0) setTimeout(() => this.dismiss(notification._uid), notification.timeout)
  }

  dismiss (uid) {
    this.notifications = this.notifications.filter(item => item._uid !== uid)
  }
}

/**
 * Injects the w-notification-manager in the DOM programmatically so the user does not have to do it.
 *
 * @param {Object} wApp The DOM element where to mount the w-notification-manager.
 * @param {Object} components All the Wave UI components to provide to the w-notification-manager,
 *                            so it can also use them.
 * @param {Object} $waveui the injected reactive instance of the WaveUI class.
 */
export const injectNotifManagerInDOM = (wApp, components, $waveui) => {
  const div = document.createElement('div')
  wApp.appendChild(div)

  const WNotifManager = createApp(defineComponent({
    ...WNotificationManager,
    inject: ['$waveui']
  })).provide('$waveui', $waveui)

  for (const id in components) {
    const component = components[id]
    WNotifManager.component(component.name, { ...component, inject: ['$waveui'] })
  }
  WNotifManager.mount(div)
  div.remove() // The WNotificationManager contains a teleport to .w-app.
}
