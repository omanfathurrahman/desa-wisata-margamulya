import heroUmkmOlahanTehBgImage from '@/assets/img/heroUmkmOlahanTeh.png'
import heroUmkmPeternakanKambingBgImage from '@/assets/img/heroUmkmPeternakanKambing.png'
import heroUmkmKonveksiTasBgImage from '@/assets/img/heroUmkmKonveksiTas.png'
import heroUmkmKaluaJerukBgImage from '@/assets/img/heroUmkmKaluaJeruk.png'

import cardUmkmOlahanTehBgImage from '@/assets/img/cardUmkmOlahanTehImage.png'
import cardUmkmPeternakanKambingBgImage from '@/assets/img/cardUmkmPeternakanKambingImage.png'
import cardUmkmKonveksiTasBgImage from '@/assets/img/cardUmkmKonveksiTasImage.png'
import cardUmkmKaluaJerukBgImage from '@/assets/img/cardUmkmKaluaJerukImage.png'

import descUmkmOlahanTehImage from '@/assets/img/descUmkmOlahanTehImage.png'
import descUmkmOlahanTeh2Image from '@/assets/img/descUmkmOlahanTeh2Image.png'

import descUmkmPeternakanKambingImage from '@/assets/img/descUmkmPeternakanKambingImage.png'
import descUmkmPeternakanKambing2Image from '@/assets/img/descUmkmPeternakanKambing2Image.png'

import descUmkmKaluaJerukImage from '@/assets/img/descUmkmKaluaJerukImage.png'
import descUmkmKaluaJeruk2Image from '@/assets/img/descUmkmKaluaJeruk2Image.png'

import descUmkmKonveksiTasImage from '@/assets/img/descUmkmKonveksiTasImage.png'
import descUmkmKonveksiTas2Image from '@/assets/img/descUmkmKonveksiTasImage.png'



type umkmDescList = {
  title: string
  descripsion: string
  img: string
}[]

const umkmList: {
  title: string
  heroImg: string
  cardImg: string
  path: string
  shortDesc: string
  descList?: umkmDescList
}[] = [
  {
    title: 'Olahan Teh',
    cardImg: cardUmkmOlahanTehBgImage,
    heroImg: heroUmkmOlahanTehBgImage,
    path: 'olahan-teh',
    shortDesc: 'Desa kami memiliki olahan daun teh yang memiliki cita rasa khas yang bersumber langsung dari pada petani teh di Desa Wisata Margamulya',
    descList: [
      {
        title: 'Dari para petani teh terbaik, untuk menghasilkan cita rasa teh yang nikmat',
        descripsion: 'Para petani teh kami berkomitmen untuk memberikan hasil terbaik dari setiap daun teh yang dipanen. Melewati berbagai proses yang panjang hingga menjadi sebuah teh yang dapat dinikmati oleh khalayak ramai.',
        img: descUmkmOlahanTehImage
      },
      {
        title: 'Dari Desa Margamulya, untuk kita semua',
        descripsion: 'Kami menciptakan produk-produk dari hasil olahan teh yang kami buat, salah satu produk unggulan kami adalah teh gelang, dimana teh ini merupakan teh organik  yang memberikan manfaat relaksasi, meningkatkan sistem kekebaln tubuh, membantu mengurangi rasa sakit dan nyeri, membantu mencegah penyakit kronis, meningkatkan sistem pencernaan, merangsang fungsi Otak dan menjaga berat badan.',
        img: descUmkmOlahanTeh2Image
      }
    ]
  },
  {
    title: 'Peternakan Kambing',
    cardImg: cardUmkmPeternakanKambingBgImage,
    heroImg: heroUmkmPeternakanKambingBgImage,
    path: 'peternakan-kambing',
    shortDesc: 'Desa kami memiliki olahan daun teh yang memiliki cita rasa khas yang bersumber langsung dari pada petani teh di Desa Wisata Margamulya',
    descList: [
      {
        title: 'Kami menawarkan pengalaman terbaik dalam edukasi peternakan kambing',
        descripsion: 'Peternakan kambing kami menjadi daya tarik utama dari Desa Wisata Margamulya. Kami menawarkan pengalaman bagaimana cara beternak kambing dan edukasi dengan detil tentang siklus hidup kambing, mulai dari kelahiran hingga dewasa, serta peran kambing di masyarakat desa. Wisata ini tidak hanya dapat dinikmati oleh anak-anak namun juga orang dewasa dapat merasakan pengalaman yang sama.',
        img: descUmkmPeternakanKambingImage
      },
      {
        title: 'Olahan kambing di desa kami dari kambing-kambing terbaik',
        descripsion: 'Kambing yang kami rawat dari kecil hingga dewasa dengan penuh kasih sayang menghasilkan susu yang bermanfaat bagi masyarakat desa. Susu kambing ini tidak hanya dapat dirasakan oleh penduduk desa, namun orang-orang yang berkunjung ke Desa Wisata Margamulya. Terdapat cafe peternakan yang menawarkan hasil dari produk-produk olahan dari susu kambing yang berkualitas tinggi.',
        img: descUmkmPeternakanKambing2Image
      }
    ]
  },
  {
    title: 'Kalua Jeruk',
    cardImg: cardUmkmKaluaJerukBgImage,
    heroImg: heroUmkmKaluaJerukBgImage,
    path: 'kalua-jeruk',
    shortDesc: 'Desa kami memiliki olahan daun teh yang memiliki cita rasa khas yang bersumber langsung dari pada petani teh di Desa Wisata Margamulya',
    descList: [
      {
        title: 'Kudapan ringan yang terbuat dari kulit jeruk Bali',
        descripsion: 'Umumnya kalua jeruk terbuat dari berbagai macam bahan, salah satunya adalah daging buah. Kalua jeruk dari Ciwidey, Kabupaten Bandung sedikit berbeda dari kalua jeruk pada umumnya, yaitu terbuat dari kulit jeruk Bali. Hal ini yang menjadi ciri khas dari kalua jeruk yang terdapat di tempat kami.',
        img: descUmkmKaluaJerukImage
      },
      {
        title: 'Kulit jeruk Bali dapat berubah menjadi kudapan di tangan pengrajin kami',
        descripsion: 'Di tangan perajinnya, rasa kulit jeruk Bali yang pahit bisa berubah menjadi manisan yang segar setelah diolah. Kalua Jeruk menjadi oleh-oleh yang tak boleh dilewatkan saat berwisata ke wilayah Kabupaten Bandung, Jawa Barat.',
        img: descUmkmKaluaJeruk2Image
      }
    ]
  },
  {
    title: 'Konveksi Tas',
    cardImg: cardUmkmKonveksiTasBgImage,
    heroImg: heroUmkmKonveksiTasBgImage,
    path: 'konveksi-tas',
    shortDesc: 'Desa kami memiliki olahan daun teh yang memiliki cita rasa khas yang bersumber langsung dari pada petani teh di Desa Wisata Margamulya',
    descList: [
      {
        title: 'Kami memiliki konveksi tas dengan kualitas terbaik',
        descripsion: 'Para petani teh kami berkomitmen untuk memberikan hasil terbaik dari setiap daun teh yang dipanen. Melewati berbagai proses yang panjang hingga menjadi sebuah teh yang dapat dinikmati oleh khalayak ramai.',
        img: descUmkmKonveksiTasImage
      },
      {
        title: 'Dari Desa Margamulya, untuk kita semua',
        descripsion: 'Kami menciptakan produk-produk dari hasil olahan teh yang kami buat, salah satu produk unggulan kami adalah teh gelang, dimana teh ini merupakan teh organik  yang memberikan manfaat relaksasi, meningkatkan sistem kekebaln tubuh, membantu mengurangi rasa sakit dan nyeri, membantu mencegah penyakit kronis, meningkatkan sistem pencernaan, merangsang fungsi Otak dan menjaga berat badan.',
        img: descUmkmKonveksiTas2Image
      }
    ]
  },
]

export default umkmList