<template>

    <div class="container">
        <div class="row">
                <v-img
                class="white--text align-end"
                height="400px"
                :src="this.$store.state.api.list[$route.params.id].urlToImage"
                gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)">
                    <div class="fill-height bottom-gradient"></div>
                <v-card-title>
                    <h2>{{ this.$store.state.api.list[$route.params.id].title }}</h2>
                </v-card-title>
                </v-img>
    <v-card
        class="mx-auto"
        color="#ffffff"
        dark
        max-width="1250"
    >
    <div class="d-flex justify-content-between">
        <v-card-title>
        <v-list-item-avatar color="grey darken-3">
            <v-img
                class="elevation-6"
                alt=""
            ></v-img>
            </v-list-item-avatar>
        <v-list-item-content>
            <v-list-item-title class="black--text" > {{ this.$store.state.api.list[$route.params.id].author }} </v-list-item-title>
            </v-list-item-content>
        </v-card-title>
        <v-card-title>
            <v-list-item-content>
            <v-list-item-title class="grey--text" > {{ this.$store.state.api.list[$route.params.id].publishedAt }} </v-list-item-title>
            </v-list-item-content>
        </v-card-title>
        </div>

        <v-card-text class="text-h5 font-weight black--text">
        {{ this.$store.state.api.list[$route.params.id].description }} 
        {{ this.$store.state.api.list[$route.params.id].content }}
        </v-card-text>
    <div class="d-flex justify-content-between">
        <v-card-text class="text-h6 font-weight black--text">
            Lanjutkan Baca Ke  <a :href="this.$store.state.api.list[$route.params.id].url"> Sini </a>    
        </v-card-text>
        <router-link to="/">
            <v-btn
        class="ma-2"
        outlined
        color="indigo"
        >
        Kembali
        </v-btn>
        </router-link>
    </div>
    </v-card>
</div>
</div>
</template>

<script>

export default {
    name: 'NewsItem',
}
    
</script>
