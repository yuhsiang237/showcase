<template>
  <!-- 興趣學習 -->
  <div class="work-item-area" ref="workRef">
    <div class="container pt-3 pb-5" ref="containerRef">
      <div class="row">
        <div class="coltext-center pl-3">
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
          <template v-if="workItemModalData.video">
          <video 
            :src="workItemModalData.video" 
            controls 
            autoplay 
            muted 
            loop 
            style="width: 100%; height: auto; display: block;">
          </video>
        </template>
        
        <template v-else>
          <img :src="workItemModalData.img" />
        </template>
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
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import Demo from "@/assets/image/demo.png";

import Int1Img from "@/assets/image/interest/1.jpg";
import Int2Img from "@/assets/image/interest/2.jpg";
import Int3Img from "@/assets/image/interest/3.jpg";
import Int4Img from "@/assets/image/interest/4.jpg";
import Int5Img from "@/assets/image/interest/5.jpg";
import Int6Img from "@/assets/image/interest/6.jpg";
import Int7Img from "@/assets/image/interest/7.jpg";
import Int8Img from "@/assets/image/interest/8.jpg";
import Int9Img from "@/assets/image/interest/9.jpg";
import Int10Img from "@/assets/image/interest/10.png";
import Intm1Img from "@/assets/image/interest/m1.png";
import Int11Img from "@/assets/image/interest/11.png";
import Int12Img from "@/assets/image/interest/12.png";
import soul from "@/assets/image/interest/soul.png";
import soulVid from "@/assets/image/interest/soul.mp4";

import DModal from "@/components/common/DModal.vue";
import LazyImg from "@/components/common/LazyImg.vue";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  name: "interestitem-view",
  components: {
    WorkItemModal: DModal,
    LazyImg: LazyImg,
  },
  setup() {
    const demo = ref(Demo);
    const modal = ref(null);
    const workItemModalData = ref({
      title: "",
      subtitle: "",
      img: "",
      link: "",
      description: "",
    });
    const interestItemData = ref([
      {
        title: "Soul",
        subtitle: "Motion Graphics",
        img: soul,
        video: soulVid, 
        description:
          `創作的靈魂究竟從哪裡來?所以我做了這張motion，記錄我的靈魂。<br/><br/>
          The soul of creation—where does it really come from?
So I made this motion piece to record my soul.
          `,
      },
      {
        title: "✧",
        subtitle: "3D變焦攝影",
        img: Int12Img,
        description:
          "用Blender調整焦距，並建設一立方體、天空，模擬位於35層樓高攝影的情況。",
      },
      {
        title: "✧",
        subtitle: "孤獨搖滾-虹夏",
        img: Int11Img,
        description:
          "花了點時間用CSP畫了這張圖，背景以STARRY表演台，為虹夏與樂團練團後留下的思考片段。",
      },
      {
        title: "✧",
        subtitle: "新宿街頭素寫",
        img: Int10Img,
        description: "用CSP畫了大概11小時O_O",
      },
      {
        title: "✧",
        subtitle: "打光練習",
        img: Intm1Img,
        description: "透過光影來區分景別，構成畫面練習",
      },
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
        video: "", 
        img: "",
        link: "",
        description: "",
      };
    };

    const containerRef = ref(null);
    const workRef = ref(null);
    let anim;
    onMounted(() => {
      nextTick(() => {
        // 初始透明度
        containerRef.value.style.opacity = 0;

        anim = gsap.fromTo(
          containerRef.value,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1.5,
            scrollTrigger: {
              trigger: workRef.value,
              start: "top 80%",
              end: "bottom top",
              toggleActions: "play none none none", // 滑入淡入向上，滑離淡出
            },
          },
        );
      });
    });

    onBeforeUnmount(() => {
      anim?.scrollTrigger?.kill();
    });

    return {
      demo,
      openModal,
      handleClose,
      modal,
      workItemModalData,
      interestItemData,
      workRef,
      containerRef,
    };
  },
};
</script>
