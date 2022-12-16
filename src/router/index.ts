import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      component: HomeView,
    },
    {
      path: "/navigation",
      name: "navigation",
      component: () => import("@/views/NavigationView.vue"),
    },
    {
      path: "/canvas-sign",
      name: "canvas-sign",
      component: () => import("@/views/CanvasSignView.vue"),
    },
  ],
});

export default router;
