import Vue from 'vue'

export default class NotificationManager {
  static instance
  notifications
  #notificationManagerEl // Private.
  #uid = 0 // Private. A unique ID for each notification.
  #notificationDefaults

  constructor () {
    // Singleton pattern.
    if (NotificationManager.instance) return NotificationManager.instance

    NotificationManager.instance = this
    this.notifications = []
    this.#notificationDefaults = {
      _uid: 0,
      _value: true,
      message: '',
      type: 'info',
      duration: 4000
    }
  }

  init () {
    this.#notificationManagerEl = document.querySelector('.w-notification-manager')
  }

  notify (...args) {
    let notification = { ...this.#notificationDefaults, _uid: this.#uid++ }

    if (typeof args[0] === 'object') notification = { ...notification, ...args[0] }
    else {
      const [message, type, duration] = args
      notification = {
        ...notification,
        message: message || '',
        type: type || 'info',
        duration: duration || duration === 0 ? parseFloat(duration) : 4000
      }
    }
    Vue.set(this.notifications, this.notifications.length, notification)
    if (~~notification.duration !== 0) setTimeout(() => this.dismiss(notification._uid), notification.duration)
  }

  dismiss (uid) {
    this.notifications = this.notifications.filter(item => item._uid !== uid)
    console.log(this.notifications)
  }
}
