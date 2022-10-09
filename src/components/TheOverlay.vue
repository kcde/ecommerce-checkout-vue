<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<template>
  <Transition>
    <div class="overlay" v-if="show"></div>
  </Transition>
</template>

<style scoped lang="scss">
.overlay {
  position: fixed;
  inset: 0;
  background-color: var(--bg-overlay);
  z-index: var(--overlay-z-index);

  /* opacity: 1; */
  transition: opacity 150ms ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 250ms cubic-bezier(0.32, 0.89, 0.83, 0.67);
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
}
</style>
