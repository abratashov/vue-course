<template>
  <div>
    <div class="form-group">
      <label>{{title}}</label>
      <i class="fa" :class="fieldClass"></i>
      <input type="text" class="form-control" :value="value" @keyup="onChange">
    </div>
  </div>
</template>

<script>

export default {
  props: ['title', 'value', 'pattern', 'iscorrect'],
  computed: {
    fieldClass(){
      let value = '';
      if (typeof(this.value) === 'string') {
        value = this.isCorrectField(this.value) ? 'fa-check-circle' : 'fa-exclamation-circle';
      }
      return value;
    },
  },
  methods: {
    isCorrectField(value){
      return typeof(value) === 'string' &&
             !!value.match(this.pattern);
    },
    onChange(e){
      let value = e.target.value;
      this.$emit('onchange', this.title, value, this.isCorrectField(value))
    }
  }
};

</script>
