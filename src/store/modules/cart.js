export default {
  namespaced: true,
  state() {
    return {
      cart: [], //an object whit product is and count should be added
    };
  },
  mutations: {
    addToCart(state, { productCount }) {
      state.cart.push({ count: productCount, id: Date.now() });
    },
  },
  actions: {
    addToCart(context, payload) {
      context.commit("addToCart", payload);
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
