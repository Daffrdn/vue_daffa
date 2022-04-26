Nama   : Daffa Erdian Fahrezy

Kelas  : VueJs-D

Materi : HTML

# (05) HTML

1. **HTML**
    Frontend adalah sebuah bagian dari website yang membuat tampilan yang menarik kepada user Seperti `Html`,`Css` adan `javascript`. Sedangkan **HTML** Merupakan Singkatan Dari *Hypertext Markup Language* adalah sebuah standar yang digunakan secara luas untuk menampilkan halaman web. Ada beberapa Kegunaan HTML yaitu :
    * Membuat struktur dari halaman website.
    * Mengatur tampilan dan isi dari halaman web.
    * Membuat tabel dengan tag HTML table.
    * Membuat form HTML.
    * Membuat gambar dengan canvas.
    * Mempublikasikan halaman website secara online.

    Aplikasi yang bisa digunakan untuk membuat HTML sangat banyak tetapi yang popluer digunakan ialah :
    * Notepad
    * Visual Studio Code (VScode)
    * Sublime
    * Notepad++, dllnya

2. **Dokumentasi, Struktur Halaman, Dan Styling HTML**
    Dokumentasi element - element penting yang harus ada didalam html yaitu :
    * `<! DOCTYPE html>`, mendefinisikan dokumen ini sebagai HTML5.
    * `<html>`, elemen root dari halaman HTML.
    * `<head>`, berisi informasi meta tentang dokumen.
    * `<title>`, menentukan judul untuk dokumen.
    * `<body>`, berisi konten halaman yang terlihat.

    Struktur Halaman HTML yang Berurutan seperti Berikut :
    ```
    <html>
    <head>
    <title>Title page html</title>
    </head>
    <div>Content Html<div>
    </body>
    </html>
    ```

    Untuk membuat header atau heading dan paaragraf hanya terdapat heading satu sampai 6, ukuran angkar lebih kecil ukuran heading lebih besar :
    * `<h1>Heading Satu</h1>`, untuk membuat header ukuran 1 
    * `<h6>Heading Enam</h6>`, untuk membuat header ukuran 6 
    * `<p>Paragraph</p>`, untuk membuat paragraf

    Styling yang sering digunakan di html yaitu:
    ```
    <strong>membuat text lebih tebal</strong>
    <em>penekanan pada text menjadi italic</em>
    <s>membuat text dengan garis tercoret</s>
    <br/>(line break, untuk membuat garis baru)
    ``` 
    Tag Link Html untuk mencantumkan Link pada html
    ` <a href=”https://www.google.com”>google</a>` 
    Tag Image HTML untuk mencantumkan atau menyisipkan image
    `<img src=”logo-Google.png” />`

3. **List, Tabel, Dan Form HTML**
    Ada dua macam **List** didalam HTML Yaitu :
    * **Ordered List** adalah list yang berurut. `( <ol> )`
    Contoh :
    ```
    <ol>
	<li>HTML</li>
	<li>CSS</li>
	<li>JavaScript</li>
    </ol>
    ```
    Atau Bisa menggunakan Tipe urutan seperti A,a,I,Atau i :
    ```
    <ol type=”a”> </ol>
    <ol type=”A”> </ol>
    <ol type=”i”> </ol>
    <ol type=”I”> </ol>
    ```
    * **Unordered List** adalah list yang tak terurut. `( <ul> )`
    Contoh :
    ```
    <ul>
	<li>HTML</li>
	<li>CSS</li>
	<li>JavaScript</li>
    </ul>
    ```
    Atau Bisa menggunakan Tipe simbol seperti Kotak,Bulat hitam, atau bukat outline :
    ```
    <ul type=”square”> </ul>
    <ul type=”disc”> </ul>
    <ul type=”circle”> </ul>
    ```
    Setiap list item pada Ordered List dan Unordered List dideklarasikan menggunakan tag `<li>`
    Perbedaan antara **Ordered List** Dan **Unordered List** Yaitu yang satu terurut yang satu menggunakan simbol dan dideklarasikan dengan `<ol>` dan `<ul>`.

    Membuat Tag **Tabel** HTML
    ```
    Membuat table pada HTML menggunakan tag <table></table> 
    Setiap baris table di deklarasikan menggunakan <tr></tr>
    Setiap kolom table di deklarasikan menggunakan <td></td>
    Untuk kolom pada tabel header menggunakan <th></th>
    ```

    Membuat **Form** HTML
    ```
    <form>
	<fieldset>
      <legend>Personal Information</legend>
	  <div>
	    <label for="full-name">Full Name</label>
	    <input id="full-name" name="fullName" type="text" placeholder=”Full   Name...”>
	  </div>
    <div>
	    <label for="email">Email Address</label>
	    <input id="email" name="email" type="email" placeholder=”email”>
	  </div>
	</fieldset>
    </form>
    ```
    Yang berfungsi untuk membuat fungsi seperti Sign Up atau form daftar pada website.
