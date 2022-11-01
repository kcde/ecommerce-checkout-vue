<script>
export default {
  emits: ["click"],
};
</script>
<template>
  <button class="button" @click="$emit('click')">
    <slot></slot>
  </button>
</template>
<style scoped lang="scss">
.button {
  background-color: var(--clr-accent);
  padding: 1rem 2rem;
  border-radius: 10px;
  color: var(--white);
  font-weight: 700;
  font-size: 1rem;
  width: 100%;
  transition: opacity 250ms var(--animation-timing);
  box-shadow: 0 15px 10px -10px var(--clr-accent-support);
  &:hover {
    opacity: 0.8;
  }
}
</style>
