const vm = new Vue({
	el: 'main',
	data: {
		mensaje: "Hola Mundo",
		nuevaTarea: null,
		tareas: [{
			titulo: 'Aprender Vue.js',
			prioridad: true,
			antiguedad: 23
		},
		{
			titulo: 'Aprender ES6',
			prioridad: false,
			antiguedad: 135
		},
		{
			titulo: 'Publicar todos los dias',
			prioridad: true,
			antiguedad: 378
		}],

	},
	methods:{
		agregarTarea(){
			//this hace referencia a la instancia Vue
			this.tareas.unshift(this.nuevaTarea);
			this.nuevaTarea = null;
		}
	},
	computed:{
		mensajeAlReves(){
			return this.mensaje.split('').reverse().join('');
		},
		tareasConPrioridad(){
			/*return this.tareas.filter(function(tarea){
				return tarea.priroidad;
			});*/
			return this.tareas.filter((tarea) => tarea.prioridad);
		},
		tareasConAntiguedad(){
			return this.tareas.sort((a,b)=>b.antiguedad - a.antiguedad);
		}
	},
});
