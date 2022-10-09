<script>
import TheHeader from "../components/TheHeader.vue";

export default {
  emits: ["open-menu"],
  components: { TheHeader },
};
</script>

<template>
  <main>
    <TheHeader @open-menu="$emit('open-menu')" />
  </main>
</template>
