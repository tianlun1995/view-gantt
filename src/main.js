import Vue from "vue";
import App from "./App.vue";
import "./plugins/element.js";
import "@/assets/css/clear.css";

Vue.config.productionTip = false;
// import Element from "element-ui";
// import "element-ui/lib/theme-chalk/index.css";
// Vue.use(Element, {
//   i18n: (key, value) => i18n.t(key, value),
// });
new Vue({
  render: (h) => h(App),
}).$mount("#app");
