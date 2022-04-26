<template>
<div>
  <div v-for="todo in allLists" :key="todo.id">
    <outputTodo :todo="todo" />
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';
import outputTodo from "@/components/outputTodo";

export default {
  components: {
    outputTodo
  },
  computed:{
    ...mapGetters(["allLists", "completed"])
  }
};
</script>

<style>

</style>