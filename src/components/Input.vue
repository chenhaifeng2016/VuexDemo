<template>
  <div class="form-group">
    <input type="text" class="form-control"  placeholder="" v-model="value"/>
    <button type="button" class="btn btn-default" @click="addTodo"> 添加 </button>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        value:"",
        id:0
      }
    },
    methods:{
      addTodo(){
        let item = {
          value:this.value,
          id:++this.id
        };

        this.value = "";
        this.$store.dispatch("addTodo", item);
      }
    }
  }
</script>

<style>
</style>
