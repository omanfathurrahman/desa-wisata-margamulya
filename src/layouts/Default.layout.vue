<script setup lang="ts">
import { RouterView } from 'vue-router';
import HeaderComp from '@/components/Header.comp.vue'
import FooterComp from '@/components/Footer.comp.vue'
</script>

<template>
  <div class="">
    <HeaderComp />
    <RouterView />
    <FooterComp />
  </div>
</template>