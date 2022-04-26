Nama   : Daffa Erdian Fahrezy

Kelas  : VueJs-D

Materi : Vue Helpers

# (14) Vue Helpers

1. **Navigasi Vue**
    Navigasi pada Vue adalah kegiatan berpindah dari suatu halaman ke halaman lain, pada dasarnya Vue adalah *Single Page Application* yang berarti hanya ada  satuenty halaman HTML saja namun konten dari halaman html tersebut dirender ulang dengan bantuan javascript sehingga seolah olah berganti halaman. untuk cara melakukan navigasi yaitu halaman harus sudah ada, jika kita ingin berpindah dari halaman home ke about, kita bisa membukanya lewat address bar `../about` atau caranya menyediakan opsi controller pengguna untuk mengakses halaman tersebut dengan tombol link atau button caranya, *Params and Query* dan *Jenis Redeksi*. Navigasi memiliki isitlah yang unik yaitu * *  *  **Navigasi Beranak** adalah Sub-path dari path yang ada contoh.
        ```
        ../user/setting/privacy
        //user = induk dari setting
        //setting = anak dari user dan indk dari setting
        // privacy = anak dari setting 
        ```  
    *  **Navigasi Dinamis** adalah dimana path tersebut memiliki nilai sembarang dan kita tidak perlu mendefinisikan nilainya satu persatu.
        ```
        ../user/1234567
        //user = navigasi statis path didefinisikan manual sebagai /user
        //1234567 =  Navigasi Dinamis path tidak didefinisikan sesuai nilainya namun sesuai key parameter /user/:id
        ```

2. **Layout Template Vue**
    Layout adalah susunan tata letak, sedangkan layout template pada vue adalah komponen yang dapat dipakai sebagai susunan tata letak dasar yang membukus masing - masing halaman. contoh layoout ialah *Navbar* dan *Footer* sedangkan halaman *View Halaman*. Cara kerja layout template, layout merupakan komponen biasa tetapi yang membuatnya berbeda ialah dapat  meneruskan konten dari anak komponennya.
    ```
    <route-view/>
    <-- isi -- >
    <route-view></route-view>
    ```
    Layout pada umumnya memilki direktori khusus pada folder layout atau sejajar dengan router dan sejajar dengan view. untuk membuat dan menggunakan layout  yaitu buat kontroler navigasinya dan tambahkan  `<router-view/>`

3. **Penyimpanan Global dan Global Permanen**
    Penyimpanan Global adalah Sebuah metode untuk menyimpan variabel yang dapat diakses dengan mudah di seluruh bagian aplikasi, penyimpanan global dibagi menjadi tiga yaitu :
    * **State komponen**, hanya tersimpan dan valid pada satu komponen saja. 
    * **Props**, props hanya tersimpan dan valid di induk atau komponen saja.
    * **Store**, Tersimpan dan valid dibagian manapun aplikasi.

    **Vuex** adalah pola manajemen penyimpanan atau store yang berbentuk pusataka untuk aplikasi Vue.js. lebih kompleksnya **Vuex** merupakan penyimpanan terpusat untuk semua komponen dalam aplikasi. dengan aturan yang memastikan bahwa variabel yang tersimpan hanya dapat dimutasi dengan cara yang terstruktur dan terprediksi, untuk membuat Vuex caranya inisiasi berikut didalam main.js
    ```
    import Vuex from "vuex"
    Vue.use(Vuex);
    ```
    Umumnya Direktori Vuex disimpan didalam folder Store yang sejajar dengan main.js, selain index.js biasanya tersimpan berbagai module store untuk pengelompokan state agar lebih rapi dan terstruktur. Vuex dibagi menjadi dua yaitu:
    * **Vuex Mutation**, diinisiasikan dengan cara 
        ```
        store.commit("setAngka", this.newInputValue);
        //commit = key mutation
        //setAngka = nama mutation
        //this.newInputValue = Payload/mutation 
        ```
        Vuex Mutation bertujuan untuk mengubah nilai variabel yang ada didalam store tanpa ada logika pengolahan muatan didalam fungsi mutation tersebut.
    * **Vuex Action**, diinisiasikan dengan cara
        ```
        store.dispatch("changeAngkaValue", this.newInputValue);
        //dispatch = key action
        //changeAngkaValue = nama action
        //this.newInputValue = Payload/mutation
        ```
        Vuex Action Bertugas untuk sebagai pintu masuk perintah yang menghubungkan komponen dengan store. dan juga action merupakan tempat untuk berkomunikasi dengan *API*.
    Pada Dasarnya nilai yangada didalam Vuex store akan dihapus atau disetel ulang sesuai dengan nilai awal jika halaman dimuat ulang. jadi kita memperlukan **Penyimpanan Global Permanen**.

    **Penyimpanan Global Permanen** merupakan memepermanenkan state yang ada distore supaya tidak hilang jika halaman dimuat ulang. Biasanya penyimpanan global permanen menggunakan vuex-persistedstate, vuex-persistedstate dapat mempertahankan dan rehidrasi vuex state kita di antara pemuatan ulanghalaman , dengan menyimpannya dilocal storage atau bahkan didalm cookies.
    