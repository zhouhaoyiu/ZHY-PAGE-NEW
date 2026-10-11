import type { UserModule } from './types'
import { ID_INJECTION_KEY, ZINDEX_INJECTION_KEY } from 'element-plus'

// import "~/styles/element/index.scss";

// import ElementPlus from "element-plus";
// import all element css, uncommented next line
// import "element-plus/dist/index.css";

// or use cdn, uncomment cdn link in `index.html`

import { ViteSSG } from 'vite-ssg'
import type { RouteRecordRaw } from 'vue-router'
// eslint-disable-next-line ts/ban-ts-comment
// @ts-ignore
import { routes } from 'vue-router/auto-routes'

import App from './App.vue'

import '~/styles/index.scss'
import 'uno.css'
// If you want to use ElMessage, import it.
import 'element-plus/theme-chalk/src/message.scss'
import 'element-plus/theme-chalk/src/message-box.scss'

const indexRoute = (routes as RouteRecordRaw[]).find(
  (route) => route.path === '/',
)
if (indexRoute) indexRoute.redirect = '/nav/Home'
const navRoute = (routes as RouteRecordRaw[]).find(
  (route) => route.path === '/nav',
)
if (navRoute) navRoute.redirect = '/nav/Home'
const siteRoutes: RouteRecordRaw[] = [
  ...routes,
  { path: '/:pathMatch(.*)*', redirect: '/nav/Home' },
]

export const createApp = ViteSSG(
  App,
  {
    routes: siteRoutes,
    base: import.meta.env.BASE_URL,
    scrollBehavior(to, _from, savedPosition) {
      if (savedPosition) return savedPosition
      if (to.hash) return { el: to.hash, top: 104 }
      return { top: 0 }
    },
  },
  (ctx) => {
    ctx.app.provide(ID_INJECTION_KEY, { prefix: 1024, current: 0 })
    ctx.app.provide(ZINDEX_INJECTION_KEY, { current: 0 })
    ctx.head?.push({ htmlAttrs: { lang: 'zh-CN' } })
    Object.values(
      import.meta.glob<{ install: UserModule }>('./modules/*.ts', {
        eager: true,
      }),
    ).forEach((i) => i.install?.(ctx))
  },
)
