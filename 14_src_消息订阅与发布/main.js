import Vue from 'vue' //引入vue
import App from './App.vue' //引入App

Vue.config.productionTip = false


new Vue({
    el:'#app',
    render:h=>h(App),
})