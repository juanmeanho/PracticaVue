//Vue.prototype.$http = axios;
//Si quisiera usar axios en vez de $http sin cabiar el codigo
new Vue({
	el: 'main',
	mounted(){
		this.cargarPersonas();
	},
	methods: {
		cargarPersonas(){
		/*	this.$http.get('https://randomuser.me/api/?results=500')
			.then((respuesta) => {
				//console.log(respuesta);
				this.personas = respuesta.body.results;
			});	*/

			axios.get('https://randomuser.me/api/?results=500')
			.then((respuesta) => {
				//console.log(respuesta);
				this.personas = respuesta.data.results;
			});		
		}
		
	},
	data: {
		personas: []
	}
	
});

