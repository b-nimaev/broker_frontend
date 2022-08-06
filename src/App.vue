<template>
  <header></header>
  <router-view/>
</template>

<style>
* {
  outline: none;
  transition: 300ms;
}

body {
  background-image: linear-gradient(212deg, #4bffe6, #ff9f9f)
}

#app {
  padding: 100px 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
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
