<template>
    <div class="container">
        <Count></Count>
        <hr>
        <People></People>
    </div>
</template>

<script>
    import Count from './components/Count'
    import People from './components/People'
    export default {
        name:'App',
        components:{Count,People},
        mounted() {
            console.log('App',this)
        },
    }
    /* if (true) {
    let message = "hi";
    console.log('1',message); // hi
    }
    console.log(message); */
</script>

