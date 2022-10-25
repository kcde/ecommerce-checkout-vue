<script>
export default {};
</script>
<template>
  <div class="badge">
    <slot></slot>
  </div>
</template>
<style scoped>
.badge {
  color: var(--clr-accent);
  background-color: var(--clr-accent-support);
  font-weight: 700;
  display: inline-block;
  padding: 3px 7px;
  font-size: 12px;
  border-radius: 3px;
}
</style>
