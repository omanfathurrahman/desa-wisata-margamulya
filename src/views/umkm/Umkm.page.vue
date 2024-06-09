<script setup lang="ts">
import HeroComp from '@/components/Hero.comp.vue';
import heroUmkmBgImage from '@/assets/img/heroUmkm.png'
import umkmOlahanTeh from '@/assets/img/umkmOlahanTeh.png'

import umkmList from '@/db/umkm';

</script>

<template>
  <main>
    <!-- Bagian Hero -->
    <HeroComp :heroBgImage="heroUmkmBgImage" title="Buah Tangan Khas Desa Wisata Margamulya" />

    <!-- Bagian Umkm Desa -->
    <div class="ct-container !pt-0">
      <section class="">
        <div class="">
          <h2 class="text-center text-4xl font-semibold">UMKM Desa Wisata Margamulya</h2>
          <p class="text-pretty text-center mt-4 font-thin text-lg">Desa kami menawarkan beragam produk yang dapat
            menjadi oleh-oleh sempurna bagi wisatawan yang berkunjung. Mulai dari pernak-pernik buatan lokal hingga
            makanan ringan lezat, selalu ada sesuatu yang sesuai dengan setiap selera dan preferensi. Bawa pulang
            sebagian dari kekayaan budaya desa kami dengan suvenir buatan tangan indah yang menampilkan keahlian
            tradisional pengrajin lokal kami. Jadi, pastikan untuk menjelajahi pasar dan toko lokal kami untuk menemukan
            kenang-kenangan sempurna dari kunjungan Anda.</p>
        </div>
      </section>
      <div class="mt-12 grid grid-cols-3 gap-x-10 gap-y-7 px-8 text-white">
        <RouterLink :to="{ name: 'detailUmkm', params: { 'path': umkm.path } }"
          class="bg-darkGreen rounded-xl overflow-hidden group" v-for="umkm of umkmList" :key="umkm.path">
          <div class="w-full aspect-[2/1] overflow-hidden">
            <img :src="umkm.cardImg" :alt="`gambar card untuk ${umkm.title}`" class="w-full h-full object-cover group-hover:scale-110 transition-all duration-500">
          </div>
          <section class="px-3 py-5 space-y-1">
            <h3 class="text-xl font-semibold">{{ umkm.title }}</h3>
            <p class=" font-thin">{{ umkm.shortDesc }}</p>
          </section>
        </RouterLink>
      </div>
    </div>

    

  </main>
</template>