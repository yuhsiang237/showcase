<template>
  <div class="read-more-wrapper">
    <div
      ref="contentRef"
      class="content"
      :style="{
        maxHeight: isExpanded ? fullHeight + 'px' : collapsedHeight + 'px',
      }"
    >
      <slot />
    </div>

    <!-- 漸層遮罩和按鈕 -->
    <div v-if="showToggle && !isExpanded" class="gradient-overlay">
      <button @click="toggle" class="toggle-btn">
        展開全文
        <i
          class="fas fa-chevron-down arrow-icon"
          style="color: #e4443c"
          :class="{ rotated: isExpanded }"
        ></i>
      </button>
    </div>

    <!-- 收合按鈕（展開後） -->
    <button
      v-if="showToggle && isExpanded"
      @click="toggle"
      class="collapse-btn"
    >
      收合
      <i
        class="fas fa-chevron-up arrow-icon"
        style="color: #e4443c"
        :class="{ rotated: !isExpanded }"
      ></i>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";

const props = defineProps({
  collapsedHeight: {
    type: Number,
    default: 96, // px，高度大約等於 4 行文字
  },
});

const isExpanded = ref(false);
const fullHeight = ref(0);
const contentRef = ref(null);
const showToggle = ref(false);

const toggle = () => {
  isExpanded.value = !isExpanded.value;
};

onMounted(async () => {
  await nextTick();
  const el = contentRef.value;
  if (el) {
    fullHeight.value = el.scrollHeight;
    if (fullHeight.value > props.collapsedHeight + 20) {
      showToggle.value = true;
    }
  }
});
</script>

<style scoped>
.read-more-wrapper {
  position: relative;
  font-size: 16px;
  line-height: 1.6;
}

.content {
  overflow: hidden;
  transition: max-height 0.4s ease;
}

/* 遮罩 + 按鈕容器 */
.gradient-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: linear-gradient(
    to bottom,
    transparent,
    white
  ); /* 背景依據實際色調調整 */
  display: flex;
  justify-content: center;
  align-items: flex-end;
  pointer-events: none; /* 防止遮罩阻擋點擊 */
}

.toggle-btn {
  position: relative;
  margin-bottom: -5px;
  padding-left: 50px;
  padding-right: 50px;
  background: transparent;
  color: black;
  border: none;
  cursor: pointer;
  font-size: 16px;
  pointer-events: auto; /* 讓按鈕可以點擊 */
}

/* 展開後收合按鈕 */
.collapse-btn {
  margin-top: 8px;
  background: none;
  color: black;

  border: none;
  cursor: pointer;
  font-size: 14px;
}
.arrow-icon {
  margin-left: 4px;
  transition: transform 0.3s ease;
}
.arrow-icon.rotated {
  transform: rotate(180deg);
}
</style>
