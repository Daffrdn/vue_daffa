<template>
<div>
    <div class="mt-3 d-flex justify-content-between">
        <p v-if="!editing">{{todo.title}}</p>
      <div v-else class="mr-2 row justify-content-between align-items-center col">
        <input v-bind:value="doTodo" @change="doTodoChange" type="text" class="col-7 form-control"/>
      </div>
      <div class="btn-group">
        <button @click="updateTodos(todo)" class="btn btn-info m-1">{{editing?'Update':'Edit'}}</button>
        <button @click="deleteList(todo.id)" class="btn btn-danger m-1">Delete</button>
      </div>
    </div>
</div>    
</template>

<script>
import { mapActions } from 'vuex';
export default {
    props: {
        todo: {}
    },
    data() {
        return {
      doTodo: "",
      editing: false,
      completed: false
    };
  },
  methods: {
    ...mapActions(["updateList","deleteList","changeCompleted"]),
    onCompleted() {
      this.completed = this.completed == true ? false : true;
    },
    doTodoChange(e) {
      this.doTodo = e.target.value;
    },
    updateTodos(todo) {
      this.editing = this.editing == true ? false : true;
      if (this.editing) {
        this.doTodo = todo.title;
        this.updateTodo(todo);
      } else {
        todo.title = this.doTodo;
        todo.complete = this.completed;
        this.changeCompleted();
      }
    },
  }
}
</script>

<style scoped>

</style>
