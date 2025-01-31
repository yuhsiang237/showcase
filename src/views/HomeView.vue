<template>
  <!-- 自我介紹 -->
  <div class="intro-area mb-3">
    <div class="logo">@Yuhsiang237</div>
    <div class="container py-4">
      <div class="row">
        <div class="col-8">
          <div class="text1 mb-3">自我介紹</div>
          <div v-html="meData"></div>
        </div>
        <div class="col-4">
          <div class="d-flex justify-content-end">
            <img
              width="300"
              src="https://avatars.githubusercontent.com/u/12533553?v=4"
            />
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
            <div v-for="item in skillData.skills" :key="item">{{ item }}</div>
          </div>
          <div v-html="skillData.description"></div>
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
          v-for="item in workitemData"
          :key="item"
          class="work-item-box"
          @click="openModal(item)"
        >
          <figure>
            <img :src="item.img" />
          </figure>
          <h3>
            <span>{{ item.subtitle }}</span>
            <em>{{ item.title }}</em>
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
        <div class="col">
          <img width="100%" height="100%" :src="workItemModalData.img" />
        </div>
        <div class="col">{{ workItemModalData.description }}</div>
      </div>
    </div>
  </WorkItemModal>
</template>

<script>
import { ref } from "vue";
import Demo from "@/assets/image/demo.png";
import EsunbankImg from "@/assets/image/workitem/esunbank.png";
import KgibankImg from "@/assets/image/workitem/kgibank.png";
import MgovImg from "@/assets/image/workitem/mgov.png";
import AfaImg from "@/assets/image/workitem/afa.png";
import ErpImg from "@/assets/image/workitem/erp.png";

import DModal from "@/components/DModal.vue";

export default {
  name: "show-case-view",
  components: {
    WorkItemModal: DModal,
  },
  setup() {
    const demo = ref(Demo);
    const modal = ref(null);
    const meData = ref(
      "往前端與畫面呈現邁進。在畢業後五年工作中摸索後發現自己仍然喜歡做與圖像相關的工作。目前主要爲前端網站工程師。",
    );
    const workItemModalData = ref({
      title: "",
      subtitle: "",
      img: "",
      link: "",
      description: "",
    });
    const skillData = {
      skills: ["HTML5", "Vue3", "JQuery", "Bootstrap", "CSS/SCSS/RWD"],
      description: `<p>除了主要寫的Vue3框架外，在其他專案亦碰到了Angular、React，整體寫下來還是Vue3的維護與彈性最好。此外，這份網頁履歷就是使用Vue3製作 (茶)。<br/>
            熟悉RWD切版與API異步呼叫處理。</p>`,
    };
    const workitemData = ref([
      {
        title: "玉山銀行信貸",
        subtitle: "ESUN BANK",
        img: EsunbankImg,
        link: "https://event.esunbank.com.tw/mkt/loan/DG/index.html",
        description:
          "玉山銀行信用貸款行員後台，負責用Vue3進行開發，後台應用，有使用路由與元件（component）開發。此外，因為該案而碰觸到Typescript 開發。",
      },
      {
        title: "凱基銀行",
        subtitle: "KGI BANK",
        img: KgibankImg,
        link: "https://www.kgibank.com.tw/zh-tw/",
        description:
          "凱基銀行後台，使用Angular.js開放，當初玉山案子做完後來到凱基這邊做新網站的升級。其中有串接過銀行的外國轉帳API",
      },
      {
        title: "田邊好幫手",
        subtitle: "M GOV",
        img: MgovImg,
        link: "https://m.moa.gov.tw/",
        description:
          "田邊一把抓，負責協助設計師切版，並在需要時進MVC專案修正CSS或Javascript產生之bug",
      },
      {
        title: "農糧署追溯",
        subtitle: "QRCAFA",
        img: AfaImg,
        link: "https://qrc.afa.gov.tw/",
        description:
          "田邊一把抓，負責協助設計師切版，並在需要時進MVC專案修正CSS或Javascript產生之bug",
      },
      {
        title: "農業ERP",
        subtitle: "ERP",
        img: ErpImg,
        link: "https://www.linkjoin.com.tw/erp/",
        description: "負責該網站之切版工作，並與設計師配合釐清客戶需求",
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
    };

    return {
      demo,
      openModal,
      handleClose,
      modal,
      skillData,
      workItemModalData,
      workitemData,
      meData,
    };
  },
};
</script>
