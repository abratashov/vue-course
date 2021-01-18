<template>
  <div>
    <h1>Smart Input Vuex</h1>
    <form v-on:submit.prevent>
      <div class="progress">
        <div class="progress-bar" :style="progressStyle"></div>
      </div>
      <div>
        <smart-input v-for="(field, index) in fields"
                     :key="index"
                     :title="field.name"
                     :value="field.value"
                     :pattern="field.pattern"
                     @onchange="setValue"
                     ></smart-input>
      </div>
      <button class="btn btn-primary"
              :disabled="!allFieldsCorrect"
              @click="submitOrder(products)"
      >
        Send Data
      </button>
    </form>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
import SmartInput from '../SmartInput/SmartInput';

export default {
  components: {
    SmartInput
  },
  computed: {
    ...mapGetters('order', {fields: 'fields'}),
    ...mapGetters('cart', {products: 'products'}),
    progressStyle(){
      let filledFieldsAmount = this.fields.filter(field => field.isCorrect === true).length;
      let width = filledFieldsAmount / this.fields.length * 100;
      return 'width: ' + width + '%';
    },
    allFieldsCorrect(){
      let every = this.fields.every(field => field.isCorrect === true);
      return every;
    }
  },
  methods: {
    ...mapActions('order', {
      updateField: 'updateField',
      submitOrder: 'submitOrder',
    }),
    isCorrectField(field){
      return typeof(field.value) === 'string' &&
             !!field.value.match(field.pattern);
    },
    setValue(name, value, isCorrect){
      this.updateField({name, value, isCorrect})
    },
  },
}
</script>
