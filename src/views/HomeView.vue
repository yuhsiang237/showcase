<template>
  <!-- 自我介紹 -->
  <div class="intro-area mb-3">
    <div class="logo">@Yuhsiang237</div>
    <div class="container large py-4">
      <div class="row">
        <div class="col-8">
          <div class="title mb-3">自我介紹</div>
          <div class="medata" v-html="meData"></div>
        </div>
        <div class="col-4">
          <div class="d-flex justify-content-end">
            <img width="300" :src="MeImg" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 技術 -->
  <div class="skill-area mb-3">
    <div class="container py-4">
      <div class="row">
        <div class="title col mb-3">技術棧</div>
      </div>
      <div class="row">
        <div class="col">
          <div class="skill-enum mb-2">
            <div v-for="item in skillData.skills" :key="item">{{ item }}</div>
          </div>
          <div class="description" v-html="skillData.description"></div>
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
            <div>{{ item.title }}</div>
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
      <div
        class="row work-exp-card mb-2"
        v-for="item in workExpData"
        :key="item"
      >
        <div class="col-2 date">{{ item.date }}</div>
        <div class="col-10 description" v-html="item.description"></div>
      </div>
    </div>
  </div>
  <!-- ./個人經歷 -->
  <!-- footer -->
  <div class="d-flex justify-content-center align-items-center footer-area">
    2025 copyright & designed by LAX&nbsp;
    <a
      style="color: black; font-weight: bold; text-decoration: none"
      href="https://github.com/yuhsiang237"
      >@yuhsiang237</a
    >&nbsp;
  </div>
  <!-- ./footer -->
  <!-- 使用 DModal 元件 -->
  <WorkItemModal class="work-item-modal" @close="handleClose" ref="modal">
    <div class="container">
      <div class="row">
        <div class="col">
          <img :src="workItemModalData.img" />
        </div>
        <div class="col">
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
            <div class="tag mb-3">
              <span v-for="item in workItemModalData.tag" :key="item">
                #{{ item }}
              </span>
            </div>
          </div>
          <button>
            <a :href="workItemModalData.link" target="_blank">前往查看</a>
          </button>
        </div>
      </div>
    </div>
  </WorkItemModal>
</template>

<script>
import { ref } from "vue";
import Demo from "@/assets/image/demo.png";
import MeImg from "@/assets/image/me/me.jpeg";
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
      `你好，我是郁翔(YU HSIANG) LAX.<br/><br/>
      方向是掌握畫面呈現及畫面有關的事物。<br/>
      在摸索後得出了前端工程師。<br/>
      在五年工作中，發現自己仍然喜歡做與圖像相關的工作。<br/>
      而生活上，旅遊、露營、閱讀也是平常的生活樂趣之一。
      <br/><br/>
      近期旅遊去了不少地方，比如阿里山、富士山<br/>
      ...怎麼都是山( ^ω^)
      `,
    );
    const workItemModalData = ref({
      title: "",
      subtitle: "",
      img: "",
      link: "",
      description: "",
    });
    const skillData = {
      skills: ["HTML", "Vue3", "JQuery", "Bootstrap", "CSS/SCSS/RWD"],
      description: `<p>
      熟練使用Javascript與CSS開發，而目前較常用的前端框架為Vue3
      <br/>
      熟悉RWD切版、API異步呼叫處理、RESTful API串接
      <br/>
      熟悉網站完整開發流程，開發至部署<br/>並曾參與開發大型專案、政府案、銀行應用網站開發      
      </p>`,
    };
    const workitemData = ref([
      {
        title: "玉山銀行信貸",
        subtitle: "ESUN BANK",
        img: EsunbankImg,
        link: "https://event.esunbank.com.tw/mkt/loan/DG/index.html",
        description: `<p>玉山銀行信用貸款行員後台開發，為該頁面申貸後行內審核流程應用。
              使用Vue3，並參與該案元件、頁面前端開發。
             此外，因為此案而碰觸到Typescript開發。</p>
          `,
        tag: ["Vue3", "CSS/SCSS", "HTML", "Typescript", "Javascript"],
      },
      {
        title: "凱基網銀",
        subtitle: "KGI BANK",
        img: KgibankImg,
        link: "https://www.kgibank.com.tw/zh-tw/",
        description:
          "凱基銀行網銀後台，使用Angular.js開發，當初玉山案子做完後來到凱基這邊做新網站的升級。其中有串接過銀行的外國轉帳API",
        tag: ["Angular", "CSS/SCSS", "HTML", "Javascript"],
      },
      {
        title: "田邊好幫手",
        subtitle: "M GOV",
        img: MgovImg,
        link: "https://m.moa.gov.tw/",
        description:
          "田邊好幫手，協助設計師切版，並在上線後維護專案，調整CSS與Javascript",
        tag: ["HTML", "Javascript", "JQuery", "SCSS/CSS"],
      },
      {
        title: "農糧署追溯",
        subtitle: "QRCAFA",
        img: AfaImg,
        link: "https://qrc.afa.gov.tw/",
        description:
          "農委會政府案，在團隊中負責幫設計師切版，並套用至MVC網站中，使用到了Javascript ES6 、SCSS，並在上線後維護。",
        tag: ["HTML", "Javascript", "JQuery", "SCSS/CSS"],
      },
      {
        title: "農產ERP",
        subtitle: "ERP",
        img: ErpImg,
        link: "https://www.linkjoin.com.tw/erp/",
        description:
          "負責該一頁式網站切版工作，並與設計師配合，協助將網站更貼合客戶需求。",
        tag: ["HTML", "Javascript", "JQuery", "SCSS/CSS"],
      },
    ]);

    const workExpData = ref([
      {
        date: "2022-2024",
        description: `<div class="mb-1"><b>緯創軟體股份有限公司 / 軟體工程師</b></div>
        銀行駐點開發<br/>
玉山銀行：信用貸款後台系統、後台人員核貸審核系統，Vue3<br/>
凱基銀行：凱基銀行外幣轉帳與網銀開發，Angular`,
      },
      {
        date: "2021",
        description: `<div class="mb-1"><b>個人接案 / 軟體工程師</b></div>
        網站工程師、API撰寫<br/>`,
      },
      {
        date: "2018-2020",
        description: `<div class="mb-1"><b>凌誠科技股份有限公司 / 前端網站工程師</b></div>
        前端網站工程師，負責協助設計師切版、軟體應用維護<br/>
Work From Home遠端協作工作經驗<br/>
在任職期間參予了7份專案,皆順利完成結案。<br/>
        `,
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
      workExpData,
      demo,
      openModal,
      handleClose,
      modal,
      skillData,
      workItemModalData,
      workitemData,
      meData,
      MeImg,
    };
  },
};
</script>
