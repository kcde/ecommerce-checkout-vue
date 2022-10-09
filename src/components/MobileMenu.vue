<script>
import CloseIcon from "./icons/CloseIcon.vue";
export default { components: { CloseIcon }, emits: ["close-menu"] };
</script>
<template>
  <div class="mobile-menu">
    <button class="close-icon-container" @click="$emit('close-menu')">
      <CloseIcon />
    </button>
    <nav class="flex flex-col gap-8">
      <a href="#">Collections</a>
      <a href="#">Menu</a>
      <a href="#">Women</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </nav>
  </div>
</template>

<style scoped lang="scss">
.mobile-menu {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: var(--white);
  width: 65vw;
  z-index: calc(var(--overlay-z-index) + 50);
  padding-left: var(--space-6);
  a {
    font-weight: var(--fw-lg);
  }
}

.close-icon-container {
  padding-top: 2.75rem;
  margin-bottom: 54px;
}
</style>
