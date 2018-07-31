new Vue({
	el: 'main',
	mounted(){
		this.cargarPersonas();
	},
	methods: {
		cargarPersonas(){
			this.$http.get('https://randomuser.me/api/?results=500')
			.then((respuesta) => {
				//console.log(respuesta);
				this.personas = respuesta.body.results;
			});		
		}
		
	},
	data: {
		personas: []
	}
	
});

