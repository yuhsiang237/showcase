import "./assets/style/main.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";
import WOW from "wow.js";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

// 初始化 WOW
new WOW().init();

app.mount("#app");
