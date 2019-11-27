import axios from 'axios';

export default {
  namespaced: true,
  state: {
    data: {},
  },
  getters: {
    data: state => state.data,
  },
  mutations: {
    setData(state, val) {
      state.data = val;
    }
  },
  actions: {
    getPerson({ commit }, payload = {}) {
      const { id = null, url = `https://swapi.co/api/people/${id}/` } = payload;
      axios.get(url).then(({ data }) => {
        commit('setData', data);
      });
    },
  },
};
