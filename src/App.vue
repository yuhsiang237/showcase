<template>
  <Banner />
  <RouterView />
  <GoTop />
  <AppFooter />
</template>
<script>
import { RouterView } from "vue-router";
import GoTop from "./components/common/GoTop.vue";
import Banner from "./components/common/Banner.vue";
import AppFooter from "./components/common/Footer.vue";

export default {
  name: "app",
  components: {
    RouterView,
    GoTop,
    Banner,
    AppFooter,
  },
  setup() {},
};
</script>
