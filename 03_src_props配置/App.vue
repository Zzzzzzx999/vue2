<template>
  <div>
      <Student name="张三" sex="男" :age=22></Student>
      <Student name="李四" sex="女" :age=21></Student>
  </div>
</template>

<script>
    import Student from './components/Student.vue'
    export default {
        name:'App',
        data() {    
            return {
                msg:'欢迎学习Vue'
            }
        },
        components:{Student},
    }
</script>

<style>

</style>