import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faJedi } from "@fortawesome/free-solid-svg-icons";
import { faNoteSticky } from "@fortawesome/free-regular-svg-icons";
import { faArrowDown, faArrowRight , faCircleUser, faPaperclip, faXmark, faBell, faHome, faChartLine, faListCheck, faMapLocationDot, faMugHot, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

library.add(faJedi, faArrowDown, faArrowRight, faCircleUser, faBell, faPaperclip, faNoteSticky, faXmark, faHome, faChartLine, faListCheck, faMugHot, faMapLocationDot, faMagnifyingGlass);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
