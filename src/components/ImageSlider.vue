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
    setImg(id) {
      this.activeId = id;
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
    <div class="slider__thumbnails">
      <div
        v-for="img in $store.state.product.images.thumbnails"
        :key="img.id"
        class="slider__thumbnail thumb"
        :class="{ 'slider__thumbnail--active': img.id == activeId }"
        @click="setImg(img.id)"
      >
        <img :src="img.url" alt="" />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
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
</style>
