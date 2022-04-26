Nama   : Daffa Erdian Fahrezy

Kelas  : VueJs-D

Materi : Vue UI Framework

# (17) Vue UI Framework

1. **UI Framework Dan Vuetify**
    UI Framework adalah kumpulan elemen visual (Seperti tombol, ikon dll) dan fungsionalitas yang bisa dipakai secara instan. UI Framework membantu untuk membuat aplikasi web dengan tampilan yang baik dan terlihat profesional. Cara kerjanya yaitu menyediakan komponen siap pakai kemudian kita impor komponen yang kita butuhkan kedalam aplikasi. Contoh dari Framework UI Ve yaitu, *Vuetify*, *BootstrapVue*, *Buefy* dllnya.

    **Vuetify** adalah UI Framework dan sebuah library yang memungkinkan kita membuat aplikasi dengan tampilan yang indah walaupun kita bukanlah seorang desainer. Vuetifiy memiliki lebih dari 80 komponen berbasis material design. Cara menggunakannya yaitu Vuetify sudah menyediakam komponen siap pakai didalam aplikasi kita.contoh 
    ```
    <v-btn
        color="primary"
        elevation="2"
    ></v-btn>
    ```
    Code diatas untuk membuat komponen Tombol button.
    Untuk mengeinstal Vuetifiy pasang dahulu Vuetify sebagai dependency. Selanjutnya Import Vuetify kedalam `main.js`. Vuetifiy harud diisi didalam tag `<v-app> </v-app>` dan bisa menambahkan link referal unutuk Font

2. **Manajemen Warna Tema dan Light and Dark**
    Manajemen Warna Tema adala Pengaturan set warna yang dapat kita terapkan terhadap tampilan aplikasi. Cara kerja vuetify yaitu menyimpan warna tema bawaan yang bisa kita setel secara manual ketika aplikasi berjalan, dan cara memanggilnya dengan cara `this.$vuetify.theme.themes.light`, untuk mengganti warna tema buat fungsi vuetify kemudian tambahkan menu pilihan warna.

    **Light and Dark** atau gelap terang yaitu fitur peralihan warna latar belakng aplikasi dari terang ke gelap atau sebaliknya. vuetifiy memilki variabel boolean dark dan juga menyimpan tema bawaan mode gelap. `this.$vuetify.theme.dark` dan `this.$vuetfiy.theme.themes.dark`. untuk mengganti warna tema buat fungsi vuetify kemudian tambahkan menu pilihan warna.

3. **Reaktivitas Kerangka UI dan Extra**
    Reaktivitas Viewport adalah perubahan ukuran yang menyesuaikan dengan lebar layar tampilan. lebar layar dibagi menjadiukuran tertentuk berdasarkan golongan nya yaitu:
    * **ExtraSmall(xs)**, small to large phone dengan range < 600px
    * **Small(sm)**, Small to medium Phone dengan range 600px > < 960px
    * **Medium(md)**, Large tablet to Laptop dengan range 960px > < 1264px
    * **Large(Lg)**, Desktop dengan range 1264px > < 1904px
    * **ExtraLarge(xl)**, 4K and ultra wide dengan range > 1904px.

    **Extra** mempunyai fitur tambahan untuk *Pagination*, *Filter*, dan *Sort*. adapaun fitur menarik yaitu 
    * **Validasi Input** komponen input memilki props untuk validasi yang cukup canggih, menerima *array of functions*.
    * **Skeleton Loader** Membuat loading seperti aplikasi bintang 5.
    * **Dialog** Membuat Pop-up dialog tidak lagi menjadi mimpi buruk berkat bantuan rangka kerja UI.