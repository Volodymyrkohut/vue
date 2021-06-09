import {createApp} from "vue";
import App from "./App.vue";
import customPlugin from "./plugins/custom";
// import VueRouter from "vue-router";
import router from "./router/index";
import store from "./store/index"

const app = createApp(App);
app.use(store)
app.use(router)
app.use(customPlugin)
app.mount("#root");