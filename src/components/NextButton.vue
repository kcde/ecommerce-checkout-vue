<script>
export default {};
</script>
<template>
  <button class="next-button">
    <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m2 1 8 8-8 8"
        stroke="#1D2026"
        stroke-width="3"
        fill="none"
        fill-rule="evenodd"
      />
    </svg>
  </button>
  <div></div>
</template>
<style scoped lang="scss">
.next-button {
  background-color: var(--white);
  width: var(--control-btn-size);
  height: var(--control-btn-size);
  display: grid;
  place-items: center;
  border-radius: 100%;
  padding-left: var(--space-1);
  &:hover {
    & svg path {
      stroke: var(--clr-accent);
    }
  }
}
</style>
