<template>
  <div>
      <h1>人员列表</h1>
      <input type="text" placeholder="请输入名字" v-model="name" @keyup.enter="addPerson">
      <button @click="addPerson">添加</button>
      <button @click="addPersonWang">添加一个姓王的人</button>
      <h3>人员列表第一个人的名字是:{{firstPersonName}}</h3>
      <h3>Count组件的和是:{{sum}}</h3>
      <ul>
          <li v-for="p in peopleList" :key="p.id">{{p.name}}</li>
      </ul>
      <h3>今日真言:{{todayMessage}}</h3>
      <button @click="changeTodayMessage">切换真言</button>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
import { mapActions, mapState ,mapGetters} from 'vuex'
export default {
    name:'People',
    methods: {
        addPerson(){
            const personObj={id:nanoid(),name:this.name}
            this.$store.commit('personAbout/ADD_PERSON',personObj)
            this.name=''
        },
        addPersonWang(){
            const personObj={id:nanoid(),name:this.name}
            this.$store.dispatch('personAbout/addPersonWang',personObj)
            this.name=''
        },
        changeTodayMessage(){
            this.$store.dispatch('personAbout/addMessageServer')
        }
    },
    computed:{
        ...mapState('personAbout',{peopleList:'peopleList',todayMessage:'todayMessage'}),
        ...mapState('countAbout',{sum:'sum'}),
        firstPersonName(){
            return this.$store.getters['personAbout/firstPersonName']
        }
    },
    data() {
        return {
            name:'',
        }
    },
    mounted() {
        this.changeTodayMessage()
    },
}
</script>

<style>

</style>