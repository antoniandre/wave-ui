import Vue, { createApp, h } from 'vue'
import App from './app'
import router from './router'
import WaveUI from '@/wave-ui/index'
import '@mdi/font/css/materialdesignicons.min.css'

const waveui = new WaveUI({
  colors: {
    primary: '#234781',
    secondary: '#d3ebff'
  },
  presets: {
    // @todo.
    // 'w-button': {}
  }
})

createApp({
  waveui,
  render: () => h(App)
})
  .use(router)
  .use(WaveUI)
  .mount('#app')
