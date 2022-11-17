<template>
    <div class="container-login">
       <h3> Log In </h3>
       <input type="text" placeholder="Password"><br>
       <input type="text" placeholder="E-mail"><br>
       <input type="button" value="submit">
    </div>
</template>

<script>
    export default {
        name:'Login-page'
    }
</script>

<style scoped>
.container-login {
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