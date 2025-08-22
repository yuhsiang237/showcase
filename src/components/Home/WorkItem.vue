<template>
  <!-- 作品 -->
  <div class="work-item-area" ref="workRef">
    <div class="container pt-3 pb-5" ref="containerRef">
      <div class="row">
        <div class="coltext-center">
          <span class="overlay-title">作品一覽</span>
        </div>
      </div>
      <div class="work-item-grid">
        <div
          v-for="item in workitemData"
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
  <!-- ./作品-->
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
import { ref,onMounted, onBeforeUnmount,nextTick  } from "vue";
import Demo from "@/assets/image/demo.png";
import MeImg from "@/assets/image/me/me2.png";
import EsunbankImg from "@/assets/image/workitem/esunbank.png";
import KgibankImg from "@/assets/image/workitem/kgibank.png";
import MgovImg from "@/assets/image/workitem/mgov.png";
import AfaImg from "@/assets/image/workitem/afa.png";
import ErpImg from "@/assets/image/workitem/erp.png";
import Vue3Img from "@/assets/image/workitem/vue3.png";
import ODImg from "@/assets/image/workitem/od.png";
import CampDayImg from "@/assets/image/workitem/campday.png";
import PigFarm from "@/assets/image/workitem/pigfarm.png";
import ResumeImg from "@/assets/image/workitem/resume.png";

import DModal from "@/components/common/DModal.vue";
import LazyImg from "@/components/common/LazyImg.vue";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  name: "home-work-item",
  components: {
    WorkItemModal: DModal,
    LazyImg: LazyImg,
  },
  setup() {
     const containerRef = ref(null);
    const workRef = ref(null);
    let anim;
onMounted(() => {
      nextTick(() => {
        // 初始透明度
        containerRef.value.style.opacity = 0;

        anim = gsap.fromTo(
          containerRef.value,
          { opacity: 0,  }, 
          {
            opacity: 1,
            duration: 1.5,
            scrollTrigger: {
              trigger: workRef.value,
              start: "top 80%",
              end: "bottom top",
              toggleActions: "play none none none", // 滑入淡入向上，滑離淡出
            },
          }
        );
      });
    });

    onBeforeUnmount(() => {
      anim?.scrollTrigger?.kill();
    });
    const demo = ref(Demo);
    const modal = ref(null);
    const meData = ref(
      `
你好，我是郁翔 (YU HSIANG) <br/>

在過去參與的工作專案中，仍對做圖像工作感興趣，喜歡好看的設計，且對設計有所堅持。<br/>因此，將職涯方向定為前端工程師(亦可協助設計)。 <br/>
並以能穩定開發、產出為主，目前參與過專案皆於時程內完成。😉 <br/>
<br/>
對於新事物掌握速度快，對新出框架或衍伸服務，可以在2週內熟悉至可上手程度。(依過往工作經歷)<br/>

<br/>
在結束台北緯創軟體駐點後，回高雄找了一卡通工作，主要負責「一卡通iPASS MONEY」的底層專案，實際工作後發現為DBA性質，因此後續評估不太適合。期間亦嘗試其他產業多方探索，如日商藏壽司、Uber eat等，並梳理好職涯方向。<br/>
<br/>
      <a target="_blank" href="https://github.com/yuhsiang237"><i class="fa-brands fa-github"></i> Github - yuhsiang237</a>
      <br/>
      <a target="_blank" href="https://yuhsiang237.github.io/"><i class="fa-solid fa-earth-americas"></i> 程式筆記網站</a>
      <br/>
      <a target="_blank" href="https://leetcode.com/u/yuhsiang237/"><i class="fa-solid fa-code"></i> Leetcode</a>

      
      
      `,
    );
    const workItemModalData = ref({
      title: "",
      subtitle: "",
      img: "",
      link: "",
      description: "",
    });

    const workitemData = ref([
      {
        title: "玉山銀行信貸",
        subtitle: "ESUN BANK",
        img: EsunbankImg,
        link: "https://event.esunbank.com.tw/mkt/loan/DG/index.html",
        description: `<p>玉山銀行信用貸款行員後台開發，為該頁面申貸後行內審核流程應用。使用Vue3，並參與該案元件、頁面前端開發。
        <br/><br/>
- 前端:開發行員後台的貸款審核系統，申貸至核貸，處理頁面百頁以上，API串接百隻以上<br/>
(技術:Vue3、Typescript、SCSS)<br/>
- 後端:撰寫微服務API，並依照需求提供前端網站串接，並撰寫單元測試供QA驗測<br/>
(技術:C#、.net core API、Docker、MSSQL、PostgreSQL)<br/>
        </p>
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
      {
        title: "豬場e把抓",
        subtitle: "FARM",
        img: PigFarm,
        link: "https://pigepm.moa.gov.tw/",
        description: `負責網站所有前端開發，以React Hook版本建構，含網站切版，使用人數註冊900+，牧場數1000+<br/>
          <a  target="_blank"  href="https://pigepm.moa.gov.tw/files/%E4%BD%BF%E7%94%A8%E8%80%85%E6%89%8B%E5%86%8A-%E8%B1%AC%E5%A0%B4e%E6%8A%8A%E6%8A%93(2024).pdf">使用手冊 : 點我<a>`,
        tag: [
          "HTML",
          "Javascript ES6",
          "CSS",
          "Bootstrap",
          "React",
          "React Hook",
        ],
      },
      {
        title: "Vue3常見操作整理",
        subtitle: "Vue3",
        img: Vue3Img,
        link: "https://yuhsiang237.github.io/vue-exercise/",
        description: `此為Vue3中開發時常會使用到的語法糖紀錄<br/>
        <a target="_blank" href="https://github.com/yuhsiang237/vue-exercise">專案存庫:點我</a>`,
        tag: ["Vue3", "Javascript"],
      },
      {
        title: "Vue3個人履歷",
        subtitle: "Vue3",
        img: ResumeImg,
        link: "https://github.com/yuhsiang237/showcase",
        description: `即本頁面之個人履歷。使用github存庫進行CI、gh-pages部署，該連結前往為專案儲存庫。
          
          <br><br>內含:<ul>
          <li>路由配置</li>
          <li>存庫測試CI</li>
          <li>Component元件設計</li>
          </ul>`,
        tag: ["Vue3", "Javascript"],
      },
      {
        title: "商品進出貨系統",
        subtitle: "Order System",
        img: ODImg,
        link: "https://github.com/yuhsiang237/Order-System",
        description: `此為自行練習開發之專案。<br/>
          主要用來出退貨商品訂單，能夠建立出貨、退貨訂單，並具備商品庫存機制、多角色權限、權限限制(新、刪、修、查)等頁面的細微權限。<br/>
在資料庫規劃上也考量到現實情況，亦有多對多關聯的設計。<br/>
為保護帳號安全，密碼採用HASH與加鹽方式儲存。<br/>
資料驗證欄位採用Fluent Validation及部分Model Validation。<br/>
樣式支援RWD行動裝置瀏覽。<br/>`,
        tag: [
          "JQuery",
          "Javascript",
          "C# .net core MVC",
          "SQL Server",
          "Entity Framework",
        ],
      },
      {
        title: "露營日",
        subtitle: "CAMP DAY",
        img: CampDayImg,
        link: "https://yuhsiang237.github.io/CampDay/",
        description: `使用Angular結合氣象局API、露營OPEN DATA的查詢網站。<br/>
         可以快速查詢該縣市的露營地點，同時給予7天的氣候資訊<br/>`,
        tag: ["Angular", "Typescript", "HTML", "SCSS"],
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
      workitemData,
      meData,
      MeImg,
      workRef,
      containerRef,
    };
  },
};
</script>
