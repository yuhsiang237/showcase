<template>
  <div
    class="banner"
    :style="{
      backgroundImage:
        'linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), url(' +
        backgroundImage +
        ')',
    }"
  >
    <div
      class="d-flex text-center align-items-center justify-content-center"
      style="height: 83vh; color: #fff"
    >
      <div class="wow fadeIn" data-wow-duration="2s">
        <div
          style="font-size: 3.8rem; font-weight: 100; letter-spacing: 0.2rem"
        >
          LAX's Resume
        </div>
        履歷 | 作品 | 展示
      </div>
    </div>
  </div>
  <RouterView />
</template>
<script>
import { RouterView } from "vue-router";
import backgroundImage from "@/assets/image/bg.png";

export default {
  name: "app",
  components: {
    RouterView,
  },
  setup() {
    return { backgroundImage };
  },
};
</script>
