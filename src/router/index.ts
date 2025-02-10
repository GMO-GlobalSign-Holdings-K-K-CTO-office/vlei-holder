import { createRouter, createWebHistory } from "vue-router";

import Content from "@/views/template/Content.vue";
import Init from "@/views/Init.vue";
import ErrorDestination from "@/views/ErrorDestination.vue";
import SessionList from "@/views/SessionList.vue";
import SessionDetail from "@/views/SessionDetail.vue";
import Profile from "@/views/Profile.vue";
import { Signifies } from "@/modules/repository";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Content,
      meta: { requiresInit: true },
      redirect: () => {
        return { name: "SessionList" };
      },
      children: [
        {
          path: "/session-list",
          name: "SessionList",
          component: SessionList,
          meta: { title: "Session List" },
        },
        {
          path: "/session-detail/:pre/",
          name: "SessionDetail",
          component: SessionDetail,
          meta: { title: "Session Detail" },
        },
        {
          path: "/profile",
          name: "Profile",
          component: Profile,
          meta: { title: "Profile" },
        },
      ],
    },
    {
      path: "/init",
      name: "Init",
      meta: { title: "Initiation" },
      component: Init,
      beforeEnter: async (to, from, next) => {
        if (Signifies.isInitiationDone()) {
          // Move to the next page if the initiation is done.
          // Note: Assume that there is no multiple master secrets(aid).
          next({
            path: "/session-list",
          });
        } else {
          next();
        }
      },
    },
    {
      path: "/error",
      name: "ErrorDestination",
      component: ErrorDestination,
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresInit)) {
    if (Signifies.isInitiationDone()) {
      next();
    } else {
      // Move to the initiation page if the initiation is not done.
      next({
        path: "/init",
      });
    }
  } else {
    next();
  }
});

export default router;
