<template>
  <div class="modal">
    <slot></slot>
  </div>
</template>

<style scoped>
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  z-index: 100;
  color: white;
}
</style>

<script>
export default {
  components: {},
};
</script>
