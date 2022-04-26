<template>
  <v-row justify="center" align="center">
    <h1 class="mt-5"> Apple News </h1>
    <CrouselNews/>
    <appleApi/>
  </v-row>
</template>

<script>
import CrouselNews from '@/components/CrouselNews.vue'
import appleApi from '@/components/appleApi.vue'

export default {
  name: 'ApplePage',
  componentsL: {
    CrouselNews,
    appleApi,
  },
}
</script>
