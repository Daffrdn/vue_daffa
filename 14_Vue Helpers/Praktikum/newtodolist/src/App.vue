<template>
  <div id="app" class="container">
    <do-todolist/>
    <listTodolist/>
  </div>
</template>

<script>
import doTodolist from './components/doTodolist.vue'
import listTodolist from './components/listTodolist.vue'

export default {
  name: 'App',
  components: {
    doTodolist,
    listTodolist
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
