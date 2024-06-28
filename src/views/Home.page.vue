<script setup lang="ts">
import { Carousel, Slide } from 'vue3-carousel'
import { computed, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import tentangKamiBgImage from '@/assets/img/tentangKamiBg.png'
import wisataPeternakanKambingBgImage from '@/assets/img/wisataPeternakanKambingBg.png'
import wisataPerkebunanTehBgImage from '@/assets/img/wisataPerkebunanTehBg.png'
import wisataPermainanTradisionalBgImage from '@/assets/img/wisataPermainanTradisionalBg.png'
import SolarAltArrowRightLineDuotone from '~icons/solar/alt-arrow-right-line-duotone'
import SolarAltArrowLeftLineDuotone from '~icons/solar/alt-arrow-left-line-duotone'
// import umkmList from '@/db/umkm'
import { axiosInstance, baseURL } from '@/axios/instance'

// Data ================================

const edukasiCarouselList: {
  title: string
  description: string
  bgImage: string
}[] = [
  {
    title: 'Edukasi Wisata Peternakan Kambing',
    description: 'Program edukasi wisata peternakan kambing adalah sebuah inisiatif yang dirancang untuk menggabungkan pendidikan dan rekreasi. Program ini bertujuan untuk memberikan pengetahuan kepada peserta tentang berbagai aspek peternakan kambing, sambil menawarkan pengalaman langsung di lapangan.',
    bgImage: wisataPeternakanKambingBgImage,
  },
  {
    title: 'Edukasi Wisata Perkebunan Teh',
    description: 'Program edukasi wisata perkebunan teh adalah sebuah inisiatif yang menggabungkan aspek pendidikan dan rekreasi dengan fokus pada dunia perkebunan teh. Program ini bertujuan untuk memberikan wawasan mendalam tentang proses produksi teh, dari penanaman hingga pemrosesan, serta manfaat dan budaya yang terkait dengan teh.',
    bgImage: wisataPerkebunanTehBgImage,
  },
  {
    title: 'Atraksi Wisata Permainan Tradisional',
    description: 'Atraksi wisata permainan tradisional adalah program atau kegiatan yang menampilkan berbagai jenis permainan yang berasal dari budaya dan tradisi lokal. Tujuan dari atraksi ini adalah untuk memperkenalkan, melestarikan, dan menghidupkan kembali permainan tradisional yang mungkin sudah jarang dimainkan, sekaligus menawarkan pengalaman rekreasi yang edukatif dan menyenangkan.',
    bgImage: wisataPermainanTradisionalBgImage,
  },
]

const edukasiCarousel = ref(null)

const umkmList = ref<{ id: number, title: string, description: string }[]>([])

const showMoreUmkm = ref(false)

const umkmListcomputed = computed(() => {
  return showMoreUmkm.value ? umkmList.value : umkmList.value.slice(0, 3)
})

// Methods =============================

function handleNextSlide() {
  // @ts-expect-error
  if (edukasiCarousel.value?.data.currentSlide.value === edukasiCarouselList.length - 1) {
    // @ts-expect-error
    edukasiCarousel.value?.slideTo(0)
    return
  }
  // @ts-expect-error
  edukasiCarousel.value?.next()
}
function handlePrevSlide() {
  // @ts-expect-error
  if (edukasiCarousel.value?.data.currentSlide.value === 0) {
    // @ts-expect-error
    edukasiCarousel.value?.slideTo(edukasiCarouselList.length - 1)
    return
  }
  // @ts-expect-error
  edukasiCarousel.value?.prev()
}
async function fetchAllUmkm() {
  try {
    const { data } = await axiosInstance.get('/umkm')
    umkmList.value = data
  } catch (error) {
    console.error(error)
  }
}

// Lifecycle ===========================

onMounted(async () => {
  await fetchAllUmkm()
})
</script>

<template>
  <main>
    <!-- Bagian Hero -->
    <div class="container-hero h-[calc(100dvh-4rem)] w-full flex flex-col items-center justify-center gap-3 text-white pb-16">
      <p class="text-sm sm:text-2xl">
        Selamat datang di
      </p>
      <h1 class="text-2xl text-center sm:text-7xl -mt-2 font-bold font-abhaya">
        Desa Wisata Margamulya
      </h1>
      <button class="btn text-xs sm:text-base mt-1 sm:mt-8 hover:bg-white hover:text-darkGreen transition-colors duration-300">
        Jelajahi
      </button>
    </div>

    <!-- Bagian Mengenal Desa -->
    <div class="ct-container flex sm:flex-row flex-col-reverse sm:!px-52 items-center gap-16 sm:gap-36">
      <section class="sm:w-8/12 space-y-4">
        <h2 class="text-darkGreen font-semibold text-2xl font-abhaya">
          Mengenal Tentang Desa Wisata Margamulya
        </h2>
        <p class="font-thin text-sm sm:text-base">
          Desa Wisata Margamulya merupakan desa yang terletak di Kecamatan Pasir Jambu, Ciwidey, Kab.
          Bandung, Jawa
          Barat. Desa Wisata Margamulya menawarkan keindahan dari kebun teh dan juga pengalaman bermain bersama dengan
          kambing-kambing dari para peternak di Desa Wisata Margamulya.
        </p>
        <RouterLink
          :to="{ name: 'profilDesa' }"
          class="btn bg-darkGreen inline-block hover:border-darkGreen text-xs sm:text-base text-white mt-8 hover:bg-white hover:text-darkGreen transition-colors duration-300"
        >
          Tentang
          Kami
        </RouterLink>
      </section>
      <img :src="tentangKamiBgImage" alt="" class="sm:w-4/12">
    </div>

    <!-- Bagian Beragam Wisata -->
    <section
      class="ct-container container-beragam-wisata sm:!px-[20%] bg-darkGreen text-white flex flex-col items-center text-center gap-4"
    >
      <h2 class="text-4xl font-bold font-abhaya">
        Beragam Wisata
      </h2>
      <p class="text-sm sm:text-lg font-thin">
        Dapatkan pengalaman liburan yang tak terlupakan di Desa kami. Mulai dari wisata alam
        yang menakjubkan hingga
        tradisi desa yang kental, selalu ada sesuatu yang dapat dinikmati semua orang.
      </p>
      <p class="text-sm sm:text-lg font-thin">
        Pengunjung dapat membenamkan diri dalam tradisi lokal yang dinamis, menyaksikan bentuk seni tradisional, dan
        menikmati masakan lokal yang lezat. Baik Anda mencari ketenangan di tengah alam atau ekstravaganza budaya, desa
        kami menjanjikan pengalaman tak terlupakan bagi semua orang.
      </p>
    </section>

    <!-- Bagian Edukasi Wisata -->
    <div class="relative">
      <Carousel ref="edukasiCarousel" :autoplay="5000">
        <Slide v-for="(edukasi, i) in edukasiCarouselList" :key="i">
          <div
            class="w-full aspect-square sm:aspect-[5/2] flex flex-col items-center px-8 sm:px-[30%] text-white text-center gap-4 justify-center"
            :style="{ backgroundImage: `url(${edukasi.bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }"
          >
            <h2 class="text-lg sm:text-4xl font-bold font-abhaya">
              {{ edukasi.title }}
            </h2>
            <p class="font-thin text-xs sm:text-base">
              {{ edukasi.description }}
            </p>
            <button
              class="btn mt-2 !text-[12px] hover:bg-white hover:text-darkGreen transition-colors duration-300"
            >
              Jelajahi
            </button>
          </div>
        </Slide>
      </Carousel>
      <div class="hidden sm:block">
        <button class="bg-white rounded-full aspect-square p-2 absolute top-1/2 right-16" @click="handleNextSlide">
          <SolarAltArrowRightLineDuotone class="text-2xl font-bold text-black" />
        </button>
        <button class="bg-white rounded-full aspect-square p-2 absolute top-1/2 left-16" @click="handlePrevSlide">
          <SolarAltArrowLeftLineDuotone class="text-2xl font-bold text-black" />
        </button>
      </div>
    </div>

    <!-- Bagian UMKM -->
    <div class="ct-container text-white bg-darkGreen space-y-14">
      <section class="space-y-4 px-0 sm:px-[12%]">
        <h2 class="text-3xl sm:text-4xl text-center font-abhaya">
          UMKM Desa Wisata Margamulya
        </h2>
        <p class="text-center font-thin text-sm sm:text-base ">
          Desa kami menawarkan beragam produk yang dapat menjadi oleh-oleh sempurna bagi wisatawan
          yang berkunjung. Mulai dari pernak-pernik buatan lokal hingga makanan ringan lezat, selalu ada sesuatu yang
          sesuai dengan setiap selera dan preferensi. Bawa pulang sebagian dari kekayaan budaya desa kami dengan suvenir
          buatan tangan indah yang menampilkan keahlian tradisional pengrajin lokal kami.
        </p>
      </section>
      <div v-auto-animate="{ duration: 600 }" class="grid grid-cols-1 sm:grid-cols-3 sm:gap-x-7 gap-y-16 sm:gap-y-20">
        <!-- v-for the above element -->
        <div v-for="(umkm, i) in umkmListcomputed" :key="i" class="space-y-6">
          <section class="space-y-2">
            <div class="w-full aspect-video">
              <img :src="`${baseURL}/umkm/image/card/${umkm.id}`" alt="" class="w-full h-full object-cover">
            </div>
            <h3 class="text-xl font-medium">
              {{ umkm.title }}
            </h3>
            <p class="">
              {{ umkm.description }}
            </p>
          </section>
          <RouterLink
            :to="{ name: 'detailUmkm', params: { id: umkm.id } }"
            class="btn bg-white block w-fit text-darkGreen hover:bg-darkGreen hover:text-white text-xs sm:text-base transition-all duration-500"
          >
            Jelajahi
          </RouterLink>
        </div>
      </div>
      <div class="flex">
        <button v-if="!showMoreUmkm" class="btn mx-auto" @click="showMoreUmkm = !showMoreUmkm">
          Lihat Lainnya
        </button>
      </div>
    </div>

    <div class="pt-20 sm:pt-[16rem]">
      <!-- <img src="https://images.unsplash.com/photo-1718012004387-b2ff515edc6d?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
           alt="" class="aspect-[3/1] object-cover"> -->
      <iframe
        src="https://www.youtube.com/embed/oygEZJ99-TI?list=TLGG9aEk3RvN6BkxOTA2MjAyNA"
        title="Profile Desa Wisata Margamulya kec Pasir Jambu kab Bandung, Jawa Barat (Desa Wisata Gaya)"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        class="mx-auto scale-110 w-full aspect-video object-cover"
      />
    </div>

    <!-- Bagian Apa kata mereka -->
    <!-- <div class="space-y-14 py-32">
      <div class="px-48 space-y-4">
        <h2 class="text-4xl text-darkGreen font-abhaya text-center">Apa Kata Mereka Tentang Kami</h2>
        <p class="text-center">Telah banyak orang yang berkunjung ke Desa Wisata Margamulya dan membagikan cerita mereka
          tentang tempat kami.</p>
      </div>
      <Carousel :autoplay="5000" :transition="600" :itemsToShow="3.90" :wrapAround="true">
        <Slide v-for="slide in 10" :key="slide">
          <div
               class="carousel__item bg-darkGreen rounded-xl cursor-default px-10 pt-16 mt-16 pb-6 aspect-[11/12] text-white space-y-3 relative mb-32">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                 alt="" class=" size-24 object-cover rounded-full absolute -top-11 z-10 left-1/2 -translate-x-1/2">
            <h3 class="text-xl font-semibold">Novia Bachmid</h3>
            <p class="font-thin">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, quaerat voluptate.
              Iure dolor
              aspernatur vel at in hic earum et</p>
          </div>
        </Slide>
      </Carousel>
    </div> -->
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

.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-20deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(20deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>
