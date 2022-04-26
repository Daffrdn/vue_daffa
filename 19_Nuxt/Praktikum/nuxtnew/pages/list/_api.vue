<template>
<v-row justify="center" align="center">
    <v-card>
        <v-img
                class="white--text align-end"
                height="400px"
                :src="listApi.urlToImage"
                gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)">
                    <div class="fill-height bottom-gradient"></div>
                <v-card-title>
                    <h2>{{ listApi.title }}</h2>
                </v-card-title>
                </v-img>
        <!-- <v-btn text color="White" to="/">
              Kembali 
          </v-btn> -->
    <div class="d-flex justify-content-between">
        <v-card-title>
        <v-list-item-avatar color="grey darken-3">
            <v-img
                class="elevation-6"
                alt=""
            ></v-img>
            </v-list-item-avatar>
        <v-list-item-content>
            <v-list-item-title class="white--text" > {{ listApi.author }} </v-list-item-title>
            </v-list-item-content>
        </v-card-title>
        <v-spacer> </v-spacer>
        <v-card-title>
            <v-list-item-content>
            <v-list-item-title class="white--text" > {{ listApi.publishedAt }} </v-list-item-title>
            </v-list-item-content>
        </v-card-title>
        </div>
        <v-card-text class="text-h5 font-weight white--text">
        {{ listApi.description }} 
        {{ listApi.content }}
        </v-card-text>
        <v-card-actions>
        <v-card-text class="text-h6 font-weight white--text">
            Lanjutkan Baca Ke  <a :href="listApi.url"> Sini </a>    
        </v-card-text>
        <v-spacer></v-spacer>
        <v-btn text color="White" to="/">
              Kembali 
          </v-btn>
        </v-card-actions>
    </v-card>
</v-row>
</template>

<script>
export default {
      computed: {
        listApi(){
            return this.$store.state.list;
        },
    },
}
</script>
