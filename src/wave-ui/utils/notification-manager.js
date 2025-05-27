import { h, render } from 'vue'
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
 * @param {Object} app The Vue app instance.
 */
export const injectNotifManagerInDOM = app => {
  const div = document.createElement('div')
  document.body.appendChild(div) // Attach to body before teleporting.

  // Create a VNode for WNotificationManager and assign app._context to inherit global components.
  const vnode = h(WNotificationManager)
  vnode.appContext = app._context // ! \ Attach app context to inherit global components & provide()!

  render(vnode, div) // Render inside the main app scope.

  div.remove() // The WNotificationManager component teleports itself inside `.w-app`.
}
