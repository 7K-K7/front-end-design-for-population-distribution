export default {
  state: () => ({
    currentRegion: {
      code: 'china',
      name: '中国'
    }
  }),
  mutations: {
    setCurrentRegion(state, region) {
      state.currentRegion = region;
    }
  },
  actions: {
    updateRegion({ commit }, region) {
      commit('setCurrentRegion', region);
    }
  }
}