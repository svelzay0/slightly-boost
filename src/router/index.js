import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Admin',
    redirect: { name: 'home' },
    component: () => import("../layouts/AppLayout.vue"),
    children: [
      {
        path: "/",
        name: "home",
  
        component: () => import("../pages/admin/home"),
      },
      {
        path: "boost",
        name: "boost",
  
        component: () => import("../pages/admin/boost/index.vue"),
      },
      {
        path: "accounts",
        name: "accounts",
  
        component: () => import("../pages/admin/accounts/index.vue"),
      },
      {
        path: "contacts",
        name: "contacts",
  
        component: () => import("../pages/admin/contacts/index.vue"),
      },
      {
        path: "job",
        name: "job",
  
        component: () => import("../pages/admin/job.vue"),
      },
      {
        path: "faq",
        name: "faq",
  
        component: () => import("../pages/admin/faq.vue"),
      },
      {
        path: "error",
        name: "error",
        component: () => import("../pages/admin/error"),
      },
    ],
  },
  {
    path: "*",
    redirect: { name: 'error' },
    name: "MainError",
    component: () => import("../pages/admin/error"),
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;