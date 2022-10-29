import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      //on a norms, this no suppose be like this,
      // e suppose be array, with product objects
      product: {
        title: "Fall Limited Edition Sneakers",
        description:
          "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer",
        price: 250,
        discount: 50,
        images: {
          main: [
            { id: 1, url: "src/assets/images/image-product-1.jpg" },
            { id: 2, url: "src/assets/images/image-product-2.jpg" },
            { id: 3, url: "src/assets/images/image-product-3.jpg" },
            { id: 4, url: "src/assets/images/image-product-4.jpg" },
          ],
          thumbnails: [
            { id: 1, url: "@/assets/images/image-product-1-thumbnail.jpg" },
            { id: 2, url: "@/assets/images/image-product-2-thumbnail.jpg" },
            { id: 3, url: "@/assets/images/image-product-3-thumbnail.jpg" },
            { id: 4, url: "@/assets/images/image-product-4-thumbnail.jpg" },
          ],
        },
      },

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
