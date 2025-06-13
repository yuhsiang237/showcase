import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: { title: "Showcase | YU HSIANG Resume" },
    },
  ],
});

router.beforeEach((to) => {
  const title = to.meta.title || "Default Title"; // Fallback title if no meta.title
  document.title = title;
});

export default router;
