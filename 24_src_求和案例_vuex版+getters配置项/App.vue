<template>
    <div class="container">
        <Count></Count>
    </div>
</template>

<script>
    import Count from './components/Count'
    export default {
        name:'App',
        components:{Count},
        mounted() {
            console.log('App',this)
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