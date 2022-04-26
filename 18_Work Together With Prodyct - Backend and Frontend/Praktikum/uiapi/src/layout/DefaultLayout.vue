<template>
<div>
    <v-toolbar
      class="green indigo"
      flat
      height="77px"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" ></v-app-bar-nav-icon>
      <v-toolbar-title>News API</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-sheet
    class="overflow-hidden"
    style="position: relative;"
  >
    <router-view/>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      dark
      class="green lighten-1"
    >
          <h5 class="m-3 text-center white--text">Kategori Berita</h5>
      <v-divider></v-divider>

        <v-list-item
          v-for="item in items"
          :key="item"
          link
          @click="$router.push({path: item.route })"
          >
          <v-list-item-icon>
            <v-img
            dark
                width="25px"
                :src="item.icon"
                >
            </v-img>
          </v-list-item-icon>

          <v-list-item-content >
              <v-list-item-title>
                {{ item.title }}
              </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
    </v-navigation-drawer>
  </v-sheet>
<div class="mt-5">
  <v-footer
    dark
    padless
    
  >
    <v-card
      flat
      tile
      class="green darken-1 white--text text-center"
    >
      <v-card-text>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Praktikum UI Framework, Menampilkan Data News API dengan menggunakan Vuetify, Axios, Vuex, Router, Vuex Persistedsate. dan menampilkan detail data yang sudah diklik dan membuat search untuk mencari berita yang dibutuhkan.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        <strong>Praktikum UI Framework - Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</div>
    </div>
</template>

<script>
export default {
    name: 'DefaultLayout',
    data () {
      return {
        drawer: null,
        items: [
          { title: 'US News', icon: 'https://taxprof.typepad.com/.a/6a00d8341c4eab53ef01a3fd165f10970b-800wi', route: '/' },
          { title: 'Tesla News', icon: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg', route: '/tesla' },
          { title: 'Apple News', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png', route: '/about'},
          { title: 'Wall Street News', icon: 'https://www.pngfind.com/pngs/m/679-6793891_wall-street-journal-logo-white-png-wsj-logo.png', route: '/wall' },
          { title: 'Tech News', icon: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/TechCrunch_Logo_2013.png', route: '/tech' },
        ],
      }
    },
}
</script>