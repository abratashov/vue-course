import Vue from 'vue';

export default {
  namespaced: true,
  state: {
    fields: [
      {
        name: 'Name',
        value: null,
        pattern: /^[a-zA-Z ]{2,30}$/,
        isCorrect: null,
      },
      {
        name: 'Phone',
        value: null,
        pattern: /^[0-9]{7,14}$/,
        isCorrect: null,
      },
      {
        name: 'Email',
        value: null,
        pattern: /.+/,
        isCorrect: null,
      },
      {
        name: 'Provider',
        value: null,
        pattern: /.+/,
        isCorrect: null,
      },
      {
        name: 'Delivery Address',
        value: null,
        pattern: /.+/,
        isCorrect: null,
      }
    ]
  },
  getters:{
    fields(state){ return state.fields },
  },
  mutations:{
    updateField(state, payload){
      let index = state.fields.findIndex(e => e.name === payload.name);
      let field = state.fields[index];
      state.fields[index].value = payload.value;
      state.fields[index].isCorrect = payload.isCorrect;
    },
  },
  actions:{
    updateField(store, payload) {
      store.commit('updateField', payload)
    },
    submitOrder(store, payload) {
      Vue.http.post('/api/order', {
        ...store.state.fields,
        order: payload,
      });
    }
  },
}
