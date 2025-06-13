<template>
  <!-- 興趣學習 -->
  <div class="work-item-area wow fadeIn" data-wow-duration="2s">
    <div class="container pt-3 pb-5">
      <div class="row">
        <div class="coltext-center">
          <span class="overlay-title">興趣學習</span>
        </div>
      </div>
      <div class="work-item-grid">
        <div
          v-for="item in interestItemData"
          :key="item"
          class="work-item-box"
          @click="openModal(item)"
        >
          <figure>
            <LazyImg :src="item.img" />
          </figure>
          <h3>
            <span>{{ item.subtitle }}</span>
            <div>{{ item.title }}</div>
          </h3>
        </div>
      </div>
    </div>
  </div>
  <!-- ./興趣學習-->
  <!-- 使用 DModal 元件 -->
  <WorkItemModal class="work-item-modal" @close="handleClose" ref="modal">
    <div class="container">
      <div class="row">
        <div class="img col-md-6 col-sm-12">
          <img :src="workItemModalData.img" />
        </div>
        <div class="content col-md-6 col-sm-12">
          <div class="mb-3">
            <div class="subtitle">
              {{ workItemModalData.subtitle }}
            </div>
            <div class="title mb-3">
              {{ workItemModalData.title }}
            </div>

            <div
              class="description mb-2"
              v-html="workItemModalData.description"
            ></div>
          </div>
          <button v-if="workItemModalData.link" class="mb-3">
            <a :href="workItemModalData.link" target="_blank"
              >前往查看 <i class="fa-sm fas fa-angle-right"></i
            ></a>
          </button>
          <div class="tag mb-3">
            <span v-for="item in workItemModalData.tag" :key="item">
              #{{ item }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </WorkItemModal>
</template>

<script>
import { ref } from "vue";
import Demo from "@/assets/image/demo.png";

import Int1Img from "@/assets/image/interest/1.jpg";
import Int2Img from "@/assets/image/interest/2.jpg";
import Int3Img from "@/assets/image/interest/3.jpg";
import Int4Img from "@/assets/image/interest/4.jpg";
import Int5Img from "@/assets/image/interest/5.jpg";
import Int6Img from "@/assets/image/interest/6.jpg";
import Int7Img from "@/assets/image/interest/7.jpg";
import Int8Img from "@/assets/image/interest/8.jpg";
import Int9Img from "@/assets/image/interest/9.jpg";
import Intm1Img from "@/assets/image/interest/m1.png";

import DModal from "@/components/common/DModal.vue";
import LazyImg from "@/components/common/LazyImg.vue";

export default {
  name: "interestitem-view",
  components: {
    WorkItemModal: DModal,
    LazyImg: LazyImg,
  },
  setup() {
    const demo = ref(Demo);
    const modal = ref(null);
      const workItemModalData = ref({
      title: "",
      subtitle: "",
      img: "",
      link: "",
      description: "",
    });
    const interestItemData = ref([
      {
        title: "✧",
        subtitle: "打光練習",
        img: Intm1Img,
        description:
          "透過光影來區分景別，構成畫面練習",
      },
      {
        title: "✧",
        subtitle: "比對意識練習",
        img: Int1Img,
        description:
          "8開	B4	38cmx26cm。<br/> 主要為對畫面臨摹的學習、形狀層級等。",
      },
      {
        title: "✧",
        subtitle: "比對意識練習",
        img: Int9Img,
        description:
          "8開	B4	38cmx26cm。<br/> 主要為對畫面臨摹的學習、形狀層級等。",
      },
      {
        title: "✧",
        subtitle: "比對意識練習",
        img: Int2Img,
        description:
          "8開	B4	38cmx26cm。<br/> 主要為對畫面臨摹的學習、形狀層級等。",
      },
      {
        title: "✧",
        subtitle: "比對意識練習",
        img: Int3Img,
        description:
          "8開	B4	38cmx26cm。<br/> 主要為對畫面臨摹的學習、形狀層級等。",
      },
      {
        title: "✧",
        subtitle: "比對意識練習",
        img: Int4Img,
        description:
          "8開	B4	38cmx26cm。<br/> 主要為對畫面臨摹的學習、形狀層級等。",
      },
      {
        title: "✧",
        subtitle: "比對意識練習",
        img: Int6Img,
        description:
          "8開	B4	38cmx26cm。<br/> 主要為對畫面臨摹的學習、形狀層級等。",
      },
      {
        title: "✧",
        subtitle: "比對意識練習",
        img: Int7Img,
        description:
          "8開	B4	38cmx26cm。<br/> 主要為對畫面臨摹的學習、形狀層級等。",
      },
      {
        title: "✧",
        subtitle: "透視練習",
        img: Int5Img,
        description: "8開	B4	38cmx26cm。<br/> 透視基礎學習",
      },
      {
        title: "✧",
        subtitle: "透視練習",
        img: Int8Img,
        description: "8開	B4	38cmx26cm。<br/> 透視基礎學習",
      },
    ]);
  
  
     const openModal = (workItem) => {
      if (modal.value) {
        modal.value.openModal();
        workItemModalData.value = workItem;
      }
    };

    const handleClose = () => {
      console.log("Modal 被關閉了！");
      workItemModalData.value = {
        title: "",
        subtitle: "",
        img: "",
        link: "",
        description: "",
      };
    };

    return {
      demo,
      openModal,
      handleClose,
      modal,
      workItemModalData,
      interestItemData,
    };
  },
};
</script>
