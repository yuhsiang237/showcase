<template>
  <div class="page">
    <div class="nav">
      測試nav
    </div>
    <div class="alertbar">
   測試alertbar
    </div>
    <div class="content">
      <div>內容1</div> <div>內容</div> <div>內容</div> <div>內容</div> <div>內容</div> <div>內容</div> <div>內容</div> <div>內容</div> <div>內容</div> <div>內容</div> <div>內容</div> <div>內容</div> <div>內容</div> <div>內容</div> <div>內容</div> <div>內容</div> <div>內容</div> <div>內容</div> <div>內容</div> <div>內容</div> <div>內容3</div>
    </div>
      <div class="footerbar">
測試footerbar1<br/><br/>

    </div>
    <div class="footerbar">
測試footerbar1 最底
    </div>
  </div>
</template>

<style scoped>
.page {
   display: flex;
  flex-direction: column;
  background: red;
  width: 100%;
  height: 100dvh;
}
.nav {
  background: lightblue;
}

.alertbar {
  background: pink;
}

.content {
  background: lightgreen;
  flex: 1; /* 自動撐滿剩餘空間 */
  overflow: auto; /* 內容多了可以滾動 */
}

.footerbar {
  background: orange;
}
:global(html, body) {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden; /* 禁止捲動條 */
  overscroll-behavior: none; /* 防止 iOS 回彈 */
}
</style>
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const pageEl = ref(null)

function fixHeight() {
  if (pageEl.value) {
    // Fallback：舊版 iOS 不支援 dvh，就用 JS 設定
    pageEl.value.style.height = window.innerHeight + 'px'
  }
}

onMounted(() => {
  fixHeight()
  window.addEventListener('resize', fixHeight)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', fixHeight)
})
</script>