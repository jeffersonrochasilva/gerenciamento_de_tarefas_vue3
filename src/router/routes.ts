import Home from "@/views/Home.vue";

import Work from "@/components/pages/Work/index.vue";
import Projets from "@/components/pages/Projects/index.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "",
        name: "Work",
        component: Work,
      },
      { path: "/projects", name: "Projects", component: Projets },
    ],
  },
];

export default routes;
