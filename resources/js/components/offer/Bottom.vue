<template>
    <div class="container-fluid p-3">
      <div class="d-flex justify-content-between">
          <button v-if="showbackProducts" class="btn btn-info btn-survey" @click="backProducts">Przejdź do produktów</button>
          <button v-if="showbackSurvey" class="btn btn-info btn-survey" @click="backSurvey">Przejdź do pytań ankiety</button>
          <button v-if="showgoSummary" class="btn btn-info btn-survey" @click="showSummary">Podsumowanie</button>
          <button v-if="showgoEnd" class="btn btn-info btn-survey" @click="showEnd">Zakończ</button>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    showbackProducts: {
      type: Boolean,
      default: false
    },
    showbackSurvey: {
      type: Boolean,
      default: false
    },
    showgoSummary: {
      type: Boolean,
      default: false
    },
    showgoEnd: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    backProducts() {
      this.$router.push({ name: 'offer' });
	  },
    backSurvey() {
      this.$router.push({name: 'survey'  })
    },
    showSummary() {
      this.$router.push({name: 'summary' });
	  },
    showEnd() {
      this.$router.push({name: 'end' });
      this.$store.dispatch('user/logoutUser');
	  },
  }
}
</script>