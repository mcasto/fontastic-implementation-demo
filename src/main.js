import Vue from "vue";
import "./assets/icons/styles.css";

import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount("#app");
