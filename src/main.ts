import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import { Layout, Menu } from "ant-design-vue";
import "@/assets/main.scss";
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Layout);
app.use(Menu);

app.mount("#app");
