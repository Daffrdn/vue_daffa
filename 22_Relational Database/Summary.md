Nama   : Daffa Erdian Fahrezy

Kelas  : VueJs-D

Materi : Relational Database

# (22) Relational Database

1. **Introdice Database**
    Database adalah sekumpulan data yang terorganisir. Database relationalship dibagi mejadi 3 yaitu *One To One*, *One To Many* dan *Many To Many*
    * **One To One** adalah satu record dalam database diasosiasikan dengan satu record di tabel lain.
    * **One To Many** adalah satu record dalam database diasosiasikan dengan banyak record di dalam tabel lain.
    * **Many To Many** adalah banyak record dalam database dapat diasosiasikan dengan banyak record dalam tabel lain.
    Cara implementasinya ialah  dengan *RDMS* atau Relational Database Management Systems contoh software yg digunakan ialah MySQL.

    
2. **SQL**
    DidalamSQL Terdapat 3 Jenis Perintah yaitu:
    * **DDL**, Data Definition Language didalam DDL terdapat3 jenis tipe data yaitu *Num*, *Huruf* dan *Date*
    * **DML**, Data Manipulation Language adalah perintah yang digunakan untuk memanipulasi data dalam tabel dari suatu database. didalam DML terdapat **Statetment Operation** ada 4 atau biasa disebut *Insert*, *Select*, *Update*, dan *Remove*.
        1. Insert untuk inputan kedalam tabel.
        2. Select untuk menampilkan data yang ada dalam tabel.
        3. Update untuk mengedit atau mengubah data yang ada didalam tabel.
        4. Remove untuk menghapus data didalam tabel.
    * **DCL**, Data Control Language

    Selain Statement Operation ada juga **DML Statement** yaitu:
    * **Like/Between**, untuk menampilkan 2 data yang berbeda *(Diantara)* didalam tabel dengan mengandung huruf atau angka yang sama.
    * **And/Or**, untuk menampilkan 2 atau lebih data yang berbeda *(Atau)* dan *(dan)* didalam tabel yang mengandung huruf yang sama tau berbeda.
    * **Order BY**, untuk menampilkan 2 atau lebih data yang berada didalam tabel dengan mengurutkannya  dari terbesar hingga terkecil atau sebaliknya. 
    * **LImit**, untuk menampikan 2 atau lebih data yang dibatasi oleh limit yang ditentukan.

    DidalamSQL ada yang disebut **Join** adalah Sebuah klausa untuk mengkombinasikan record dari dua atau lebih tabel. Join Standar dibagi menjadi tiga yaitu:
    * **Inner Join** untuk mengembalikan baris baris dari dua tabel aau lebih yang memenuhi syarat. 
    * **Left Join** untuk mengembalikan seluruh baris dari tabel disebelah kiri yang dikenal kondisi ON dan hanya baris dari tabel disebelah kanan yang memenuhi kondisi Join.
    * **Right Join** untuk mengembalikan seluruh baris dari tabel disebelah kanan yang dikenal kondisi ON dan hanya baris dari tabel disebelah kiri yang memenuhi kondisi Join.
    Dan ada juga **UNION** adalah jumlah field yang dikeluarkan/dipanggilharus sama.

3. **Aggregate Dan Function**
    Fungsi Aggregate adalah fungsi dimana nilai beberap baris dikelompokan bersama untuk membentuk nilai ringkasan tunggal. ada 6 fungsi untama didalam aggregate ialah:
    * **MIN**, Digunakan untuk mendapatkan nilai terkecil dari sebuah data records didalam tabel.
    * **MAX**, Digunakan untuk mendapatkan nilai terbesar dari sebuah data records didalam tabel.
    * **SUM**, Digunakan untuk mendapatkan jumlah total nilai dari sebuah data atau record didalam tabel.
    * **AVG**, Digunakan untuk mendapatkan nilai rata-rata dari sebuah data atau record didalam tabel.
    * **COUNT**, Digunakan untuk mencari jumlah dari sebuah data atau record didalam tabel.
    * **HAVING**, Digunakan untuk menyeleksi data berdasarkan kriteria tertentu, diaman kriteria tersebut beruap fungsi aggregate.

    Sub Query/Inner Query adalah query didalam query SQL lain. sebuah query digunakan untuk mengembalikan data yang akan digunakandalam query utama sebagai syarat untuk lebih dibatasi data yang akan diambil. Subquery dapat digunakan dengan **SELCET**, **INSERT**, **DELETE**, dan **REMOVE**.

    **Function** adalah sebuha kumpulan statement yang akan mengembalikan sebuah nilai balik pada pemanggilnya.
