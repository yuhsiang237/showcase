<template>
  <!-- 自我介紹 -->
  <div class="intro-area">
    <div class="logo">@Yuhsiang237</div>
    <div class="container large">
      <div class="row wow fadeInUp" data-wow-duration="2s">
        <div class="col-md-8 col-sm-12">
          <div class="title1 mb-3">自我介紹</div>
          <div
            data-wow-duration="10s"
            class="medata wow animate__animated animate__fadeIn"
            v-html="meData"
          ></div>
        </div>
        <div class="col-md-4 col-sm-12">
          <div class="d-flex justify-content-end">
            <img :src="MeImg" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 技術 -->
  <div class="skill-area mb-3">
    <div class="container py-4 wow fadeIn" data-wow-duration="1s">
      <div class="row">
        <div class="title1 col mb-3">技術棧</div>
      </div>
      <div class="row">
        <div class="col">
          <span class="skill-enum mb-2">
            <div v-for="item in skillData.skills" :key="item">{{ item }}</div>
          </span>
          <div class="description" v-html="skillData.description"></div>
        </div>
      </div>
    </div>
  </div>
  <!-- 作品 -->
  <div class="work-item-area wow fadeIn" data-wow-duration="2s">
    <div class="container pt-3 pb-5">
      <div class="row">
        <div class="col title2 text-center">作品一覽</div>
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
    <div class="container py-4 wow fadeIn" data-wow-duration="2s">
      <div class="row">
        <div class="col title2 mb-3">個人經歷</div>
      </div>
      <div
        class="row work-exp-card mb-2"
        v-for="item in workExpData"
        :key="item"
      >
        <div class="col-md-2 col-3 date">{{ item.date }}</div>
        <div class="col description" v-html="item.description"></div>
      </div>
    </div>
  </div>
  <!-- ./個人經歷 -->
  <!-- footer -->
  <div class="footer-area">
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
          <button class="mb-3">
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
      `你好，我是郁翔(YU HSIANG)<br/><br/>
      在過往工作中，發覺仍然喜歡做與圖像相關的工作。<br/>
      因此，職涯方向為前端軟體工程師。<br/>
      並以能穩定開發、產出為主。<br/>
      <br/>
      <a href="https://github.com/yuhsiang237"><i class="fa-brands fa-github"></i> Github: yuhsiang237</a>
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
      skills: ["HTML", "Vue3","Javscript ES6", "JQuery", "Bootstrap", "CSS/SCSS/RWD","C# .net core API"],
      description: `<p>
      熟練使用Javascript與SCSS搭配Bootstrap開發，最近的工作使用框架為Vue3
      <br/>
      熟悉RWD切版、API異步呼叫處理(併發/同步)、RESTful API串接
      <br/>
      熟悉網站完整開發流程(敏捷開發)，開發至部署<br/>並曾參與開發大型專案、政府案、銀行應用網站開發<br/>
      使用Git進行專案存庫代碼控管(Azure DevOps / Gitlab)<br/>
      專案討論軟體(Teams)<br/>
      </p>`,
    };
    const workitemData = ref([
      {
        title: "玉山銀行信貸",
        subtitle: "ESUN BANK",
        img: EsunbankImg,
        link: "https://event.esunbank.com.tw/mkt/loan/DG/index.html",
        description: `<p>玉山銀行信用貸款行員後台開發，為該頁面申貸後行內審核流程應用。使用Vue3，並參與該案元件、頁面前端開發。此外，因為此案而碰觸到Typescript開發。</p>
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
        date: "2024-2025",
        description: `<div class="mb-1"><b>兼職 / 多方職涯嘗試</b></div>
        兼職了「連鎖日商壽司店-藏壽司」、「UBER EAT外送」，進行多方嘗試後，並梳理職涯方向。會做這個嘗試是因為過去只做過工程師，透過兼職了解除了工程師外的產業，並且在30歲前確定好職涯方向。<br/>
        `,
      },
      {
        date: "2024",
        description: `<div class="mb-1"><b>一卡通票證股份有限公司 / 專案工程師</b></div>
        負責底層交易系統開發，為「iPASS MONEY乘車碼」、「一卡通刷卡」的底層專案，為純SQL Server與Stored Procedure資料庫專案，工作一段時間後評估不大適合。與過往工作關聯性低，因偏向在程式端寫程式，而非在純資料庫上。`,
      },
      {
        date: "2022-2024",
        description: `<div class="mb-1"><b>緯創軟體股份有限公司 / 軟體工程師(全端)</b></div>
        [銀行駐點開發]<br/>
◎玉山銀行：信用貸款整合系統<br/>
 - 前端:開發行員後台的貸款審核系統，申貸至核貸，處理頁面百頁以上，API串接百隻以上<br/>
 (技術:Vue3、Typescript、SCSS)<br/>
 - 後端:撰寫微服務API，並依照需求提供前端網站串接，並撰寫單元測試供QA驗測<br/>
 (技術:C#、.net core API、Docker、MSSQL、PostgreSQL)<br/>
<br/>

◎凱基銀行：外幣轉帳、網銀開發、卡片點數兌換、多語系i18n<br/>
 - 前端:現行網站維護，依照需求單進行調整<br/>
 (技術:Angular、Javscript ES6、SCSS)<br/>
 - 後端:撰寫微服務API、行內API對接<br/>
 (技術:C#、.net core API、Docker、MSSQL)<br/>`,
      },
      {
        date: "2021",
        description: `<div class="mb-1"><b>個人接案 / 軟體工程師</b></div>
        網站工程師、API撰寫。<br/>
        內容主要為Google Firebase與Google Flutter專案開發。<br/>`,
      },
      {
        date: "2018-2020",
        description: `<div class="mb-1"><b>凌誠科技股份有限公司 / 前端網站工程師</b></div>
        前端網站工程師，與設計師協作，含切版工作、設計討論、專案上線後與後端程式調整<br/>
        在任職期間參予了7份專案，主要為政府案，皆順利完成結案。<br/>
        (技術: HTML、SCSS、JQuery、Javascript ES6、C#、.net core MVC、React)<br/>
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
      workItemModalData.value = {
        title: "",
        subtitle: "",
        img: "",
        link: "",
        description: "",
      };
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
