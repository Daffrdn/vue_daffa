Nama   : Daffa Erdian Fahrezy

Kelas  : VueJs-D

Materi : Clean Code

# (09) Clean Code

1. **Clean Code**
    **Clean Code** Merupakan istilah untuk kode yang mudah dibaca, difahami dan diubah oleh programmer. Martin Fowler pernah berkata
    *“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.”* — Martin Fowler.
    Kenapa harus *"Clean Code"* bagi seorang programmer handal karena:
    * **Work Collaboration**, untuk kolaborasi yang akan dikerjakan secara tim sehingga dengan kode yang baik dan benar antar programmer tidak akan mengalami kesulitan ketika akan melanjutkan pekerjaan dari programmer lain. 
    * **Feature Development**, untuk pengembangan fitur karena kita dapat mengetahui dimana letak fitur dari code yang akan di review.
    * **Faster Development**, untuk pengembangan yang cepat agar code review dapat melakukan review dengan nyaman dan ketika code error dapat dengan cepat untuk mengetahuinya.

2. **Karakteristik Clean Code**
    Ada 9 karakteristik umum dari Clean Code Yaitu:
    * Mudah dipahammi.
    * Mudah dieja dan dicari.
    * Singkat namun mendeskripsikan konteks.
    * Konsisten.
    * Hindari penambahan konteks yang tidak perlu.
    * Komentar.
    * Fungsi yang bagus.
    * Gunakan Konvensi.
    * Formatting.
    Untuk Formatting ada sedikit saran yaitu :
    * Lebar baris code 80 - 120 karakter.
    * Satu class 300 - 500 Baris.
    * Baris code yang saling berhubungan dan berdekatan.
    * Dekatkan fungsi denganpemanggilnya.
    * Deklarasi variabel berdekatan dengan penggunanya.
    * perhatikan identasi.
    * penggunakan *prettier* dan *formatter*.

3. **Prinsip Clean Code**
    Ada 3 Jenis prinsip dari Clean Code yaitu:
    * **KISS** atau disingkat *Keep it so simple* yaitu hindari melakukan kegiatan yang berbeda secara sekaligus. ada beberap tips KISS yaitu
        1. Fungsi atau class harus kecil.
        2. Fungsi dilakukan untuk melakukan satu tugas saja.
        3. Jangan gunakan terlalu banyak argumen pada fungsi.
        4. Harus diperhatikan untuk mencapai kondisi yang seimbang, kecil dan jumlahnya minimal.
   
    * **DRY** atai disingkat *Don't repeat yourselft* yaitu hindari duplikasi kode untuk menghindarinya yaitu buatlah fungsi yang dapat digunakan secara berulang ulang.

    * **Refactoring** adalah proses restrukturisasi kode yang dibuat, dengan cara mengubah struktur internal tanpa mengubah perilaku eksternal. Prinsip KISS danDRY bisa dicapai dengan cara refactoring. ada beberap teknik untuk mencapai refactoring yaitu:
        1. Membuat sebuah abstraksi.
        2. Memeahkan code dengan fungsi/class.
        3. perbaiki penamaan dan lokasi code.
        4. Deteksi code yang memiliki duplikat.