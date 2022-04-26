<template>
  <v-row justify="center" align="center">
    <h1 class="mt-5"> Wall Street News </h1>
    <CrouselNews/>
    <wallApi/>
  </v-row>
</template>

<script>
import CrouselNews from '@/components/CrouselNews.vue'
import wallApi from '@/components/wallApi.vue'

export default {
  name: 'WallStreetPage',
  componentsL: {
    CrouselNews,
    wallApi,
  },
}
</script>
