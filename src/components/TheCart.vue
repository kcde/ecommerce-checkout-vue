<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("cart", ["cartCount", "cart"]),
  },
};
</script>
<template>
  <div class="cart">
    <div class="cart__head">
      <h6>Cart</h6>
    </div>

    <div class="cart__body relative">
      <p class="empty-text" v-if="cartCount <= 0">Your cart is empty</p>

      <div v-for="item in cart" :key="item.id">{{ item }}</div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.cart {
  background-color: var(--white);
  border-radius: 10px;
  position: absolute;
  right: 0.5rem;
  left: 0.5rem;
  box-shadow: 0px 10px 25px -5px var(--grayish-blue);
  top: calc(100% + 1rem);

  @media (min-width: 568px) {
    width: 100%;
    max-width: 360px;
    right: 0.5rem;
    left: initial;
    top: 5rem;
  }

  &__head {
    font-weight: 700;
    font-size: 1rem;
    padding: var(--space-6);
    border-bottom: 2px solid var(--light-grayish-blue);
  }
  &__body {
    min-height: 11.75rem;
  }

  .empty-text {
    color: var(--dark-grayish-blue);
    font-weight: 700;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  /* v-enter- */
}
</style>
