import Vue from "vue";
import VueRouter from "vue-router";

// import VueMaterial from "vue-material";
// import VueSimpleAccordion from "vue-simple-accordion";
// import "vue-material/dist/vue-material.min.css";
// import "vue-material/dist/theme/black-green-light.css";
// import "vue-simple-accordion/dist/vue-simple-accordion.css";

import Embed from "./../components/Embed";

// Vue.use(VueMaterial);
// Vue.use(VueSimpleAccordion);

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "am-embed",
    component: Embed,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
