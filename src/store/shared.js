export default {
  namespaced: true,
  state: {
    loading: false,
    error: null,
    homeSliderIndex: 0,
    currency: {
      id: 1,
      text: '€',
    },
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    setHomeSliderIndex(state, payload) {
      state.homeSliderIndex = payload;
    },
    setCurrency(state, payload) {
      state.currency = payload;
    },
    clearError(state) {
      state.error = null;
    }
  },
  actions: {},
  getters: {
    loading(state) {
      return state.loading;
    },
    error(state) {
      return state.error;
    },
    homeSliderIndex(state) {
      return state.homeSliderIndex;
    },
    currency(state) {
      return state.currency;
    },
  },
};
