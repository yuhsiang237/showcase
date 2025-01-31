<template>
  <div class="d_modal" style="display: block">
    <p class="js-close close1" @click="closeModal">
      <span></span>
      <span></span>
    </p>
    <div>
      <div class="container">123</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DModal",
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>
