<template>
  <div id="app">
    <div class="container">
        <p> Logo </p>
        <ul>
          <router-link to ="/">  <li> Home </li>  </router-link>
          <router-link to ="/about"> <li> About </li> </router-link>
          <router-link to ="/servicing"> <li> Servicing </li> </router-link>
          <router-link to ="/catalog"> <li> Catalog </li> </router-link>
          <router-link to ="/contact"> <li> Contact us </li> </router-link>
          <router-link to ="/login"> <li> Log in </li> </router-link>
          <router-link to ="/signup"> <li> Sign up </li> </router-link>
        </ul>
        <router-view> </router-view>
    </div>
  </div>
</template>

<script>
//import  from './components/.vue'

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  float: left;
  margin-left: 420px
}
.container li {
  float: left;
  padding: 6px 12px;
  color: rgb(36, 33, 33);
  font-size: 14px;
  text-transform: uppercase;
  text-shadow: 1px 1px white;
  text-decoration: none;
  list-style: none;
}
.container li:hover {
  background-color: rgb(156, 158, 158);
  color: white;
  text-shadow:none;
}
.container ul {
  margin-left: 80px;
}
.container p {
  float: left;
  color: rgb(105, 101, 101);
  text-transform: uppercase;
  font-size: 14px;
  padding: 8px 12px;
}
.container input:hover {
  background-color: white;
}
a {
  text-decoration: none;
  list-style: none;
}
.container li:active {
  background-color: rgb(124, 14, 14);
}
</style>
