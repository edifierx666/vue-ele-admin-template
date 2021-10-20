import Vue from "vue";
import Vuex from "vuex";
import getters from "@/common/store/getters";
import { modules } from "@/core/storeModules";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules,
  getters,
});

export default store;
