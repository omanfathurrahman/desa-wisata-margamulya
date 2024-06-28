<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import heroPaketWisataBgImage from '@/assets/img/heroPaketWisata.png'
import { axiosInstance } from '@/axios/instance'
import HeroComp from '@/components/Hero.comp.vue'
import formatPriceToRupiah from '@/utils/formatPriceToRupiah'

const tripList = ref<{ id: number, title: string, price: number }[]>([])
const tripFacilities = ref<{ id: number, facility: string, trip_package_id: number, order: number }[]>([])
const tripFacilitiesOrdered = computed(() => tripFacilities.value.sort((a, b) => a.order - b.order))

async function fetchTripList() {
  try {
    const { data } = await axiosInstance.get('/trip-packages')
    tripList.value = data
  } catch (error) {

  }
}

async function fetchTripFacilities() {
  try {
    const { data } = await axiosInstance.get<{ id: number, facility: string, trip_package_id: number, order: number }[]>('/trip-packages/facilities')
    tripFacilities.value = data
  } catch (error) {

  }
}

onMounted(() => {
  fetchTripList()
  fetchTripFacilities()
})
</script>

<template>
  <main>
    <!-- Container Hero -->
    <HeroComp :heroBgImage="heroPaketWisataBgImage" title="Paket Wisata Desa Wisata Margamulya" />

    <!-- Bagian Umkm Desa -->
    <div class="ct-container !pt-0">
      <section class="mb-12">
        <div class="">
          <h2 class="text-center text-2xl sm:text-4xl font-semibold font-abhaya text-darkGreen">
            UMKM Desa Wisata Margamulya
          </h2>
          <p class="text-pretty text-center mt-4 font-thin text-sm sm:text-lg">
            Desa kami menawarkan beragam produk yang dapat
            menjadi oleh-oleh sempurna bagi wisatawan yang berkunjung. Mulai dari pernak-pernik buatan lokal hingga
            makanan ringan lezat, selalu ada sesuatu yang sesuai dengan setiap selera dan preferensi. Bawa pulang
            sebagian dari kekayaan budaya desa kami dengan suvenir buatan tangan indah yang menampilkan keahlian
            tradisional pengrajin lokal kami. Jadi, pastikan untuk menjelajahi pasar dan toko lokal kami untuk menemukan
            kenang-kenangan sempurna dari kunjungan Anda.
          </p>
        </div>
      </section>
      <div class="grid grid-cols-1 sm:grid-cols-2 w-fit mx-auto sm:px-[18%] gap-12">
        <div v-for="trip in tripList" :key="trip.id" class="bg-darkGreen text-white p-6 rounded-xl flex flex-col justify-between">
          <div class="space-y-4 mb-8">
            <h3 class="text-xl sm:text-2xl font-semibold">
              {{ trip.title }}
            </h3>
            <h4 class="text-xl sm:text-2xl font-semibold">
              {{ formatPriceToRupiah(trip.price) }}/pax
            </h4>
            <div class="">
              <p>Fasilitas:</p>
              <ul class="list-disc list-inside">
                <template v-for="fasilitas in tripFacilitiesOrdered" :key="fasilitas.id">
                  <li v-if="fasilitas.trip_package_id === trip.id" class="ml-3 text-sm font-thin text-wrap">
                    {{ fasilitas.facility }}
                  </li>
                </template>
              </ul>
            </div>
          </div>
          <button class="btn bg-white text-darkGreen hover:bg-darkGreen hover:text-white transition-colors duration-500">
            Pesan Sekatang
          </button>
        </div>
        <!-- <div class="bg-darkGreen text-white p-6 rounded-xl flex flex-col justify-between">
          <div class="space-y-4 mb-8">
            <h3 class="text-2xl font-semibold">Overnight Trip Package</h3>
            <h4 class="text-2xl font-semibold">Rp. 475.000/pax</h4>
            <div class="">
              <p>Fasilitas:</p>
              <ul class="list-disc list-inside">
                <li v-for="fasilitas in fasilitasOvernightTrip" :key="fasilitas" class="ml-3 text-sm font-thin text-wrap">{{ fasilitas }}</li>
              </ul>
            </div>
          </div>
          <button class="btn bg-white text-darkGreen hover:bg-darkGreen hover:text-white transition-colors duration-500">Pesan Sekatang</button>
        </div> -->
      </div>
    </div>
  </main>
</template>
