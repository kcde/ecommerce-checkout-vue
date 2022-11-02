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

<style lang="scss">
.container {
  max-width: 69.5rem;
  margin: 0 auto;
}

.slider {
  width: 100%;
  overflow: hidden;
  position: relative;
  margin: 0 auto;

  &__image {
    height: clamp(200px, 100vh, 300px);
    position: relative;

    @media (min-width: 758px) {
      /* max-width: 400px; */
      border-radius: 10px;
      overflow: hidden;
    }

    @media (min-width: 1024px) {
      height: clamp(200px, 100vh, 400px);
    }

    .active {
      opacity: 1;
      transform: scale(1);
    }
    img {
      position: absolute;
      left: 0;
      top: 0;
      object-fit: cover;
      width: 100%;
      height: 100%;
      opacity: 0;
      transform: scale(1.1);
      transition: all 350ms ease;
      z-index: -1;
    }
  }

  &__control {
    position: absolute;
    z-index: 2;

    @media (min-width: 1024px) {
      display: none;
    }

    &--right {
      right: 1rem;
      top: 50%;
      transform: translateY(-50%);
    }
    &--left {
      left: 1rem;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  &__thumbnails {
    gap: 1.5rem;
    margin-top: 2rem;
    display: none;

    @media (min-width: 1024px) {
      display: flex;
    }

    & > * {
      border-radius: 10px;
      overflow: hidden;
    }

    img {
      height: 100%;
    }
  }

  &__thumbnail {
    border: 2px solid transparent;
    transition: all 350ms ease;
    position: relative;
    cursor: pointer;

    &::after {
      content: "";
      position: absolute;
      inset: 0;
      background-color: transparent;
      transition: all 350ms ease;
    }
    &:hover {
      &::after {
        background-color: rgba(255, 255, 255, 0.4);
      }
    }

    &--active {
      border-color: var(--clr-accent);
      &:hover {
        &::after {
          background-color: rgba(255, 255, 255, 0.75);
        }
      }
      &::after {
        background-color: rgba(255, 255, 255, 0.75);
      }
    }
  }
}

.mobile-menu-container {
  @media (min-width: 1024px) {
    display: none;
  }
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
      this.mobileMenuOpen = true;
      this.overlayOpen = true;
    },
    hideMobileMenu() {
      this.mobileMenuOpen = false;
      this.overlayOpen = false;
    },
  },
};
</script>
