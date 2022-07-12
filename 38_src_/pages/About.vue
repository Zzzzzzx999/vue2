<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
    name:'About',
    mounted() {
      console.log('About组件挂载完毕');
    },
    beforeDestroy(){
      console.log('About组件即将被销毁');
    },
    beforeRouteEnter (to, from, next) {
      console.log('About的beforeRouteEnter',to,from);
      if(to.meta.isAuth){     //判断是否需要鉴权
        if (localStorage.getItem('school')==='厦门工学院') {
            next()            
        }else{
            alert('您权限不足,无法查看！(提示:本地学校名称不对)')
        }
      }else{
          next()
      }
    },
    beforeRouteLeave (to, from, next) {
      console.log('About的beforeRouteLeave',to,from);
      next()
    }
}
</script>

<style>

</style>