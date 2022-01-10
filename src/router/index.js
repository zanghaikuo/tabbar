import { createRouter, createWebHistory } from "vue-router";

// 路由懒加载
const home = () => import("../components/Home.vue");
const About = () => import("../components/About.vue");
const Cart = () => import("../components/Cart.vue");
const Profile = () => import("../components/Profile.vue");

const routes = [
  {
    // 默认路由
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
