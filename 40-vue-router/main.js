//quien vive en cada ruta
const home = Vue.component('Home', {
	template: '<h2>Portada</h2>'
});

const contacto = Vue.component('Contacto', {
	template: '<h2>Contacto</h2>'
});

//Plano de destinso con las rutas

const routes = [
	{path: '/', component: home},
	{path: '/contacto', component: contacto},
];

//instanciar el componente enrutador

const router = new VueRouter({
	routes, //routes: routes ES6
});

new Vue({
	router, //router: router ES6
    el:'main',
});
