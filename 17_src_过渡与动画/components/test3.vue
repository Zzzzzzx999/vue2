<template>
  <div class="root">
      <button @click="isShow=!isShow">显示/隐藏</button>
      <transition-group 
        appear
        name="animate__animated animate__bounce"
        enter-active-class="animate__swing"
        leave-active-class="animate__backOutUp"
        >
          <h1 class="go" key="1" v-show="!isShow">厦门！</h1>
          <h1 class="go" key="2" v-show="isShow">泉州！</h1>
      </transition-group>
  </div>
</template>

<script>
import 'animate.css'
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
</style>