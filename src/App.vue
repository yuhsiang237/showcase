<template>
  <Banner />
  <RouterView />
  <GoTop />
  <AppFooter />
</template>
<script>
import { RouterView } from "vue-router";
import GoTop from "./components/GoTop.vue";
import Banner from "./components/Banner.vue";
import AppFooter from "./components/Footer.vue";

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
