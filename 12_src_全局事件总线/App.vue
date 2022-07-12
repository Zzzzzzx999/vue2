<template>
  <div class="app">
      <h1>{{msg}}</h1>
      <School></School>
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
                msg:'你好啊',
            }
        },
        components:{School,Student},
    }
</script>

<style>
    .app{
        background-color: gray;
        margin-top: 5px;
    }
</style>