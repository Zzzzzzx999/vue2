<template>
  <div class="todo-footer" v-show="total" >
    <label>
      <input type="checkbox" v-model="isAll">
    </label>
    <span>已完成{{Donetodos}}</span>/全部{{total}}
    <button class="btn btn-danger" @click="clearAll">清楚已完成任务</button>
  </div>
</template>

<script>
    export default {
        name:"UserFooter",
        props:['todos','checkAllTodo','clearDone'],
        methods: {
          checkAll(todo){
            this.checkAllTodo(todo.target.checked)
          },
          clearAll(){
            this.clearDone()
          }
        },
        computed:{
          total(){
            return this.todos.length
          },
          Donetodos(){
            return this.todos.reduce((pre,todo)=>pre+(todo.done ? 1 : 0)
            ,0)

            //第二种方法
            /* let a=0
            this.todos.forEach(todo => {
              if (todo.done) a++
            })
            return a */
          },
          isAll:{
            get(){
              return this.Donetodos===this.total && this.total > 0
            },
            set(value){
              this.checkAllTodo(value)
            }
          },
        }
    }
</script>

<style scoped>
  .todo-footer{
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label{
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input{
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button{
    float: right;
    margin-top: 5px;
  }
</style>