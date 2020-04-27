const state = {
	cartProducts: [],
  showPopupCart: false,
  cartLastAdded: '',
  showModal: false		
}

// getters
const getters = {
  cartProducts: (state, getters, rootState) => {
    return state.cartProducts.map(({ id, quantity }) => {
      const product = rootState.products.all.find(product => product.id === id)
      return {
        title: product.title,
        price: product.price,
        quantity
      }
    })
  },

  get_cartTotalPrice: (state, getters) => {
	return state.cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
    //return getters.cartProducts.reduce((total, product) => {
    //  return total + product.price * product.quantity
    //}, 0)
  },
  
  get_productsInCart: (state) => {
	return state.cartProducts
	},
	
  get_popupCart: (state) => {
	return state.showPopupCart
  },
  
  get_modal: (state) => {
    return state.showModal
  },

  get_lastAdded: (state) => {
    return state.cartLastAdded
  },
}

//actions
const actions = {
	addProduct: ({ state, commit }, {product, quantity}) => {
		if (product.inventory > 0) {
			const cartItem = state.cartProducts.find(item => item.id === product.id)
			if (!cartItem) {
				commit('ADD_PRODUCT', { ...product, quantity: quantity });
			} else {
				commit('INCREMENT_QUANTITY', {...cartItem, quantity: quantity});
			}
			// remove 1 item from stock
      commit('products/DECREMENT_INVENTORY', { id: product.id, quantity: quantity }, { root: true });
      commit('SHOW_MODAL');
      commit('SET_LASTADDED_TITLE', product.title);
		}
  },
  
	removeProduct: ({ commit }, {index, id, quantity}) => {
		commit('REMOVE_PRODUCT', index);
		commit('products/INCREMENT_INVENTORY', { id: id, quantity: quantity }, { root: true });
    },

  incrementProduct: ({ commit }, {id}) => {
    commit('INCREMENT_PRODUCT', id);
    commit('products/DECREMENT_INVENTORY', { id: id, quantity: 1 }, { root: true });
  },

  decrementProduct: ({ commit }, {id}) => {
    commit('DECREMENT_PRODUCT', id);
    commit('products/INCREMENT_INVENTORY', { id: id, quantity: 1 }, { root: true });
  },

	showOrHiddenPopupCart: ({ commit }) => {
      commit('SHOW_POPUP_CART');
  },

  showOrHiddenModal: ({ commit }) => {
      commit('SHOW_MODAL');
  }
}

const mutations = {
	ADD_PRODUCT: (state, product) => {
      state.cartProducts.push(product);
			//console.log(state.cartProducts);
        },
  REMOVE_PRODUCT: (state, index) => {
          state.cartProducts.splice(index, 1);
        },
	SHOW_POPUP_CART: (state) => {
           state.showPopupCart = !state.showPopupCart;
        },
  SHOW_MODAL: (state) => {
           state.showModal = !state.showModal;
        },
  SET_LASTADDED_TITLE: (state, title) => {
           state.cartLastAdded = title;
        },
	INCREMENT_QUANTITY (state, payload) {
			const cartItem = state.cartProducts.find(item => item.id === payload.id)
			cartItem.quantity += payload.quantity
    },
  INCREMENT_PRODUCT (state, id) {
			const cartItem = state.cartProducts.find(item => item.id === id)
			cartItem.quantity++
    },
  DECREMENT_PRODUCT (state, id) {
			const cartItem = state.cartProducts.find(item => item.id === id)
			cartItem.quantity--
		},
	
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}