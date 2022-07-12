<template>
  <div>
      <School></School>
      <hr>
      <Student></Student>
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