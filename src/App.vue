<template>
<div><img style="width:100%"
:src="backgroundImage"/></div>

  <RouterView />
  <GoTop />
</template>
<script>
import { RouterView } from "vue-router";
import backgroundImage from "@/assets/image/bg.png";
import GoTop from "./components/GoTop.vue";

export default {
  name: "app",
  components: {
    RouterView,
    GoTop,
  },
  setup() {
    return { backgroundImage };
  },
};
</script>
