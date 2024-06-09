<script setup lang="ts">
import heroProfilBgImage from '@/assets/img/heroProfil.png'
import strukturOrganisasiImage from '@/assets/img/struktur-organisasi.png'

import HeroComp from '@/components/Hero.comp.vue';
</script>

<template>
  <main>
    <!-- Container Hero -->
    <HeroComp :heroBgImage="heroProfilBgImage" title="Profil Desa Wisata Margamulya" />

    <!-- Bagian Sejarah -->
    <section class="px-20 py-10 w-1/2 space-y-4">
      <h2 class="text-4xl font-semibold">Sejarah Desa</h2>
      <p class="text-xl font-thin">
        Desa margamulya berawal dari Desa Kecil yang bernama Desa CIHANJAWAR . Pada tahun 1882 uKab Bandung mempunyai 18
        Distrik dan Desa Cihanjawar termasuk distrik Ciwidey sekitar tahun pada waktu itu Desa Cihanjawar termasuk
        distrik Ciwidey . Lurah Desa Cihanjawar Pertama adalah Lurah TOLOK yaitu sekitar tahun 1860 dan Lurah Tolok
        tersebut pada waktu itu telah membangun Kantor Desa di Kp. Nagrak karena Lurah tolok sudah memberi jasa pada
        Desa nya maka Pemerintah Belanda memberi Gelar yaitu sebutan Lurah Medali. Jabatan Lurah TOLOK dari tahun 1860
        sampai dengan 1880 ( selama 20 Tahun ).
      </p>
    </section>

    <!-- Bagian Visi dan Misi -->
    <div class="py-10 px-56 grid grid-cols-2 gap-24">
      <!-- Visi -->
      <section class="space-y-8">
        <h3 class="text-center text-4xl font-semibold">Visi</h3>
        <p class="text-xl font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sed fugiat, minus debitis reiciendis voluptatum rerum quam quae vitae, porro, quis ex odit architecto ea facilis ipsam rem veniam aperiam. Praesentium molestiae amet porro fugiat saepe placeat temporibus nihil ipsum doloremque consectetur. Id perspiciatis eos vitae! Quia dignissimos cupiditate in.</p>
      </section>

      <!-- Misi -->
      <section class="space-y-8">
        <h3 class="text-center text-4xl font-semibold">Misi</h3>
        <p class="text-xl font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sed fugiat, minus debitis reiciendis voluptatum rerum quam quae vitae, porro, quis ex odit architecto ea facilis ipsam rem veniam aperiam. Praesentium molestiae amet porro fugiat saepe placeat temporibus nihil ipsum doloremque consectetur. Id perspiciatis eos vitae! Quia dignissimos cupiditate in.</p>
      </section>
    </div>

    <!-- Bagian Susunan Perangkat Desa -->
    <div class="ct-container">
      <div class="*:text-center mb-20">
        <h2 class="text-4xl mb-2 font-bold">Susunan Perangkat Desa Wisata Margamulya</h2>
        <p class="text-lg">Peride 2020-2025</p>
      </div>
      <div class="grid grid-cols-3 gap-16">
        <div class="*:text-center space-y-2 first:col-span-3 last:col-span-3 group" v-for="i of 14">
          <h3 class="text-2xl font-semibold group-first:text-3xl">Dede Odih</h3>
          <p>Kepala Desa Margamulya</p>
        </div>
      </div>
    </div>

    <!-- Bagian Struktur Organisasi Pemerintahan -->
    <div class="ct-container">
      <div class="font-bold text-4xl text-center mb-20">
        <h2>Struktur Organisasi Pemerintahan</h2>
        <h2>Desa Margamulya</h2>
      </div>
      <img :src="strukturOrganisasiImage" alt="">
    </div>
    


  </main>
</template>

<style scoped></style>