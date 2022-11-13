<script>
import MinusIcon from "./icons/MinusIcon.vue";
import PlusIcon from "./icons/PlusIcon.vue";
import { mapActions } from "vuex";

export default {
  components: { MinusIcon, PlusIcon },

  data() {
    return {};
  },

  methods: {
    decreaseAmount() {
      if (this.amount > 0) this.amount--;
    },

    increaseAmount() {
      this.amount++;
    },
    ...mapActions(["updateProductToCartCount"]),
  },
  computed: {
    amount: {
      get() {
        return this.$store.state.productToCartCount;
      },

      set(value) {
        this.updateProductToCartCount({ count: value });
      },
    },
  },

  watch: {},

  created() {
    // to always sync with the global state
    this.amount = this.$store.state.productToCartCount;
  },
};
</script>
<template>
  <div class="amount-input">
    <button @click="decreaseAmount"><MinusIcon></MinusIcon></button>
    <div>
      <input type="number" min="0" v-model="amount" name="" id="" />
    </div>

    <button @click="increaseAmount"><PlusIcon /></button>
  </div>
</template>
<style scoped>
.amount-input {
  background-color: var(--light-grayish-blue);
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
}

input {
  border: none;
  background: transparent;
  outline: none;
  text-align: center;
  font-weight: bold;
  font-size: 1rem;
  width: 50px;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  appearance: none;
  -webkit-appearance: none;
}
</style>
