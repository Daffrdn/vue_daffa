Nama   : Daffa Erdian Fahrezy

Kelas  : VueJs-D

Materi : Vue CLI

# (11) Vue CLI

1. **Vue CLI**
    Vue CLI *(Command Line Interface)* Adalah perkakas standar untuk memudahkan penyetelan/pembuatan aplikais vue baru. didalam Vue.js terdapat yang namanya webpack, Webpack adalah sebuah bundler yang digunakan untuk menggabungkan seluruh modul project aplikasi berupa javascript. html, CSS, gambar dan lain lainnya menjadi satu file yang sama, tahap kerja Vue CLI ini ada tiga yaitu
    * **Pasang Vue CLI**, untuk memasangnya cukup perintahkan ini didalam CLI/Command kalian:
        ```
        $ npm install -g @vue/cli //inisiasi pasang Vue CLI
        //jika berhasil lakukan ini
        $ vue --version
        v4.x.xx // jika hasilnya begini maka berhasil
        ```
    * **Inisiasi Aplikasi**, untuk membuat aplikasinya jalankan berikut:
        ```
        $ vue create <nama-aplikasi>
        $ vue create .
        ```
    * **Jalankan Aplikasi**, untuk menjalankan aplikasi, terdapat beberapa perintah yang tertulis di script didalam *package.json* `npm run serve`. Setelah melakukan proses kompilasi dan tidak ada error, akan ada log informasi alamat aplikasi kita dapat diakses, tetapi jika didalam aplikasi tidak terdapat node_module maka lakukan perintah `npm install` lalu lakukan `npm run serve`

    Ada beberapa Perkakas Penting untuk membantu proses pengembangan vscode yaitu:
    * **Highlighter/Penyorot** adalah perkakas untuk memberikan warna pada codingan kita sesuai dengan stelan/peraturan dari ekstensi berkas yang akan digunakan.
    * **Linter** adalah alat yang memindai kode anda secara terprogram dengan tujuan menemukan masalah/bug yang ketidakkonsistenan dengan standar yang berlaku.
    * **Code Foramtter** adalah perkakas untuk membantu menyeragamkan gaya kode unik yang kita tulis.
    * **Git Inspector** adalah perkakas yang dapat mengetahui versi atau commit yang ada untuk setiap baris kode.

2. **Vue Komponen File Tunggal**
    Komponen File Tunggal berfungsi untuk membangun keseluruhan komponen seperti gaya, struktur, fungsi dalam satu file. dan, sebagian besar editor kode menyediakan penyorotan sintaks. komponen ini berekstensi *`.vue`*. cara kerja komponen file tunggal ada 3 tag utama yaitu `<template>`,`<script>` dan `<style>` berikut penjelasannya :
    * **`<template>`** hampir sama seperti tag html pada umumnya, memuat dan merender html tagnya.
        ```
        <template>
        .. isi template ..
        </template>
        ```
    * **`<script>`** memuat sintaks javascript, juga dapat menerima atribut `lang` yang biasanya untuk pengguna *Typescript*.
        ```
        <script>
        .. isi script ..
        </script>
        ```
    * **`<style>`** hampir mirip seperti *CSS* preprosessor seperti Stylus, ***SCSS***, atributed tambahan selain `lang` yaitu `scoped`.
        ```
        <style scoped>
        .. isi dari style ..
        </style>
        ```

3. **Vue Struktur Folder**
    Ada beberapa Struktur folder dari vue yaitu:
    * **Default**, Direktori yang kita pilihan setelan bawaan/default.
    * **Lanjutan**, aplikasi dan bertambah kompleksnya aplikasi maka susunan direktori berubah sesuai keinginan.
    * **Assets**, penyimpanan semua file assets seperti menyimpan font, ikon, gambar, style dllnya.
    * **Components**, direktori untuk penyimpanan semua file komponen file tunggal vue.
    * **Router**, direktori untuk penyimpanan semua file *vue-router*, **Vue Router** adalah library untuk mengatur routing alamat aplikasi vue.
    * **Store**, direktori yang berfungsi untuk menyimpan *vuex*, **vuex** adalah library untuk penyimpanan *state* berbasis global pada aplikasi vue.
    * **View**, percis seperti direktori component, tetapi direktori ini digunakan sebagai halaman, dimana file ini berhubungan langsung dengan router. 
    * **Test**, direktori ini berada diluar direktori `src`, berisi berkas testing komponen atau fungsi yang ada didalam sirektori src.