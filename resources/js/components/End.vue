<template>
	<div class="end">
		<div class="container text-center">
            <h1>Dziękujemy za udział w ankiecie</h1>
            <img src="img/logo.png" alt="Logo" />
        </div>
	</div>
</template>

<script>
  export default {
    mounted() {
        this.$store.dispatch('survey/showEnd');
    }
}
</script>