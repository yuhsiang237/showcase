<template>
  <img v-lazy="src" :alt="alt" :width="width" :height="height" />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: "",
    },
    width: {
      type: [String, Number],
      default: "100%",
    },
    height: {
      type: [String, Number],
      default: "auto",
    },
  },
  setup(props) {
    return {
      ...props,
    };
  },
};
</script>

<style scoped>
img[lazy="loading"] {
  filter: blur(20px);
  background: linear-gradient(90deg, #eee 25%, #ddd 37%, #eee 63%);
  background-size: 400% 100%;
  animation: shimmer 1.4s ease infinite;
  transition:
    filter 0.5s ease-out,
    opacity 0.5s ease-out;
  opacity: 0.6;
}

img[lazy="loaded"] {
  filter: blur(0);
  background: none;
  opacity: 1;
  transition:
    filter 0.5s ease-in,
    opacity 0.5s ease-in;
}

img[lazy="error"] {
}

@keyframes shimmer {
  0% {
    background-position: -400px 0;
  }
  100% {
    background-position: 400px 0;
  }
}
</style>
