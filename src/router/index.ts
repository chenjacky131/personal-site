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
      component: () => import("@/views/Tools/CanvasSignView.vue"),
    },
    {
      path: "/color-picker",
      name: "color-picker",
      component: () => import("@/views/Tools/ColorPickerView.vue"),
    },
    {
      path: "/guess-game",
      name: "guess-game",
      component: () => import("@/views/Tools/GuessNumberGameView.vue"),
    },
  ],
});

export default router;
