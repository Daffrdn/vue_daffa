Nama   : Daffa Erdian Fahrezy

Kelas  : VueJs-D

Materi : Javascript Refreshment

# (08) Javascript Refreshment

1. **Javascript**
    Javascript Adalah Bahasa pemograman yang high level, scripting, untyped dan interpreted yang berfungsi untuk pengembangan website agar lebih dinamis dan interaktif. Selanjutnya yaitu pengertian var, let, dan cons dibagi menjadi 3 yaitu *Declaration*, *Scooping* dan *Hoisting*.
    * Declaration adalah Proses pembuatan variabel untuk menyimpan data
    * Scooping untuk menentukan dimana variabel, fungsi, dan letak objek diatur dalam diakses kode kita.
    * sedangkan hoisting adalah membuat beberapa jenis variabel atau fungsi yang dapat diakses dan digunakan dalam kode sebelum dideklarasikan.

    Javascript mempunyai 2 kategori tipe data yaitu *primitve* dan *object*
    * Primitive adalah unit pemrosesan terkecil dan element yang paling sederhana yang tersedia dalam pemmograman seperti, *String*, *Boolean*, *number* dllnya.
    * Object adalah untuk menyimpan fungsi(method) atau properti seperti *Aray*, *set*, *Date*, *map* dllnya.
    Aturan untuk meneruskan nilai adalah semua nilai primitivedalam javscript dapat diteruskan oleh nilai.

    Selanjutnya ada **Destructuring** yaitu ekpresi dari javascript yang memungkinkan untuk menyalin nilai array, atau properti dari object kedalam variabel yang berbeda. Sedangkan **Spread** spread syntax dapat digunakan ketika semua element dari objectatau array perlu dimasukan kedalam daftar.

2. **Method, Control Flow, dan Function**
    Method adalah Sebuah fungsi yang terkait dalam object, membuat programnya sesederhana mungkin sesuai kegunaan masing - masing, didalam method terbagi menjadi 6 yaitu:
    * `Contact`, Menggabungkan 2 atau lebih *array*, dan mengembalikan salinan *array* yang digabungkan.
    * `Map`, Membuat *Array* baru dengan menghasilkan *fungsi* untuk setiap element *array.* 
    * `Foreach`, Memanggil *Fungsi* untuk setiap elemen *array*
    * `Slice`, Memilih bagian dari *array*, dan mengembalikan *array* baru
    * `Filter`, Membuat *Array* baru dengan setiap elemen dalam *array* yang lulus seleksi
    * `Reduce`, Melakukan operasi pada setiap *array* menjadi nilai tunggal (dari kiri ke kanan)
  
    **Control Flow** dibagi menjadi dua yaitu **Control Flow** dan **Normal Flow**. Normal Flow adalah Pengekseskusian statement dari atas kebawah ata u dari kiri kekanan yang dilakukan secara berurutan. Sedangkan Control Flow adalah Mengatur alur ekseskusi pada statment atau jalannya program sesuai keinginan kita. apa dua opsi yaang sering dipakai di **Control Flow** yaitu:
    * Pengulangan/Looping. contoh dari Pengulangan yaitu `for`, `while`, `do while`
    * Perkondisian/Percabangan. Contoh dari percabangan yaitu `if else`, `try catch`, `Break`, `Continue`, `Throw`

    **Function** didalam javscript adalah sebuah object. karenq memiliki properti dan juga *method*. function digunakan untuk melakukan serangkaian komputasi/prosedur yang dapat digunakan berulang kali Contoh dari Function ada yaitu function biasa dan arrow function
    Contoh Function :
    ```
    let hewan = ["Kucing", "Harimau", "Kambing"];
    let jumlahHuruf = hewan.map(function (nama)){
        return nama.length;
    }
    console. log(jumlahHuruf)
    ```
    Sedangkan untuk Arrow Function:
    ```
    let hewan = ["Kucing", "Harimau", "Kambing"];
    let jumlahHuruf = hewan.map(nama =  nama.length)
    console. log(jumlahHuruf)
    ```
3. **Async - Await, Classes, DOM**
    **Async - Await** Dibagi menjadi 6 yaitu :
    * **Synchronous** adalah mengeksekusi setiap perintah satu persatu sesuai urutan kode yang dituliskan
    * **Asynchronous** adalah hasil eksekusi  atau output tidak terlalu selalu berdasarkan kode, tetapi berdasarkan waktu dan proses
    * **Callback** adalah fungsi yang dikirimkan sebagai *parameter* pada fungsi lain dan fungsi yang dieksekusi setelah fungsi lain selesai dijalankan.
    * **Promise** adalah object yang mempresentasikan keberhasilan atau kegagalan pada suatu event yang asynchronous dimasa mendatang
    * **Asynchronous Function** berfungsi untuk bekerja secara asynchronous yang menghasilkan promise sebagai *return valuenya*, tetapi secara penulisan codenya menggunakan penulisan synchornous atau standar
    * **Await** adalah sebuah keyword yang terdapat pada async funtion yang tujuannya menghentikan eksekusi sambil mengunggi promisnya selesai

    **Classes** dibagi menjadi 5 yaitu :
    * **Class** adalah *prototype* dari suatu object yang akan kita buat
    * **Constructor** adalah method didalam class yang akan selalu terpanggil pertama kali ketika membuat object
    * **Method** adalah sebuah fungsi yang berada didalam class 
    * **Attributes** adalah kumpulan variabel yang membentuk object yang dimiliki oleh suatu class
    * **Extend** digunakan untuk membuat kelas anak dari kelas induk, kelas anak mewarisi semua atribute dan method dari kelas induk.

    **DOM** atau disingkan Doecument Object Model adalah sebuah API untuk HTML yang mempresentasikan halaman web pada suatu dokumen menjadi suatu object DOM dibagi menjadi 3 yaitu :
    * **Selection Method** 
        | Event  | Kegunaan  |
        | :---------: | :---------: |
        | getElementBdy() | Element |
        | getElementByTagName() | HTMLCollection |
        | getElementByClassName() | HTMLCollection |
        | querySelector() | Element |
        | querySelectorAll() | Nodelist |
    * **Manipulation**
        | Event  | Kegunaan  |
        | :---------: | :---------: |
        | element.innerHTML | Digunakan untuk merubah isi dari tag yang sudah kita seleksi |
        | element.style.<propertyCSS> | Digunakan untuk merubah style dari tag yang sudah kita seleksi |
        | element.setAttribute() | Digunakan untuk mengelola/memanipulasi attribute yang sudah kita seleksi |
        | element.classList.add() | Digunakan untuk mengelola/memanipulasi class yang sudah kita seleksi |
    * **Event**
        | Event  | Kegunaan  |
        | :---------: | :---------: |
        | onclick | Digunakan ketika pengguna mengklik mouse |
        | onchange | Digunakan dalam kombinasi dengan validasi bidang input |
        | onblur | Digunakan ketika anda meninggalkan kolom input |
        | onmouseover | Digunakan ketika pengguna mengarahkan mouse keatas pada suatu objek |
        | onmouseout | Digunakan ketika pengguna mengarahkan mouse keluar pada suatu objek|
        | oncopy | Digunakan ketika pengguna mengcopy suatu oject |