<template>
  <div class="container">
    <h1>To Do List</h1>
      <div class="input-group">
          <input @change="doTodoChange" v-bind:value="doTodo" type="text" class="form-control" placeholder="Masukan Kegiatan.. " >
            <div class="input-group-append">
              <button class="btn btn-outline-success" @click="addTodos">Tambahkan</button>
            </div>
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { v1 } from 'uuid';

export default {
  data() {
    return {
      doTodo: ""
    };
  },
  methods: {
    ...mapActions(["addList"]),
    doTodoChange(e){
      this.doTodo = e.target.value;
    },

    addTodos() {
      this.addList({
        id: v1(),
        title: this.doTodo,
        complete: false
      });
      this.doTodo = ""
    }
  }
};
</script>