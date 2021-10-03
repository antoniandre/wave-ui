import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usePug: false
  },

  mutations: {
    initUsePug (state) {
      state.usePug = !!parseInt(localStorage.getItem('usePug'))
    },
    setUsePug (state, usePug) {
      if (state.usePug !== usePug) {
        state.usePug = usePug
        localStorage.setItem('usePug', +usePug)
      }
    }
  }
})
