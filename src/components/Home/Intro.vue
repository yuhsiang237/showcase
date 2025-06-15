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

在過去參與的工作專案中，仍對做圖像工作感興趣，喜歡好看的設計。<br/>
因此，將職涯方向定為前端工程師(亦可協助設計)。 <br/>
以穩定開發、產出為方向，目前參與過專案皆於時程內完成。😉 <br/>
<br/>
目前主要以書本及網課學習設計類及畫面處理，希望自己在畫面上處理能夠更精進。
<br/>
<br/>
對於新事物掌握速度快，可以在2週內熟悉至上手程度(依過往工作經歷)。<br/>
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
