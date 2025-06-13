<template>
  <div v-if="isVisible" class="go-top" @click="scrollToTop">
    <i class="fas fa-arrow-up"></i>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";

export default {
  setup() {
    const isVisible = ref(false);

    const handleScroll = () => {
      if (window.scrollY > 300) {
        isVisible.value = true;
      } else {
        isVisible.value = false;
      }
    };

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return {
      isVisible,
      scrollToTop,
    };
  },
};
</script>
