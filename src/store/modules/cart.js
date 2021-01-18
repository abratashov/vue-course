export default {
  namespaced: true,
  state: {
    products: []
  },
  getters: {
    products(state){
      return state.products;
    },
    cnt(state){
      return state.products.length;
    },
  },
  mutations: {
    add(state, id_product){
      let id = parseInt(id_product);

      if(state.products.indexOf(id) === -1){
        state.products.push(id);
      }
    },
    remove(state, id_product){
      let id = parseInt(id_product);
      let index = state.products.indexOf(id);

      if(index !== -1){
        state.products.splice(index, 1);
      }
    },
    clearCart(state, _){
      state.products = [];
    },
  },
  actions: {
    add(store, id_product){
      store.commit('add', id_product);
    },
    remove(store, id_product){
      store.commit('remove', id_product);
    },
    clearCart(store, _){
      store.commit('clearCart', {});
    }
  }
};
