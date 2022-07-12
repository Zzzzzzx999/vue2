<template>
  <div>
      <School name="厦门工学院" address="厦门"></School>
      <Student name="张三" sex="男" :age=22></Student>
  </div>
</template>

<script>
    import School from './components/School.vue'
    import Student from './components/Student.vue'
    export default {
        name:'App',
        data() {    
            return {
                msg:'欢迎学习Vue'
            }
        },
        components:{School,Student},
    }
</script>

<style>

</style>