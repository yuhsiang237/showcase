<template>
  <Banner />
  <RouterView />
  <GoTop />
  <AppFooter />
</template>
<script>
import { onMounted, onBeforeUnmount } from "vue";
import { RouterView } from "vue-router";
import GoTop from "./components/common/GoTop.vue";
import Banner from "./components/common/Banner.vue";
import AppFooter from "./components/common/Footer.vue";
import Lenis from "@studio-freight/lenis";

export default {
  name: "app",
  components: {
    RouterView,
    GoTop,
    Banner,
    AppFooter,
  },
  setup() {
    let lenis;
    onMounted(() => {
      lenis = new Lenis({
        duration: 0.8, // 建議 0.4 ~ 0.8 之間
        smoothWheel: true, // ✅ 讓滾輪生效
        smoothTouch: false, // 手機觸控可以關掉
        wheelMultiplier: 1.2, // 加快一點速度
        easing: (t) => 1 - Math.pow(1 - t, 3), // 比較自然的 easeOutCubic
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    });

    onBeforeUnmount(() => {
      lenis?.destroy();
    });
  },
};
</script>
