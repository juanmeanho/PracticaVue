Vue.component('candidato', {
	//props: ['nombre', 'correoe', 'imagen'],
	props: {
		nombre: {
			type: [String, Array], // null = *
			required: true
		},
		correoe: {
			type: String,
			default: 'juanmeanoc@gmail.com', //defecto
		},
		imagen: String,
		location: {
			type: Object,
			default(){
				return {
					ciudad: 'Valencia', //defecto
				}
			}
		}
	},
	template: '#candidato-template',
	
});

new Vue({
	el: 'main',
	mounted(){
		this.obtenerCandidato();
	},
	data:{
		candidatos:	[],
	},
	methods:{
		obtenerCandidato(){
			axios.get('https://randomuser.me/api/?results=100')
			.then((respuesta) => {
				this.candidatos = respuesta.data.results;
			});
		}
	}
});

