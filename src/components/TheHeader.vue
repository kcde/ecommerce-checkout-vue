<script>
import BrandLogo from "./icons/BrandLogo.vue";
import MenuIcon from "./icons/MenuIcon.vue";
import CartIcon from "./icons/CartIcon.vue";
import TheAvatar from "./TheAvatar.vue";
import TheCart from "./TheCart.vue";
import { mapGetters } from "vuex";
export default {
  emits: ["open-menu"],
  components: { BrandLogo, MenuIcon, CartIcon, TheAvatar, TheCart },
  data() {
    return {
      showCart: false,
    };
  },
  methods: {
    openMenu() {
      this.$emit("open-menu");
    },
    toggleCart() {
      this.showCart = !this.showCart;
    },
  },

  computed: {
    ...mapGetters("cart", ["cartCount"]),
  },
};
</script>
<template>
  <header class="flex justify-between relative">
    <Transition name="cart">
      <TheCart v-if="showCart" />
    </Transition>
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
      <div class="cart-container" @click="toggleCart">
        <CartIcon />
        <Transition name="cart-count">
          <span class="cart-count" v-if="cartCount > 0">{{ cartCount }}</span>
        </Transition>
      </div>
      <div>
        <TheAvatar />
      </div>
    </div>
  </header>
</template>
<style scoped lang="scss">
header {
  position: sticky;
  top: 0;
  background-color: var(--white);
  padding-top: 1.5rem;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  padding-bottom: 1.5rem;
  z-index: 5;
  @media (min-width: 768px) {
    position: static;
    border-bottom: 2px solid var(--light-grayish-blue);
    padding-top: 0;
    padding-bottom: 0;
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
  margin-right: 1.375rem;
  padding: 7px;
  cursor: pointer;
  position: relative;
  @media (min-width: 768px) {
    margin-right: 2.875rem;
  }

  .cart-count {
    background-color: var(--clr-accent);
    color: var(--white);
    font-weight: 700;
    font-size: 10px;
    padding: 1px 6px;
    border-radius: 6px;
    position: absolute;
    top: 0;
    right: 0;
  }
}

.header-side {
  @media (min-width: 768px) {
    padding: 1.5rem 0;
  }
}

@keyframes fadeSlide {
  0% {
    opacity: 0;
    /* background: red; */
    transform: translateY(-20px);
  }

  50% {
    opacity: 0.5;
    transform: translateY(-10px);
  }
  70% {
  }
  100% {
    opacity: 1;
    /* background: blue; */
    transform: translateY(20rem);
  }
}

.cart-enter-active,
.cart-leave-active {
  transition: all 350ms ease;
}

.cart-count-enter-active,
.cart-count-leave-active {
  transition: all 200ms ease-out;
}

.cart-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.cart-count-enter-from {
  opacity: 0;
  transform: translateY(-5px);
}

.cart-leave-to,
.cart-count-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.cart-enter-to,
.cart-leave-from,
.cart-count-enter-to,
.cart-count-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
