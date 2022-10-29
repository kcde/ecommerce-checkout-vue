<script>
export default {};
</script>
<template>
  <button class="prev-button">
    <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11 1 3 9l8 8"
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
.prev-button {
  background-color: var(--white);
  width: var(--control-btn-size);
  height: var(--control-btn-size);
  display: grid;
  place-items: center;
  border-radius: 100%;
  padding-right: var(--space-1);

  &:hover {
    & svg path {
      stroke: var(--clr-accent);
    }
  }
}
</style>
