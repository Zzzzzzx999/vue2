// 该文件用于创建vuex中最为核心的store

//引入Vuex
import Vue from 'vue'
import Vuex from 'vuex'
//准备actions————用于相应组件中的动作
const actions={
    /* increment(context,value){
        // console.log('jia被调用了',context,value)
        context.commit('INCREMENT',value)
    },
    decrement(context,value){
        context.commit('DECREMENT',value)
    }, */
    incrementOdd(context,value){
        if(context.state.sum%2){
            context.commit('INCREMENTODD',value)
        }
    },
    incrementWait(context,value){
        setTimeout(() => {
            context.commit('INCREMENTWAIT',value)
        }, 500);
    }
}
//准备mutations————用于操作数据(state)
const mutations={
    INCREMENT(state,value){
        // console.log('JIA被调用了',state,value);
        state.sum+=value
    },
    DECREMENT(state,value){
        state.sum-=value
    },
    INCREMENTODD(state,value){
        state.sum+=value
    },
    INCREMENTWAIT(state,value){
        state.sum+=value
    }
}
//准备state————用于存储数据
const state={
    sum:0, //当前的和
}

//准备getters————用于将state中的数据进行加工
const getters={
    bigSum(state){
        return state.sum*10
    }
}

Vue.use(Vuex)//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters,
})