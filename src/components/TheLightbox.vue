<script>
// TODO: implement apple pie giraffe image carousel
// FIXME: all image will be show but use the opacity to hide and show image
// REFACTOR:  also make the main image to have a hover effect like that of seyi.dev's own //fingers crossed on that

//TODO: make image full width same as the slide section width
import CloseIcon from "./icons/CloseIcon.vue";
import NextButton from "./NextButton.vue";
import PrevButton from "./PrevButton.vue";
import TheOverlay from "./TheOverlay.vue";
export default {
  emits: ["open-lightbox", "close-lightbox"],
  components: { NextButton, PrevButton, TheOverlay, CloseIcon },
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
  <TheOverlay>
    <div class="lightbox">
      <div class="slider relative">
        <!-- slider image should have border on desktop and no border on mobile -->

        <div class="relative">
          <div class="lightbox-close" @click="$emit('close-lightbox')">
            <CloseIcon />
          </div>
          <!-- this outer div id to allow the button overflow while maintaining the inner overflow hidden for the slider image -->
          <div class="slider__image" @click="$emit('open-lightbox')">
            <img
              v-for="img in $store.state.product.images.main"
              :key="img.id"
              :src="img.url"
              alt="show image"
              :class="{ active: img.id == activeId }"
            />
          </div>

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
    </div>
  </TheOverlay>
</template>
<style scoped lang="scss">
.lightbox {
  max-width: 400px;
  margin: 0 auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

.lightbox-close {
  display: flex;
  justify-content: flex-end;
  margin-bottom: var(--space-4);
}

.slider {
  overflow: visible;
  &__control {
    display: block;

    &--right {
      right: calc(var(--control-btn-size) / -2);
    }

    &--left {
      left: calc(var(--control-btn-size) / -2);
    }
  }
}

.slider__thumbnails {
  padding: 0 1.5rem;
}
</style>
