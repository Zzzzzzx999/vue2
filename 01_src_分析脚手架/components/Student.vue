<template>
    <div class="demo">
        <h2>学生名称：{{Name}}</h2>
        <h2>学生年龄：{{age}}</h2>
    </div>
</template>
<script>
    export default({
        name:'Student',
        data() {
            return {
                Name:'周泽翔',
                age:22
            }
        },
    })
</script>
<style>

</style>