<template>
<div class="container">
  <h1 class="text-center"> Tech News </h1> 
    <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
    class="mt-5"
  >
    <v-carousel-item
      v-for="(slide, i) in listApi"
      :key="i" 
    >
      <v-sheet>
        <v-row
          class="fill-height"
          align="center"
          justify="center">
          <div class="fill-height top-gradient">
              <v-img 
              :src="slide.urlToImage"
              gradient="to top right, rgba(100,50,50,.0), rgba(25,32,72,.7)" 
              max-width="1200px">
                  <v-card-title class="white--text text-h4">{{slide.title}}</v-card-title>
            </v-img> 
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
  <h4 class="text-dark mt-5"> Cari Berita Terkini : </h4>
  <v-text-field
    label="Search News.."
    solo
    primary
    v-model="search">
    </v-text-field>
    <div class="row"> 
        <div class="col-md-6 col-sm-3" v-for="(api, index) in filteredApi" :key="index" >
            <v-hover v-slot="{ isHovering, props }">
            <v-card
                :elevation="isHovering ? 12 : 2"
                class="mx-auto"
                max-width="600"
                v-bind="props">
                <v-img
                class="white--text align-end"
                height="200px"
                :src="api.urlToImage">
                <v-card-title>{{ api.title }}</v-card-title>
                </v-img>

                <v-card-subtitle class="pb-0">
                {{api.author}}
                </v-card-subtitle>

                <v-card-text class="text--primary">
                <div>
                {{ api.description }}
                </div>
                </v-card-text>

                <v-card-actions>
                <v-btn
                    color="primary"
                    text>
                    Share 
                </v-btn>
                
                <v-btn
                    text
                    color="green" 
                    @click="clickApi(index)">
                    Read More 
                </v-btn>
                </v-card-actions>
            </v-card>
            </v-hover>
        </div>
        <div class="text-center mt-5 md-4">
    <v-pagination
      v-model="page"
      :length="listApi.length / 4"
    ></v-pagination>
  </div>
</div>    
</div>

</template>

<script>

export default {
    computed: {
        listApi(){
            return this.$store.state.api.list;
        },
    },
    methods: {
        fetchApi(){
            this.$store.dispatch("api/fetchTech");
        },
        clickApi(index) {
            this.$router.push({name:"api", params: { id: index } });
    },
    },
    mounted() {
        this.fetchApi();
    },
    data () {
      return {
        page: 1,
        search: "",
        filteredApi: [],
      }
    },
    watch:{
      search: function(){
        this.filteredApi = this.listApi.filter(api=>api.title.toLowerCase().includes(this.search.toLowerCase()));
      }
    },
    created: function(){
      this.filteredApi = this.listApi;
    },
};
</script>