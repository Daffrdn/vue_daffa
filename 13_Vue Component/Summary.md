Nama   : Daffa Erdian Fahrezy

Kelas  : VueJs-D

Materi : Vue Component

# (13) Vue Component

1. **Module Export & Import**
    Module javascript adalah merupakan sebuah perpustakaan atau library *function* untuk tujuan tertentu, modul hanya sebuah file yang berisi satu modul skrip. Terdapat perbedaan antara regular script dan modul, modul bisa memuat satu sama lain dan menggunakan pengarahan khusus **export** dan **Import** untuk fungsi pertukaran, memanggil fungsi dari satu modul ke modul lainnya. 
    * **CJS**, mengimport semua isi sedangkan
    * **ESM**, mengimport yang dibutuhkan saja

    **Export** ialah digunakan untuk menyediakan fungsi, object, atau nilai primitif dari modul sehingga dapat digunakan oleh modul lain dengan pernyataan import. ada dua tipe export yaitu:
    * **Named export**, export nol atau lebih permodul `export const`
    * **Default export**, satu per-modul `export default`

    **Import** digunakan untuk mengambil variabel, obyek, atau fungsi yang disediakan oleh modul lain, ada empat tipe import yaitu:
    * **import defaults**, diinisiasikan dengan berikut `import target`.
    * **import multiple export**, diinisiasikan dengan berikut `import {target}`.
    * **import defaults + multiple**, diinisiasikan dengan berikut `import targetDefault, {target as t}`.
    * **Rename multiple export**, diinisiasikan dengan berikut `import {target as t}`.

2. **Komponen dapat digunakan kembali dan Paradigma Fungsi pembantu**
    Sebuah komponen file tunggal yang bertujuan untuk dapat digunakan kembali atau digunakan lebih dari satu kali di tempat yang berbeda, cara kerjanya yaitu terdapat dua file yang bertype *Child* anak dan *parent* induk yang dimana parent mengimport file child. Direktori komponen dijadikan satu dengan komponen lain dan dipisah dengan komponen yang bertugas sebagai halaman. halaman dapat menggunakan komponen tapi komponen tidak dapat menggunakan halaman, komponen dapat menggunakan komponen lain. terdapat cara berkomunikasi antara *parent* dan *child* yaitu, ekspos data dari induk ke anak  dilakukan dengan contoh :
    ```
    <Helloword msg="Welcome to Your Vue.js App" @click="showAlert"/>
    //msg sebagai prop yaitu varaiabel
    //@click sebagai emits atau fungsi/event
    ```

    Paradigma fungsi pembantu adalah fungsi perkakas/pembantu yang bertujuan untuk dapat digunakan lebih dari satu kali ditempat yang berbeda kenapa memeakai paradigma pembantu ini yaitu: **Lebih efektif**, **Lebih Efisien** dan **Menghindari huru-hara**. biasanya untuk direktori komponen umumnya fungsi pembantu dijadikan satu pada direktori yang sejajar dengan komponen atau halaman. fungsi pembantu diberi nama yang berbeda beda tetapi mudah dimengerti, jamak dan self-descripting seperti **Utilities**, **Utils**, **Helpers** dan **Tools** adapula contoh untuk fungsi pembantu yang sering digunakan yaitu:
    * **Operator**, seperti mix, max, rata - rata, kurang, kali dllnya.
    * **Formatter**, seperti tanggal, waktu, mata uang dllnya.
    * **Validator**, seperti email, no telpon, cc dllnya.
    * **Generator**, seperti warna, text format, text random dllnya.

3. **Instance Lifecycle Hooks**
    Lifecycle merupakan serangkaian tahapan pada saat dibuat, tahapan ini disebut sebagai lifecycle atau siklus hidup cara kerja *vue instance lifecycle* ialah berawal dari inisiasi  dan berakhir dengan *destroy* atu penghancuran. Setiap siklus memiliki hook-nya masing masing yang berbentukfungsi seperti :
    * `beforeCreate` to `created`
    * `beforeMount` to `mounted`
    * `beforeactive` to `activated`
    * `beforeDestroy` to `destroyed`

    Diantara banyaknya lifecycle hook, tidak perlu memahami semuanya, cukup memahami 3 lifecycle utama yang memilki fungsi masing masing sebagai berikut :
    * **Created**, yaitu berlangsung setelah instance terbentuk dan sebelum DOM dirender contoh add meta SEO, memasang event listener.
    * **Mounted**, yaitu berlangsung setelah DOM dirender contoh handling loader.
    * **Destroyed**,yaitu berlangsung sebelum instance dihancurkan contoh mencopot event listener scroll.