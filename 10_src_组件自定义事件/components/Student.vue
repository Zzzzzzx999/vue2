<template>
  <div class="student">
      <h2>学生姓名：{{name}}</h2>
      <h2>学生性别：{{sex}}</h2>
      <h2>学生年龄：{{age}}</h2>
      <button @click="sendStudentname">点我发送学生名到app</button>
      <button @click="unbind">解绑atguigu事件</button>
      <button @click="addage">点我年龄+1</button>
      <button @click="death">销毁当前student组件的实例</button>
  </div>
</template>

<script>
    export default {
        name:'Student',
        data() {
            return {
                name:"张三",
                sex:"男",
                age:22
            }
        },
        methods: {
            sendStudentname(){
                //触发Student组件实例身上的atguigu事件
                this.$emit('atguigu',this.name,666,888,999)
                // this.$emit('demo',this.name)
            },
            unbind(){
                this.$off('atguigu') //解绑一个自定义事件
                // this.$off(['atguigu','demo']) //解绑多个自定义事件
                // this.$off() //解绑所有的自定义事件
            },
            addage(){
                console.log('年龄已经+1了');
                this.age++
            },
            death(){
                this.$destroy() //销毁了当前Student组件的实例,销毁后所有Student实例的自定义组件全都不奏效。
            }
        },
        
    }
</script>

    // css会汇总名字一样容易打架,使用scoped(作用域)
<style scoped>
    .student{
        background-color: aquamarine;
        padding: 5px;
    }
</style>