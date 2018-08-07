import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import {routes} from './routes';
import {store} from './store';
Vue.use(VueRouter);

Vue.config.productionTip = false

const router = new VueRouter({
	mode: 'history',
	routes
});

router.beforeEach((to, from, next) => {
		console.log('Acceso global a ruta');
		//next(store.state.auth);
		//next();
		console.log(to.meta);
		if(to.meta.privado)
			next(store.state.auth);
		else
			next();
});

new Vue({
	router,
	store,
  render: h => h(App)
}).$mount('#app')
