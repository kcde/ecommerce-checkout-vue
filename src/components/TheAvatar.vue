<script>
//TODO: receive image url as props to display image url
</script>

<template>
  <div class="avatar">
    <img src="/images/image-avatar.png" alt="user profile image" />
  </div>
</template>

<style scoped lang="scss">
.avatar {
  width: clamp(24px, 7vw, 50px);
  border-radius: 100%;
  border-style: solid;
  border-width: 2px;
  border-color: transparent;
  cursor: pointer;
  transition: border-color 350ms var(--animation-timing);
  &:hover {
    border-color: var(--clr-accent);
  }
}
</style>
