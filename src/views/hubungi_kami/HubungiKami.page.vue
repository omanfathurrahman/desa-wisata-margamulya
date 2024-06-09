<script lang="ts" setup>
import heroHubungiKamiBgImage from '@/assets/img/heroHubungiKami.png'
import FormkitWhatsapp from '~icons/formkit/whatsapp'
import HeroComp from '@/components/Hero.comp.vue';
import FormkitInstagram from '~icons/formkit/instagram'
import FormkitTiktok from '~icons/formkit/tiktok'

import LokasiKamiComp from '@/components/hubungi_kami/LokasiKami.comp.vue'
</script>

<template>
  <main>
    <!-- Bagian Hero -->
    <HeroComp :heroBgImage="heroHubungiKamiBgImage" title="Hubungi Kami !" />

    <!-- Bagian Kontak -->
    <div class="ct-container !px-80 !pt-0">
      <form>
        <h2 class="text-center text-4xl font-semibold mb-8">Kontak</h2>
        <div class="">
          <div class="">
            <div class="grid grid-cols-2 gap-y-3 mb-3 gap-x-12 *:w-full">
              <label>
                <h4>Nama Depan</h4>
                <input type="text" class="w-full bg-zinc-100 py-1 px-2">
              </label>
              <label>
                <h4>Nama Depan</h4>
                <input type="text" class="w-full bg-zinc-100 py-1 px-2">
              </label>
              <label>
                <h4>Nama Depan</h4>
                <input type="text" class="w-full bg-zinc-100 py-1 px-2">
              </label>
            </div>
            <label>
              <h4>Nama Depan</h4>
              <textarea class="w-full bg-zinc-100 min-h-40 resize-none py-1 px-2"></textarea>
            </label>
          </div>
          <div class="mt-5 flex items-center justify-between">
            <button class="btn bg-darkGreen text-white">Kirim</button>
            <div class="flex items-center gap-2 text-darkGreen text-xl">
              <button>
                <FormkitWhatsapp />
              </button>
              <button>
                <FormkitInstagram />
              </button>
              <button>
                <FormkitTiktok />
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>

    <!-- Bagian Maps -->
    <div class="ct-container !px-20">
      <h2 class="text-3xl font-semibold text-center mb-8">Lokasi Kami</h2>
      <div class="">
        <LokasiKamiComp />
      </div>
    </div>

  </main>
</template>