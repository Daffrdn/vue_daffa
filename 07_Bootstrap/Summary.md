Nama   : Daffa Erdian Fahrezy

Kelas  : VueJs-D

Materi : Bootstrap

# (07) Bootstrap

1. **Boostrap**
    Bootsrap kerangka kerja *CSS* yang sumber terbuka dan bebas untuk merancang situs web dan aplikasi web. Kerangka kerja ini berisi templat desain berbasis *HTML* dan *CSS* untuk tipografi, formulir, tombol, navigasi, dan komponen antarmuka lainnya, serta juga ekstensi opsional *JavaScript*. Kegunaan Dari Boostrap yaitu :
    * Menciptakan website Mobile Friendly.
    * Memudahkan resize gambar.
    * Menambahkan elemen website tanpa ribet.
    * Membuat website lebih interaktif.

    Adapun beberapa kelebihan dari Bootstrap itu seperti:
    * Grid System yang Canggih.
    * Bersifat Open-Source.
    * Kebebasan Berkreasi Kostumisasi.
    * Kompatibilitas dengan Web Browser Terbaru.
    * Memiliki dokumentasi yang lengkap dan komunitas yang besar.

    Ada kelebihan ada pula kekurangannya, kekurangan dari bootstrap itu sendiri yaitu:
    * Browser lama tidak dapat kompaitble.
    * Element yang digunakan surdah sangat umum dandapat diduplikasi webste lain.
    * dapat memperlambat website karena terlalu banyak fitur.

2. **Class Pada Bootstrap**
    CLass class yang sering digunakan oleh bootstrap Seperti *contianer*, *row dan column*, dan *button*
    * **Container**
        Container adalah elemen layout dasar dari bootstrap, container ini berfungsi sebagai wadah yang menampung semua element grid sistem atau element bootstrap lainnya. container dibagi menjadi dua yaitu, `container`dan `contianer-fluid`. contoh dari syntax container yaitu:
        ```
        <div class="container">
            Isi konten dibagian ini
        </div>
        ``` 
    * **Row dan Column**
        Row Class ini digunakan untuk menentukan mengatur ukuran layar dengan membagi setiap bagian konten enjadi 12 kolom, sedangkan Column Class menjadi inti dari sistem grid dari bootstrap. aturan row dan column yaitu mereka harus diletakan didalam containter. adapun kegunaan dari gris istem ini yaitu:
        1. `col-lg-*`, digunakan untuk mengatur grid pada monitor komputer berukuran besar.
        2. `col-md-*`, digunakan untuk mengatur grid pada layar monitor komputer berukuran sedang.
        3. `col-sm-*`, digunakan untuk mengatur grid pada layar berukuran tablet.
        4. `col-xs-*`, digunakan untuk mengatur grid pada layar berukuran handphone.
        contoh Syntaxnya yaitu:
        ```
        <div class="col-lg-6">.ukuran 6 monitor besar</div>
		<div class="col-md-6">.ukuran 6 monitorsedang</div>
		<div class="col-sm-6">.ukuran 6 tablet</div>
		<div class="col-xs-6">.ukuran 6 handphone</div>
        ```
    * **Button**
        Button class bagian integral dari situs web dan aplikasi. Mereka digunakan untuk berbagai keperluan seperti, submit atau mereset form HTML, melakukan tindakan interaktif seperti menunjukkan atau menyembunyikan sesuatu di halaman web dengan mengklik tombol, mengarahkan pengguna ke halaman lain, dan sebagainya. Bootstrap menyediakan cara yang cepat dan mudah untuk membuat dan meng-customize button. terdapat berbagai warna dan fitur dari button dan ukuran dari button ini ini contohnya :
        ```
        <button type="button" class="btn btn-primary btn-lg" >Primary (Biru) ukuran besar</button>
        <button type="button" class="btn btn-secondary btn-lg">Secondary (Abu-abu) ukuran besar</button>
        <button type="button" class="btn btn-success btn-lg">Success (Hijau) ukuran besar</button>
        <button type="button" class="btn btn-danger">Danger (Merah) ukuran biasa</button>
        <button type="button" class="btn btn-warning">Warning(Kuning) ukuran biasa</button>
        <button type="button" class="btn btn-info">Info (Biru muda) ukuran biasa</button>    
        <button type="button" class="btn btn-dark btn-sm">Dark (Gelap) ukuran kecil</button>
        <button type="button" class="btn btn-light btn-sm">Light (Putih Cerah) ukuran kecil</button>
        <button type="button" class="btn btn-link btn-sm">Link (Putih Transparant) ukuran kecil</button>
        ```

3. **Navbar Dan Footer**
    **Navbar** adalah singkatan dari navigation bar. merupakan komponen website yang berupa menu. yang biasanya diletakkan pada header website. Sedangkan **Footer** adalah komponen website document yang diletakan dimargin bawah website
    * **Navbar**
        Komponen komponen yang terdapat pada Navbar biasanya ada, Navbar Brand `.navbar-brand`, bentuk navbar `.navbar-nav`, plugin navbar `.navbar-toggler`, form control `.form-inline`, navbar text `.navbar-text`, konten tersembunyi navbar `.collapse.navbar-collapse`, adapula tema warna dari navbar seperti `bg-primary`, `bg-info`, `bg-danger` dllna. adajuga dihalaman button navbarnya yaitu `navbar-dark`, `navbar-light`, `navbar-secondary ` dllnya.
    * **Footer**
        Komponen komponen yang terdapat pada Navbar biasanya ada:
        1. Copyright
            Copyright berfungsi untuk memeasang bagian dari hak cipta seperti content, website, isi dari website dan dapat mengubah intensitas warnanya dengan memanipulasi nilai terakhir dalam kode RGBA.
        2. Links
            Komponen selanjutnya yaitu Link berfungsi untuk men`direct` lnk menuju yang ditentukan seperti e-mail website perusahaan, nomor telepon, dan sosial media perusahaan. biasa menggunakan column row dalam pembuatan links ini
        3. Text, Icon dan button
            Kompunen terpentung untuk memperindah dalam struktur website seperti icon sosial media, text dari alamat perusahaan dan button untuk mensubscribe email untuk pemberiahuan lebih lanjut.
        3. Form color
            terakhir yaitu form dalam pembuatan warna tema dari footer ini seperti warna `bg-primary`, `bg-secondary` `bg-info`, `bg-dark` dllnya.