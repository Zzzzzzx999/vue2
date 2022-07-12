<template>
  <div class="category">
      <h1>当前求和为:{{sum}}</h1><br>
      <h3>当前求和放大十倍为:{{bigSum}}</h3>
      <h3>我在{{school}}学习{{subject}}</h3>
      <select v-model.number="n">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
      </select>
      <button @click="increment">+</button> 
      <button @click="decrement">-</button>     
      <button @click="incrementOdd">当前和为奇数再加</button>
      <button @click="incrementWait">等一等再加</button>     
  </div>
</template>

<script>
    import {mapGetters,mapState} from 'vuex'
    export default {
        name:"Count",
        data() {
            return {
                n:1 //用户选择的数字
            }
        },
        computed:{
            /* sum(){
                return this.$store.state.sum
            },
            school(){
                return this.$store.state.school
            },
            subject(){
                return this.$store.state.subject
            },
            bigSum(){
                return this.$store.getters.bigSum
            } */
            // ...mapState({sum:'sum',school:'school',subject:'subject'}), //对象写法
            // 借助mapState和mapGetters生成计算属性,从state或者getters中获取数据
            ...mapState(['sum','school','subject']), //对象写法
            ...mapGetters(['bigSum']),
        },
        methods: {
            increment(){
                this.$store.commit('INCREMENT',this.n)
            },
            decrement(){
                this.$store.commit('DECREMENT',this.n)
            },
            incrementOdd(){
                this.$store.dispatch('incrementOdd',this.n)
            },
            incrementWait(){
                this.$store.dispatch('incrementWait',this.n)
            },
        },
        mounted() {
            console.log('Count',this)
        },
    }
</script>

<style>
    .category{
        background-color: skyblue;
        height: 300px;
    }
    
    h1{
        text-align: center;
    }
    h3{
        text-align: center;
        background-color: orange;
    }
    button{
        margin-left: 5px;
    }
</style>