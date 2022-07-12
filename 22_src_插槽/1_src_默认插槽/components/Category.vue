<template>
  <div class="category">
      <h3>{{title}}分类</h3>
      <slot>我是一些默认值,当组件没有传递具体结构时，我会出现</slot>
      <!-- <ul v-show="title!=='美食'">
          <li v-for="(item,index) in listData" :key="index">{{item}}</li>
      </ul> -->
      <!-- <img v-show="title==='美食'" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt=""> -->
      <!-- <video src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video> -->
  </div>
</template>

<script>
export default {
    name:"Category",
    props:['title']
}
</script>

<style>
    .category{
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }

    h3{
        text-align: center;
        background-color: orange;
    }
    
</style>