<template>
  <button class="close-button">
    <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
        :fill="color"
        fill-rule="evenodd"
      />
    </svg>
  </button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "#69707D",
    },
  },
};
</script>

<style scoped>
svg path {
  transition: all 150ms ease;
}
.close-button svg:hover path {
  fill: var(--clr-accent);
}
</style>
