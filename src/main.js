import Vue from "vue";
// import App from "./App.vue";
// import router from "./router";

import Embed from "./components/Embed";

// import vueCustomElement from "vue-custom-element";
// Vue.use(vueCustomElement);

// Vue.customElement("am-embed", Embed);

import wrap from "@vue/web-component-wrapper";
const wrappedElement = wrap(Vue, Embed);
window.customElements.define("am-embed", wrappedElement);

// Vue.config.productionTip = false;
// new Vue({
//   router,
//   render: (h) => h(App),
// }).$mount("#app");
