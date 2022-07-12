<template>
    <div class="container">
        <Category title="美食">
            <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
            <div class="footer" slot="footer">
                <a href="https://www.baidu.com">更多美食</a>
            </div>
            
        </Category>
        <Category title="游戏">
            <ul slot="center">
                <li v-for="(g,index) in games" :key="index">{{g}}</li>
            </ul>
            <div class="footer" slot="footer">
                <a href="https://www.baidu.com">单击游戏</a>
                <a href="https://www.baidu.com">网路游戏</a>
            </div>
        </Category>
        <Category title="电影">
            <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
            <template v-slot:footer>
                <div class="footer">
                    <a href="https://www.baidu.com">经典</a>
                    <a href="https://www.baidu.com">热门</a>
                    <a href="https://www.baidu.com">推荐</a>
                </div>
                <h4>欢迎前来观影</h4>
            </template>
            
        </Category>
    </div>
</template>

<script>
    import Category from './components/Category'
    export default {
        name:'App',
        components:{Category},
        data() {
            return {
                foods:['火锅','烧烤','小龙虾','牛排'],
                games:['红色警戒','穿越火线','QQ飞车','英雄联盟'],
                films:['《教父》','《拆弹专家》','《当幸福来敲门》','《肖申克的救赎》'],
            }
        },
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