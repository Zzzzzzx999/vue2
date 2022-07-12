<template>
  <div>
      <h1>人员列表</h1>
      <input type="text" placeholder="请输入名字" v-model="name" @keyup.enter="addPerson">
      <button @click="addPerson">添加</button>
      <h3>Count组件的和是:{{sum}}</h3>
      <ul>
          <li v-for="p in peopleList" :key="p.id">{{p.name}}</li>
      </ul>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
import { mapState } from 'vuex'
export default {
    name:'People',
    methods: {
        addPerson(){
            const personObj={id:nanoid(),name:this.name}
            this.$store.commit('ADD_PERSON',personObj)
            this.name=''
        }
    },
    computed:{
        ...mapState({peopleList:'peopleList',sum:'sum'})
    },
    data() {
        return {
            name:'',
        }
    },
}
</script>

<style>

</style>