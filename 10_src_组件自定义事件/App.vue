<template>
  <div class="app">
      <h1>{{msg}},{{studentName}}</h1>
      <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
      <School :getSchoolname="getSchoolname"></School>
      <hr>
      <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 (第一种写法，使用@或v-on)-->
      <Student @atguigu="getStudentname" @click.native="show"></Student>

      <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 (第二种写法，使用ref)-->
      <!-- <Student ref="student"></Student> -->

  </div>
</template>

<script>
    import School from './components/School.vue'
    import Student from './components/Student.vue'
    export default {
        name:'App',
        data() {    
            return {
                msg:'你好啊',
                studentName:'',
            }
        },
        methods: {
            getSchoolname(name){
                console.log('收到了学校的名字',name);
            },
            getStudentname(name,...params){
                console.log('收到了学生的名字',name,params);
                this.studentName=name
            },
            show(){
                alert(123)
            }
        },
       /*  mounted() {
            this.$refs.student.$on('atguigu',this.getStudentname)
        }, */
        components:{School,Student},
    }
</script>

<style>
    .app{
        background-color: gray;
        margin-top: 5px;
    }
</style>