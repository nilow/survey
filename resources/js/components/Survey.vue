<template>
	<div class="survey" :style="{ backgroundImage: 'url(' + bgImage + ')'}">
        <Top></Top>
		<div class="container">
			<div class="row">
				<div class="col-md-12">
                    <Intro v-if="stage == 'intro'"></Intro>
                    <Question v-else-if="stage == 'question'"></Question>
                    <Summary v-else></Summary>
				</div>
			</div>
		</div>
        <Bottom></Bottom>
	</div>
</template>

<script>
import Top from '@/js/components/offer/Top.vue';
import Bottom from '@/js/components/survey/Bottom.vue';
import Intro from '@/js/components/survey/Intro.vue';
import Question from '@/js/components/survey/Question.vue';

export default {
	name: 'Survey',
    mounted() {
        if(this.stage == 'results') {
             this.$store.dispatch('survey/showQuestions');
        }
        else{
            this.$store.dispatch('survey/loadSurvey');
        }
    },
	computed: {
        bgImage () {
			return this.$store.getters['survey/get_bgImage']
        },
        stage () {
			return this.$store.getters['survey/get_stage']
		},
        questions () {
			return this.$store.getters['survey/get_questions']
		},
        answers () {
			return this.$store.getters['survey/get_answers']
		},
        correctAnswers () {
			return this.$store.getters['survey/get_correctAnswers']
		},
	},
	methods: {
        clearSurvey() {
           this.$store.dispatch('survey/clearSurvey');
           this.$store.dispatch('survey/setDisabledNext', true);
        }
    },
    components: {
        Top,
        Bottom,
        Intro,
        Question
	},
}
</script>