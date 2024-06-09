<template>
  <footer class="flex gap-32 pl-32 pr-48 pb-20 mt-64">
    <div class="w-3/12 aspect-square -translate-y-6">
      <img :src="logoFooter" alt="" class="w-full h-full object-contain">
    </div>

    <div class="grid grid-cols-3 w-10/12 pr-24">
      <div class="space-y-5">
        <h2 class="font-semibold text-lg">Navigasi</h2>
        <div class="flex flex-col gap-1">
          <RouterLink to="/">Beranda</RouterLink>
          <RouterLink :to="{name: 'profilDesa'}">Tentang</RouterLink>
          <RouterLink :to="{name: 'paketWisata'}">Paket Wisata</RouterLink>
          <RouterLink :to="{name: 'umkm'}">UMKM</RouterLink>
          <RouterLink :to="{name: 'hubungiKami'}">Kontak</RouterLink>
        </div>
      </div>
      <div class="space-y-5">
        <h2 class="font-semibold text-lg">Media Sosial</h2>
        <div class="space-y-1">
          <p>Whatsapp</p>
          <p>Instagram</p>
          <p>Email</p>
          <p>Tiktok</p>
          <p>Youtube</p>
        </div>
      </div>
      <div class="space-y-5">
        <h2 class="font-semibold text-lg">Didukung Oleh</h2>
        <div class="space-y-1">
          <img :src="logoTelkom" alt="logo telkom" class="w-10/12">
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import logoFooter from '@/assets/logo.png'
import logoTelkom from '@/assets/img/logo-telkom.png'
</script>