import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      productToCartCount: 0,
    };
  },
  mutations: {
    updateProductToCartCount(state, { count }) {
      state.productToCartCount = count;
    },
  },
  actions: {
    updateProductToCartCount(context, payload) {
      context.commit("updateProductToCartCount", payload);
    },
  },
});

export default store;
