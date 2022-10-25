<script>
export default {};
</script>
<template>
  <button class="button">
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
  width: 100%;
  transition: opacity 250ms var(--animation-timing);
  box-shadow: 0 40px 15px -10px var(--clr-accent-support);
  &:hover {
    opacity: 0.8;
  }
}
</style>
