<template>
	<div class="container-fluid login-container">
		<div class="row">
        <div class="col-md-6 login-img"></div>
        <div class="col-md-6 login-form">
          <div>
            <div>
              <img src="img/logo.png" alt="Logo" />
            </div>
            <div>
              <b-alert variant="danger" :show="errorinfo">Nieprawidłowe dane logowania</b-alert>
              <b-form @submit.prevent="onSubmit">
                <b-form-group>
                  <b-form-input
                    id="input-1"
                    type="email"
                    placeholder="Login"
                    v-model="email"
                  ></b-form-input>
                </b-form-group>
                <b-form-group>
                    <b-form-input
                      id="input-1"
                      type="password"
                      placeholder="Hasło"
                      v-model="password"
                    ></b-form-input>
                </b-form-group>
                <b-button block type="submit" variant="primary" :disabled="$v.$invalid">Zaloguj się</b-button>
              </b-form>
            </div>
          </div>
          <p class="text-center">test123@test.pl<br />test123</p>
        </div>
    </div>
	</div>
</template>

<script>
import { required, email} from 'vuelidate/lib/validators';
export default {
  data() {
      return {
        email: '',
        password: '',
        errorinfo: false
      }
  },
  validations: {
      email: {
        required,
        email
      },
      password: {
        required
      },
  },
  methods: {
      onSubmit() {
        let email = this.email ;
        let password = this.password;
        this.$store.dispatch('user/loginUser', { email, password })
        .then(() => this.$router.push('/survey'))
        .catch(
          err => {
            this.errorinfo = true;
          }
        );
      },
  }
}
</script>