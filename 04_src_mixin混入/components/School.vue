<template>
  <div class="school">
      <h1>{{msg}}</h1>
      <h2 @click="showName">学校名称：{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
    import {hunhe,hunhe2} from '../mixin'

    export default {
        name:'School',
        data() {
            return {
                msg:'欢迎来到厦门工学院',
            }
        },
        mixins:[hunhe,hunhe2],
        //简单声明接收
        props:['name','address']
    }
</script>

<style>
    .school{
        background-color: aqua;
    }
</style>