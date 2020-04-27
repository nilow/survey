import Vue from 'vue';
import VueRouter from 'vue-router';
import Cart from '@/js/components/Cart';
import Productoffer from '@/js/components/Productoffer';
import Survey from '@/js/components/Survey';
import Offer from '@/js/components/Offer';
import Login from '@/js/components/Login';
import Summary from '@/js/components/Summary';
import End from '@/js/components/End';

Vue.use(VueRouter);


const router = new VueRouter({
	mode: 'history',
	routes: [
		{ path: '/', name: 'login', component: Login },
		{ path: '/survey', name: 'survey', component: Survey, meta:{requiresAuth: true} },
		{ path: '/offer', name: 'offer', component: Offer, meta:{requiresAuth: true} },
	  	{ path: '/cart', name: 'cart', component: Cart, meta:{requiresAuth: true} },
		{ path: '/product/:id', name: 'productdetails', component: Productoffer, meta:{requiresAuth: true} },
		{ path: '/summary', name: 'summary', component: Summary, meta:{requiresAuth: true} },
		{ path: '/end', name: 'end', component: End, meta:{requiresAuth: true} },
	]
});

router.beforeEach((to, from, next) => {
	if(to.meta.requiresAuth){
		const token = localStorage.getItem('token');
		const date = localStorage.getItem('expiration');
		if(token && date && (date.valueOf() > new Date().valueOf())){
			next();
		}
		else{
			next({path:'/'});
		}
	}
	else{
		next();
	}
})

export default router;