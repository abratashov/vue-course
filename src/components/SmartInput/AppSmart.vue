<template>
  <div>
    <h4>Smart Input</h4>
    <form>
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
      <button class="btn btn-primary" :disabled="!allFieldsCorrect">
        Send Data
      </button>
    </form>
  </div>
</template>

<script>

import SmartInput from './SmartInput'

export default {
  components: {
    SmartInput
  },
  data () {
    return {
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
          name: 'Some Field 1',
          value: null,
          pattern: /.+/,
          isCorrect: null,
        },
        {
          name: 'Some Field 2',
          value: null,
          pattern: /.+/,
          isCorrect: null,
        }
      ]
    }
  },
  computed: {
    progressStyle(){
      let filledFieldsAmount = this.fields.filter(field => field.isCorrect === true).length;
      let width = filledFieldsAmount / this.fields.length * 100;
      return 'width: ' + width + '%';
    },
    allFieldsCorrect(){
      let every = this.fields.every(field => {
        return field.isCorrect === true;
      });
      return every;
    }
  },
  methods: {
    isCorrectField(field){
      return typeof(field.value) === 'string' &&
             !!field.value.match(field.pattern);
    },
    setValue(name, value, isCorrect){
      let index = this.fields.findIndex(e => e.name === name);
      let field = this.fields[index];
      this.fields[index].value = value;
      this.fields[index].isCorrect = isCorrect;
    },
  },
}
</script>
