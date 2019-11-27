import axios from 'axios';

export default {
  namespaced: true,
  state: {
    data: null,
    count: null,
    next: null,
    previous: null,
    isLoading: false,
  },
  getters: {
    data: state => state.data,
    count: state => state.count,
    next: state => state.next,
    previous: state => state.previous,
    isLoading: state => state.isLoading,
  },
  mutations: {
    setData(state, val) {
      state.data = val;
    },
    setCount(state, val) {
      state.count = val;
    },
    setNext(state, val) {
      state.next = val;
    },
    setPrevious(state, val) {
      state.previous = val;
    },
    setIsLoading(state, val) {
      state.isLoading = val;
    },
  },
  actions: {
    getPeople({ commit }, payload = {}) {
      commit('setIsLoading', true);
      const { url = 'https://swapi.co/api/people' } = payload;
      axios.get(url).then(({ data: { count, next, previous, results } }) => {
        commit('setData', results);
        commit('setCount', count);
        commit('setNext', next);
        commit('setPrevious', previous);
        commit('setIsLoading', false);
      });
    },
  },
};
