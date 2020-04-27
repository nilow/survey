<template>
	<div class="productoffer">
		<Top></Top>
		<div class="container-fluid stretched">
			<div class="row productoffer-row">
				<div class="col-md-3 p-0">
					<img :src="current_product.webformatURL" :alt="current_product.title" class="img-cover" />
				</div>
				<div class="col-md-9">
					<h2>{{current_product.title}}</h2>
					<div v-html="current_product.description"></div>
					<form class="text-center p-3">
						<button v-if="!checkifinbasket(current_product)" @click.prevent="addToBasket(current_product)" class="btn btn-info btn-survey">Dodaj do koszyka</button>
					</form>
				</div>
			</div>
		</div>
		<Bottom :showbackProducts="true" :showbackSurvey="false"></Bottom>
		<Modal :title = "modal_title" :show = "modal_show" :product_details="product_details" />
	</div>
</template>

<script>
import Top from '@/js/components/offer/Top.vue';
import Bottom from '@/js/components/offer/Bottom.vue';
import Modal from '@/js/components/modal/Modal.vue';
export default {
	name: 'Productoffer',
	data: function () {
		return {
			quantity: 1,
			product_details: true
		}
	},
	computed: {
		current_product () {
			return this.$store.getters['products/get_currentProduct']
		},
		modal_show () {
			return this.$store.getters['cart/get_modal']
			},
		modal_title () {
			return this.$store.getters['cart/get_lastAdded']
		},
		basket_items () {
			return this.$store.getters['cart/get_productsInCart']
		},
	},
	methods: {
		addToBasket(product) {
                this.$store.dispatch('cart/addProduct', {product: product, quantity: this.quantity});
		},
		quantityIncrement () {
			this.quantity++;
		},
		quantityDecrement () {
			if(this.quantity > 1){
				this.quantity--;
			}
		},
		checkifinbasket (product){
            return this.basket_items.find(item => item.id === product.id)
        },
		
	},
	 components: {
        Top,
        Bottom,
		Modal
	},
}
</script>