import Vue from 'vue'

import config from '../utils/config'

export default class NotificationManager {
  static instance
  notifications
  align
  transition
   // Private fields.
  #uid // A unique ID for each notification.
  #notificationDefaults

  constructor () {
    // Singleton pattern.
    if (NotificationManager.instance) return NotificationManager.instance

    NotificationManager.instance = this
    this.align = config.notificationManager.align === 'left' ? 'left' : 'right'
    this.transition = config.notificationManager.transition || 'slide'
    this.notifications = []
    this.#uid = 0
    this.#notificationDefaults = {
      _uid: 0,
      _value: true,
      message: '',
      timeout: 4000,
      dismiss: true
    }
  }

  notify (...args) {
    let notification = { ...this.#notificationDefaults, _uid: this.#uid++ }

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
    Vue.set(this.notifications, this.notifications.length, notification)
    if (~~notification.timeout !== 0) setTimeout(() => this.dismiss(notification._uid), notification.timeout)
  }

  dismiss (uid) {
    this.notifications = this.notifications.filter(item => item._uid !== uid)
  }
}
