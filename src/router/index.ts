import { createRouter, createWebHistory } from "vue-router";

import Content from "@/views/template/Content.vue";
import Init from "@/views/Init.vue";
import ErrorDestination from "@/views/ErrorDestination.vue";
import IssuerList from "@/views/IssuerList.vue";
import IssuerDetail from "@/views/IssuerDetail.vue";
import Profile from "@/views/Profile.vue";
import EventHistory from "@/views/EventHistory.vue";
import { Signifies } from "@/modules/repository";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Content,
      meta: { requiresInit: true },
      redirect: () => {
        return { name: "IssuerList" };
      },
      children: [
        {
          path: "/issuer-list",
          name: "IssuerList",
          component: IssuerList,
          meta: { title: "Issuer List" },
        },
        {
          path: "/issuer-detail/:pre/",
          name: "IssuerDetail",
          component: IssuerDetail,
          meta: { title: "Issuer Detail" },
        },
        {
          path: "/profile",
          name: "Profile",
          component: Profile,
          meta: { title: "Profile" },
        },
        {
          path: "/event-history",
          name: "EventHistory",
          component: EventHistory,
          meta: { title: "Event Hsitory" },
        },
      ],
    },
    {
      path: "/init",
      name: "Init",
      meta: { title: "Initiation" },
      component: Init,
      beforeEnter: async (to, from, next) => {
        if (Signifies.isInitiationDone() && from.path !== "/error") {
          // Move to the next page if the initiation is done.
          // Note: Assume that there is no multiple master secrets(aid).
          next({
            path: "/issuer-list",
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
