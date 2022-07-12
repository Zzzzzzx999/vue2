<template>
  <div class="student">
      <h2>学生姓名：{{name}}</h2>
      <h2>学生性别：{{sex}}</h2>
      <h2>学生年龄：{{age}}</h2>
      <button @click="sendStudentName">把学生名字给School组件</button>
  </div>
</template>

<script>
    import pubsub from 'pubsub-js'
    export default {
        name:'Student',
        data() {
            return {
                name:"张三",
                sex:"男",
                age:22
            }
        }, 
        mounted() {
            // console.log('Student',this.$bus);
        }, 
        methods: {
            sendStudentName(){
                // this.$bus.$emit('hello',this.name) //emit触发hello事件,发送数据666
                pubsub.publish('hello',666)
            }
        },
    }
</script>

    // css会汇总名字一样容易打架,使用scoped(作用域)
<style scoped>
    .student{
        background-color: aquamarine;
        padding: 5px;
    }
</style>