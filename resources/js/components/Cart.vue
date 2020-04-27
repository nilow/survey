<template>
	<div class="offercart">
		<Top :enablePopupCart="false"></Top>
		<div class="container offercart-container">
		<h2>Koszyk <span v-if="!hasProducts()">jest pusty</span></h2>

		<div v-if="hasProducts()">
			<div class="row align-items-center d-none d-sm-flex">
				<div class="col-sm-2 py-2">Produkt</div>
				<div class="col-sm-8 py-2">&nbsp;</div>
				<div class="col-sm-2 py-2">&nbsp;</div>
			</div>
			<div class="row align-items-center" v-for="(product, index) in basket_items" :key="product.id">
				<div class="col-6 col-sm-2 py-2"><img :src="product.webformatURL" @click="setCurrent(product)" class="img-fluid" /></div>
				<div class="col-6 col-sm-8 py-2">{{product.title}}</div>
				<div class="col-sm-2 py-2"><button @click="removeFromCart(index, product.id, product.quantity)" class="btn cart-remove">x Usuń z koszyka</button></div>
			</div>
		</div>
		</div>
		<Bottom :showbackProducts="true" :showgoSummary="true"></Bottom>
	</div>
</template>

<script>
import Top from '@/js/components/offer/Top.vue';
import Bottom from '@/js/components/offer/Bottom.vue';
  export default {
	name: 'Cart',
	computed: {
		basket_count () {
			return this.$store.getters['cart/get_productsInCart'].length
		},
		basket_total () {
			return this.$store.getters['cart/get_cartTotalPrice']
		},
		basket_items () {
			return this.$store.getters['cart/get_productsInCart']
		},
	},
	methods: {
		removeFromCart(index, id, quantity) {
			this.$store.dispatch('cart/removeProduct', {index: index, id: id, quantity: quantity});
		},
		hasProducts() {
			return this.$store.getters['cart/get_productsInCart'].length > 0;
		},
		quantityIncrement (id) {
			this.$store.dispatch('cart/incrementProduct', {id: id});
		},
		quantityDecrement (id) {
			this.$store.dispatch('cart/decrementProduct', {id: id});
		},
		setCurrent(product) {
			this.$store.dispatch('products/currentProduct', product);
            this.$router.push({ name: 'productdetails', params: { id: product.id }  });
		},
	},
	components: {
        Top,
        Bottom
	},
  }
</script>