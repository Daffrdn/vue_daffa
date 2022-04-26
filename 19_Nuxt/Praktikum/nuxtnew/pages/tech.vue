<template>
  <v-row justify="center" align="center">
    <h1 class="mt-5"> Tech News </h1>
    <CrouselNews/>
    <techApi/>
  </v-row>
</template>

<script>
import CrouselNews from '@/components/CrouselNews.vue'
import techApi from '@/components/techApi.vue'

export default {
  name: 'TechPage',
  componentsL: {
    CrouselNews,
    techApi,
  },
}
</script>
