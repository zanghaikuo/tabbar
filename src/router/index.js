import { createRouter, createWebHistory } from "vue-router";
const home = () => import("../components/Home.vue");
const About = () => import("../components/About.vue");
const Cart = () => import("../components/Cart.vue");
const Profile = () => import("../components/Profile.vue");

const routes = [
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/home",
    component: home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/profile",
    component: Profile,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
