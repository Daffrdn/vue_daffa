<template>
  <div class="hello">
    <div class="container">
    <h1>To Do List</h1>
      <div class="input-group">
          <input type="text" class="form-control" v-model="todo" placeholder="Masukan Kegiatan.. " >
            <div class="input-group-append">
              <button class="btn btn-outline-success" @click="addtodo" type="submit">Tambahkan</button>
            </div>
      </div>
    <ol class="list-group mt-3">
      <li class="mt-3 d-flex justify-content-between" v-for="todo in list" :key="todo">
          {{ todo }}
          <div class="btn-group">
            <button class="btn btn-danger" type="button" @click="removelist"> Delete </button>      
            <button class="btn btn-info text-light" type="button" @click="editlist"> Edit </button>
          </div>
      </li>
    </ol>
  </div>
</div>  
</template>

<script>

export default {
  name: 'HelloWorld',
  data() {
    return {
            todo: null,
            list: [],
          }
        },
        methods: {
            addtodo(){
              if (!this.todo > 0){
                alert('Masukan Kegiatan anda');
              }
              else {
              this.list.push(this.todo);
              this.todo = '';
        },
          removelist(){

          },
          editlist(){
            
          }
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
</style>
