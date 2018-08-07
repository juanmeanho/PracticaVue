
<template>
    <section>
        <button @click="cambiar">Cambiar auth</button>
        <hr>
        <transition name="aparecer" appear>
            <router-view></router-view>
        </transition>
    </section>
</template>

<script>
    import {mapMutations} from 'vuex';
    export default {
        methods: mapMutations(['cambiar'])
    }

</script>

<style>
      /*transition*/

      .aparecer-enter{
        opacity: 0;
      }
      .aparecer-enter-active{
        transition: opacity 1s;
      }
      .aparecer-leave-to{
        opacity: 0;
      }
      .aparecer-leave-active{
        transition: opacity 1s;
      }

      /*Animation*/

      .bounce-enter-active {
         animation: bounce-in .5s;
      }
      .bounce-leave-active {
         animation: bounce-out .5s;
      }
      @keyframes bounce-in {
          0% {
            transform: scale(0);
          }
          50% {
            transform: scale(1.5);
          }
          100% {
            transform: scale(1);
          }
      }
      @keyframes bounce-out {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.5);
          }
          100% {
            transform: scale(0);
          }
      }
    </style>