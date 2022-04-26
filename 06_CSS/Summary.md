Nama   : Daffa Erdian Fahrezy

Kelas  : VueJs-D

Materi : CSS

# (06) CSS

1. **CSS**
    Cascading Style Sheets Atau CSS Berfungsi utama sebagai Dapat menghias halaman web. (color, size, font, background, width, height, dll). Dan Dapat mengatur posisi pada halaman web. (float, align, display, position, dll). Ada 3 Cara untuk menambahkan file CSS kedalam **HTMl** Yaitu:
    * **External CSS**
        Menyisipkan Syntak ini ke dalam tag `<head>` pada HTML. Ekstensi file CSS adalah .css 
        ```
        <link rel=”stylesheet” href=”main.css”>
        ```
    * **Internal CSS**
        Syntax ini dapat digunakan di dalam satu file HTML. Didefinisikan di dalam elemen `<style>`, di dalam bagian `<head>` atau di dalam bagian `<body>`
        ```
        <style>
        body {
        background-color: #19355f;
            }
        h1 {
            color: #f47523;
            margin-left: 40px;
        }
        </style>
        ```
    * **Inline CSS**
        Syntax ini dapat digunakan untuk elemen tunggal pada HTML.Di prioritaskan untuk menerapkan style yang unik.

        ```<h1 style=”color: #19355f;”>Hello World</h1>```

2. **CSS Selector, Grouping, Font Dan Margin Padding**
    * **CSS Selector** Adalah Pola yang digunakan untuk memilih element, yang ingin di styling. Penanda HTML ke dalam CSS. Dapat menggunakan selector *ID* dan *Class*.
      1. **ID** - (#)
           * Setia, p elemen hanya dapat memiliki satu tag id
           * Dalam satu halaman tidak boleh ada dua penamaan id yang berbeda
      2. **Class** - (.)
           * Tag class dengan nama yang sama dapat dipakai berulang-ulang pada satu halaman.
           * Satu elemen boleh memiliki lebih dari satu Class yang berbeda-beda

    * **CSS Grouping** Adalah Beberapa selector dapat dikelompokkan dalam satu deklarasi style.
    * **CSS Font** Merupakan beberapa style dari font, font dibagi menjadi lima yaitu :
      1. `Font`, Menetapkan semua properti font dalam satu deklarasi
      2. `Font-family`, Menentukan kelompok font teks
      3. `Font-size`, Menentukan ukuran font teks
      4. `Font-weight`, Menentukan ketebalan untuk font teks
      5. `Font-style`, Menentukan font teks menjadi miring
   
    * **CSS Margin & Padding** Membuat ruang disekitar element.
        Contoh CSS :
        ```
        .content {
	        margin: 25px 20px;
	        padding: 25px 40px;
        }
        ```
3. **CSS Background, Link Event, Display Dan Tabel**
    * **CSS Background Properties** Beberapa style background di css.
      1. `Background-color`, Menetapkan warna background pada suatu elemen.
      2. `Background-image`, Menentukan gambar background pada suatu elemen.
      3. `Background-repeat`, Menentukan gambar background untuk di ulang. 
      4. `Background-position`, Mengatur posisi awal gambar background.
      5. `Background-size`, Menentukan ukuran gambar untuk background.
   
    * **CSS Link Event** Beberapa link event pada CSS
      1. *Link*
           * `:hover`, Kondisi style ketika mouse berada diatas elemen.
           * `:active`, Style ketika link “a” ditekan. 
           * `:visited`, Style dimana elemen link “a” telah di kunjungi / di klik.

      2. *Transisi* Transisi CSS dapat mengubah value properti menjadi lebih halus dalam durasi yang ditentukan.
         CSS:
            ```
            a {
	            transition: all 0.5s ease;
                }

            a:hover { 
                color: #19355f;
            }
            ```
    
    * **CSS Display** Menentukan tampilan pada elemen, Untuk menentukan tampilan itu memerlukan
      1. `Block`, Elemen block selalu dimulai pada baris baru. (dimulai dari kiri ke kanan).
      2. `Inline-Block`, Elemen inline-block membutuhkan lebar sesuai yang diperlukan.
      3. `none`, Menyembunyikan elemen untuk tidak ditampilkan.

    * **CSS Table** Membuat style pada elemen table HTML
      1. `Border`, Menambahkan border pada table, th dan td 
      2. `Border-collapse`, Membuat border menjadi single border
      3. `:nth-child(even)`, Membuat background stripe