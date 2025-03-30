<template>
  <div><img style="width: 100%" :src="backgroundImage" /></div>
</template>
<script>
import backgroundImage from "@/assets/image/bg.png";

export default {
  name: "app-banner",
  components: {},
  setup() {
    return { backgroundImage };
  },
};
</script>
