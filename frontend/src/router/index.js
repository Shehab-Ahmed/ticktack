import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useAuthStore } from "../stores/auth";

NProgress.configure({ showSpinner: false });

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Start progress bar
router.beforeEach(async (to, from) => {
  NProgress.start();

  const store = useAuthStore();
  await store.fetchUser();

  // Protection: Requires auth
  if (to.meta.auth && !store.isLoggedIn) {
    return {
      name: "login",
      query: { redirect: to.fullPath }
    };
  }

  // Guest only pages
  if (to.meta.guest && store.isLoggedIn) {
    return { name: "tasks" };
  }
});

// End progress bar
router.afterEach(() => {
  NProgress.done();
});

export default router;
