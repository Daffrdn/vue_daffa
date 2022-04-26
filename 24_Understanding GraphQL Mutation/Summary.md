Nama   : Daffa Erdian Fahrezy

Kelas  : VueJs-D

Materi : Understanding GraphQL Mutation

# (24) Understanding GraphQL Mutation

1. **GraphQL Overview**
    GraphQL adalah bahasa Query untuk API Anda, dan runtime sisi server untuk mengeksekusi query dengan menggunakan sistem tipe yang Anda tetapkan untuk data Anda. GraphQL meminimalkan jumlah data yang perlu ditransfer melalui jaringan. Dengan graphQL kita dapat menggunakan satu titik akhir tunggal ( /graphQL ) untuk setiap permintaan yang diperlukan. Contohnya sebelum menggunakan Graphql seperti ini. Folder `/books, /user, dan /movies` berbeda jka sudah menggunakan graphql maka folder akan ada disatu saja yaitu `/graphql`. Ada 3 fitur utama dari graphql client yaitu:
    * **Query**, mengambil basis data ke spesifik query yang sudah kita definisikan.
    * **Mutation**, yaitu memasukan, mengedit, dan delete data.
    * **Subscription**, mengambil data updatetan realtime/ berdasarkan event.
    
    Atau lebih lengkapnya dibawah ini
    **Quer** Terdir dari beberapa macam yaitu *Basic*, *multiple related data sources / collections*, *multiple unrelated data sources / collections* dan *Fragments*:
        1. **Basic**, Dengan graphQL kita bisa mendapatkan data yang kita butuhkan. Kita menentukan bidang apa yang ingin kita dapatkan dan graphQL akan memberi kita data berdasarkan apa yang kami definisikan..
        2. **Multiple related data sources / collections**, dengan graphql kita juga dapat mendefinisikan bidang yang dibutuhkan secara langsung asalkan tersedia di server GraphQL.
        3. **Multiple unrelated data sources / collections**, Dengan REST kita perlu melakukan setidaknya 2 permintaan ke 2 titik akhir yang berbeda. Dengan GraphQL kita bisa melakukan 1 request untuk mendapatkan data tersebut untuk meminimalisir request Network.
        4. **Fragment**, Fragmen GraphQL adalah bagian dari logika yang dapat dibagi antara beberapa query dan mutation. Kita dapat menggunakan fragmen untuk menyederhanakan query atau mutation.

    **Mutation** atau Mutasi pada dasarnya adalah fungsi untuk memperbarui, menyisipkan dan menghapus data. Kita perlu mendefinisikan operasi apa yang ingin kita lakukan (berdasarkan operasi yang tersedia di server graphql Anda) dan kemudian menentukan data apa yang GraphQL perlu kembalikan.

    Sedangkan **Subscription** atau Langganan adalah fitur GraphQL yang memungkinkan server mengirim data ke kliennya saat peristiwa tertentu terjadi. Langganan biasanya diimplementasikan dengan WebSockets. Dalam pengaturan itu, server mempertahankan koneksi yang stabil ke klien langganannya.

2. **Hasura, Heroku & Apollo**
    Hasura adalah layanan yang menyediakan graphql dan rest api. Dikelola penuh di cloud hasura atau dihosting sendiri. Buka https://hasura.io/ dan buat server graphql baru Anda sendiri. Sedangkan **Heroku** adalah platform cloud sebagai layanan yang mendukung beberapa bahasa pemrograman. Heroku juga menyediakan database postgres gratis. Buka https://heroku.com/ dan buat layanan Anda sendiri.
    Ada beberapa tahap untuk menggunakan Hasura dan Heroku yaitu:
    * **Register AndLogin**
    * **Setting**
    * **Make as hasura public API**
    * **Query and Mutation**

    **Apollo** Client adalah perpustakaan manajemen status komprehensif untuk JavaScript yang memungkinkan kami mengelola data lokal dan jarak jauh dengan GraphQL. Gunakan untuk mengambil, menyimpan, dan memodifikasi data aplikasi, sambil memperbarui UI secara otomatis. Cara Instalasi Apollo Client yaitu Buat Project baru Vue, dan jangan lupa untuk merubah commit ke track progress. `npm install --save vue-apollo graphql apollo-boost`. Selanjutnya Setup buat Vue Client
         1. Set up di `main.js`
         2. Buat `apolloClient`
         3. Setting Apollo provider. di `main.js` lalu import `ApolloProvider`.

3. **Apollo With Query, Mutation dan Subscription**
    Anda dapat menggunakan komponen **ApolloQuery** (atau apollo-query) untuk melihat kueri Apollo langsung di template Anda. Setelah membaca halaman ini, lihat Referensi API untuk semua opsi yang memungkinkan. Anda dapat menggunakan komponen **ApolloMutation** (atau apollo-mutation) untuk memanggil mutasi Apollo langsung di template Anda. Setting **Subscription**:
    * Untuk mengaktifkan langganan berbasis websocket, diperlukan sedikit penyiapan tambahan:
        ```npm install --save apollo-link-ws apollo-utilities```
    * Impor semua modul yang diperlukan dan pisahkan antara http dan tautan websocket
    Anda dapat **Subscription** lebih banyak data dengan komponen ApolloSubscribeToMore (atau apollo-subscribe-to-more). Anda dapat memasukkan sebanyak mungkin yang Anda inginkan ke dalam komponen `<ApolloQuery>`.