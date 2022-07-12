<template>
  <div class="category">
      <h1>当前求和为:{{sum}}</h1><br>
      <select v-model.number="a">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
      </select>
      <button @click="increment">+</button>     
      <button @click="decrement">-</button>     
      <button @click="incrementOdd">当前和为奇数再加</button>     
      <button @click="incrementWaite">等一等再加</button>     
  </div>
</template>

<script>
export default {
    name:"Count",
    data() {
        return {
            sum:0, //当前的和
            a:1 //用户选择的数字
        }
    },
    methods: {
        increment(){
            this.sum+=this.a
        },
        decrement(){
            this.sum-=this.a
        },
        incrementOdd(){
            if(this.sum%2){
                this.sum+=this.a
            }
        },
        incrementWaite(){
            setTimeout(() => {
                this.sum+=this.a
            }, 500);
        },
    },
}
</script>

<style>
    .category{
        background-color: skyblue;
        height: 300px;
    }

    h3{
        text-align: center;
        background-color: orange;
    }
    button{
        margin-left: 5px;
    }
</style>