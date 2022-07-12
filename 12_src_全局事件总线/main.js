import Vue from 'vue' //引入vue
import App from './App.vue' //引入App

Vue.config.productionTip = false


new Vue({
    el:'#app',
    render:h=>h(App),
    beforeCreate(){
        Vue.prototype.$bus=this //安装全局事件总线
    }
})