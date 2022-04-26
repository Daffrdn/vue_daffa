<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-img
            dark
                width="25px"
                :src="item.icon"
                >
            </v-img>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'https://taxprof.typepad.com/.a/6a00d8341c4eab53ef01a3fd165f10970b-800wi',
          title: 'US News',
          to: '/',
        },
        {
          icon: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png',
          title: 'Apple News',
          to: '/apple',
        },
        {
          icon: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg',
          title: 'Tesla News',
          to: '/tesla',
        },
        {
          icon: 'https://www.pngfind.com/pngs/m/679-6793891_wall-street-journal-logo-white-png-wsj-logo.png',
          title: 'Wall Street News',
          to: '/wallstreet',
        },
        {
          icon: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/TechCrunch_Logo_2013.png',
          title: 'Tech News',
          to: '/tech',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Revaktor News API',
    }
  },
}
</script>
