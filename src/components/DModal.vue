<template>
  <div class="d_modal" :class="{ show: isVisible }" @click.self="closeModal">
    <p class="js-close close1" @click="closeModal">
      <span></span>
      <span></span>
    </p>
    <div class="d_modal_slot">
      <slot>
        <!-- slot area-->
      </slot>
    </div>
  </div>
</template>
<script>
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "DModal",
  setup(props, { emit }) {
    // 使用 ref 來定義響應式數據
    const isVisible = ref(false); // 控制 Modal 顯示與隱藏

    // 打開 Modal
    const openModal = () => {
      isVisible.value = true;
    };

    // 關閉 Modal
    const closeModal = () => {
      isVisible.value = false;
      emit("close"); // 發送 close 事件給父組件
    };

    return {
      isVisible,
      openModal,
      closeModal,
    };
  },
});
</script>
