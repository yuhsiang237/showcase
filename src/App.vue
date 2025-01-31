<template>
  <div class="banner"></div>
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
