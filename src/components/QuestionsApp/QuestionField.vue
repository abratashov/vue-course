<template>
  <div>
    <div v-show="!answered">
      <div class="form-group">
        <label>{{title}}</label>
          <div v-for="(answer, index) in possible_answers">

            <div v-if="type === 'radio'">
              <input type="radio" class="form-field"
                                  :id="id + '-' + index"
                                  :name="id"
                                  :value="answer"
                                  @click="radioAnswer(answer)"
                                  >
              <label :for="id + '-' + index">{{answer}}</label>
              <br>
            </div>

            <div v-else-if="type === 'checkboxes'">
              <input type="checkbox" class="form-field"
                                     :id="id + '-' + index"
                                     :value="answer"
                                     @click="checkboxAnswer($event, answer)"
                                     >
              <label :for="id + '-' + index">{{answer}}</label>
              <br>
            </div>
        </div>

        <button class="btn btn-primary" :disabled="canSend" @click="sendAnswer">
          Send
        </button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['id', 'type', 'title', 'possible_answers', 'answered'],
  data() {
    return {
      result_answers: []
    }
  },
  computed: {
    canSend(){
      return this.result_answers.length == 0;
    },
  },
  methods: {
    radioAnswer(answer){
      this.result_answers = [answer];
    },
    checkboxAnswer($event, answer){
     $event.target.checked ? this.checkboxAddAnswer(answer) : this.checkboxDeleteAnswer(answer);
    },
    checkboxAddAnswer(answer){
      let index = this.result_answers.indexOf(answer);
      if(index == -1){
        this.result_answers.push(answer);
      }
    },
    checkboxDeleteAnswer(answer){
      let index = this.result_answers.indexOf(answer);
      if (index > -1) {
        this.result_answers.splice(index, 1);
      }
    },
    sendAnswer(e){
      let value = e.target.value;
      this.$emit('answered', this.id, this.result_answers);
      this.result_answers = [];
    }
  }
};

</script>
