<script setup lang="ts">
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import tentangKamiBgImage from '@/assets/img/tentangKamiBg.png'
import wisataPeternakanKambingBgImage from '@/assets/img/wisataPeternakanKambingBg.png'
import wisataPerkebunanTehBgImage from '@/assets/img/wisataPerkebunanTehBg.png'
import wisataPermainanTradisionalBgImage from '@/assets/img/wisataPermainanTradisionalBg.png'
import SolarAltArrowRightLineDuotone from '~icons/solar/alt-arrow-right-line-duotone'
import SolarAltArrowLeftLineDuotone from '~icons/solar/alt-arrow-left-line-duotone'
import umkmList from '@/db/umkm'

import { computed, ref } from 'vue'
const edukasiCarouselList: {
  title: string
  description: string
  bgImage: string
}[] = [
    {
      title: 'Edukasi Wisata Peternakan Kambing',
      description: 'Program edukasi wisata peternakan kambing adalah sebuah inisiatif yang dirancang untuk menggabungkan pendidikan dan rekreasi. Program ini bertujuan untuk memberikan pengetahuan kepada peserta tentang berbagai aspek peternakan kambing, sambil menawarkan pengalaman langsung di lapangan.',
      bgImage: wisataPeternakanKambingBgImage
    },
    {
      title: 'Edukasi Wisata Perkebunan Teh',
      description: 'Program edukasi wisata perkebunan teh adalah sebuah inisiatif yang menggabungkan aspek pendidikan dan rekreasi dengan fokus pada dunia perkebunan teh. Program ini bertujuan untuk memberikan wawasan mendalam tentang proses produksi teh, dari penanaman hingga pemrosesan, serta manfaat dan budaya yang terkait dengan teh.',
      bgImage: wisataPerkebunanTehBgImage
    },
    {
      title: 'Atraksi Wisata Permainan Tradisional',
      description: 'Atraksi wisata permainan tradisional adalah program atau kegiatan yang menampilkan berbagai jenis permainan yang berasal dari budaya dan tradisi lokal. Tujuan dari atraksi ini adalah untuk memperkenalkan, melestarikan, dan menghidupkan kembali permainan tradisional yang mungkin sudah jarang dimainkan, sekaligus menawarkan pengalaman rekreasi yang edukatif dan menyenangkan.',
      bgImage: wisataPermainanTradisionalBgImage
    }
  ]

const edukasiCarousel = ref(null)

const handleNextSlide = () => {
  // @ts-ignore
  if (edukasiCarousel.value?.data.currentSlide.value === edukasiCarouselList.length - 1) {
    console.log('bjir')
    // @ts-ignore
    edukasiCarousel.value?.slideTo(0)
    return
  }
  // @ts-ignore
  edukasiCarousel.value?.next()
}
const handlePrevSlide = () => {
  // @ts-ignore
  if (edukasiCarousel.value?.data.currentSlide.value === 0) {
    // @ts-ignore
    edukasiCarousel.value?.slideTo(edukasiCarouselList.length - 1)
    return
  }
  // @ts-ignore
  edukasiCarousel.value?.prev()
}

const myUmkmList = ref(umkmList)

const showMoreUmkm = ref(false)

console.log(showMoreUmkm.value)
const umkmListcomputed = computed(()=> {
  return showMoreUmkm.value? myUmkmList.value: myUmkmList.value.slice(0, 3)
})


</script>

<template>
  <main>

    <!-- Bagian Hero -->
    <div
      class="container-hero h-[calc(100dvh-4rem)] w-full flex flex-col items-center justify-center gap-3 text-white pb-16">
      <p class="text-2xl">Selamat datang di</p>
      <h1 class="text-7xl font-semibold">Desa Wisata Margamulya</h1>
      <button class="btn mt-8 hover:bg-white hover:text-darkGreen transition-colors duration-300">Jelajahi</button>
    </div>

    <!-- Bagian Mengenal Desa -->
    <div class="ct-container flex !px-52 items-center gap-36">
      <section class="w-8/12 space-y-4">
        <h2 class="text-darkGreen font-semibold text-2xl">Mengenal Tentang Desa Wisata Margamulya</h2>
        <p class="font-thin">Desa Wisata Margamulya merupakan desa yang terletak di Kecamatan Pasir Jambu, Ciwidey, Kab.
          Bandung, Jawa
          Barat. Desa Wisata Margamulya menawarkan keindahan dari kebun teh dan juga pengalaman bermain bersama dengan
          kambing-kambing dari para peternak di Desa Wisata Margamulya.</p>
        <button
          class="btn bg-darkGreen hover:border-darkGreen text-white mt-8 hover:bg-white hover:text-darkGreen transition-colors duration-300">Tentang
          Kami</button>
      </section>
      <img :src="tentangKamiBgImage" alt="" class="w-4/12">
    </div>

    <!-- Bagian Beragam Wisata -->
    <section
      class="ct-container container-beragam-wisata !px-[20%] bg-darkGreen text-white flex flex-col items-center text-center gap-4">
      <h2 class="text-4xl font-bold">Beragam Wisata</h2>
      <p class="text-lg font-thin">Dapatkan pengalaman liburan yang tak terlupakan di Desa kami. Mulai dari wisata alam
        yang menakjubkan hingga
        tradisi desa yang kental, selalu ada sesuatu yang dapat dinikmati semua orang.</p>
      <p class="text-lg font-thin">
        Pengunjung dapat membenamkan diri dalam tradisi lokal yang dinamis, menyaksikan bentuk seni tradisional, dan
        menikmati masakan lokal yang lezat. Baik Anda mencari ketenangan di tengah alam atau ekstravaganza budaya, desa
        kami menjanjikan pengalaman tak terlupakan bagi semua orang.</p>
    </section>

    <!-- Bagian Edukasi Wisata -->
    <div class="relative">
      <Carousel ref="edukasiCarousel">
        <Slide v-for="(edukasi, i) in edukasiCarouselList" :key="i">
          <div
            class="w-full aspect-[5/2] flex flex-col items-center px-[20%] text-white text-center gap-4 justify-center"
            :style="{ backgroundImage: `url(${edukasi.bgImage})`, backgroundSize: 'cover' }">
            <h2 class="text-4xl font-bold">{{ edukasi.title }}</h2>
            <p class="font-thin">{{ edukasi.description }}</p>
            <button
              class="btn mt-2 hover:bg-white hover:text-darkGreen transition-colors duration-300">Jelajahi</button>
          </div>
        </Slide>
      </Carousel>
      <div class="">
        <button @click="handleNextSlide" class="bg-white rounded-full aspect-square p-2 absolute top-1/2 right-16">
          <SolarAltArrowRightLineDuotone class="text-2xl font-bold text-black" />
        </button>
        <button @click="handlePrevSlide" class="bg-white rounded-full aspect-square p-2 absolute top-1/2 left-16">
          <SolarAltArrowLeftLineDuotone class="text-2xl font-bold text-black" />
        </button>
      </div>
    </div>

    <!-- Bagian UMKM -->
    <div class="ct-container text-white bg-darkGreen space-y-14">
      <section class="space-y-4 px-[12%]">
        <h2 class="text-4xl text-center">UMKM Desa Wisata Margamulya</h2>
        <p class="text-center">Desa kami menawarkan beragam produk yang dapat menjadi oleh-oleh sempurna bagi wisatawan
          yang berkunjung. Mulai dari pernak-pernik buatan lokal hingga makanan ringan lezat, selalu ada sesuatu yang
          sesuai dengan setiap selera dan preferensi. Bawa pulang sebagian dari kekayaan budaya desa kami dengan suvenir
          buatan tangan indah yang menampilkan keahlian tradisional pengrajin lokal kami.</p>
      </section>
      <div class="grid grid-cols-3 gap-x-7 gap-y-20"  v-auto-animate="{ duration: 600 }">
        <!-- v-for the above element -->
        <div class="space-y-6" v-for="(umkm, i) in umkmListcomputed" :key="i">
          <section class="space-y-2">
            <div class="w-full aspect-video">
              <img :src="umkm.cardImg" alt="" class="w-full h-full object-cover">
            </div>
            <h3 class="text-xl font-medium">Olahan Teh</h3>
            <p class="">Desa kami memiliki olahan daun teh yang memiliki cita rasa khas yang bersumber langsung dari
              pada petani teh di Desa Wisata Margamulya</p>
          </section>
          <button class="btn bg-white text-darkGreen hover:bg-darkGreen hover:text-white transition-all duration-500">Jelajahi</button>
        </div>
      </div>
      <div class="flex">
        <button class="btn mx-auto" @click="showMoreUmkm = !showMoreUmkm" v-if="!showMoreUmkm">Lihat Lainnya</button>
      </div>
    </div>
  </main>
</template>

<style scoped>
.container-hero {
  background-image: url(@/assets/img/heroBg.png);
  background-size: cover;
  background-position: center;
}

.container-beragam-wisata {
  background-image: url(@/assets/img/beragamWisataBg.png);
}

</style>