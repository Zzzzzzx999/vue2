<template>
    <div class="container">
        <Category title="游戏">
            <template scope="atguigu">
                <ul slot="center">
                    <li v-for="(g,index) in atguigu.games" :key="index">{{g}}</li>
                </ul>        
            </template>
        </Category>
        <Category title="游戏">
            <template scope="{games}">
                <ol slot="center">
                    <li v-for="(g,index) in games" :key="index">{{g}}</li>
                </ol>        
            </template>
        </Category>
        <Category title="游戏">
            <template slot-scope="{games}">
                <h4 slot="center" v-for="(g,index) in games" :key="index">{{g}}</h4>        
            </template>
        </Category>
    </div>
</template>

<script>
    import Category from './components/Category'
    export default {
        name:'App',
        components:{Category},
    }
</script>

<style>
    .container,.footer{
        display: flex;
        justify-content: space-around;
    }

    video{
        width: 100%;
    }
    img{
        width: 100%;
    }
    h4{
        text-align: center;
    }
</style>