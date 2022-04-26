Nama   : Daffa Erdian Fahrezy

Kelas  : VueJs-D

Materi : Nuxt

# (19) Nuxt

1. **Nuxt**
    Nuxt adalah Kerangka kerja atau Framework yang dibangun diatas Vue yang membuat pengembangan web menjadi sederhana dan ampuh. Cara kerja Nuxt yaitu menginisasi dahulu lalu menjalankannya. untuk menginisasi Nuxt bisa seperti dibawah ini:
    ```
    npx create-nuxt-app <nama-proyek>
    //atau
    npx create-nuxt-app ./ --overwrite-dir
    ```
    Setelah menginstall Nuxt selanjutkan jalankan aplikasi, Untuk menjalankan aplikasi, terdapat beberapa perintah yang tertulis di script didalam `package.json`. jika sudah menajlankanya dengan cara `npm run dev`

2. **Struktur Direktori Nuxt dan SSG & SSR**
    Tersapat perbedaan struktur direktori antara nuxt dan vue diantaranya:
    * **Pages**, Router di nuxt secara otomatis membaca direktori sehingga file yang ada didirektori */pages* langsung terhubung kehalaman .
    * **Layouts**, setiap file di direktori /layouts akan membuat tata letak yang dapat diakses dengan property *layouts* di komponen halaman.
    * **Static**, semua file yang disertakan akan diakses secara otomatis dikespose oleh Nuxt dan dapat diakses melalui URL root proyek.

    **SSG** Adalah kepanjangan dari *Static Site generation*, metode pengembangan ini lebih cocok untuk situs website yang tidak memiliki halaman dinamis. Untuk cara kerjanya yaitu ketika sebuah proyek dibangun untuk produksi, file HTML, siap pakai akan dibuat di folder dist. kemudian disuguhkan oleh server dan dapat diakses permasing masing file HTML. Selanjutnya ada **SSR** Adalah kepanjangan dari *Server Side Rendering*. Metode pengembangan ini adalah solusi terbaik untuk proyek dimana halaman dibuat secara *real time*, yaitu melalui panel admin. untuk Cara kerjanya yaitu Server yang dibangun kedalam Nuxt akan berjalan dalam produksi, yang akan memastikan baawa file HTML baru dihasilkan secara *real time* ketika data baru diterima, Implementasi SSR dan SSG:
    ```
    npm run generate
    // untuk SSG hasil adalah berupaa /.dist yang kemudian dapat dideploy ke Static Hosting
    npm run build
    // untuk SSG hasil adalah berupaa /.nuxt yang kemudian dapat dideploy ke NodeJS Server
    ```

3. **SEO dan PWA**
    SEO adalah kepanjangan dari **Search Engine Optimization**, yaitu proses meningkatkan kualitas dan kuantitas lalu lintas sitsu web ke sits web atau halaman dari mesin pencari. Sedangkan **SEO Meta** tag adalah tag tak terlihat didalam `<head>` yang memberikan data tentang halaman ke mesin pencarian dan pengunjung situs web. Cara kerja SEO Meta yaitu konten *Head* akan samas di setiap halaman aplikasi. Sedangkan untuk mengubah data head dari komponen individu harus diaganti di template. SEO Meta Tag Penting seperti *title* dan *descriptsi*, lalu *Canonial* *open graph: og:title, og:description, og:image,* dllnya.

    **PWA** 
    PWA adalh kepanjangan dari **Progressive Web Apps**, dibuat dan disempurnakan dengan API modern untuk menghadirkan peningkatan kemampuan, kendalan dan kemudahan pemasangan sekaligus menjangkau siapa saja, dimana saja, diperangkat apapun dengan basis kode tunggal. Cara kerja PWa Dibagi menjadi 4 yaitu: 
    * Web App Manifest 
    * Service Workers
    * Icon
    * Protokol HTTPS