import { createApp, h } from 'vue'
import App from './app'
import router from './router'
import WaveUI from '@/wave-ui/index'
import '@mdi/font/css/materialdesignicons.min.css'

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
app.mount('#app')
