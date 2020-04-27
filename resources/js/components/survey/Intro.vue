<template>
    <div class="intro">
        <h1 class="header">{{title}}</h1>
        <div v-html="intro"></div>
    </div>
</template>

<script>
export default {
    computed: {
        title () {
            return this.$store.getters['survey/get_title']
        },
        intro () {
            return this.$store.getters['survey/get_intro']
        },
    }
}
</script>