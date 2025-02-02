<template>
  <div class="banner">
    <div
      class="d-flex text-center align-items-center justify-content-center"
      style="height: 100vh; color: #fff"
    >
      <div>
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

export default {
  name: "app",
  components: {
    RouterView,
  },
  setup() {},
};
</script>
