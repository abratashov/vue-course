import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Cart from './components/ShopApp/Cart';
import E404 from './components/ShopApp/E404';
import Product from './components/ShopApp/Product';
import Products from './components/ShopApp/Products';

import {store} from './store'

const routes = [
  {
    path: '/',
    redirect: '/products',
  },
  {
    name: 'products',
    path: '/products',
    component: Products,
    beforeEnter(from, to, next){
      store.dispatch('products/loadItems');
      next();
    },
  },
  {
    path: '/products/:id',
    component: Product,
  },
  {
    path: '/cart',
    component: Cart,
  },
  {
    path: '*',
    component: E404,
  },
];

export const router = new VueRouter({
  routes,
  mode: 'history',
});

