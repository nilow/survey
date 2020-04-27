<template>
    <div class="container-fluid p-3">
        <div v-if="stage == 'intro'" class="d-flex justify-content-end">
            <button class="btn btn-info btn-survey" @click="showQuestions">Przejdź do ankiety</button>
        </div>
        <div v-else-if="stage == 'question'" :class="[currentQuestion == 0 ? 'justify-content-end' : 'justify-content-between', 'd-flex']">
            <button v-if="currentQuestion > 0" class="btn btn-info btn-survey" @click="prevQuestion">Poprzednie</button>
            <button v-if="currentQuestion < (questions.length -1)" class="btn btn-info btn-survey" @click="nextQuestion" :disabled="disabled">Następne</button>
            <button v-if="currentQuestion == (questions.length -1)" class="btn btn-info btn-survey" @click="showResults" :disabled="disabled">Zobacz ofertę</button>
        </div>
        <div v-else class="d-flex justify-content-end">
            <button class="btn btn-info btn-survey">Podsumowanie</button>
        </div>
    </div>
</template>

<script>
export default {
   computed: {
        stage () {
			return this.$store.getters['survey/get_stage']
        },
        disabled () {
			return this.$store.getters['survey/get_disabledNext']
        },
        questions () {
			return this.$store.getters['survey/get_questions']
        },
        currentQuestion () {
			return this.$store.getters['survey/get_currentQuestion']
        },
        answers () {
			return this.$store.getters['survey/get_answers']
		},
   },
  methods: {
	showQuestions() {
        this.$store.dispatch('survey/showQuestions');
    },
    showResults() {
        this.$router.push('offer');
	},
    nextQuestion() {
        //this.$root.$emit('carouselStart');
        this.$store.dispatch('survey/nextQuestion');
        this.$store.dispatch('survey/setCurrentAnswer', this.answers[this.currentQuestion]);
        if(this.currentQuestion <= this.answers.length - 1) {
           this.$store.dispatch('survey/setDisabledNext', false);
        } else {
           this.$store.dispatch('survey/setDisabledNext', true);
        }
	},
    prevQuestion() {
        //this.$root.$emit('carouselStart');
        this.$store.dispatch('survey/prevQuestion');
        this.$store.dispatch('survey/setCurrentAnswer', this.answers[this.currentQuestion]);
        this.$store.dispatch('survey/setDisabledNext', false);
	},
  }
}
</script>