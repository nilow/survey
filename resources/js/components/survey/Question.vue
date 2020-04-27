<template>
    <div>
        <h1 class="header" v-bind:class="{'dark': questions[currentQuestion].dark }">{{questions[currentQuestion].text}}</h1>
        <div>
            <div 
                v-for="(q, index) in questions"
                :key="q.id"
            >
                <carousel
                    :per-page="1"
                    :loop="true"
                    :speed="1000"
                    :pagination-color="'#bbccdd'"
                    :pagination-active-color="'#445566'"
                    :pagination-size="16"
                    v-if="currentQuestion == index"
                >
                        <slide v-for="slide in slides" :key="slide.id" >
                            <div class="d-flex justify-content-between flex-wrap align-items-center p-4">
                                <div class="answer" v-for="ans in slide" :key="ans.id">
                                    <div class="answer-content">
                                        <input type="radio" :id="'answer' + ans.id" v-model="answer" :value="ans.id" v-if="questions[currentQuestion].type=='radio'">
                                        <input type="checkbox" :id="'answer' + ans.id" v-model="answerm" :value="ans.id" v-else-if="questions[currentQuestion].type=='checkbox'">
                                        <label :for="'answer' + ans.id" v-bind:class="{ 'flat-top': ans.bgImage }">
                                            <div class="answer-image" v-if="ans.bgImage" :style="{ backgroundImage: 'url(' + ans.bgImage + ')'}"></div>
                                            <div class="answer-text">{{ans.name}}</div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </slide>
                </carousel>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        this.$root.$on('carouselStart', () => {
            console.log('carouselstartxxx');
        });
    },
    computed: {
        questions () {
			return this.$store.getters['survey/get_questions']
        },
        perPage () {
			return this.$store.getters['survey/get_perPage']
        },
        currentQuestion () {
			return this.$store.getters['survey/get_currentQuestion']
        },
        slides () {
            const allAnswers = this.questions[this.currentQuestion].answers;
            let slides = [];
            for (let i = 0; i < allAnswers.length; i += this.perPage) {
                slides.push(allAnswers.slice(i, i + this.perPage));
            }
            return slides;
        },
        answer:{
            get() { return this.$store.getters['survey/get_currentAnswer']},
            set(value) {
                this.$store.dispatch('survey/setCurrentAnswer', value);
                this.$store.dispatch('survey/setAnswers', value);
                this.$store.dispatch('survey/setDisabledNext', false);
                },
        },
        answerm:{
            get() { return this.$store.getters['survey/get_currentAnswerMulti']},
            set(value) {
                this.$store.dispatch('survey/setCurrentAnswerMulti', value);
                this.$store.dispatch('survey/setAnswers', value);
                this.$store.dispatch('survey/setDisabledNext', false);
                    if(value.length > 0) {
                        this.$store.dispatch('survey/setDisabledNext', false);
                    }
                    else {
                        this.$store.dispatch('survey/setDisabledNext', true);
                    }
                },
        },
   }
}
</script>
