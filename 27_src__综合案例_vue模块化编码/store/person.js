import axios from "axios"
export default{
    namespaced:true,
    actions:{
        addPersonWang(context,value){
            if (value.name.indexOf('王')===0) {
                context.commit('ADD_PERSON',value)               
            }else{
                alert('添加的人必须姓王!')
            }
        },
        addMessageServer(context){
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response=>{
                    context.commit('ADD_MESSAGE',response.data)
                },
                error=>{
                    alert(error.message)
                }
            )
        },
    },
    mutations:{
        ADD_PERSON(state,value){
            state.peopleList.unshift(value)
        },
        ADD_MESSAGE(state,value){
            state.todayMessage=value
        }
    },
    state:{
        peopleList:[{id:'001',name:'张三'}],
        todayMessage:'',
    },
    getters:{
        firstPersonName(state){
            return state.peopleList[0].name
        }
    },
}
