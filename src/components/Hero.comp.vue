<script lang="ts" setup>

defineProps<{
  heroBgImage: string
  title: string
}>()
</script>

<template>
  <!-- Container Hero -->
  <div class="h-[55vh] bg-cover text-white text-5xl flex flex-col items-center justify-center font-semibold mb-40"
    :style="{ backgroundImage: `url(${heroBgImage})` }">
    <h1>{{ title }}</h1>
  </div>
</template>