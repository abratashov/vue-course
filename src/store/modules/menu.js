export default {
  namespaced: true,
  state: {
    items: [
      {
        url: '/products',
        title: 'Products',
      },
      {
        url: '/cart',
        title: 'Cart',
      },
      {
        url: '/checkout',
        title: 'Order Now',
      },
    ]
  },
  getters: {
    items(state) { return state.items }
  }
}
