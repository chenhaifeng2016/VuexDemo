import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    todos:[],
  },

  getters:{
    todoCount(state){
      return state.todos.length;
    }
  },

  mutations:{
    addTodo(state, item){
      state.todos.push(item);
    },

    delTodo(state, index){
      state.todos.splice(index, 1);
    }
  },

  actions:{
    addTodo(context, item){
      if(item.value != ""){
        context.commit("addTodo", item);
      }
    },

    //参数解构赋值
    delTodo({commit}, index){
      commit("delTodo", index);
    }
  },

  modules:{}
});

export default store;

