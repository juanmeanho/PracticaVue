<template>
  <section>
    <productos></productos>
    <carro></carro>
  </section>
</template>

<script>
import Productos from './components/Productos.vue'
import Carro from './components/Carro.vue'


export default {
  name: 'app',
  components: {
    Productos,
    Carro
  }
}
</script>

<style>

</style>
