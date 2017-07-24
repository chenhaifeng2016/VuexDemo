<template>
  <div id="app">
    <h1>Vue Vuex Todo Demo</h1>
    <hr>
    <todoInput />
    <todoList />
    <p>todo数量：{{todoCount}}</p>
    <pre>{{$store.state}}</pre>
  </div>
</template>

<script>
  import todoInput from './components/input.vue';
  import todoList from './components/list.vue';
  import {mapGetters} from "vuex";

  export default {
    name: 'app',
    data () {
      return {
      }
    },
    computed:{
      ...mapGetters({
        todoCount:"todoCount" //映射Getter
      })
    },
    components:{
      todoInput,
      todoList
    }
  }
</script>

<style>
</style>
