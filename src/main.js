import Vue from 'vue'
import App from './app'
import router from './router'
import WaveUI from '@/wave-ui/index'

Vue.config.productionTip = false

// Pass options here.
Vue.use(WaveUI, {})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
