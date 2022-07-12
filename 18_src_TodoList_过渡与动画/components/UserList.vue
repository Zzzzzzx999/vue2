<template>
  <ul class="todo-main">
    <transition-group 
    name="animate__animated animate__bounce"
    enter-active-class="animate__backInLeft" 
    leave-active-class="animate__bounceOutRight"
    appear
    >
      <UserItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj"></UserItem>
    </transition-group>
  </ul>
</template>
<script>
import 'animate.css';
import UserItem from './UserItem'
    export default {
        name:"UserList",
        components:{UserItem},
        props:['todos']
    }
</script>

<style scoped>
  .todo-main{
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty{
    height: 40px;
    line-height: 40px;
    border: 1px soild #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
  /* hello事件的过渡与动画 */
  /* .hello-enter-active,.hello-leave-active{
    transition: 0.5s linear;
  }
  .hello-enter,.hello-leave-to{
    transform: translateX(100%);
  }
  .hello-enter-to,.hello-leave{
    transform: translateX(0);
  } */
  
</style>