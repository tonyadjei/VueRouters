<template>
  <div id="nav">
    <router-link :to="{ name: 'Home'}">Home</router-link> |
    <router-link :to="{ name: 'About'}">About</router-link>
    <router-link :to="{ name: 'Jobs'}">Jobs</router-link> <!--<router-link> tags are the special anchor tags whose behaviour allows Vue to intercept requests to the server and handle it by itself. -->
  </div>


  <button @click="redirect">Redirect</button>
  <button @click="back">Go back</button>
  <button @click="forward">Go forward</button>

  <router-view/> <!-- this is a special tag that renders a component inside the template of the root componenet(App.vue), allowing the componenet to be mounted-->
</template>

<script>
export default {
  methods: {
    //$router is used to move the current route or address of the web page, by invoking methods such as go() and push() on it. so $route is used to access the current route(and possible route parameters, $route.params.<nameOfRouteParameter>) and $router is used to move the route through the web history or by redirecting the route
    redirect(){
      this.$router.push({ name: 'Home' }) //pushes a new route onto the web history, and causes the user to be redirected to that route
    },
    back(){
      this.$router.go(-1) //the number decides how many steps you want to go back through the history, the signs, positive for going forward and negative for going back
    },
    forward(){
      this.$router.go(1)
    }
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

#nav a.router-link-exact-active {
  color: white;
  background: crimson;
}
button{
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
}
</style>
