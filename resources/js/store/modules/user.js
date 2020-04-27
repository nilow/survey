const state = {
	isLogged: false,
	showPopupUser: false,
}

// getters
const getters = {
	get_isLogged (state) {
		return state.isLogged
	},
	get_popupUser: (state) => {
		return state.showPopupUser
	},
}

//actions
const actions = {
	loginUser ({ commit }, login) {
		return new Promise((resolve, reject) => {
		axios.post('http://backshop.nilow13.usermd.net/api/user/signin',{
			email: login.email, password: login.password
			})
				  .then(response => {
					if(response.status === 200){
						//console.log(response);
						const token = response.data.token;
					  	const base64Url = token.split(".")[1];
					  	const base64 = base64Url.replace("-","+").replace("_","/");
					  	const decoded = JSON.parse(window.atob(base64));
					  	const date = new Date(0);
					  	const utc = date.setUTCSeconds(decoded.exp);
					 	 //const date = decoded.exp;
					  	localStorage.setItem('token', token);
					  	localStorage.setItem('expiration', utc);
					  	commit('SET_USERSTATUS', true);
					   	//this.$router.push('/home');
					}
					resolve(response);
				  })
				  .catch(e => {
					//console.log(e);
					//this.errorinfo = true;
					localStorage.removeItem('token');
					localStorage.removeItem('expiration');
        			reject(e);
				  });
				});
	},

	showOrHiddenPopupUser: ({ commit }) => {
		commit('SHOW_POPUP_USER');
	},

	logoutUser: ({ commit }) => {
		localStorage.removeItem('token');
    	localStorage.removeItem('expiration');
		commit('SET_USERSTATUS', false);
	},
}

const mutations = {
	SET_USERSTATUS (state, status) {
		state.isLogged = status
	},
	SHOW_POPUP_USER: (state) => {
		state.showPopupUser = !state.showPopupUser;
	},
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}