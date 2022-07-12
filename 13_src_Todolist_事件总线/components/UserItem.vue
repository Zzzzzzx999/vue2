<template>
  <li>
    <lable>
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)">
      <span>{{todo.name}}</span>
    </lable>
    <button class="btn btn-danger" @click="deleteTodoObj(todo.id)">删除</button>
  </li>
</template>

<script>
    export default {
        name:'UserItem',
        props:['todo'],
        methods: {
          handleCheck(id){
            //this.checkTodo(id)
            this.$bus.$emit('checkTodo',id)
          },
          deleteTodoObj(id){
            //this.deleteTodo(id)
            this.$bus.$emit('deleteTodo',id)
          }
        },
    }
</script>

<style scoped>
  li{
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label{
    float: left;
    cursor: pointer;
  }

  li label li input{
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button{
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before{
    content: initial;
  }

  li:last-child{
    border-bottom: none;
  }
  li:hover{
    background-color: #ddd;
 }
  li:hover button{
    display: block;
  }
</style>