import Vue from "vue";
import Vuex from "vuex";
import VueCookies from "vue-cookies";
import Module from "./modules/temp";


Vue.use(VueCookies);
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    Module
  }
});

export default store;
