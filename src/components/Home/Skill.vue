<template>
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
</template>

<script>
export default {
  name: "home-skill",
  components: {},
  setup() {
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
    return {
      skillData,
    };
  },
};
</script>
