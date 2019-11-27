import Vue from 'vue'
import Vuex from 'vuex'

import people from './modules/people';
import person from './modules/person';


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    people,
    person,
  }
})
