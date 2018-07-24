Vue.component('listado-productos', {
	props: ['productos'],
	template: `
			<section>
				<ul>
					<li v-for="producto in productos">
						{{ producto.nombre }} -
						<small>{{ producto.precio.toFixed(2) }}</small>
						<button @click="eliminarProducto(producto.precio)"</button>
						<button @click="anadirProducto(producto.precio)"</button>
					</li>
				</ul>
			</section>`,
	methods: {
		anadirProducto(){

		},
		eliminarProducto(){

		}
	}		
});

Vue.component('carrito-compra', {
	template: `
		<section>
			<h1> {{ total.toFixed(2) }} </h1>
			<h1> {{ cantidadProductos }} </h1>  
		</section>`,
	data(){
		return {
			cantidadProductos: 0,
			total: 0
		}
	}
});

new Vue({
	el: 'main',
	data:{
		productos: [
			{ nombre: 'Libro ES6', precio: 39 },
			{ nombre: 'Portatil', precio: 1300 },
			{ nombre: 'Cafe', precio: 2 },
			{ nombre: 'Auriculares', precio: 80 },
			{ nombre: 'Moleskine', precio: 19 },
		]
	}

});

