<template>
  <div class="school">
      <h2>学校名称：{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
      <button @click="sendSchoolname">点我发送学校名到app</button>
  </div>
</template>

<script>
    export default {
        name:'School',
        data() {
            return {
                name:"厦门工学院",
                address:"厦门"
            }
        },
        methods: {
            sendSchoolname(){
                this.getSchoolname(this.name)
            }
        },
        props:['getSchoolname']
    }
</script>

<style scoped>
    .school{
        background-color: aqua;
        padding: 5px;
    }
</style>