<template>
<v-row justify="center" align="center" class="mt-5">
      <v-text-field
    v-model="search"
    label="Search News.."
    solo
    primary
    class="mt-5">
    </v-text-field>
  <v-col v-for="api in filteredList" :key="api" cols="12" sm="12" md="0">
      <v-card
                :elevation="isHovering ? 12 : 2"
                class="mx-auto"
                max-width="1200"
                v-bind="props">
                <v-img
                class="white--text align-end"
                height="400px"
                :src="api.urlToImage">
                <v-card-title class="headlines text--light">{{ api.title }}</v-card-title>
                </v-img>
          <v-card-subtitle>
            Author: {{api.author}}
          </v-card-subtitle>
        <v-card-text>
            {{ api.description }}
            <!-- {{ api.publishedAt }} -->
        </v-card-text>
        <v-divider class="mx-4"></v-divider>
        <v-card-actions>
            <v-btn text color="White" @click="clickDetail(api)">
              Read More 
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
</v-row>   
</template>

<script>

export default {
  data(){
    return {
      search: "",
    }
  },
  computed: {
        listApi(){
            return this.$store.state.list;
        },
        filteredList(){
          return this.listApi.filter(api => {
            return api.title.toLowerCase().includes(this.search.toLowerCase(
            ))
          })
        }
    },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      this.$store.dispatch("getTechList");
    },
    clickDetail(param) {
      this.$store.commit('setList', param)
      this.$router.replace({'path': '/list/'+param.title})
    },
  },
}
</script>

