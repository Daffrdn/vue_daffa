<template>
  <div>
    <h1>My Todo List</h1>
    <div class="todo-form">
      <form @submit.prevent="OnSubmit(todolist.text)">
        <input  v-model="newTodo" name="todo" placeholder="todo-name">
          <button>Add New Todo</button>
      </form>
    </div>
    
    <!-- <ApolloQuery
    :query="gql => gql`
      query {
        todolist {
        id
        text
      }
    }
    `"
    :variables:="{text}"
    > -->

  <!-- <template v-slot="{ result: { data, error } }"> -->
  <div class="todo-list">
      <div v-if="todolist.length > 0">
      <ul>
        <li v-for="todo in todolist" :key="todo.id" class="todo">
            <div class="content">
              <h3>{{todo.id}}.  {{todo.text}}</h3>
            </div>
            <div class="content">
              <button class="far fa-times-circle fa-2x" @click="Completed(index)">x</button>
            </div>
          </li>
      </ul>
      </div>
      <div v-else><h2> Data Not Found!! </h2></div>
  </div>
  <!-- </template>


    </ApolloQuery> -->
  </div>
</template>

<script>
import gql from 'graphql-tag'

const GET_MY_TODOS = gql`
  query getMyTodos {
  todolist(where: {id: {_eq: 3}}) {
    id
    text
  }
}`

export default {
  components : {
  },
  apollo: {
    todolist: {
      query: GET_MY_TODOS
    },
  },
  data() {
    return {
            newTodo: "",
            todolist: [],
          }
  },
  methods: {
    OnSubmit(){
      this.todolist.push(this.newTodo)
      this.newTodo = '';
    },
    Completed(index){
      this.todolist.splice(index,1);
    }
  }
}
</script>

<style  scoped>
body {
  padding-top: 1em;
  padding-bottom: 1em;
}
input{
  display: block;
  margin: auto;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: groove;
  outline: none;
  font-size: 1.3em;
  padding: 15px 0;
  text-align: center
}
.todo-form{
  margin-top: 30px;
}
.todo{
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
button {
  margin-top: 10px;
  padding:10px;
  background-color: rgb(180, 199, 211);
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
  outline: none;
}

h3{
  margin: 0px;
  padding: 0px;
}
li{
  list-style-type: none;
  width: 50%;
  margin: auto;
  padding: 15px 0;
  background-color: rgb(216, 216, 216)
}
.content{
  flex:1;
}
i{
  cursor: pointer;
  color: red;
}
</style>

