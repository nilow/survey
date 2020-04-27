import Vue from 'vue';
import Vuex from 'vuex';
import cart from './modules/cart'
import products from './modules/products'
import survey from './modules/survey'
import user from './modules/user'

Vue.use(Vuex);

export const store = new Vuex.Store({
	modules: {
		cart,
		products,
		survey,
		user,
	}
})