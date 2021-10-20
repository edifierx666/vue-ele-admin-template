import Vue from "vue";

import Cookies from "js-cookie";

import "normalize.css/normalize.css";

import Element from "element-ui";
import "./core/styles/element-variables.scss";

import "@/core/styles/index.scss";
import "@/common/style/common.scss";
import App from "./App";
import store from "@/common/store";
import router from "@/common/router";
import "./common/icons"; // icon
import "./core/permission";

Vue.use(Element, {
  size: Cookies.get("size") || "small",
});

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
});
