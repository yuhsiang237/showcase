<template>
  <!-- 自我介紹 -->
  <Intro />
  <!-- ./自我介紹 -->
  <!-- 個人經歷 -->
  <WorkExp />
  <!-- ./個人經歷 -->
  <!-- 技術 -->
  <Skill />
  <!-- ./技術 -->
  <!-- 作品 -->
  <WorkItem />
  <!-- ./作品-->
  <!-- 興趣學習 -->
  <InterestItem />
  <!-- ./興趣學習 -->
</template>

<script>
import Intro from "@/components/Home/Intro.vue";
import WorkExp from "@/components/Home/WorkExp.vue";
import Skill from "@/components/Home/Skill.vue";
import WorkItem from "@/components/Home/WorkItem.vue";
import InterestItem from "@/components/Home/InterestItem.vue";

export default {
  name: "home-view",
  components: {
    Intro: Intro,
    WorkExp: WorkExp,
    Skill: Skill,
    WorkItem: WorkItem,
    InterestItem: InterestItem,
  },
  setup() {
    return {};
  },
};
</script>
