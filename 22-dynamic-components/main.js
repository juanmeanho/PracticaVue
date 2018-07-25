Vue.component('lista-tareas', {
	template: `
			 <div>
				<ul>
					<tarea v-for="tarea in tareas" :tarea="tarea"></tarea>
				</ul>
				<hr>
			 </div>
			  `,
	data(){
		return {
			tareas:[
				'Finalizar seccion componentes',
				'Iniciar workflow con vue cli y webpack',
				'Terminar de estudiar la documentacion de vuex',
				'seguir jugando con vue router',
				'Moleskine',
			]
		}
	}
});

Vue.component('tarea', {
	props: ['tarea'],
	template:`<li> {{ tarea }} </li>`
});

Vue.component('contacto', {
	template: `<div><a href="">juanmeano@gmail.com</a></div>`
});

Vue.component('bio', {
	template: `<div><p>Lorem ipsum dolor</p></div>`
});

new Vue({
	el: 'main',
	data: {
		seleccionado: 'lista-tareas'
	}
});



