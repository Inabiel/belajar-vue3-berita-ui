import { createRouter, createWebHistory } from "vue-router";
import listBerita from "../views/listBerita.vue";
import detailBerita from "../views/detailBerita.vue";

const routes = [
  {
    path: "/",
    name: "listBerita",
    component: listBerita,
  },
  {
    path: "/detailberita/:id",
    name: "detailBerita",
    component: detailBerita,
    props: (route) => ({ foo: route.query.foo }),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
