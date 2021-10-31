import Vue from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'
import WaveUI from '@/wave-ui/index'
import '@mdi/font/css/materialdesignicons.min.css'

Vue.config.productionTip = false

Vue.use(WaveUI)

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

new Vue({
  router,
  store,
  waveui,
  render: h => h(App)
}).$mount('#app')
