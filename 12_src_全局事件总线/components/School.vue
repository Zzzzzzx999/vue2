<template>
  <div class="school">
      <h2>学校名称：{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
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
        mounted() {
            // console.log('School',this.$bus);
            this.$bus.$on('hello',(data)=>{
                console.log('我是school组件，收到了数据',data);
            })
        },
        beforeDestroy() {
            this.$bus.$off('hello')
        },
    }
</script>

<style scoped>
    .school{
        background-color: aqua;
        padding: 5px;
    }
</style>