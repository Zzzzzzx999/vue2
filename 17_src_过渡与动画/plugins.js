export default{
    install(Vue){
        //全局过滤器
        Vue.filter('mySlice',function(value){
            return value.slice(0,4)
        })

        //定义全局指令
        Vue.directive('fbind',{       //此处全局变量
            //指令与元素成功绑定时(一上来就绑定了)
            bind(element,binding){
                element.value=binding.value
            },
            //指令所在元素被插入时
            inserted(element){
                element.focus()
            },
            //指令所在的模板被重新解析时。
            update(element,binding){
                element.value=binding.value
            }                    
        })

        //定义混入
        Vue.mixin({
            data(){
                return{
                    x:666,
                    y:888
                }
            }
        })


    }
}