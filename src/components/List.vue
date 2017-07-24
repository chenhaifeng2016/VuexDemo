<template>
  <div class="todolist">
    <ul class="list-group">
      <li class="list-group-item" v-for="(todo, index) in todos" >
        <span>{{todo.value}}</span>
        <button class="btn btn-default" @click="delTodo(index)"> 删除 </button>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from "vuex";

  export default{
    data(){
      return {}
    },
    methods:{
      delTodo(index){
        this.$store.dispatch('delTodo', index);
      }
    },
    computed:{
      ...mapState(['todos']) // 映射state
    }
  }
</script>

<style>
</style>

