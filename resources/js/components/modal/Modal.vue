<template>
    <b-modal v-model="show" hide-footer hide-header centered no-close-on-backdrop title="Using Component Methods">
		<div class="d-block text-right">
			<b-button class="mt-3" variant="outline-info" @click="hideModal">X</b-button>
		</div>
		<div class="d-block text-center">
			<h3>Produkt<br />{{title}}<br />został dodany do koszyka</h3>
			<b-button class="mt-3 mb-3 btn btn-modal" variant="outline-info" @click="product_details ? hideModalRedirect() : hideModal()">Przejdź do produktów</b-button>
			<b-button class="mt-3 mb-3 btn btn-modal" variant="outline-info" @click="goToCart">Przejdź do koszyka</b-button>
		</div>
    </b-modal>
</template>

<script>
export default {
    props: {
		title: {
			type: String,
        },
        show: {
            type: Boolean
		},
		product_details: {
			type: Boolean,
			default: false
        }
	},
    methods: {
		hideModal() {
			this.$store.dispatch('cart/showOrHiddenModal');
        },
		hideModalRedirect() {
			this.$store.dispatch('cart/showOrHiddenModal');
			this.$router.push({ name: 'offer' });
        },
        goToCart() {
			this.$store.dispatch('cart/showOrHiddenModal');
			this.$router.push({ name: 'cart' });
		},
	},
}
</script>