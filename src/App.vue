<template>
  <div align="center">
    <div id="app" class="wrapper">
      <app-smart></app-smart>
      <hr>
      <questions-app></questions-app>
    </div>
  </div>
</template>

<script>

import AppSmart from './components/SmartInput/AppSmart'
import QuestionsApp from './components/QuestionsApp/QuestionsApp'

export default {
  name: 'app',
  components: {
    AppSmart,
    QuestionsApp
  },
  data () {
    return {}
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.wrapper { width: 30% }
</style>
