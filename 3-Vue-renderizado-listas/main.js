const vm = new Vue({
	el: 'main',
	data: {
		laborales: ['Lunes','Martes','Miércoles','Jueves','Viernes'],

		tareas: [ //una matriz
			{nombre: 'Hacer la compra', prioridad: 'baja'},
			{nombre: 'Aprender Vue y Firebase', prioridad: 'alta'},
			{nombre: 'Ir al Gimnasio', prioridad: 'alta'},
		],
		persona: { //un objeto
			nombre: 'Juan',
			profesion: 'dev',
			ciudad: 'Valencia'
		},
	},
});
