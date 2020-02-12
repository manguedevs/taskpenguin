import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

export default function (/* { store, ssrContext } */) {
  const router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  router.beforeEach(async (to, from, next) => {
    if (to.path.includes('autoLogin')) {
      router.app.$auth.newLogin(to.query.user, to.query.pw, (err) => {
        if (err && err.code == "invalid_grant") {
          next('login')
        } else if (err) {
          next('login');
        }
      });
      //router.app.$auth.login();
      next('');
    } else if (router.app.$auth.isAuthenticated() && to.name == 'login') {
      next('');
    } else if (to.name == 'callback' || to.name == '403' || to.name == 'login' || to.name == 'signup' || to.name == 'password-recovery') { // check if "to"-route is "callback" and allow access
      next();
    } else if (router.app.$auth.isAuthenticated()) { // if authenticated allow access
      if (to.name == '/' ) {
      } else {
        next();
      }
    } else { // trigger auth0 login
      next('login');
      // router.app.$auth.login();
    }
  });

  return router
}
