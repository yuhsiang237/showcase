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
</template>

<script>
import { ref } from "vue";
import MeImg from "@/assets/image/me/me2.png";

export default {
  name: "home-intro",
  components: {},
  setup() {
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

    return {
      modal,

      meData,
      MeImg,
    };
  },
};
</script>
