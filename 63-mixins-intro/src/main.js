import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  nombre: 'Instancia principal'
}).$mount('#app')
