<template>
  <div class="skill-area mb-3" ref="skillRef">
    <div class="container py-4" ref="containerRef">
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
import { ref, onMounted, onBeforeUnmount,nextTick } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  name: "home-skill",
  components: {},
  setup() {
    const containerRef = ref(null);
    const skillRef = ref(null);
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
              trigger: skillRef.value,
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
      skillRef,
      containerRef
    };
  },
};
</script>
