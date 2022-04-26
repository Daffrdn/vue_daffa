<template>
  <v-row justify="center" align="center">
    <h1 class="mt-5"> US News </h1>
    <CrouselNews/>
    <ListAPI/>
  </v-row>
</template>

<script>
import CrouselNews from '@/components/CrouselNews.vue'
import ListAPI from '@/components/ListAPI.vue'

export default {
  name: 'IndexPage',
  componentsL: {
    CrouselNews,
    ListAPI,
  },
}
</script>
