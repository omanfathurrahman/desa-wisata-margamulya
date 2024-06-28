<script setup lang="ts">
import { RouterLink } from 'vue-router'

import { useWindowScroll } from '@vueuse/core'
import { ref, watchEffect } from 'vue'
import logo from '@/assets/logo2.png'
import CiHamburgerMd from '~icons/ci/hamburger-md'

const { y } = useWindowScroll()
const yTemp = ref(y.value)
const showHeader = ref(true)

watchEffect(() => {
  if (y.value > yTemp.value) {
    showHeader.value = false
  } else {
    showHeader.value = true
  }
  yTemp.value = y.value
})
</script>

<template>
  <header class="bg-white flex justify-between h-[4rem] px-3 sm:px-32 items-center sticky top-0 z-10 shadow-xl transition-transform duration-700" :class="showHeader ? '-translate-y-0' : '-translate-y-[100%]'">
    <div class="h-[85%] w-fit aspect-square rounded-md">
      <img :src="logo" alt="logo" class="h-full w-full object-contain">
    </div>
    <nav class="hidden sm:flex gap-8 items-center">
      <RouterLink class="text-darkGreen font-semibold hover:text-darkGreen/80" to="/">
        Beranda
      </RouterLink>
      <RouterLink class="text-darkGreen font-semibold hover:text-darkGreen/80" :to="{ name: 'profilDesa' }">
        Profil Desa
      </RouterLink>
      <RouterLink class="text-darkGreen font-semibold hover:text-darkGreen/80" :to="{ name: 'paketWisata' }">
        Paket Wisata
      </RouterLink>
      <RouterLink class="text-darkGreen font-semibold hover:text-darkGreen/80" :to="{ name: 'umkm' }">
        UMKM
      </RouterLink>
      <RouterLink class="text-darkGreen font-semibold hover:text-darkGreen/80" :to="{ name: 'hubungiKami' }">
        Kontak
      </RouterLink>
    </nav>
    <RouterLink :to="{ name: 'mobileNavigation' }" class="block sm:hidden"><CiHamburgerMd class="text-2xl" /></RouterLink>
    <div class="hidden sm:block" />
  </header>
</template>
