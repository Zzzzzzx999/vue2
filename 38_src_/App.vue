<template>
  <div class="container">
    <div>
      <div class="row">
        <Banner></Banner>
      </div>
      <div class="row">
        <div class="col-xs-2 col-xs-offset-2">
          <div class="list-group">
            <!-- 原始html页面中我们使用a标签实现页面的跳转 -->
            <!-- <a class="list-group-item active" href="./about.html">About</a> -->
            <!-- <a class="list-group-item" href="./home.html">Home</a> -->
            <!-- vue中借助router-link标签实现路由的切换 -->
            <router-link replace class="list-group-item" active-class="active" to="/home">Home</router-link>
            <router-link replace class="list-group-item" active-class="active" to="/about">About</router-link>
          </div>
        </div>
        <div class="col-xs-6">
          <div class="panel">
            <div class="panel-body">
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from './components/Banner.vue'
export default {
  name: "App",
  components: {Banner},
  mounted() {
      console.log(this);
      const b = 250
      b=520
  },
};
/* if (true) {
    let message = "hi";
    console.log('1',message); // hi
    }
    console.log(message); */
</script>

