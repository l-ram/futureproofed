import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faNoteSticky } from "@fortawesome/free-regular-svg-icons";
import { faCircleUser, faPaperclip, faXmark, faBell, faHome, faChartLine, faListCheck, faMapLocationDot, faMugHot, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

library.add(faCircleUser, faBell, faPaperclip, faNoteSticky, faXmark, faHome, faChartLine, faListCheck, faMugHot, faMapLocationDot, faMagnifyingGlass);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
