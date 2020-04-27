<template>
	<div class="offercart">
        <Top></Top>
		<div class="container offercart-container">
            <h2 class="text-center mb-5">Podsumowanie</h2>
            <h3 class="text-center mb-5">{{ email_sent ? 'Wiadomość z podsumowaniem ankiety została wysłana.' : 'Jeżeli chcesz otrzymać wiadomość z podsumowaniem ankiety, podaj adres email.' }}</h3>
            <div class="row" v-show="email_sent">
                <div class="col-md-6 offset-md-3 text-center">
                    <img src="/img/iconmonstr-check-mark-circle-thin-240.png" alt="ok" />
                </div>
            </div>
            <div class="row" v-show="!email_sent">
                <div class="col-md-6 offset-md-3">
                    <form @submit.prevent="onSubmit">
                        <div class="form-group">
                            <input type="email" class="form-control" placeholder="Adres email" v-model="email"/>
                        </div>
                        <div class="form-group mt-5">
                            <label class="agreement">
                                <input type="checkbox" v-model="agreement1">
                                <span class="checkmark"></span>Wyrażam zgodę na przetwarzanie moich danych osobowych w celach marketingowych, poprzez przesyłanie informacji handlowych za pomocą poczty elektronicznej, na podany adres e-mail. Wyrażam zgodę na przetwarzanie moich danych osobowych w celach marketingowych, poprzez przesyłanie informacji handlowych za pomocą poczty elektronicznej, na podany adres e-mail.
                            </label>
                        </div>
                        <div class="form-group">
                            <label class="agreement">
                                <input type="checkbox" v-model="agreement2">
                                <span class="checkmark"></span>Wyrażam zgodę na przetwarzanie moich danych osobowych w celu przesyłania na mój adres e-mail newslettera. Wyrażam zgodę na przetwarzanie moich danych osobowych w celu przesyłania na mój adres e-mail newslettera.
                            </label>
                        </div>

                        <div class="form-group text-center mt-5">
                            <button type="submit" class="btn btn-info btn-survey btn-survey-summary" :disabled="$v.$invalid">Wyślij podsumowanie</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <Bottom :showbackProducts="true" :showgoEnd="true"></Bottom>
	</div>
</template>

<script>
import Top from '@/js/components/offer/Top.vue';
import Bottom from '@/js/components/offer/Bottom.vue';
import { required,email} from 'vuelidate/lib/validators';
export default {
    name: 'Summary',
    data() {
      return {
        email: '',
        password: '',
        agreement1: false,
        agreement2: false,
        errorinfo: false
      }
    },

    validations: {
      email: {
        required,
        email
      },
      agreement1: {
          checked: value => value === true
      },
      agreement2: {
          checked: value => value === true
      },
    },

    mounted() {
        this.$store.dispatch('survey/showSummary');
    },

    methods: {
        onSubmit() {
            this.$store.dispatch('survey/sendSummary',{cartItems: this.basket_items, sendTo: this.email});
		},
	},
    computed: {
        basket_items () {
			return this.$store.getters['cart/get_productsInCart']
        },
        email_sent () {
			return this.$store.getters['survey/get_emailSent']
		},
    },
    components: {
        Top,
        Bottom
	},
}
</script>