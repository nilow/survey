import './bootstrap';
import Vue from 'vue';
import Routes from '@/js/routes.js';
import App from '@/js/views/App';
import Vuex from 'vuex';
import { store } from '@/js/store';
import VueCarousel from 'vue-carousel';
import VueCurrencyFilter from 'vue-currency-filter';
import { ModalPlugin } from 'bootstrap-vue';
import { FormPlugin,  FormGroupPlugin, FormInputPlugin, ButtonPlugin, AlertPlugin} from 'bootstrap-vue';
import Vuelidate from 'vuelidate';

Vue.use(ButtonPlugin)
Vue.use(FormGroupPlugin)
Vue.use(FormInputPlugin);
Vue.use(FormPlugin);
Vue.use(AlertPlugin);
Vue.use(ModalPlugin);
Vue.use(VueCarousel);
Vue.use(Vuex);
Vue.use(Vuelidate);
Vue.use(VueCurrencyFilter,
{
  symbol : 'PLN',
  thousandsSeparator: ' ',
  fractionCount: 2,
  fractionSeparator: ',',
  symbolPosition: 'back',
  symbolSpacing: true
});

const filter = function(text, length, clamp){
    clamp = clamp || '...';
    const node = document.createElement('div');
    node.innerHTML = text;
    const content = node.textContent;
    return content.length > length ? content.slice(0, length) + clamp : content;
};

Vue.filter('truncate', filter);

const app = new Vue({
    el: '#app',
	router: Routes,
	store,
	render: h => h(App),
	
});
export default app;