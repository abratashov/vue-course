import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import cart from './modules/cart';
import menu from './modules/menu';
import order from './modules/order';
import products from './modules/products';

export const store = new Vuex.Store({
  modules: {
    cart,
    menu,
    order,
    products,
  },
  strict: process.env.NODE_ENV !== 'production',
});
