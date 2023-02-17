import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/data",
    name: "data",
    component: () =>
      import("../views/DataView.vue"),
  },
  {
    path: "/analytics",
    name: "analytics",
    component: () =>
      import("../views/AnalyticsView.vue"),
  },
  {
    path: "/plan",
    name: "plan",
    component: () =>
      import("../views/PlanView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
