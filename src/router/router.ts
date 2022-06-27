import { createRouter, RouteRecordRaw, createWebHashHistory } from "vue-router";
import top from "../top.vue"


const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "top",
    component: top,
  },
  // {
  //   path: "/:catchAll(.*)",
  //   name: "NotFound",
  //   component: () => import("../view/notfound/notfound.vue"),
  //   meta: {
  //     titele: "NotFoundページ",
  //     description: "NotFoundページの説明",
  //   },
  // },
];

const router = createRouter({
  //createWebHistoryを以下に変更することにより、リロード時404エラーなくなった
  history: createWebHashHistory(),
  // history: createWebHistory(),
  routes,
});

export default router;