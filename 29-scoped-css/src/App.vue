<template>
  <div>
    <h1>Menú Principal</h1>
      <ul>
        <li><a href="">Enlace 1</a></li>
        <li><a href="">Enlace 2</a></li>
        <li><a href="">Enlace 3</a></li>
        <li><a href="">Enlace 4</a></li>
        <li><a href="">Enlace 5</a></li>
        <li><a href="">Enlace 6</a></li>
      </ul>
    <tareas></tareas>
  </div>
</template>


<script>
import Tareas from './components/Tareas.vue'

export default {
  //name: 'app',
  components: {
    Tareas
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
