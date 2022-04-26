import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      completed: true,
      lists: [],
      list: [],
      
  },
  getters: {
    allList: (state) => state.list,
    allLists: (state) => state.lists,
    completed: (state) => state.completed,
  },
  actions: {
    changeCompleted({ commit }) {
      commit("change_complete");
    },
    addList({ commit }, todo) {
      commit('add_todo', todo);
    },
    deleteList({ commit }, id) {
      commit("delete_todo", id);
    },
    updateList({ commit }, todo) {
      commit("update_todo", todo);
    },
  },
  mutations: {
    add_todo(state, todo) {
      state.list.push(todo);
      state.lists = state.list;
    },
    delete_todo(state, id) {
      state.list = state.list.filter((todo) => todo.id != id);
      state.lists = state.list;
    },
    update_todo(state, todo) {
      let index = state.list.findIndex((t) => t.id == todo.id);
      if (index != -1) {
        state.list[index] = todo;
      }
    },
    change_complete(state) {
      state.lists = state.list;
      state.completed = state.completed == true ? false : true;
      state.lists = state.lists.filter((t) => t.complete == state.completed);
    },
  },
  modules: {
  }
})
