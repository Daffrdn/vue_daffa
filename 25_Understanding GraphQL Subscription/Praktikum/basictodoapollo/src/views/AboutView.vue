<template>
<div>
    <h1>My Todo List</h1>
    <div class="todo-form">
      <form v-if="type == 'todolists'" @submit.prevent="OnSubmit(todolist.text)">
        <input  v-model="newTodo" name="todo" placeholder="todo-name">
          <button>Add New Todo</button>
      </form>
    </div>
  <div v-if="$apollo.queries.todolist.loading"><h2>Loading...</h2></div>
  <div v-if="error"><h2>{{ error }}</h2></div>
  <div v-if="todolist.length < 1"><h2> Data Not Found, Please Insert Data..</h2> </div>
  <div class="todo-list">
      <ul>
        <li v-for="todo in todolist" :key="todo.id" class="todo">
            <div class="content">
              <h2 v-if="!editing">{{todo.text}}</h2>
            <div v-else>
              <input v-bind:value="doTodo" @change="doTodoChange" type="text"/>
            </div>
            <div class="content">
              <button v-if="type == 'todolists'" @click="Edited(todo)">{{editing?'Update':'Edit'}}</button>
              <button v-if="type == 'todolists'" @click="Completed(todo)">Delete</button>
            </div>
          </div>
          </li>
      </ul>
</div>
</div>
</template>

<script>
import gql from 'graphql-tag'

export const GET_MY_TODOS = gql`
  query getMyTodos {
  todolist(order_by:{id: desc}){
    id
    text
  }
}`

const ON_SUBMIT = gql`
  mutation OnSubmits($text: String!) {
  insert_todolist(objects: {text: $text}) {
    affected_rows
    returning {
      id
      text
    }
  }
}`

const REMOVE_TODO = gql`
  mutation rmtodo($id: Int!) {
  delete_todolist(where: {id: {_eq: $id}}) {
    affected_rows
  }
}`

const EDIT_TODO = gql`
  mutation updateTodo($id: Int!, $text: String!) {
  update_todolist(where: {id: {_eq: $id}}, _set: {text: $text}) {
    affected_rows
  }
}`

const SUBS_TODO = gql`
  subscription MySubscription {
  todolist {
    id
    text
  }
}`

export default {
  components : {
  },
  apollo: {
    todolist: {
      query: GET_MY_TODOS,
      error(error){
        this.error = JSON.stringify(error.message)
      }
    },
    $subscribe: {
      todo: {
        query: SUBS_TODO,
        result({ data }){
          this.todolist = data.todo
        }
      }
    }
  },
  data() {
    return {
            newTodo: "",
            doTodo: "",
            todolist: [],
            error: null,
            editing: false,
            type: "todolists"
          }
  },
  methods: {
    OnSubmit: function(){
      const text = this.newTodo && this.newTodo.trim()
      this.$apollo.mutate({
        mutation: ON_SUBMIT,
        variables: {
          text: text
        },
        update: (cache, { data: { insert_todolist }}) => {
          try {
            if(this.type == "todolists"){
              const data = cache.readQuery({
                query: GET_MY_TODOS
              })
              const insertedTodolist = insert_todolist.returning;
              data.todolist.splice(0,0, insertedTodolist[0]);
              cache.writeQuery({
                query: GET_MY_TODOS,
                data
              })
            }
          } catch (error) {
            console.log(error)
          }
        this.newTodo = "";
        }
      })
    },
    Completed: function(todo){
      this.$apollo.mutate({
        mutation: REMOVE_TODO,
        variables: {
          id: todo.id
        },
        update: (store, { data: { delete_todolist }}) => {
            if(delete_todolist.affected_rows){
              if(this.type == "todolists"){
                const data = store.readQuery({
                  query: GET_MY_TODOS
                })
                data.todolist = data.todolist.filter(t=> {
                  return t.id !== todo.id
                })
                store.writeQuery({
                  query: GET_MY_TODOS,
                  data
                })
              }
            }
        }
      })
    },
    doTodoChange(e) {
      this.doTodo = e.target.value;
    },
    Edited: function(todo){
      this.editing = this.editing == true ? false : true;
        if (this.editing) {
          this.doTodo = todo.text;
        } else {
          todo.text = this.doTodo;
        }
      this.$apollo.mutate({
        mutation: EDIT_TODO,
        variables: {
          id: todo.id,
          text: todo.text
        },
        update: (store, { data: { update_todolist }}) => {
            if(update_todolist.affected_rows){
              if(this.type == "todolists"){
                const data = store.readQuery({
                  query: GET_MY_TODOS
                })
                store.writeQuery({
                  query: GET_MY_TODOS,
                  data
                })
              }
            }
        }
      })
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

