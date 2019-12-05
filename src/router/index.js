import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Config from "../views/Config.vue";
import Preset from "../views/Preset.vue";
import Play from "../views/Play.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/history",
    name: "history",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/History.vue")
  },
  {
    path: "/config",
    name: "config",
    component: Config
  },
  {
    path: "/play", //presetの子として登録したい
    name: "play",
    component: Play
  },
  {
    path: "/preset",
    name: "preset",
    component: Preset
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
