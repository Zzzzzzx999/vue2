<template>
  <div class="root">
      <button @click="isShow=!isShow">显示/隐藏</button>
      <transition-group name="hello" appear>
          <h1 class="go" key="1" v-show="!isShow">厦门！</h1>
          <h1 class="go" key="2" v-show="isShow">泉州！</h1>
      </transition-group>
  </div>
</template>

<script>
export default {
    name:'test',
    data() {
        return {
            isShow:true,
        }
    },
}
</script>

<style scoped>
    h1{
        background-color: skyblue;
        /* transition: 0.5s linear; */
    }
    /* 来的整个过程和去的整个过程 */
    .hello-enter-active,.hello-leave-active{
        transition: 0.5s linear;
    }
    /* 进入的起点 、 离开的终点 */
    .hello-enter,.hello-leave-to{
        transform: translateX(-100%);
    }
    /* 进入的终点 、 离开的起点 */
    .hello-enter-to,.hello-leave{
        transform: translateX(0);
    }
</style>