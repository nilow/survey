const state = {
	products_best: [],
	products_new: [],
	currentProduct: {},
	showModal: false,	
	products_special: [],
	products_proposed: [],
	answers_products: [],
	products_all: [
	{"id": 1, "title": "1iPad 4 Mini", "price": 500.01, "inventory": 2,"webformatURL":"https://picsum.photos/id/16/800/600", "type":"best","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet vel erat eget mattis. Vivamus faucibus enim felis, placerat accumsan nunc facilisis ac. Etiam et nunc ut mi efficitur sollicitudin. Phasellus id velit ac elit fermentum malesuada. Suspendisse potenti. Donec maximus elit consequat mi ornare tempus. Proin risus ipsum, tincidunt sed velit vitae, bibendum tempus leo. Vivamus ac nulla nec lorem efficitur semper. Proin luctus tortor ut mauris varius porta. Aliquam sed efficitur nisl. Ut facilisis vitae quam et congue."},
	{"id": 2, "title": "2H&M T-Shirt White", "price": 10.99, "inventory": 10,"webformatURL":"https://picsum.photos/id/15/800/600", "type":"best", "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet vel erat eget mattis. Vivamus faucibus enim felis, placerat accumsan nunc facilisis ac. Etiam et nunc ut mi efficitur sollicitudin. Phasellus id velit ac elit fermentum malesuada. Suspendisse potenti. Donec maximus elit consequat mi ornare tempus. Proin risus ipsum, tincidunt sed velit vitae, bibendum tempus leo. Vivamus ac nulla nec lorem efficitur semper. Proin luctus tortor ut mauris varius porta. Aliquam sed efficitur nisl. Ut facilisis vitae quam et congue."},
	{"id": 3, "title": "3Charli XCX - Sucker CD", "price": 19.99, "inventory": 5,"webformatURL":"https://picsum.photos/id/271/800/600", "type":"best", "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet vel erat eget mattis. Vivamus faucibus enim felis, placerat accumsan nunc facilisis ac. Etiam et nunc ut mi efficitur sollicitudin. Phasellus id velit ac elit fermentum malesuada. Suspendisse potenti. Donec maximus elit consequat mi ornare tempus. Proin risus ipsum, tincidunt sed velit vitae, bibendum tempus leo. Vivamus ac nulla nec lorem efficitur semper. Proin luctus tortor ut mauris varius porta. Aliquam sed efficitur nisl. Ut facilisis vitae quam et congue."},
	{"id": 4, "title": "4iPad 4 Mini", "price": 500.01, "inventory": 2,"webformatURL":"https://picsum.photos/id/13/800/600", "type":"best", "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet vel erat eget mattis. Vivamus faucibus enim felis, placerat accumsan nunc facilisis ac. Etiam et nunc ut mi efficitur sollicitudin. Phasellus id velit ac elit fermentum malesuada. Suspendisse potenti. Donec maximus elit consequat mi ornare tempus. Proin risus ipsum, tincidunt sed velit vitae, bibendum tempus leo. Vivamus ac nulla nec lorem efficitur semper. Proin luctus tortor ut mauris varius porta. Aliquam sed efficitur nisl. Ut facilisis vitae quam et congue."},
	{"id": 5, "title": "5H&M T-Shirt White", "price": 10.99, "inventory": 10,"webformatURL":"https://picsum.photos/id/135/800/600", "type":"best", "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet vel erat eget mattis. Vivamus faucibus enim felis, placerat accumsan nunc facilisis ac. Etiam et nunc ut mi efficitur sollicitudin. Phasellus id velit ac elit fermentum malesuada. Suspendisse potenti. Donec maximus elit consequat mi ornare tempus. Proin risus ipsum, tincidunt sed velit vitae, bibendum tempus leo. Vivamus ac nulla nec lorem efficitur semper. Proin luctus tortor ut mauris varius porta. Aliquam sed efficitur nisl. Ut facilisis vitae quam et congue."},
	{"id": 6, "title": "6Charli XCX - Sucker CD", "price": 19.99, "inventory": 5,"webformatURL":"https://picsum.photos/id/51/800/600", "type":"best", "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet vel erat eget mattis. Vivamus faucibus enim felis, placerat accumsan nunc facilisis ac. Etiam et nunc ut mi efficitur sollicitudin. Phasellus id velit ac elit fermentum malesuada. Suspendisse potenti. Donec maximus elit consequat mi ornare tempus. Proin risus ipsum, tincidunt sed velit vitae, bibendum tempus leo. Vivamus ac nulla nec lorem efficitur semper. Proin luctus tortor ut mauris varius porta. Aliquam sed efficitur nisl. Ut facilisis vitae quam et congue."},
	{"id": 7, "title": "7H&M T-Shirt White", "price": 10.99, "inventory": 10,"webformatURL":"https://picsum.photos/id/215/800/600", "type":"best", "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet vel erat eget mattis. Vivamus faucibus enim felis, placerat accumsan nunc facilisis ac. Etiam et nunc ut mi efficitur sollicitudin. Phasellus id velit ac elit fermentum malesuada. Suspendisse potenti. Donec maximus elit consequat mi ornare tempus. Proin risus ipsum, tincidunt sed velit vitae, bibendum tempus leo. Vivamus ac nulla nec lorem efficitur semper. Proin luctus tortor ut mauris varius porta. Aliquam sed efficitur nisl. Ut facilisis vitae quam et congue."},
	{"id": 8, "title": "8Charli XCX - Sucker CD", "price": 19.99, "inventory": 5,"webformatURL":"https://picsum.photos/id/175/800/600", "type":"best", "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet vel erat eget mattis. Vivamus faucibus enim felis, placerat accumsan nunc facilisis ac. Etiam et nunc ut mi efficitur sollicitudin. Phasellus id velit ac elit fermentum malesuada. Suspendisse potenti. Donec maximus elit consequat mi ornare tempus. Proin risus ipsum, tincidunt sed velit vitae, bibendum tempus leo. Vivamus ac nulla nec lorem efficitur semper. Proin luctus tortor ut mauris varius porta. Aliquam sed efficitur nisl. Ut facilisis vitae quam et congue."},
	{"id": 9, "title": "9iPad 4 Mini", "price": 500.01, "inventory": 2,"webformatURL":"https://picsum.photos/id/155/800/600", "type":"new","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet vel erat eget mattis. Vivamus faucibus enim felis, placerat accumsan nunc facilisis ac. Etiam et nunc ut mi efficitur sollicitudin. Phasellus id velit ac elit fermentum malesuada. Suspendisse potenti. Donec maximus elit consequat mi ornare tempus. Proin risus ipsum, tincidunt sed velit vitae, bibendum tempus leo. Vivamus ac nulla nec lorem efficitur semper. Proin luctus tortor ut mauris varius porta. Aliquam sed efficitur nisl. Ut facilisis vitae quam et congue."},
	{"id": 10, "title": "10H&M T-Shirt White", "price": 10.99, "inventory": 10,"webformatURL":"https://picsum.photos/id/43/800/600", "type":"new","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet vel erat eget mattis. Vivamus faucibus enim felis, placerat accumsan nunc facilisis ac. Etiam et nunc ut mi efficitur sollicitudin. Phasellus id velit ac elit fermentum malesuada. Suspendisse potenti. Donec maximus elit consequat mi ornare tempus. Proin risus ipsum, tincidunt sed velit vitae, bibendum tempus leo. Vivamus ac nulla nec lorem efficitur semper. Proin luctus tortor ut mauris varius porta. Aliquam sed efficitur nisl. Ut facilisis vitae quam et congue."},
	{"id": 11, "title": "11Charli XCX - Sucker CD", "price": 19.99, "inventory": 5,"webformatURL":"https://picsum.photos/id/38/800/600", "type":"new","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet vel erat eget mattis. Vivamus faucibus enim felis, placerat accumsan nunc facilisis ac. Etiam et nunc ut mi efficitur sollicitudin. Phasellus id velit ac elit fermentum malesuada. Suspendisse potenti. Donec maximus elit consequat mi ornare tempus. Proin risus ipsum, tincidunt sed velit vitae, bibendum tempus leo. Vivamus ac nulla nec lorem efficitur semper. Proin luctus tortor ut mauris varius porta. Aliquam sed efficitur nisl. Ut facilisis vitae quam et congue."},
	{"id": 12, "title": "12iPad 4 Mini", "price": 500.01, "inventory": 2,"webformatURL":"https://picsum.photos/id/157/800/600", "type":"new","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet vel erat eget mattis. Vivamus faucibus enim felis, placerat accumsan nunc facilisis ac. Etiam et nunc ut mi efficitur sollicitudin. Phasellus id velit ac elit fermentum malesuada. Suspendisse potenti. Donec maximus elit consequat mi ornare tempus. Proin risus ipsum, tincidunt sed velit vitae, bibendum tempus leo. Vivamus ac nulla nec lorem efficitur semper. Proin luctus tortor ut mauris varius porta. Aliquam sed efficitur nisl. Ut facilisis vitae quam et congue."},
	{"id": 13, "title": "13H&M T-Shirt White", "price": 10.99, "inventory": 10,"webformatURL":"https://picsum.photos/id/75/800/600", "type":"new","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet vel erat eget mattis. Vivamus faucibus enim felis, placerat accumsan nunc facilisis ac. Etiam et nunc ut mi efficitur sollicitudin. Phasellus id velit ac elit fermentum malesuada. Suspendisse potenti. Donec maximus elit consequat mi ornare tempus. Proin risus ipsum, tincidunt sed velit vitae, bibendum tempus leo. Vivamus ac nulla nec lorem efficitur semper. Proin luctus tortor ut mauris varius porta. Aliquam sed efficitur nisl. Ut facilisis vitae quam et congue."},
	{"id": 14, "title": "14Charli XCX - Sucker CD", "price": 19.99, "inventory": 5,"webformatURL":"https://picsum.photos/id/25/800/600", "type":"new","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet vel erat eget mattis. Vivamus faucibus enim felis, placerat accumsan nunc facilisis ac. Etiam et nunc ut mi efficitur sollicitudin. Phasellus id velit ac elit fermentum malesuada. Suspendisse potenti. Donec maximus elit consequat mi ornare tempus. Proin risus ipsum, tincidunt sed velit vitae, bibendum tempus leo. Vivamus ac nulla nec lorem efficitur semper. Proin luctus tortor ut mauris varius porta. Aliquam sed efficitur nisl. Ut facilisis vitae quam et congue."},
	],
}

// getters
const getters = {
	get_productsBest (state) {
		return state.products_best
	},
	get_productsNew (state) {
		return state.products_new
	},
	get_productsSpecial (state) {
		return state.products_special
	},
	get_productsProposed (state) {
		return state.products_proposed
	},	
	get_currentProduct (state) {
		return state.currentProduct
	},
	get_showModal (state) {
		return state.showModal
	},
}

//actions
const actions = {
	loadAnswersProducts ({ commit }, answers) {
		const token = localStorage.getItem('token');
        axios
		.get('http://backshop.nilow13.usermd.net/api/getanswersproducts' + '?token=' + token, 
			{ 
				params: { 
					anwersIds: answers.flat()
				} 
			})
		.then(response => {
			//console.log(response);
			const data = response.data.products;
			const productsspecial = data.filter(item => item.special_offer === 1);
			const productsproposed = data.filter(item => item.special_offer === 0);
			commit('SET_PRODUCTSSPECIAL', productsspecial);
			commit('SET_PRODUCTSPROPOSED', productsproposed);
			commit('SET_ANSWERSPRODUCTS', data);
		  })
	},

	loadProductsbest ({ commit }) {
		const productsbest = state.products_all.filter(item => item.type === "best")
		commit('SET_PRODUCTSBEST', productsbest);
        /*axios
        .get('https://pixabay.com/api/?key=14051600-3eb579ad657cc315f57736f98&q=yellow+flowers&image_type=photo')
        .then(r => r.hits)
        .then(products => {
         commit('SET_PRODUCTS', products);
		 console.log(products)
        })*/
	},
	
	loadProductsnew ({ commit }) {
		const productsnew = state.products_all.filter(item => item.type === "new")
		commit('SET_PRODUCTSNEW', productsnew);
        /*axios
        .get('https://pixabay.com/api/?key=14051600-3eb579ad657cc315f57736f98&q=yellow+flowers&image_type=photo')
        .then(r => r.hits)
        .then(products => {
         commit('SET_PRODUCTS', products);
		 console.log(products)
        })*/
    },

    currentProduct: ({ commit }, product) => {
      	commit('CURRENT_PRODUCT', product);
    },
    showOrHiddenModal: ({ commit }) => {
      	commit('SHOW_MODAL');
    },
}

const mutations = {
	SET_PRODUCTSBEST (state, products) {
		state.products_best = products
	},
	SET_PRODUCTSNEW (state, products) {
		state.products_new = products
	},
	SET_ANSWERSPRODUCTS (state, products) {
		state.answers_products = products
	},
	SET_PRODUCTSSPECIAL (state, products) {
		state.products_special = products
	},
	SET_PRODUCTSPROPOSED(state, products) {
		state.products_proposed = products
	},
    CURRENT_PRODUCT: (state, product) => {
        state.currentProduct = product;
    },
    SHOW_MODAL: (state) => {
        state.showModal = !state.showModal;
    },
	/*DECREMENT_INVENTORY (state, payload) {
		const products_all = state.products_all;
		const product = products_all.find(product => product.id === payload.id)
		product.inventory -= payload.quantity;
	},
	INCREMENT_INVENTORY (state, payload) {
		const products_all = state.products_all;
		const product = products_all.find(product => product.id === payload.id)
		product.inventory += payload.quantity;
	},*/
	DECREMENT_INVENTORY (state, payload) {
		const answers_products = state.answers_products;
		const product = answers_products.find(product => product.id === payload.id)
		product.inventory -= payload.quantity;
	},
	INCREMENT_INVENTORY (state, payload) {
		const answers_products = state.answers_products;
		const product = answers_products.find(product => product.id === payload.id)
		product.inventory += payload.quantity;
	},
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}