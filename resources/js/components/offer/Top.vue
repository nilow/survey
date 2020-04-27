<template>
    <div class="container-fluid p-3">
        <div class="row justify-content-between align-items-center">
			<div class="col-8"></div>
			<div class="col-4">
				<div class="d-flex justify-content-end" v-if="stage !== 'intro'">
					<div class="user-info">
						<div @click="showPopupUser()" class="info-wrapper">
							<img :src="(questions[currentQuestion].dark && stage == 'question') || stage == 'results' || stage == 'summary' ? '/img/iconmonstr-user-6-48.png':'/img/iconmonstr-user-white-6-48.png'" class="user-icon" />
						</div>
						<div class="user-info__preview" v-if="getPopupUser" @click="logoutUser">
							Wyloguj i zakończ
						</div>
					</div>
					<div class="basket-info">
						<div @click="enablePopupCart ? showPopupCart() : null" class="info-wrapper">
							<img :src="(questions[currentQuestion].dark && stage == 'question') || stage == 'results' || stage == 'summary' ? '/img/iconmonstr-shopping-cart-8-48.png':'/img/iconmonstr-shopping-cart-white-8-48.png'" class="basket-icon" />
							<span :class="[stage == 'question' && !questions[currentQuestion].dark ? 'white' :'', 'basket-count']">{{basket_count}}</span>
						</div>
						<div class="basket-info__preview" v-if="getPopupCart">
							<div v-if="!hasProducts()" class="text-center">Koszyk jest pusty</div>
							<div class="row align-items-center" v-for="product in basket_items" :key="product.id">
								<div class="col-6 py-1"><img :src="product.webformatURL" class="img-fluid"></div>
								<div class="col-6 text-left small">{{product.title}}</div>
							</div>

							<div v-if="hasProducts()" class="text-center mt-4"><button class="btn cart-remove" @click="goToCart">Przejdź do koszyka</button></div>
						</div>
					</div>
				</div>
			</div>
	    </div>
    </div>
</template>

<script>
export default {
name: 'Top',
	props: {
		enablePopupCart: {
			type: Boolean,
			default: true
		}
  	},
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
		getPopupCart () {
			return this.$store.getters['cart/get_popupCart']
		},
		questions () {
			return this.$store.getters['survey/get_questions']
        },
        currentQuestion () {
			return this.$store.getters['survey/get_currentQuestion']
        },
		stage () {
			return this.$store.getters['survey/get_stage']
		},
		getPopupUser () {
			return this.$store.getters['user/get_popupUser']
		},
	},
	methods: {
		showPopupCart() {
			this.$store.dispatch('cart/showOrHiddenPopupCart');
		},
		hasProducts() {
			return this.$store.getters['cart/get_productsInCart'].length > 0;
		},
		goToCart() {
			this.showPopupCart();
			this.$router.push({ name: 'cart' });
		},
		logoutUser() {
			this.$store.dispatch('user/logoutUser');
			this.$router.push({ name: 'login' });
		},
		showPopupUser() {
			this.$store.dispatch('user/showOrHiddenPopupUser');
		},
	}
}
</script>