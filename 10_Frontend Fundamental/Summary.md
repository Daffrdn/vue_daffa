Nama   : Daffa Erdian Fahrezy

Kelas  : VueJs-D

Materi : Frontend Fundamental

# (10) Frontend Fundamental

1. **HTML Dan CSS**
    HTML singkatan dari *Hypertext Markup Language* merupakan bahasa standar untuk menyusun dan membuat halaman kerangka website. Cara kerja html yaitu file berformat *.html* atau *.htm* yang dapat dirender oleh ekstensi yang menggunakan web browser seperti Mozilla firefox, Chrome, Microsoft Edge. terdapat 2 hal penting yang ada didalam html yaitu **Struktur HTML** dan **Tag HTML**.
    * **Struktur Html**
        ```
        <html> //Struktur pembuka dari html.
        <head> //Kepala dari html diisi seperti Title, Style, linkref dllnya.
        </head> //Penutup dari kepala html.
        <body> //Body atau isi dari html yang berfungsi untuk menyimpan tag.
        </body> //Penutup dari isi/body website html.
        </html> //Penutup struktur html*
        ```
    * **Tag** merupakan sebuah file html terdiri atas serangkataina tag atau biasa disebut elements, tag biasanya disimpan didalam `<body> isi disini </body> tag memiliki dua tipe utama yaitu **Block** dan **Inline** contoh dari tag yaitu:
        ```
        <span></span> //Membuat struktur untuk block
        <div></div> //Membuat struktur untuk inline
        <h1></h1> //Membuat Header
        <a></a> //Membuat text click
        <p></p> //Membuat Paragraf
        dllnya
        ```

    CSS singkatan dari *Cascading Style Sheets* berfungsi sebagai pakaian atau baju dipakai untuk mendesain halaman web atau tampilan web lebih menarik dan responsive, Cara kerja css ada tiga yaitu:
    * **Inline CSS** inline disimpan didalam tag body agar dapat bekerja. 
        ```
        <body>
        <p style="color:red;">Paragraf ini warna merah.</p>
        </body>
        ```
    * **Internal CSS** Internal style disimpan didalam `<head>` disini `</head>`
        ```
        <head>
        <style>
        h1 {color: maroon;
            margin-left: 40px;}
        </style>
        </head>
        ```
    * **External CSS** External disimpan diinternet atau lokal dile dan dipanggil didalam `<head>` disini `</head>`.
        ```
        <body>
        <link rel="stylesheet" href="mystyle.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        </body>
        ```

2. **Javascript dan Node.js**
    Javascript adalah bahasa pemrograman yang digunakan dalam pengembangan website agar lebih dinamis dan interaktif. javascript sendiri disimpan didalam html, dan dapat diapakai didalam browser dan server. Cara kerja javascript Bisa langsung ditambahkan javascript kedalam html dengan menggunakan tag `<script></script>`diantara `<head></head>` dan `<body></body>`.    Ada beberapa dasar dasar didalam javascript yaitu:
    * **Variabel** Wadah untuk menyimpan atau mengingat sebuah nilai.
    * **Operasi Artimatika** untuk dapat melakukan operasi matematika seperti penambahan, pengurangan, perkalian dllnya.
    * **Fungsi** Wadah untuk menyimpan logika atau algoritma yang dapat digunakan lebih praktis.
    * **Kelas** fungsi khusus untuk sebagai template membuat object dengan mudah.
    * **Kondisi** logika antara *True* dan *false* atau salah dan benar.
    * **Pengulangan** untuk melakukan operasi pengulangan kondisi yang sudah ditentukan.

    Node.js adalah Runtine environment untuk javascript, dengan node.js kita dapat menjalankan kode javascript dimanapun di server maupun browser. Cara kerja Node.js ialah panggil file berformat ekdstensi `.js` lalu eksekusikan didalam terminal. cara ekseskusinya ialah:
    ```
    $ node nama_file.js
    ``` 

3. **NPM dan Git**
    NPM adalah singkatan dari *Node Package Manager* tools ini berfungsi untuk menginstall ,menguninstall package dan mengelola versi dan dependensi yang diperlukan untuk menjalankan proyek. NPM otomatis akan terinstall jika node.js sudah tersintall dan untuk mengeceknya cukup masukan ini kedalam terminal.
    ```
    $ node -v 
    ``` 
    Cara kerja NPM ialah mengatur package pada proyek yang berjalan dengan node.js, package memuat semua file yang dibutuhkan sebagai module. **Module** merupakan library dari javascipr yang dapat kita masukan kedalam proyek. untuk menambahkan proyek aplikasi masuk kedalam terminal dan masukan.
    ```
    $ node init
    ```
    dan untuk menambahkan dependensi yaitu:
    ```
    $ node install <nama module>
    ``` 
    didalam node.js terdapat struktur proyek NPM key yang penting seperti:
    * **Name** ialah Sebuah nama proyek.
    * **Script** ialah daftar perintah yang bisa kita jalankan didalam proyek.
    * **dependencies** ialah daftar library yang kita pakai pada proyek ketika production.
    * **devDependencies** ialah daftar library yang dipakai proyek ketika tahap pengembangan.

    Git adalah sistem kendali versi terdistribusi atau *Version Control System*, yang berarti semua codebase dan riwayat kode akan tersedia di komputer setiap developer untuk memudahkan pembuatan branch dan penggabungan. Cara kerja git yaitu memantau sebuah perubahan yang terjadi pada file proyek. lalu menyimpanya kedalam database, git memiliki 3 stage area yaitu **Working Directory**, **Staging Area** dan**git Directory**.  ada 4 kata kunci didalam git yaitu:
    * **Modified** perubahan pada file akan tercatat pada git dibandingkan sebelumnya.
    * **Staged** file yang telah kita modified dan kita add
    * **Commit** mmengambil berkas berkas yang ada pada staging area dan menyimpannya kedalam direktori git.
    * **Branch** cerminan direktori git.
    Untuk membuat repository git yang pertama hars lakukan ialah install git dan membuat akun git lalu masukan ini kedalam commandlinenya
    ```
    $ git init 
    ```
    Jika sudah membuat repository lalu membuat direktori baru yaitu copy links repository dan jalankan perintah berikut:
    ```
    $ git remote add origin <link repository>
    $ git add .
    $ git commit -m "<Pesan commit>" 
    $ git push origin <nama branch>
    ``` 