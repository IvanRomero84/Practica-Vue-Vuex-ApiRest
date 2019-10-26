import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import leagues from './modules/leagues'
import table from './modules/table'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    leagues,
    table,
  },
})
