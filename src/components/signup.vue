<template>
    <div class="container-signup">
       <h3> Sign up </h3>
       <input type="text" placeholder="Your Nick"><br>
       <input type="text" placeholder="Password"><br>
       <input type="text" placeholder="E-mail"><br>
       <input type="button" value="submit">
    </div>
</template>

<script>
    export default {
        name:'Signup-page'
    }
</script>

<style scoped>
.container-signup {
    float: left;
    border-top: 1px solid black;
    text-transform: lowercase;
    height: 500px;
    width: 800px;
}
input {
    margin: 10px;
}
</style>