<template>
  <li>
    <lable>
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)">
      <span v-show="!todo.isEdit">{{todo.name}}</span>
      <input v-show="todo.isEdit" 
        type="text" :value="todo.name" 
        @blur="handleBlur(todo,$event)" 
        ref="inputName"> 
    </lable>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    <button class="btn btn-edit" v-show="!todo.isEdit" @click="handleEdit(todo)">编辑</button>
  </li>
</template>

<script>
    import pubsub from 'pubsub-js'
    export default {
        name:'UserItem',
        props:['todo'],
        methods: {
          //勾选or取消勾选
          handleCheck(id){
            //this.checkTodo(id)
            this.$bus.$emit('checkTodo',id)
          },
          //删除
          handleDelete(id){
            //this.deleteTodo(id)
            // this.$bus.$emit('deleteTodo',id)
            pubsub.publish('deleteTodo',id)
          },
          //编辑
          handleEdit(todo){
            if(todo.hasOwnProperty('isEdit')){
              todo.isEdit=true
            }else{
              this.$set(todo,'isEdit',true)
            }
            /* setTimeout(() => {
              this.$refs.inputName.focus()
            }, 150); */
            this.$nextTick(function(){
              this.$refs.inputName.focus()
            })
          },
          //失去焦点回调(真正执行修改逻辑)
          handleBlur(todo,e){
            todo.isEdit=false
            if(!e.target.value.trim()) return alert('输入不能为空!')
            this.$bus.$emit('updataTodo',todo.id,e.target.value)
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