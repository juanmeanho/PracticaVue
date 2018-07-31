<template>
  <div>
    <h2>Tareas por Hacer</h2>
    <ul>
      <li v-for="tarea in tareasPendientes" :key="tarea.nombre">
        <a href="#" @click="actualizarTarea(tarea)" v-text="tarea.nombre"></a>
      </li>
    </ul>
    <h2>Las tareas finalizadas</h2>
    <li v-for="tarea in tareasFinalizadas" :key="tarea.nombre">
        <a href="#" @click="actualizarTarea(tarea)" v-text="tarea.nombre"></a>
    </li>
  </div>
</template>

<script>
export default {
  data() {
      return {
        tareas: [
          {nombre: 'Aprender Vue.js', completado: false},
          {nombre: 'Grabar el modulo de Vuex', completado: false},
          {nombre: 'Responder Comentarios', completado: false},
          {nombre: 'Salir a correr para despejarme', completado: false},
          {nombre: 'Diseñar el modulo Firebase', completado: false},
          {nombre: 'Diseñar el Ejercicio Final', completado: false},          
        ],
        finalizadas:[]
      }
  },
  methods: {
      actualizarTarea(tarea) {
        tarea.completado = !tarea.completado;
      }
  },
  computed:{
    tareasPendientes(){
      return this.tareas.filter((tarea) => !tarea.completado);
    },
    tareasFinalizadas(){
      return this.tareas.filter((tarea) => tarea.completado);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

li a {
  color: red;
  font-weight: bold;
  text-decoration: none;
}

</style>
