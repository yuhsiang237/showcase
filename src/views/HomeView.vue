<template>
  <!-- 自我介紹 -->
  <div class="intro-area mb-3">
    <div class="logo">@Yuhsiang237</div>
    <div class="container py-4">
      <div class="row">
        <div class="col-8">
          <div class="text1 mb-3">自我介紹</div>
          <div>
            自我介紹文字自我介紹文字自我介紹文字自我介紹文字自我介紹文字自我介紹文字
            自我介紹文字自我介紹文字自我介紹文字自我介紹文字自我介紹文字
            自我介紹文字自我介紹文字自我介紹文字自我介紹文字
            自我介紹文字自我介紹文字自我介紹文字
          </div>
        </div>
        <div class="col-4">
          <div class="d-flex justify-content-end">
            <img :src="demo" />
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
            <div>HTML5</div>
            <div>Vue</div>
            <div>CSS/SCSS</div>
          </div>
          <div>
            <p>時代會變OOO~熟悉API呼叫與同步...</p>
          </div>
        </div>
      </div>
    </div>
  </div>
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
</template>
<script>
import demo from "@/assets/image/demo.png";

export default {
  name: "MyComponent",
  data() {
    return {
      demo,
    };
  },
};
</script>
