export default {
  namespaced: true,
  state() {
    return {
      cart: [], //an object whit product is and count should be added
    };
  },
  mutations: {
    addToCart(state, { productCount, price }) {
      state.cart.push({ count: productCount, price, id: Date.now() });
    },
    //TODO: remove item from cart
    removeFromCart(state, { productId }) {
      state.cart = state.cart.filter((item) => item.id !== productId);
    },
  },
  actions: {
    addToCart(context, payload) {
      context.commit("addToCart", payload);
    },

    removeFromCart(context, payload) {
      context.commit("removeFromCart", payload);
    },
  },
  getters: {
    cartCount(state) {
      //expecting just one producr
      return (
        state.cart.length &&
        state.cart.map((el) => el.count).reduce((prev, curr) => prev + curr)
      );
    },
    cart(state) {
      return state.cart;
    },
  },
};
