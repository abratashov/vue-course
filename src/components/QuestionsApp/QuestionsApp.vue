<template>
  <div>
    <h1>Questions App</h1>
    <div v-if="!completed">
      <div v-for="question in unansweredQuestions">
        <question-field :id="question.id"
                        :type="question.type"
                        :title="question.title"
                        :possible_answers="question.possible_answers"
                        :answered="question.answered"
                        @answered="onAnswer"
                        >
        </question-field>
      </div>
    </div>
    <div v-else>
      Answers:
      <div v-for="question in questions">
        {{question.title}}
        {{question.answers}}
      </div>
    </div>
  </div>
</template>

<script>

import QuestionField from './QuestionField'

export default {
  components: {
    QuestionField
  },
  data () {
    return {
      questions:
      [
        {
          id: 'u1',
          type: 'radio',
          title: 'Какой тег задает ссылку?',
          possible_answers: ['a', 'div', 'span', 'table'],
          answers: [],
          answered: false,
        },
        {
          id: 'u2',
          type: 'checkboxes',
          title: 'Какие из этих тегов строчные?',
          possible_answers: ['a', 'i', 'td', 'tr'],
          answers: [],
          answered: false,
        }
      ],
      completed: false,
    }
  },
  computed: {
    unansweredQuestions(){
      return this.questions.filter(q => q.answered == false).slice(0, 1);
    }
  },
  methods: {
    onAnswer(id, answers){
      let index = this.questions.findIndex(e => e.id === id);
      if(index > -1) {
        this.questions[index].answers = answers;
        this.questions[index].answered = true;
      }

      if (this.questions.every(question => question.answered == true)) {
        this.completed = true;
      }
    },
  },
}
</script>
