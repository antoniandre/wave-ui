import { createApp, h } from 'vue'
import App from './app'
import router from './router'
import WaveUI from '@/wave-ui/index'
import '@mdi/font/css/materialdesignicons.min.css'

import SshPre from 'simple-syntax-highlighter'
import 'simple-syntax-highlighter/dist/sshpre.css'
import TitleLink from '@/documentation/components/title-link'
import IssueLink from '@/documentation/components/issue-link'
import UiComponentTitle from '@/documentation/components/ui-component-title'
import Example from '@/documentation/components/example'
import Alert from '@/documentation/components/alert'
import Api from '@/documentation/components/api'

const app = createApp({
  render: () => h(App)
}).use(router)

new WaveUI(app, {
  colors: {
    primary: '#234781',
    secondary: '#d3ebff'
  },
  presets: {
    // @todo.
    // 'w-button': {}
  }
})

app.component('ssh-pre', SshPre)
app.component('title-link', TitleLink)
app.component('ui-component-title', UiComponentTitle)
app.component('example', Example)
app.component('alert', Alert)
app.component('component-api', Api) // The `api` keyword in template crashes Vue 3.
app.component('issue-link', IssueLink)

app.mount('#app')
