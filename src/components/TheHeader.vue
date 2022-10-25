<script>
import BrandLogo from "./icons/BrandLogo.vue";
import MenuIcon from "./icons/MenuIcon.vue";
import CartIcon from "./icons/CartIcon.vue";
import TheAvatar from "./TheAvatar.vue";
export default {
  emits: ["open-menu"],
  components: { BrandLogo, MenuIcon, CartIcon, TheAvatar },
  methods: {
    openMenu() {
      console.log("opening menu");

      this.$emit("open-menu");
    },
  },
};
</script>
<template>
  <header class="flex justify-between">
    <div class="flex align-center">
      <button class="menu-icon-container">
        <MenuIcon class="mr-4" @click="openMenu" />
      </button>
      <BrandLogo />

      <nav class="menu flex align-center gap-8 ml-13">
        <div class="centered relative"><a href="#">Collections</a></div>
        <div class="centered relative"><a href="#">Men</a></div>
        <div class="centered relative"><a href="#">Women</a></div>
        <div class="centered relative"><a href="#">About</a></div>
        <div class="centered relative"><a href="#">Contact</a></div>
      </nav>
    </div>

    <div class="flex align-center header-side">
      <div class="cart-container"><CartIcon shade="dark" /></div>
      <div>
        <TheAvatar />
      </div>
    </div>
  </header>
</template>
<style scoped lang="scss">
header {
  padding-top: 1.5rem;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  @media (min-width: 768px) {
    border-bottom: 2px solid var(--light-grayish-blue);
    padding-top: 0;
  }
}
.menu {
  display: none;
  height: 100%;

  & > div {
    height: 100%;
  }
  @media (min-width: 768px) {
    display: inherit;
  }
}
.menu-icon-container {
  display: block;

  @media (min-width: 768px) {
    display: none;
  }
}
.menu a {
  color: var(--clr-secondary);
  transition: color 250ms cubic-bezier(0.32, 0.89, 0.83, 0.67);

  &::after {
    position: absolute;
    content: "";
    bottom: 0;
    background-color: var(--clr-accent);
    opacity: 0;
    width: 100%;
    height: 4px;
    left: 0;
    transition: opacity 250ms cubic-bezier(0.32, 0.89, 0.83, 0.67);
  }

  &:hover {
    color: var(--clr-primary);
    &::after {
      opacity: 1;
    }
  }
}

.cart-container {
  margin-right: 22px;
  @media (min-width: 768px) {
    margin-right: 46px;
  }
}

.header-side {
  @media (min-width: 768px) {
    padding: 1.5rem 0;
  }
}
</style>
