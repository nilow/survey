const state = {
  stageType: 'intro',
  title: '',
  intro: '',
  bgImage: '',
  bgImageIntro: '',
  questions: [],
  currentQuestion: 0,
  currentAnswer: '',
  currentAnswerMulti: [],
  answers: [],
  correct: [],
  perc: null,
  disabledNext: true,
  perPage: 6,
  emailSent: false
}

const getters = {
  get_disabledNext (state) {
		return state.disabledNext
  },
  get_introStage (state) {
		return state.introStage
  },
  get_perPage (state) {
		return state.perPage
  },
  get_emailSent (state) {
		return state.emailSent
  },
  get_stage (state) {
		return state.stageType
  },
  get_bgImage (state) {
		return state.bgImage
  },
  get_intro (state) {
		return state.intro
  },
  get_questions (state) {
		return state.questions
  },
  get_answers (state) {
		return state.answers
  },
  get_title (state) {
		return state.title
  },
  get_currentQuestion (state) {
		return state.currentQuestion
  },
  get_correctAnswers (state) {
		return state.correct
  },
  get_currentAnswer (state) {
		return state.currentAnswer
  },
  get_currentAnswerMulti (state) {
		return state.currentAnswerMulti
  },
}

//actions
const actions = {
	loadSurvey ({ commit }) {
    const token = localStorage.getItem('token');
    axios
    //.get('https://api.myjson.com/bins/gjcqq')
  //.get('https://api.myjson.com/bins/13xuj8')
  .get('http://backshop.nilow13.usermd.net/api/survey/3' + '?token=' + token)
    .then(response => {
      const data = response.data.survey[0];
      commit('SET_SURVEY_TITLE', data.title);
      commit('SET_SURVEY_INTRO', data.text);
      commit('SET_SURVEY_BGIMAGE', data.bgImage);
      commit('SET_SURVEY_BGIMAGE_INTRO', data.bgImage);
      commit('SET_SURVEY_QUESTIONS', data.questions);
    })
  },
  sendSummary ({ commit }, data) {
    const token = localStorage.getItem('token');
    axios.post('http://backshop.nilow13.usermd.net/api/sendsummary' + '?token=' + token, {
      cartItems: data.cartItems,
      sendTo: data.sendTo
    })
    .then(response => {
      if(response.data.sentmessage === 'success'){
        commit('SET_EMAIL_SENT', true);
      }
    })
  },
  showQuestions ({ commit }) {
    const questions = state.questions;
    const currentQuestion = state.currentQuestion;
    commit('SET_SURVEY_BGIMAGE', questions[currentQuestion].bgImage);
    commit('SET_STAGE', 'question');
  },
  showResults ({ commit }) {
    commit('SET_STAGE', 'results');
  },
  showSummary ({ commit }) {
    commit('SET_STAGE', 'summary');
  },
  showEnd ({ commit }) {
    commit('SET_STAGE', 'end');
  },
  nextQuestion ({ commit }) {
    commit('SET_NEXT_QUESTION');
    const questions = state.questions;
    const currentQuestion = state.currentQuestion;
    commit('SET_SURVEY_BGIMAGE', questions[currentQuestion].bgImage);
  },
  prevQuestion ({ commit }) {
    commit('SET_PREV_QUESTION');
    const questions = state.questions;
    const currentQuestion = state.currentQuestion;
    commit('SET_SURVEY_BGIMAGE', questions[currentQuestion].bgImage);
  },
  setCorrectAnswers ({ commit }) {
    const answers = state.answers;
    const questions = state.questions;
    let correct_answers = [];
    for (let i=0; i <= answers.length-1; i++) {
      if(questions[i].answer == answers[i]) {
        correct_answers.push(answers[i]);
      }
    }
    commit('SET_CORRECT_ANSWERS', correct_answers);
  },
  setAnswers ({ commit }, answer) {
      const answers = state.answers;
      answers[state.currentQuestion] = answer;
      console.log(answers);
      commit('SET_ANSWERS', answers);
  },
  setCurrentAnswer ({ commit }, answer) {
    commit('SET_CURRENT_ANSWER', answer);
  },
  setDisabledNext ({ commit }, value) {
    commit('SET_DISABLED_NEXT', value);
  },
  setCurrentAnswerMulti ({ commit }, answerm) {
    commit('SET_CURRENT_ANSWERMULTI', answerm);
  },
  clearSurvey ({ commit }) {
    commit('SET_STAGE', 'intro');
    commit('SET_ANSWERS', []);
    commit('SET_CURRENT_ANSWER', '');
    commit('SET_CURRENT_ANSWERMULTI', []);
    commit('SET_CORRECT_ANSWERS', []);
    commit('SET_CURRENT_QUESTION', 0);
    commit('SET_CURRENT_QUESTION', 0);
    commit('SET_SURVEY_BGIMAGE', state.bgImageIntro);
  }
}

const mutations = {
  SET_SURVEY_TITLE (state, title) {
		state.title = title
  },
  SET_EMAIL_SENT (state, value) {
		state.emailSent = value
  },
  SET_DISABLED_NEXT (state, value) {
		state.disabledNext = value
  },
  SET_SURVEY_INTRO (state, intro) {
		state.intro = intro
  },
  SET_SURVEY_BGIMAGE (state, bgImage) {
		state.bgImage = bgImage
  },
  SET_SURVEY_BGIMAGE_INTRO (state, bgImage) {
		state.bgImageIntro = bgImage
  },
  SET_SURVEY_QUESTIONS (state, questions) {
		state.questions = questions
  },
  SET_STAGE (state, payload) {
		state.stageType = payload
  },
  SET_CURRENT_QUESTION (state, payload) {
		state.currentQuestion=payload;
  },
  SET_NEXT_QUESTION (state) {
		state.currentQuestion++;
  },
  SET_PREV_QUESTION (state) {
		state.currentQuestion--;
  },
  SET_ANSWERS (state, answers) {
    state.answers = answers;
  },
  SET_CURRENT_ANSWER (state, value) {
    state.currentAnswer = value
  },
  SET_CURRENT_ANSWERMULTI (state, payload) {
    state.currentAnswerMulti = payload
  },
  SET_CORRECT_ANSWERS (state, answers) {
    state.correct = answers
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}