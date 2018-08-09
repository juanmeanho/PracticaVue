//Mixin global

import Vue from 'vue';

Vue.mixin({
   created(){
       //console.info('Hola desde Mixin global');
       this.saludar(this.$options.nombre)
   },
   methods: {
       saludar(nombre){
           alert(`Hola desde ${ nombre }`);
       }
   }
});

//Mixin Local

export const mixin = {
    created() {
        console.log('Created desde el mixin');
        //this.saludar();

    },
    data(){
        return {
          aprender: [
            {nombre: 'Ionic 3'},
            {nombre: 'Node'},
            {nombre: 'MongoDB'},
            {nombre: 'Angular 3'},
            {nombre: 'Laravel'},
          ],
          nuevaTecnologia: null,
        }
      },
      methods:{
        agregarTecnlogia(){
          this.aprender.unshift({
            nombre: this.nuevaTecnologia
          });
          this.nuevaTecnologia = null;
        },
       /* saludar(){
            alert('Hola desde el mixin');
        }*/
    }   

}