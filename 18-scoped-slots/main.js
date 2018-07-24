Vue.component('mis-tareas', {
	props: ['listado'],
	template: '#mis-tareas-template',
	
});

new Vue({
	el: 'main',
	data:{
		tareas:[
           { titulo: 'Salir a Correr' },
           { titulo: 'Recoger la casa' },
           { titulo: 'Aprender Vue.js' },
           { titulo: 'Ir al Gym' },
           { titulo: 'Leer Cada Dia' },
		]
	}

});

