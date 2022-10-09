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
        <a href="#">Collections</a>
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </div>

    <div class="flex align-center header-side">
      <div class="cart-container"><CartIcon shade="dark" /></div>

      <TheAvatar />
    </div>
  </header>
</template>
<style scoped lang="scss">
header {
  padding: 24px;
  @media (min-width: 768px) {
    border-bottom: 2px solid var(--light-grayish-blue);
  }
}
.menu {
  display: none;

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
}

.cart-container {
  margin-right: 22px;
  @media (min-width: 768px) {
    margin-right: 46px;
  }
}
</style>
