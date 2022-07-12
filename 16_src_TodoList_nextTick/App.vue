<template>
  <div id="root">
      <div class="todo-container">
          <div class="todo-wrap">
              <UserHeader @addTodo="addTodo"></UserHeader>
              <UserList  :todos="todos"></UserList>
              <UserFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearDone="clearDone"></UserFooter>
          </div>
      </div>
  </div>
</template>

<script>
    import pubsub from 'pubsub-js'
    import UserHeader from './components/UserHeader'
    import UserList from './components/UserList'
    import UserFooter from './components/UserFooter'
    export default {
        name:'App',
        components:{UserHeader,UserList,UserFooter},
        data() {
            return {
                todos:JSON.parse(localStorage.getItem('todos')) || []
            }
        },
        methods: {
            //添加待办事项
            addTodo(todoObj){
                this.todos.unshift(todoObj)
            },
            //改变待办事项状态
            checkTodo(id){
                this.todos.forEach((todoObj) => {
                    if(todoObj.id===id) todoObj.done=!todoObj.done                    
                });
            },
            updataTodo(id,name){
                this.todos.forEach((todoObj) => {
                    if(todoObj.id===id) todoObj.name=name                    
                });
            },
            //删除待办事项
            deleteTodo(todoObj){
                if (confirm('确认删除吗？')) {
                    this.todos.shift(todoObj)
                }
            },
            //删除待办事项
            /* DeleteTodo(id){
                if (confirm('确认删除吗？')) {
                    this.todos=this.todos.filter((todo)=>{
                        return todo.id!==id
                    })
                }
            } */

            //全选or取消全选
            checkAllTodo(done){
                this.todos.forEach((todo)=>{
                    todo.done = done
                })
            },
            //清除所有已经完成的任务
            clearDone(){
                this.todos=this.todos.filter((todo)=>{
                    return !todo.done
                })    
            }       
        },
        watch:{
            todos:{
                deep:true,
                handler(value){
                    localStorage.setItem('todos',JSON.stringify(value))
                }
            }
        },
        mounted() {
            this.$bus.$on('checkTodo',this.checkTodo)
            this.$bus.$on('updataTodo',this.updataTodo)
            // this.$bus.$on('deleteTodo',this.deleteTodo)
            pubsub.subscribe('deleteTodo')
        },
        beforeDestroy() {
            this.$bus.$off('checkTodo')
            this.$bus.$off('deleteTodo')
        },
    }
</script>

<style>
    body{
        background: #fff;
    }

    .btn{
        display: inline-block;
        padding: 4px 12px;
        margin-bottom: 0;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        box-shadow: inset 0 1px 0 rgba(255,255,255,0.2),0 1x 2px rgba(0,0,0,0.05);
        border-radius: 4px;
    }

    .btn-danger{
        color: #fff;
        background-color: #da4f49;
        border: 1px solid #bd362f;
    }
    .btn-edit{
        color: #fff;
        background-color: skyblue;
        border: 1px solid rgb(107, 162, 184);
        margin-right: 5px;
    }

    .btn-danger:hover{
        color: #fff;
        background-color: #bd362f;
    }

    .btn:focus{
        outline: none;
    }

    .todo-container{
        width: 600px;
        margin: 0 auto;
    }

    .todo-container .todo-wrap{
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
</style>