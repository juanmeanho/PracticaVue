<template>
  <h1>Hola me llamo {{ nombre }} {{ apellidos }} y soy {{ profesion }}</h1>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {mapState} from 'vuex';

export default {
  name: 'app',

  /*computed: { //Sin mapState
    nombre(){
      return this.$store.state.nombre;
    }
  }*/

 /* computed: mapState({
    nombre: function(state){
      return state.nombre;
    }
  })*/

//igual a la anterio con ES6

 /* computed: mapState({
    nombre: (state) => state.nombre,
    apellido: (state) => state.apellido
  })*/

  //pasar una matriz TODO

  computed: mapState(['nombre', 'apellidos','profesion'])


}
</script>

<style>

</style>
