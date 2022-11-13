<script>
import AmountInput from "../components/AmountInput.vue";
import TheBadge from "../components/TheBadge.vue";
import TheButton from "../components/TheButton.vue";
import TheHeader from "../components/TheHeader.vue";
import CartIcon from "../components/icons/CartIcon.vue";
import ImageSlider from "../components/ImageSlider.vue";
import { mapActions, mapGetters } from "vuex";
import TheLightbox from "../components/TheLightbox.vue";
export default {
  emits: ["open-menu"],
  components: {
    TheHeader,
    TheBadge,
    AmountInput,
    TheButton,
    CartIcon,
    ImageSlider,
    TheLightbox,
  },
  data() {
    return {
      isLightboxOpen: false,
      windowSize: window.innerWidth,
    };
  },
  methods: {
    addProductToCart() {
      if (this.$store.state.productToCartCount != 0) {
        this.addToCart({
          productCount: this.$store.state.productToCartCount,
          price: this.productPrice,
        });
        this.updateProductToCartCount({ count: 0 });
      }
    },
    openLightbox() {
      //TODO: open lightbox only on destop view
      this.isLightboxOpen = true;
    },

    closeLightbox() {
      this.isLightboxOpen = false;
    },

    ...mapActions("cart", ["addToCart"]),
    ...mapActions(["updateProductToCartCount"]),
  },

  mounted() {
    window.addEventListener("resize", () => {
      this.windowSize = window.innerWidth;
    });
  },
  computed: {
    ...mapGetters(["productPrice"]),

    isDesktop() {
      return this.windowSize >= 1024;
    },
  },
};
</script>

<template>
  <TheHeader @open-menu="$emit('open-menu')" />

  <main>
    <Transition name="light-box">
      <TheLightbox
        v-if="isLightboxOpen && isDesktop"
        @close-lightbox="closeLightbox"
      />
    </Transition>

    <div class="main-container">
      <section class="relative">
        <ImageSlider @open-lightbox="openLightbox" />
      </section>
      <section class="product-details">
        <div class="product-details__container">
          <p class="tagline">sneaker company</p>
          <h1 class="product-name">fall limited edition sneakers</h1>
          <p class="product-description">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer
          </p>

          <div class="price">
            <div class="flex gap-3 align-center">
              <p class="price__main">$125.00</p>
              <div class="price__discount">
                <TheBadge>50%</TheBadge>
              </div>
            </div>
            <p class="price__old">$250.00</p>
          </div>
          <div class="product-checkout">
            <div class="amount-input-container"><AmountInput /></div>
            <div class="add-to-cart">
              <TheButton @click="addProductToCart">
                <p class="add-to-cart__button">
                  <span> <CartIcon color="#ffffff" /> </span>Add to cart
                </p>
              </TheButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped lang="scss">
.main-container {
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    padding: 0 3.125rem;
    margin-top: 4rem;
    gap: var(--space-6);
    & > * {
      flex: 1;
    }
  }
  @media (min-width: 1024px) {
    gap: 6rem;
  }
}
.price {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.3rem;
  margin-bottom: 2rem;

  @media (min-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-2);
  }
  &__main {
    font-weight: 700;
    font-size: 1.5rem;
  }
  &__old {
    font-size: 12px;
    color: var(--clr-muted-text);
    text-decoration: line-through;
    font-weight: 700;
  }
}
.tagline {
  text-transform: uppercase;
  color: var(--clr-accent);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 1rem;
}

.product-name {
  font-size: clamp(1.3125rem, 3vw, 3rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.2rem;
}

.product-description {
  color: var(--clr-secondary);
  font-size: clamp(0.875rem, 5vw, 16px);
  line-height: 1.6;
}

.product-details {
  padding: 1.5rem;
  @media (min-width: 768px) {
    padding: 0;
  }
}

.add-to-cart {
  &__button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    gap: var(--space-4);
  }
}

.product-checkout {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    & > * {
      flex-grow: 1;
      /* flex-basis: 100px; */
    }

    .add-to-cart {
      flex-grow: 2;
    }
  }
}

.light-box-enter-from,
.light-box-leave-to {
  opacity: 0;
}

.light-box-enter-to,
.light-box-leave-from {
  opacity: 1;
}

.light-box-enter-active {
  transition: opacity 150ms ease-in;
}
.light-box-leave-active {
  transition: opacity 150ms ease-out;
}
/* just trying out opacity for Transition component */
@keyframes fadeSlide {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
