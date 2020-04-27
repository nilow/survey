<template>
	<div class="offer">
        <Top></Top>
		<div class="container-fluid">
            <h1>Produkty dla Ciebie</h1>
            <div class="row">
                <div class="col-md-6">
                    <div class="offer-special">
                        <h2 class="offer-subheader p-4">Oferta specjalna</h2>
                        <carousel
                        ref="carousel1"
                        :per-page="1"
				        :per-page-custom="[[600, 2], [768, 1], [1200, 2], [1600, 3]]"
				        :loop="true"
				        :speed="1000"
                        :pagination-color="'#8899aa'"
                        :pagination-active-color="'#445566'"
                        :pagination-size="16"
			            >
                            <slide v-for="product in slides_special" :key="product.id">
                                <div class="offer-box-wrap px-4 py-2">
                                    <div class="offer-box">
                                        <div class="offer-box-img" :style="{backgroundImage: 'url(' + product.webformatURL + ')'}" @click="setCurrent(product)"></div>
                                        <div class="offer-box-title-wrap">
                                            <h3 class="offer-box-title">{{product.title}}</h3>
                                        </div>
                                        <div>
                                            <button v-if="!checkifinbasket(product)" class="btn addtobasket" @click="addToBasket(product)">Dodaj do koszyka</button>
						                    <button disabled="true" v-else class="btn addtobasket">Produkt wybrany</button>
                                        </div>
                                    </div>
                                </div>
                            </slide>
                        </carousel>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="offer-interesting">
                        <h2 class="offer-subheader p-4">Produkty, które mogą Cię zainteresować</h2>
                        <carousel
                        ref="carousel2"
                        :per-page="1"
                        :per-page-custom="[[600, 2], [768, 1], [1200, 2], [1600, 3]]"
				        :loop="true"
				        :speed="1000"
                        :pagination-color="'#8899aa'"
                        :pagination-active-color="'#445566'"
                        :pagination-size="16"
			            >
                            <slide v-for="product in slides_proposed" :key="product.id">
                                    <div class="offer-box-wrap py-2 px-4">
                                        <div class="offer-box">
                                            <div class="offer-box-img" :style="{ backgroundImage: 'url(' + product.webformatURL + ')'}" @click="setCurrent(product)"></div>
                                            <div class="offer-box-title-wrap">
                                                <h3 class="offer-box-title">{{product.title}}</h3>
                                            </div>
                                            <div>
                                                <button v-if="!checkifinbasket(product)" class="btn addtobasket" @click="addToBasket(product)">Dodaj do koszyka</button>
						                        <button disabled="true" v-else class="btn addtobasket">Produkt wybrany</button>
                                            </div>
                                        </div>
                                    </div>
                            </slide>
                         </carousel>
                    </div>
                </div>
            </div>
        </div>
        <Bottom :showbackSurvey="true" :showgoSummary="true"></Bottom>
        <Modal :title = "modal_title" :show = "modal_show" />
	</div>
</template>

<script>
import Top from '@/js/components/offer/Top.vue';
import Bottom from '@/js/components/offer/Bottom.vue';
import Modal from '@/js/components/modal/Modal.vue';

export default {
    name: 'Offer',
    mounted() {
        this.$store.dispatch('survey/showResults');
        this.$store.dispatch('products/loadAnswersProducts', this.answers);
        this.$root.$on('carouselStartOffer', () => {
        this.$refs.carousel1.currentPage = 0;
        this.$refs.carousel1.goToPage(0);
        this.$refs.carousel2.currentPage = 0;
        this.$refs.carousel2.goToPage(0);
        });
    },
    methods: {
		addToBasket(product) {
            this.$store.dispatch('cart/addProduct', {product: product, quantity: 1});
		},
		setCurrent(product) {
			this.$store.dispatch('products/currentProduct', product);
            this.$router.push({ name: 'productdetails', params: { id: product.id }  });
        },
        checkifinbasket (product){
            return this.basket_items.find(item => item.id === product.id)
        },
	},
    computed: {
        answers () {
			return this.$store.getters['survey/get_answers']
        },
        basket_items () {
			return this.$store.getters['cart/get_productsInCart']
		},
        products_special () {
			return this.$store.getters['products/get_productsSpecial']
		},
        products_proposed () {
			return this.$store.getters['products/get_productsProposed']
		},
        slides_special () {
            const allSpecial = this.products_special;
            return allSpecial;
        },
        slides_proposed () {
            const allProposed = this.products_proposed;
            return allProposed;
        },
        modal_show () {
			return this.$store.getters['cart/get_modal']
		},
		modal_title () {
			return this.$store.getters['cart/get_lastAdded']
		}
    },
    components: {
        Top,
        Bottom,
        Modal
	},
}
</script>