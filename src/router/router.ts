import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.page.vue'
import defaultLayout from '@/layouts/Default.layout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: defaultLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        },
        {
          path: 'profil-desa',
          name: 'profilDesa',
          component: () => import('@/views/profil_desa/ProfilDesa.page.vue')
        },
        {
          path: 'umkm',
          name: 'umkm',
          component: () => import('@/views/umkm/Umkm.page.vue')
        },
        {
          path: 'umkm/:path',
          name: 'detailUmkm',
          component: () => import('@/views/umkm/Detail/DetailUmkm.page.vue')
        },
        {
          path: 'paket-wisata',
          name: 'paketWisata',
          component: () => import('@/views/paket_wisata/PaketWisata.page.vue')
        },
        {
          path: 'hubungi-kami',
          name: 'hubungiKami',
          component: () => import('@/views/hubungi_kami/HubungiKami.page.vue')
        },
      ]
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
