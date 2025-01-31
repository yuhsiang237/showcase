<template>
  <!-- 自我介紹 -->
  <div class="intro-area mb-3">
    <div class="logo">@Yuhsiang237</div>
    <div class="container py-4">
      <div class="row">
        <div class="col-8">
          <div class="text1 mb-3">自我介紹</div>
          <div>
            自我介紹文字自我介紹文字自我介紹文字自我介紹文字自我介紹文字自我介紹文字
            自我介紹文字自我介紹文字自我介紹文字自我介紹文字自我介紹文字
            自我介紹文字自我介紹文字自我介紹文字自我介紹文字
            自我介紹文字自我介紹文字自我介紹文字
          </div>
        </div>
        <div class="col-4">
          <div class="d-flex justify-content-end">
            <img :src="demo" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 技術 -->
  <div class="skill-area mb-3">
    <div class="container py-4">
      <div class="row">
        <div class="col bold mb-3">技術</div>
      </div>
      <div class="row">
        <div class="col">
          <div class="skill-enum mb-2">
            <div>HTML5</div>
            <div>Vue</div>
            <div>CSS/SCSS</div>
          </div>
          <div>
            <p>時代會變OOO~熟悉API呼叫與同步...</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 作品 -->
  <div class="work-item-area">
    <div class="container pt-3 pb-5">
      <div class="row">
        <div class="col bold text1 text-center">作品一覽</div>
      </div>
      <div class="work-item-grid">
        <div
          v-for="item in 10"
          :key="item"
          class="work-item-box"
          @click="openModal"
        >
          <figure>
            <img src="https://picsum.photos/200/300" />
          </figure>
          <h3>
            <span>XXX</span>
            <em>標題</em>
          </h3>
        </div>
      </div>
    </div>
  </div>
  <!-- ./作品-->
  <!-- 個人經歷 -->
  <div class="work-exp-area">
    <div class="container py-4">
      <div class="row">
        <div class="col bold mb-3">個人經歷</div>
      </div>
      <div class="row work-exp-card">
        <div class="col-2 date">2018-2020</div>
        <div class="col-10 description">做了OOO使用了技術</div>
      </div>
      <div class="row work-exp-card">
        <div class="col-2 date">2018-2020</div>
        <div class="col-10 description">做了OOO使用了技術</div>
      </div>
    </div>
  </div>
  <!-- ./個人經歷 -->
  <!-- footer -->
  <div class="d-flex justify-content-center align-items-center footer-area">
    Yuhsiang copyright
  </div>
  <!-- ./footer -->
  <!-- 使用 DModal 元件 -->
  <WorkItemModal @close="handleClose" ref="modal">
    <div class="container">
      <div class="row">
        <div class="col"><img src="https://picsum.photos/200/300" /></div>
        <div class="col">123<br />456</div>
      </div>
    </div>
  </WorkItemModal>
</template>

<script>
import { ref } from "vue";
import Demo from "@/assets/image/demo.png";
import DModal from "@/components/DModal.vue";

export default {
  name: "show-case-view",
  components: {
    WorkItemModal: DModal,
  },
  setup() {
    const demo = ref(Demo);
    const modal = ref(null);

    const openModal = () => {
      if (modal.value) {
        modal.value.openModal();
      }
    };

    const handleClose = () => {
      console.log("Modal 被關閉了！");
    };

    return {
      demo,
      openModal,
      handleClose,
      modal,
    };
  },
};
</script>
