<template>
  <div class="category">
      <h1>当前求和为:{{sum}}</h1><br>
      <h3>当前求和放大十倍为:{{bigSum}}</h3>
      <h3>我在{{school}}学习{{subject}}</h3>
      <h3>People组件的总人数是:{{peopleList.length}}</h3>
      <select v-model.number="n">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
      </select>
      <button @click="increment(n)">+</button> 
      <button @click="decrement(n)">-</button> 
      <button @click="incrementOdd(n)">当前和为奇数再加</button>
      <button @click="incrementWait(n)">等一等再加</button>     
  </div>
</template>

<script>
    import {mapActions, mapGetters,mapMutations,mapState} from 'vuex'
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
            ...mapState('countAbout',['sum','school','subject']), //对象写法
            ...mapState('personAbout',['peopleList']), //对象写法
            ...mapGetters('countAbout',['bigSum']),
        },
        methods: {
            /* increment(){
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
            }, */
            ...mapActions('countAbout',{incrementOdd:'incrementOdd',incrementWait:'incrementWait'}),
            ...mapMutations('countAbout',{increment:'INCREMENT',decrement:'DECREMENT'})
        },
        mounted() {
            console.log('Count',this)
        },
    }
</script>

<style scoped>
    .category{
        background-color: skyblue;
        height: 300px;
        width: 350px;
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