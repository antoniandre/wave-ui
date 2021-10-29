import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentPage: '', // The title of the page, to pass to Codepen from examples.
    usePug: false
  },

  mutations: {
    setCurrentPage (state, pageTitle) {
      state.currentPage = pageTitle
    },
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
