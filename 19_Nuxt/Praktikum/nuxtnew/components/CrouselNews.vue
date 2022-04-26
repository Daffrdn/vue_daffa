</<template>
<v-carousel
    cycle
    hide-delimiter-background
    show-arrows-on-hover
    class="mt-5"
    cols="12" sm="1" md="11"
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
              max-width="1050px">
                  <v-card-title class="white--text text-h4">{{slide.title}}</v-card-title>
            </v-img> 
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
    </v-carousel>      
</template>

<script>
export default{
  computed: {
        listApi(){
            return this.$store.state.list;
        },
    },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      this.$store.dispatch("getApiList");
    },
  },
};
</script>
