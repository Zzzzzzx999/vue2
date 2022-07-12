//该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router"

//引入需要用的组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import Message from '../pages/Message.vue'
import News from '../pages/News.vue'
import Detail from '../pages/Detail.vue'
//创建并暴露一个路由器
const router = new VueRouter({
    routes:[
        {
            name:'guanyu',
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'news',
                    component:News,
                    meta:{isAuth:true,title:'新闻'}
                },
                {
                    name:'xinxi',
                    path:'message',
                    component:Message,
                    meta:{isAuth:true,title:'消息'},
                    children:[
                        {
                            name:'xiangqing',
                            path:'detail',
                            component:Detail,
                            //props的第一种写法,值为对象,该对象中所有的key—value都会以props的形式传给Detail组件
                            // props:{a:1,b:'hello'}
                            //props的第二种写法,值为布尔值,若布尔值为真,就会把该路由组件收到的所有params参数,以props的形式传给Detail组件
                            // props:true
                            //props的第三种形式,值为函数
                            props($route){
                                return{
                                    id:$route.query.id,
                                    title:$route.query.title
                                }
                            }
                        }
                    ]
                },
            ]
        }
    ]
})

//全局前置路由守卫————初始化的时候被调用、每次路由切换之前被调用
router.beforeEach((to,from,next)=>{//可以选择判断path或name
    console.log('前置路由守卫',to,from);

    //  if(to.meta.isAuth)
    if(to.path==='/home/news' || to.name==='xinxi'){
        if (localStorage.getItem('school')==='厦门工学院') {
            next()            
        }else{
            alert('您权限不足,无法查看！(提示:本地学校名称不对)')
        }
    }else{
        next()
    }
})

//全局后置路由守卫————初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to,from)=>{
    console.log('后置路由守卫',to,from);
    document.title=to.meta.title||'硅谷系统'
})

export default router