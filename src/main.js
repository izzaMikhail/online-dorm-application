import { createApp, watch } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "./assets/index.css";
import piniaPluginPersistedState from "pinia-plugin-persistedstate";


const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPluginPersistedState);


app.use(pinia);
app.use(router);
app.mount("#app");
