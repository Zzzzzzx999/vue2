<template>
  <div class="student">
      <h1>{{msg}}</h1>
      <h2>学生姓名：{{name}}</h2>
      <h2>学生性别：{{sex}}</h2>
      <h2>学生年龄：{{age+1}}</h2>
  </div>
</template>

<script>
    export default {
        name:'Student',
        data() {
            return {
                msg:'我是一名学生',
            }
        },
        //简单声明接收
        // props:['name','sex','age'] 

        //接收的同时对数据进行类型限制
        /* props:{
            name:String,
            sex:String,
            age:Number
        } */

        //接收的同时对数据进行类型限制+默认值的指定+必要性的限制
        props:{
            name:{
                type:String,  //name的类型是字符串
                required:true, //name是必要的
            },
            sex:{
                type:String,  //sex的类型是字符串
                required:true, //sex是必要的
            },
            age:{
                type:Number,  //age的类型是字符串
                default:22 //age默认值是22
            },
        }
    }
</script>

<style>
    .student{
        background-color: aquamarine;
    }
</style>