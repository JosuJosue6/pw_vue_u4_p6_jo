<template>
  <EstudianteInsertar />
</template>

<script>
import EstudianteActualizar from './pages/EstudianteActualizar.vue';
import EstudianteInsertar from './pages/EstudianteInsertar.vue'
import EstudianteEliminar from './pages/EstudianteEliminar.vue'

export default {
  name: 'App',
  components: {
    //EstudianteActualizar,
    EstudianteInsertar,
    //EstudianteEliminar
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
