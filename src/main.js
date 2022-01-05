import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/scss/_reset.scss";

createApp(App).use(router).mount("#app");
