import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Layout from "@/core/layout";

export const constantRoutes = [
  {
    path: "/redirect",
    component: Layout,
    hidden: true,
    children: [
      {
        path: "/redirect/:path(.*)",
        component: () => import("@/core/views/redirect"),
      },
    ],
  },
  {
    path: "/login",
    component: () => import("@/views/login"),
    hidden: true,
  },
  {
    path: "/auth-redirect",
    component: () => import("@/views/login/auth-redirect"),
    hidden: true,
  },
  {
    path: "/404",
    component: () => import("@/core/views/error-page/404"),
    hidden: true,
  },
  {
    path: "/401",
    component: () => import("@/core/views/error-page/401"),
    hidden: true,
  },
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        component: () => import("@/views/dashboard"),
        name: "Dashboard",
        meta: {
          title: "Dashboard",
          icon: "dashboard",
          affix: true,
        },
      },
      {
        path: "login123",
        component: () => import("@/views/login"),
        name: "login",
        meta: {
          title: "login",
          icon: "dashboard",
        },
      },
    ],
  },
];

export const asyncRoutes = [
  {
    path: "*",
    redirect: "/404",
    hidden: true,
  },
];

const createRouter = () =>
  new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  });

const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
