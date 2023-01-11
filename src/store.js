import { createStore } from 'vuex'

export default createStore({
  state: () => ({
    currentPage: '', // The title of the page, to pass to Codepen from examples.
    usePug: false,
    tabsView: true,
    darkMode: false
  }),

  mutations: {
    setDarkMode (state, bool) {
      state.darkMode = bool
    },
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
    },
    initTabsView (state) {
      state.tabsView = !!parseInt(localStorage.getItem('tabsView'))
    },
    setTabsView (state, tabsView) {
      if (state.tabsView !== tabsView) {
        state.tabsView = tabsView
        localStorage.setItem('tabsView', +tabsView)
      }
    }
  },

  actions: {
    detectDarkMode ({ commit }) {
      // Detect the dark mode preference.
      const darkMode = window?.matchMedia?.('(prefers-color-scheme: dark)')?.matches

      commit('setDarkMode', darkMode)
      return darkMode
    }
  }
})
