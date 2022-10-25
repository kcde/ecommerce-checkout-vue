<script>
import MinusIcon from "./icons/MinusIcon.vue";
import PlusIcon from "./icons/PlusIcon.vue";

export default {
  components: { MinusIcon, PlusIcon },
};
</script>
<template>
  <div class="amount-input">
    <button><MinusIcon></MinusIcon></button>
    <div>
      <input type="number" min="0" value="0" name="" id="" />
    </div>

    <button><PlusIcon /></button>
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
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
</style>
