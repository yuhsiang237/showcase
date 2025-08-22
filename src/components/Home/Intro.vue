<template>
  <!-- 自我介紹 -->
  <div class="intro-area" ref="introRef">
    <div class="logo">@Yuhsiang237</div>
    <div class="container">
      <div class="row" >
        <div class="col-md-8 col-sm-12">
          <div class="mb-3"><span class="overlay-title">自我介紹</span></div>
        </div>
        <div class="col-md-8 col-sm-12 content">
          <div
               ref="medataRef"
            class="pr-3 medata "
            v-html="meData"
          ></div>
        </div>
        <div class="col-md-4 col-sm-12 content">
          <div class="d-flex justify-content-end">
            <img ref="meimgRef" :src="MeImg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref ,onBeforeUnmount,onMounted } from "vue";
import MeImg from "@/assets/image/me/me2.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "home-intro",
  components: {},
  setup() {  
      const introRef = ref(null);

       const medataRef = ref(null);
    const meimgRef = ref(null);
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
let medataAnim, meimgAnim;
onMounted(() => {
      // 文字淡入
      medataAnim = gsap.fromTo(
  medataRef.value,
  { opacity: 0, y: 150 },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    scrollTrigger: {
      trigger: introRef.value,
      start: "top 150%",   // 區塊 top 到 viewport 80% 觸發
      end: "bottom top",  // 區塊 bottom 到 viewport top 時結束動畫
      scrub: true,        // 滾動進度控制動畫
    },
  }
);

      // 圖片淡入
      meimgAnim =gsap.fromTo(
  meimgRef.value,
  { opacity: 0, x: 150 },
  {
    opacity: 1,
    x: 0,
    duration: 1,
    scrollTrigger: {
      trigger: introRef.value,
      start: "top 150%",
      end: "bottom top",
      scrub: true,
    },
  }
);
    });

    onBeforeUnmount(() => {
      medataAnim?.scrollTrigger?.kill();
      meimgAnim?.scrollTrigger?.kill();
    });
    return {
      modal,
      meData,
      MeImg,
introRef ,
 medataRef, 
meimgRef
    };
  },
};
</script>
