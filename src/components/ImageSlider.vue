<script>
import NextButton from "./NextButton.vue";
import PrevButton from "./PrevButton.vue";
export default {
  emits: ["open-lightbox"],
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
    openLightbox() {
      if (window.innerWidth >= 1024) {
        this.$emit("open-lightbox");
      }
    },
    zoomImage(e) {
      const selectedImg = e.target.querySelector("img.active");
      const mousePosX = e.clientX;
      const mousePosY = e.clientY;

      //divide by 2 so it can balnce out on both ends of the X-axis
      const originX = (mousePosX - e.target.offsetLeft) / 2;
      const originY = mousePosY - e.target.offsetTop;

      if (selectedImg && window.innerWidth >= 1024) {
        selectedImg.style.transformOrigin = `${originX}px ${originY}px`;
        selectedImg.style.transform = "scale(1.2)";
      }
    },

    resetZoom(e) {
      const selectedImg = e.target.querySelector("img.active");
      selectedImg.style.transformOrigin = "center";
      selectedImg.style.transform = "scale(1)";
    },
  },

  computed: {
    product() {
      return this.$store.state.product;
    },
  },

  // mounted() {
  //   // TODO: use vue specific event listeners
  //   this.$refs.sliderImage.addEventListener("mousemove", (e) => {
  //     const selectedImg = e.target.querySelector("img.active");
  //     const mousePosX = e.clientX;
  //     const mousePosY = e.clientY;

  //     //divide by 2 so it can balnce out on both ends of the X-axis
  //     const originX = (mousePosX - e.target.offsetLeft) / 2;
  //     const originY = mousePosY - e.target.offsetTop;

  //     if (selectedImg && window.innerWidth >= 1024) {
  //       selectedImg.style.transformOrigin = `${originX}px ${originY}px`;
  //       selectedImg.style.transform = "scale(1.2)";
  //     }
  //   });

  //   this.$refs.sliderImage.addEventListener("mouseleave", (e) => {
  //     const selectedImg = e.target.querySelector("img.active");
  //     selectedImg.style.transformOrigin = "center";
  //     selectedImg.style.transform = "scale(1)";
  //   });
  // },
};
</script>
<template>
  <!-- <TheLightbox /> -->
  <div class="slider relative">
    <!-- slider image should have border on desktop and no border on mobile -->
    <div
      class="slider__image"
      ref="sliderImage"
      @click="openLightbox"
      @mousemove="zoomImage"
      @mouseleave="resetZoom"
    >
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
        class="slider__thumbnail"
        :class="{ 'slider__thumbnail--active': img.id == activeId }"
        @click="setImg(img.id)"
      >
        <img :src="img.url" alt="" />
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.slider {
  width: 100%;
  overflow: hidden;
  position: relative;
  margin: 0 auto;

  &__image {
    height: clamp(200px, 100vh, 300px);
    width: 100%;
    position: relative;
    cursor: pointer;

    @media (min-width: 758px) {
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
      bottom: 0;
      right: 0;
      object-fit: cover;
      width: 100%;
      opacity: 0;
      transform: scale(1.1);
      transform-origin: center;
      transition: transform 350ms ease, opacity 350ms ease;
      z-index: -1;
      border-radius: inherit;
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
    max-height: 90px;

    img {
      min-height: 100%;
    }

    @media (min-width: 1024px) {
      display: flex;
    }

    & > * {
      border-radius: 10px;
      overflow: hidden;
    }
  }

  &__thumbnail {
    border: 2px solid transparent;
    transition: all 350ms ease;
    position: relative;
    overflow: hidden;
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
