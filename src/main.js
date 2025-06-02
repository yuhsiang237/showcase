import "./assets/style/main.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";
import VueLazyLoad from "vue3-lazyload";
import WOW from "wow.js";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueLazyLoad, {
  // options...
});
// 初始化 WOW
new WOW().init();

app.mount("#app");
