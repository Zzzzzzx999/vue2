<template>
  <div class="root">
      <button @click="isShow=!isShow">显示/隐藏</button>
      <transition name="hello" appear>
          <h1 class="go" v-show="isShow">你好啊！</h1>
      </transition>
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
    }

    .hello-enter-active{
        animation: atguigu 0.5s linear;
    }
    .hello-leave-active{
        animation: atguigu 0.5s linear reverse;
    }

    @keyframes atguigu {
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0);
        }
    }
</style>