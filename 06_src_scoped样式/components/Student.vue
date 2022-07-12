<template>
  <div class="student">
      <h2>学生姓名：{{name}}</h2>
      <h2>学生性别：{{sex}}</h2>
      <h2>学生年龄：{{age}}</h2>
  </div>
</template>

<script>
    export default {
        name:'Student',
        data() {
            return {
                name:"张三",
                sex:"男",
                age:22
            }
        },
        
    }
</script>

    // css会汇总名字一样容易打架,使用scoped(作用域)
<style scoped>
    .student{
        background-color: aquamarine;
    }
</style>