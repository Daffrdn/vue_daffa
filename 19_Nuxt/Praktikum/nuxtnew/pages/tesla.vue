<template>
  <v-row justify="center" align="center">
    <h1 class="mt-5"> Tesla News </h1>
    <CrouselNews/>
    <teslaApi/>
  </v-row>
</template>

<script>
import CrouselNews from '@/components/CrouselNews.vue'
import teslaApi from '@/components/teslaApi.vue'

export default {
  name: 'TeslaPage',
  componentsL: {
    CrouselNews,
    teslaApi,
  },
}
</script>
