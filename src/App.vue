<template>
  <NavBar />
  <router-view />
</template>

<script>
//import BienvenidaPage from './pages/BienvenidaPage.vue';
//import EstudianteInsertar from './pages/EstudianteInsertar.vue'

import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    //BienvenidaPage,
    NavBar
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
</style>
