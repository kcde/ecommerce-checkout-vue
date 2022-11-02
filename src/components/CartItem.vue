<script>
import DeleteIcon from "./icons/DeleteIcon.vue";
import { mapActions } from "vuex";

export default {
  props: {
    imageUrl: {
      type: String,
    },
    title: {
      type: String,
    },
    price: {
      type: Number,
    },
    count: {
      type: Number,
    },
    id: {
      type: Number,
    },
  },
  computed: {
    total() {
      return this.price * this.count;
    },
  },
  components: { DeleteIcon },
  methods: {
    ...mapActions("cart", ["removeFromCart"]),
  },
};
</script>
<template>
  <div class="cart-item flex align-center">
    <div class="cart-item__img">
      <img :src="imageUrl" alt="product image" />
    </div>
    <div class="cart-item__details">
      <p class="cart-item__title">{{ title }}</p>
      <div class="cart-item__price flex gap-2">
        <p class="cart-item__price--calc">${{ price }} &times; {{ count }}</p>
        <p class="cart-item__price--total">${{ total }}</p>
      </div>
    </div>

    <div class="cart-item__delete" @click="removeFromCart({ productId: id })">
      <DeleteIcon />
    </div>
  </div>
</template>
<style scoped lang="scss">
.cart-item {
  /* display: flex; */
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  &__details {
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
    flex-grow: 1;
  }

  &__title {
    width: 80%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: var(--clr-secondary);

    @media (min-width: 568px) {
      width: 100%;
    }
  }
  &__img {
    width: 50px;
    height: 50px;
    border-radius: 5px;
    overflow: hidden;
    flex-shrink: 0;
  }

  &__price {
    color: var(--clr-secondary);

    &--total {
      font-weight: 700;
      color: var(--clr-primary);
    }
  }

  &__delete {
    cursor: pointer;
  }
}
</style>
