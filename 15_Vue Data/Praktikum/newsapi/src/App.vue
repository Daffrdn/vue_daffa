<template>
  <div id="app">
    <DefaultLayout/>
  <router-view/>
  </div>
</template>

<script>
import DefaultLayout from '../src/layout/DefaultLayout'

export default {
  name: 'App',
  component: {
    DefaultLayout,
  },
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

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
