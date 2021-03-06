import Vue from "vue";
import Router from "vue-router";
import Main from "./views/Main.vue";
import Atoms from "./views/Atoms.vue";
import Molecules from "./views/Molecules.vue";
import Grid from "./views/Grid.vue";
import Organisms from "./views/Organisms.vue";
import Templates from "./views/Templates.vue";
import Pages from "./views/Pages.vue";


Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
          path: "/",
          name: "main",
          component: Main
        },
        {
          path: "/atoms",
          name: "atoms",
          component: Atoms
        },
        {
          path: "/molecules",
          name: "molecules",
          component: Molecules
        },
        {
          path: "/grid",
          name: "grid",
          component: Grid
        },
        {
          path: "/organisms",
          name: "organisms",
          component: Organisms
        },
        {
          path: "/templates",
          name: "templates",
          component: Templates
        },
        {
          path: "/pages",
          name: "pages",
          component: Pages
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        }
    ]
});
