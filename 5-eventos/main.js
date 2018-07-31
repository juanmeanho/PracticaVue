const vm = new Vue({
	el: 'main',
	data: {
		laborales: ['Lunes','Martes','Miércoles','Jueves','Viernes'],
		nuevaTarea: null,
		tareas: [ //una matriz
			'Aprender Vue.js',
			'Aprender ES6',
			'Publicar algo todos los días', 
		],

	},
	methods:{
		agregarTarea(){
			//this hace referencia a la instancia Vue
			this.tareas.unshift(this.nuevaTarea);
			this.nuevaTarea = null;
		}
	}
});
