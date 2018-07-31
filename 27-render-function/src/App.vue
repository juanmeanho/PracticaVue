<template>
<div>
  <elemento tipo="section">Hola section</elemento>
  <elemento tipo="footer">Hola footer</elemento>
  <elemento tipo="header">Hola header</elemento>
  <elemento tipo="aside">Hola aside</elemento>
  <elemento tipo="nav">Hola nav</elemento>
</div>

</template>

<script>

import elemento from './components/elemento.vue'

export default {
    components: { elemento }
}
</script>

<style>

</style>