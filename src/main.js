import { createApp, h } from 'vue'
import App from './app'
import router from './router'
import WaveUI from '@/wave-ui/index'
import '@mdi/font/css/materialdesignicons.min.css'

import SshPre from 'simple-syntax-highlighter'
import 'simple-syntax-highlighter/dist/sshpre.css'
import TitleLink from '@/documentation/components/title-link'
import UiComponentTitle from '@/documentation/components/ui-component-title'
import Example from '@/documentation/components/example'
import Alert from '@/documentation/components/alert'
import Api from '@/documentation/components/api'

const app = createApp({
  render: () => h(App)
})

const waveui = new WaveUI(app, {
  colors: {
    primary: '#234781',
    secondary: '#d3ebff'
  },
  presets: {
    // @todo.
    // 'w-button': {}
  }
})

app.use(router).use(waveui)

app.component('ssh-pre', SshPre)
app.component('title-link', TitleLink)
app.component('ui-component-title', UiComponentTitle)
app.component('example', Example)
app.component('alert', Alert)
app.component('api', Api)

app.mount('#app')
