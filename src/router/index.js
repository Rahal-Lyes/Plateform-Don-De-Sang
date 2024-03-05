import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Signin from "../components/Signin";
import Signup from "../components/Signup";
import Products from "../components/Products";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/signup",
    name: "Sign-up",
    component: Signup,
  },
  {
    path: "/products",
    name: "ProductS",
    component: Products,
  },

  {
    path: "/about",
    name: "AboutView",

    component: () => import("../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
