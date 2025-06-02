<template>
  <!-- 自我介紹 -->
  <div class="intro-area">
    <div class="logo">@Yuhsiang237</div>
    <div class="container">
      <div class="row wow fadeInUp" data-wow-duration="2s">
        <div class="col-md-8 col-sm-12">
          <div class="mb-3"><span class="overlay-title">自我介紹</span></div>
        </div>
        <div class="col-md-8 col-sm-12 content">
          <div
            data-wow-duration="10s"
            class="pr-3 medata wow animate__animated animate__fadeIn"
            v-html="meData"
          ></div>
        </div>
        <div class="col-md-4 col-sm-12 content">
          <div class="d-flex justify-content-end">
            <img :src="MeImg" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 個人經歷 -->
  <div class="work-exp-area">
    <div class="container py-2 wow fadeIn" data-wow-duration="2s">
      <div class="row">
        <div class="col mb-4"><span class="overlay-title">個人經歷</span></div>
      </div>
      <!-- Timeline 1 - Bootstrap Brain Component -->
      <section class="bsb-timeline-1">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12">
              <ul class="timeline">
                <li
                  v-for="item in workExpData"
                  :key="item"
                  class="timeline-item"
                >
                  <div class="timeline-body">
                    <div class="timeline-content">
                      <div class="border-0">
                        <div class="card-body p-0">
                          <div class="work-exp-card-title mb-1">
                            {{ item.jobtitle }} •
                            <span>{{ item.company }}</span>
                          </div>
                          <div class="mb-1 work-exp-card-date">
                            {{ item.date }}
                          </div>
                          <p
                            v-html="item.description"
                            class="card-text m-0"
                          ></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  <!-- ./個人經歷 -->
  <!-- 技術 -->
  <div class="skill-area mb-3">
    <div class="container py-4 wow fadeIn" data-wow-duration="1s">
      <div class="row">
        <div class="col mb-3"><span class="overlay-title">技術關聯</span></div>
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
import MeImg from "@/assets/image/me/me2.png";
import EsunbankImg from "@/assets/image/workitem/esunbank.png";
import KgibankImg from "@/assets/image/workitem/kgibank.png";
import MgovImg from "@/assets/image/workitem/mgov.png";
import AfaImg from "@/assets/image/workitem/afa.png";
import ErpImg from "@/assets/image/workitem/erp.png";
import Vue3Img from "@/assets/image/workitem/vue3.png";
import ODImg from "@/assets/image/workitem/od.png";
import PDFImg from "@/assets/image/workitem/pdf.png";
import PigFarm from "@/assets/image/workitem/pigfarm.png";
import ResumeImg from "@/assets/image/workitem/resume.png";
import Int1Img from "@/assets/image/interest/1.jpg";
import Int2Img from "@/assets/image/interest/2.jpg";
import Int3Img from "@/assets/image/interest/3.jpg";
import Int4Img from "@/assets/image/interest/4.jpg";
import Int5Img from "@/assets/image/interest/5.jpg";
import Int6Img from "@/assets/image/interest/6.jpg";
import Int7Img from "@/assets/image/interest/7.jpg";
import Int8Img from "@/assets/image/interest/8.jpg";
import Int9Img from "@/assets/image/interest/9.jpg";

import DModal from "@/components/DModal.vue";
import LazyImg from "@/components/LazyImg.vue";

export default {
  name: "show-case-view",
  components: {
    WorkItemModal: DModal,
    LazyImg: LazyImg,
  },
  setup() {
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
    const interestItemData = ref([
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
    const skillData = {
      skills: [
        "HTML",
        "Vue3",
        "Javscript ES6",
        "JQuery",
        "Bootstrap",
        "CSS/SCSS/RWD",
        "API",
        "Adobe Photoshop/illustrator",
      ],
      description: `<p>
      ＋ 熟悉網站完整前後端開發流程 <br/>
      ＋ API串接與非同步處理<br/>
      ＋ RWD切版<br/>
      ＋ 大型專案開發經驗(政府/銀行案)<br/>
      ＋ 敏捷開發(Scrum/Sprint)<br/>
      ＋ 專案管控Git
      </p>`,
    };
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
        description:
          "即本頁面之個人履歷。使用github存庫進行CI、gh-pages部署，該連結前往為專案儲存庫",
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
        title: "PDF報表產製",
        subtitle: "PDF",
        img: PDFImg,
        link: "https://github.com/yuhsiang237/ReportPDF",
        description: `此為自行練習PDF產製專案。<br/>
         因應當時銀行工作需產製大量的PDF報表`,
        tag: ["C# .net core"],
      },
    ]);

    const workExpData = ref([
      {
        date: "2022-2024",
        jobtitle: "軟體開發工程師(全端)",
        company: "緯創軟體股份有限公司",
        description: `
       <b>[銀行駐點開發]</b><br/>

<b>◎玉山銀行：信用貸款整合系統</b><br/>

<b>專案：</b>玉山銀行信用貸款行員後台<br/>

玉山銀行信用貸款行員後台開發，為該頁面申貸後行內審核流程應用。<br/>

連結：
<a target="_blank" href="https://event.esunbank.com.tw/mkt/loan/DG/index.html">https://event.esunbank.com.tw/mkt/loan/DG/index.html</a><br/>
<br/>
<b>具體工作內容：</b><br/>
<div style="margin-left:10px;margin-top:5px;">
1. 需求規格訪談，與PM、SA，進行需求討論，並於DevOps/Jira開單號進行開發<br/>

2. 對每個合併的Git Pull Request，進行程式碼單元測試，並提供測報驗測<br/>

3. 遇到急迫驗測的需求，協助團隊內其他成員分擔開發<br/>

4. 完整貸款申請至核貸系統後台開發，含前端與後端<br/>
</div>
<br/>
✧ 使用單元測試方式，Pull Request上亦掛上CI一併測試，減少了改A錯B的情形<br/>

✧ 將系統的API呼叫進行調整，使其部分可併發，提高頁面載入速度<br/>

✧ 前端元件可共用元件收納，使開發能夠引用並套入，減少每頁都調整之問題<br/>

✧ 開發效率高，將需要三年的開發期縮短至一年半開發<br/>

✧ 透過 JIRA Confluence 紀錄軟體開發規格變遷，並依照實作給予修正及改善的回饋<br/>
<br/>
<b>使用技術：</b><br/>

前端：Vue3、Typescript、SCSS<br/>

後端：C#、.net core API、Docker、MSSQL、PostgreSQL<br/>
<br/>
<b>◎凱基銀行：</b><br/>

<b>專案：</b>凱基銀行網銀後台<br/>

凱基銀行網銀後台，使用Angular.js開發，當初玉山案子做完後來到凱基這邊做新網站的升級。
協助完成：外幣轉帳、網銀開發、信用卡卡片點數兌換、多語系i18n、eDDA電子化授權<br/>
連結：<a target="_blank" href="https://www.kgibank.com.tw/zh-tw/">https://www.kgibank.com.tw/zh-tw/</a><br/>
<br/>
<b>具體工作內容：</b><br/>
<div style="margin-left:10px;margin-top:5px;">

1. 協助開發 外幣轉帳、網銀開發、卡片點數兌換、多語系i18n、eDDA電子化授權之功能<br/>

2. 串接後台與網銀內部之電文，並撰寫相對應之商務邏輯<br/>

3. 完整前端與後端功能開發，並在案期間進行QA測試及上線驗收<br/>

4. 撰寫微服務API、行內API對接<br/>

5. 現行網站維護，依照需求單進行調整<br/>
</div><br/>
✧ 接手前人開發，並於半年內依序完成銀行端驗收<br/>

✧ 與第三方驗證廠商、銀行進行內部測試與API對接、規格確認<br/>

✧ 將異常部分轉接給內部之BUG系統，如JSON 上下行資料等，方便追蹤，節省錯誤源頭查證時間<br/>
<br/>
<b>使用技術：</b><br/>

前端：Angular、Javscript ES6、SCSS<br/>

後端：C#、.net core API、Docker、MSSQL<br/>

註:因駐點調動通勤長離職(1hr以上)<br/>
 `,
      },
      {
        date: "2021",
        jobtitle: "軟體工程師",
        company: "個人接案",
        description: `
        網站工程師、API撰寫。<br/>
        內容主要為Google Firebase與Google Flutter專案開發。<br/>`,
      },
      {
        date: "2018-2020",
        jobtitle: "前端網站工程師",
        company: "凌誠科技股份有限公司",
        description: `
       <b> 專案：</b><br/>
<ol>
<li>
田邊好幫手 : 協助設計師切版，並在上線後維護專案，調整CSS與Javascript<br/>

連結：<a target="_blank" href="https://m.moa.gov.tw/">https://m.moa.gov.tw/</a><br/>

</li>
<li>農產ERP : 負責該一頁式網站切版工作，並與設計師配合，協助將網站更貼合客戶需求。<br/>

連結：<a target="_blank" href="https://www.linkjoin.com.tw/erp/">https://www.linkjoin.com.tw/erp/</a><br/>
</li>
<li>農糧署追溯 : 農委會政府案，在團隊中負責幫設計師切版，並套用至MVC網站中，使用到了Javascript ES6 、SCSS，並在上線後維護。<br/>

連結：<a target="_blank" href="https://qrc.afa.gov.tw/">https://qrc.afa.gov.tw/</a><br/>
</li>
<li>豬場e把抓 : 負責網站所有前端開發，以React Hook版本建構，含網站切版，使用人數註冊900+，牧場數1000+<br/>
連結：<a target="_blank" href="https://pigepm.moa.gov.tw/">https://pigepm.moa.gov.tw/</a><br/>
</li>
<li>天和水產 : 負責沿海養殖業水產養殖之管理，含箱網、漁獲量、進出貨、營收成本等。<br/>
</li>
<li>農業易遊網 : 上線後協助調整內容<br/>
連結：<a target="_blank" href="https://ezgo.ardswc.gov.tw/zh-tw/">https://ezgo.ardswc.gov.tw/zh-tw/</a>
<br/></li>
<li>初級加工廠 : 參與設計與切版，負責原料加工，及產品產出之後續SOP E化<br/>
<br/></li>
</ol>

<b>具體工作內容：</b><br/>
<div style="margin-left:10px;margin-top:5px;">


1. 與設計師討論樣式並開單進行頁面調整<br/>

2. 與PG、手機端開發者端(Android/iOS)進行串接解說(Swagger)，以利串接能夠快速上手<br/>

3. 設計稿RWD切版，並輔助公司設計組程式套件(Javascipt依賴相關)升級<br/>

4. 於專案上線教育訓練時輔助現場客戶進行操作<br/>

5. 定時讀書會提升團隊內能力<br/>
</div><br/>
✧ 在任職期間參予了7份專案，主要為政府案，皆順利完成結案。<br/>

✧ 依照專案輕重緩急，進行專案支援，主要以天作為分隔。<br/>

✧ 透過Asana、DevOps進行專案時程管理，以利專案追蹤<br/>

✧ 協助設定DevOps的軟體CI，以利專案能夠在PR時得以先通過基礎建置<br/>

✧ 對多人共同開發熟練，綜合多件專案，亦有12人一同開發協作<br/>
<br/>
技術: HTML、SCSS、JQuery、Javascript ES6、C#、.net core MVC、React<br/>
  <br/>      `,
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
      interestItemData,
    };
  },
};
</script>
