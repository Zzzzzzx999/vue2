<template>
  <div class="category">
      <h3>{{title}}分类</h3>
      <slot :games="games">我是一些默认值,当组件没有传递具体结构时，我会出现</slot>
  </div>
</template>

<script>
export default {
    name:"Category",
    props:['title'],
    data() {
        return {
            games:['红色警戒','穿越火线','QQ飞车','英雄联盟'],
        }
    },
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