
<template>
<div id="app">
    <div class="container">
        <div class="col-6 mt-5 mx-auto md-4">
            <div class="input-group">
                <input type="text" class="form-control" v-model="todo" placeholder="Masukan Kegiatan.. " >
                <div class="input-group-append">
                    <button class="btn btn-outline-success" @click="addtodo" type="submit">Tambahkan</button>
                </div>
            </div>
            <p v-if="list.length >= 4">Hebat!</p>
            <ol>
                <li v-for="todo in list" :key="todo">
                {{ todo }}
                </li>
            </ol>
        </div>
    </div>    
</div>
</template> 

<script>
export default {
  name: 'App',
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
        }
      }
    }
}
</script>
