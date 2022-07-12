<template>
  <div class="student">
      <h1>{{msg}}</h1>
      <h2 @click="showName">学生姓名：{{name}}</h2>
      <h2>学生性别：{{sex}}</h2>
      <h2>学生年龄：{{age}}</h2>
  </div>
</template>

<script>
    import {hunhe,hunhe2} from '../mixin'

    export default {
        name:'Student',
        data() {
            return {
                msg:'我是一名尚硅谷的学生',
            }
        },
        mixins:[hunhe,hunhe2],
        //简单声明接收
        props:['name','sex','age']
        
    }
</script>

<style>
    .student{
        background-color: aquamarine;
    }
</style>