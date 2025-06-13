<template>
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
</template>

<script>
import { ref } from "vue";

export default {
  name: "home-work-exp",
  components: {},
  setup() {
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

    return {
      workExpData,
    };
  },
};
</script>
