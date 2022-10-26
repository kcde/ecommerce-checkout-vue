<template>
  <div class="container relative">
    <RouterView @open-menu="showMobileMenu" />
    <Teleport to="body">
      <TheOverlay :show="overlayOpen" />
    </Teleport>
    <Transition name="mobile-menu">
      <MobileMenu v-if="mobileMenuOpen" @close-menu="hideMobileMenu" />
    </Transition>
  </div>
</template>

<style scoped>
.container {
  max-width: 69.5rem;
  margin: 0 auto;
}

.mobile-menu-enter-from {
  left: -200%;
}

.mobile-menu-leave-to {
  opacity: 0;
}

.mobile-menu-enter-active {
  transition: all 250ms var(--animation-timing);
}

.mobile-menu-leave-active {
  transition: opacity 150ms var(--animation-timing);
}

.mobile-menu-enter-to {
  left: 0;
}

.mobile-menu-leave-from {
  opacity: 1;
}
</style>

<script>
import TheOverlay from "./components/TheOverlay.vue";
import MobileMenu from "./components/MobileMenu.vue";

export default {
  components: { TheOverlay, MobileMenu },
  data() {
    return {
      overlayOpen: false,
      mobileMenuOpen: false,
    };
  },

  methods: {
    showMobileMenu() {
      console.log("ALSO OPEINIG MENU");
      this.mobileMenuOpen = true;
      this.overlayOpen = true;
    },
    hideMobileMenu() {
      console.log("ALSO closing MENU");
      this.mobileMenuOpen = false;
      this.overlayOpen = false;
    },
  },
};
</script>
