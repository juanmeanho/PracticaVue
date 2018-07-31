Vue.component('alerta', {
	props: ['tipo', 'posicion'],
	template: `
			<section class="alerta" :class="[tipo, posicion]">
				<header class="alerta__header">
					<a href="#" @click="ocultarWidget">Cerrar</a>
					<slot name="header">
						hola
					</slot>
				</header>
				<div class="alerta__contenido">
					<slot>
						Lorem Ipsum dolor
					</slot>
					
				</div>
				<footer class="alerta__footer">
					<slot name="footer">
						Este es el footer
					</slot>
					
				</footer>
			</section>`,
	methods: {
		ocultarWidget(){
			this.$emit('ocultar'); //evento custom como @click
		}

	}		
	
});

new Vue({
	el: 'main',
	data:{
		mostrarExito: false,
		mostrarError: false,
		mostrarAdvertencia: false
	}

});

