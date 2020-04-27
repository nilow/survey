<template>
    <div class="summary">
        <h1>Produkty dla Ciebie</h1>
        <div class="row">
			<div class="col-md-4">
                <h2 class="summary-subheader">Oferta specjalna</h2>
                <div class="row">
				    <div class="col-md-12 py-2" v-for="product in products_best" :key="product.id">
                        <h3>{{product.title}}</h3>
                    </div>
                </div>
            </div>
            <div class="col-md-8">
                <h2 class="summary-subheader">Produkty, które mogą Cię zainteresować</h2>
                <div class="row">
				    <div class="col-md-6 py-2" v-for="product in products_new" :key="product.id">
                        <h3>{{product.title}}</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        products_best () {
			return this.$store.getters['products/get_productsBest']
		},
        products_new () {
			return this.$store.getters['products/get_productsNew']
		},
   }
}
</script>