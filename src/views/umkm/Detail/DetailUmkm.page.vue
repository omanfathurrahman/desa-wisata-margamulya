<template>
  <div>
       <!-- Bagian Hero -->
       <HeroComp :heroBgImage="umkm?.heroImg" :title="umkm?.title" />

      <!-- Bagian Deskripsi -->
      <div class="ct-container !px-20 space-y-24">
        <div class="flex even:flex-row-reverse gap-12" :key="i" v-for="(desc, i) in umkm.descList">
          <div class="w-[52%] space-y-2">
            <h3 class="text-3xl font-semibold">{{ desc.title }}</h3>
            <p class="text-lg font-thin">{{ desc.descripsion }}</p>
          </div>
          <img :src="desc.img" alt="" class="w-[48%] aspect-video object-cover" />
        </div>
      </div>

  </div>
</template>

<script lang="ts" setup>
import HeroComp from '@/components/Hero.comp.vue';
import { useRoute } from 'vue-router';
import umkmList from '@/db/umkm';

const route = useRoute()

const path = route.params.path

const umkm = umkmList.find(umkm => umkm.path === path)!

</script>