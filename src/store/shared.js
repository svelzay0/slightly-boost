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
    menuItems: {
      'orders': {
        name: 'Заказы',
        url: '/orders'
      },
      'home': {
        name: 'Домашняя страница',
        url: '/home'
      },
      'cars': {
        name: 'Автомобили',
        url: '/cars'
      },
      'cars.create': {
        name: 'Создать автомобиль',
        url: '/cars/create'
      },
      'cars.edit': {
        name: 'Карточка автомобиля',
        url: '/cars/edit'
      },
      'entities': {
        name: 'Сущности',
        url: '/entities'
      },
      'error': {
        name: ' ',
        url: '/error'
      },
      'menu5': {
        name: 'Меню 5',
        url: '/menu5'
      },
      'menu6': {
        name: 'Меню 6',
        url: '/menu6'
      },
      'menu7': {
        name: 'Меню 7',
        url: '/menu7'
      }
    }
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
    menuItems(state) {
      return state.menuItems;
    },
    homeSliderIndex(state) {
      return state.homeSliderIndex;
    },
    currency(state) {
      return state.currency;
    },
  },
};
