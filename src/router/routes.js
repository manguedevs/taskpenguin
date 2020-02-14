const routes = [
  {
    path: "/",
    component: () => import("../layouts/MainLayout.vue"),
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("../pages/Charts.vue")
      },
      {
        path: '/bills',
        name: 'bills',
        component: () => import('pages/Bills.vue'),
      },
      {
        path: '/bills/info/:id',
        name: 'bills-info',
        component: () => import('pages/BillInfo.vue'),
      },
      {
        path: '/bills/report',
        name: 'bills-report',
        component: () => import('pages/BillsReport.vue'),
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('pages/Login.vue'),
  },
  {
    path: '/login/password-recovery',
    name: 'password-recovery',
    component: () => import('pages/PasswordRecovery.vue'),
  },
  {
    path: '/login/signup',
    name: 'signup',
    component: () => import('pages/SignUp.vue'),
  },
  
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
