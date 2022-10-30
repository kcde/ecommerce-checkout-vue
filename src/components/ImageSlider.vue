<script>
// TODO: implement apple pie giraffe image carousel
// FIXME: all image will be show but use the opacity to hide and show image
// REFACTOR:  also make the main image to have a hover effect like that of seyi.dev's own //fingers crossed on that

//TODO: make image full width same as the slide section width
import NextButton from "./NextButton.vue";
import PrevButton from "./PrevButton.vue";
export default {
  components: { NextButton, PrevButton },
  data() {
    return {
      activeId: 1,
    };
  },

  methods: {
    nextImg() {
      this.activeId < this.product.images.main.length && this.activeId++;
    },
    prevImg() {
      this.activeId > 1 && this.activeId--;
    },
  },

  computed: {
    product() {
      return this.$store.state.product;
    },
  },
};
</script>
<template>
  <div class="slider relative">
    <!-- slider image should have border on desktop and no border on mobile -->
    <div class="slider__image">
      <img
        v-for="img in $store.state.product.images.main"
        :key="img.id"
        :src="img.url"
        alt="show image"
        :class="{ active: img.id == activeId }"
      />

      <!-- hide slider controls on desktop -->
      <div class="slider__control slider__control--left" @click="prevImg">
        <PrevButton />
      </div>
      <div class="slider__control slider__control--right" @click="nextImg">
        <NextButton />
      </div>
    </div>

    <!-- hide slider thumbnails on mobile -->
    <div class="slider__thumbnails"></div>
  </div>
</template>
<style scoped lang="scss">
.slider {
  width: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
  margin: 0 auto;

  @media (min-width: 758px) {
    /* max-width: 400px; */
    border-radius: 10px;
  }

  &__image {
    height: clamp(200px, 100vh, 300px);
    @media (min-width: 1024px) {
      height: clamp(200px, 100vh, 450px);
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
}
</style>
