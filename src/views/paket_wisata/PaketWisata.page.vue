<script setup lang="ts">
import heroPaketWisataBgImage from '@/assets/img/heroPaketWisata.png'
import HeroComp from '@/components/Hero.comp.vue';
</script>

<template>
  <main>
    <!-- Container Hero -->
    <HeroComp :heroBgImage="heroPaketWisataBgImage" title="Paket Wisata Desa Wisata Margamulya" />

    <!-- Bagian Umkm Desa -->
    <div class="ct-container !pt-0">
      <section class="mb-12">
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
      <div class="grid grid-cols-2 w-fit mx-auto gap-x-12">
        <div class="bg-darkGreen text-white p-6 rounded-xl flex flex-col justify-between" v-for="i of 2">
          <div class="space-y-4 mb-8">
            <h3 class="text-2xl font-semibold">One day Trip Package</h3>
            <h4 class="text-2xl font-semibold">Rp. 175.000/pax</h4>
            <div class="">
              <p>Fasilitas:</p>
              <ul class="list-disc list-inside">
                <li v-for="i of 8" class="ml-3 text-sm font-thin">TourGuide</li>
              </ul>
            </div>
          </div>
          <button class="btn bg-white text-darkGreen hover:bg-darkGreen hover:text-white transition-colors duration-500">Pesan Sekatang</button>
        </div>
      </div>
    </div>
  </main>
</template>