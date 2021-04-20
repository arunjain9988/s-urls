import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import router from "./router/index.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/style.css";

const app = createApp(App);
app.use(VueAxios, axios);
app.use(router);
app.mount("#app");
