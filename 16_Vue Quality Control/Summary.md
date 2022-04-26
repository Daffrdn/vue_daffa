Nama   : Daffa Erdian Fahrezy

Kelas  : VueJs-D

Materi : Vue Quality Control

# (16) Vue Quality Control

1. **Debugging**
    Debugging adalah proses mengidentifikasi dan menghilangkan kesalahan dari perangkat lunak. Cara kerja Debugging ada dua yaitu **Mengidentifikasi Kesalahan** dan **Mengidentifikasi Solusi**, Perkakas yang sering sering digunakan untuk mengidentifikasi masalah yaitu, *Devtools*, *Consoles*, dan *Logs*. ada beberapa tips untuk mengidentifikasi kesalahan yaitu:
    * Tenang dan Fokus
    * Rasional dan kontekstual
    * Perhatian yang detail petuntuk sekecil apapun
    * Tidak tergesa-gesa untuk bertanya
    Untuk Mengidentifikasi Solusi yaitu:
    * **Diri Sendiri**, Yaitu pengetahuan dan pengalaman dalam memahami *syntax*.
    * **Rekan Kerja**, Seperti Senior, leader atau teman sepemahaman.
    * **Google**, Dokumentasi seperti, *Stackoverflow*, *Tutorial*, *Repo Github* dllnya.
    * **Komunitas**, Forum daring maupun luring seperti, *Telegram*, *Discord*, *kaskus*, *organisasi kamups*.

2. **Unit Testing dan Jest**
    Unit Testing adalah verifikasi bahwa kode kita benar benar berperilaku seperti yang diharapkan dan validasi bawa kode kita tetap benar sepanjang aplikasi berjalan. Cara kerja Unit Testing, Unit Testing memberikan kita kesempatan untuk menguji potongan kode secara individual dan terisolasi dalam bentuk *Test Asssertion*. Test Assertion adalah ekspersi boolean yang mengembalikan nilai true kecuali ada kesalahan atau perilaku yang tidak diharapkan di kode kita. Keuntungan kita melakukan Unit Testing yaitu:
    * Meningkatkan Rasa perscaya diri.
    * Meningkatkan standart kode.
    * Mencegah kesalahan sebelum benar benar terjadi.
    * Memberi batasan dan kriteria yang jelas jika melakukan refactor.

    Salah satu aplikasi yang digunakan dalam unit testing yaitu **Jest**. Jest adalah salah satu kerangka kerja untuk melakukan unit testing pada aplikasi yang berbasis javascript.

3. **Matriks Ukur dan Mengoptimalkan Kinerja**
    Matriks Ukur Kinerja adalah Tolak ukur penting yang menunjukan informasi seberapa baik kinerja aplikais kita, Dengan cara bantuan sebuah perkakas yang menjalankan serangkaian pemeriksaan sebelum menghasilkan laporan terperinci dan skor tentang seberapa baik kinerja halaman. Conto Perkakas yang sering dipakai yaitu **Lighthouse Audit**. Lighthouse audit adalah perkakas yang membantu menentukan skor pada matriks ukur kinerja aplikasi web. Caranya dmenggunakan LIghthouse Audit. Buka Browser Chrome buka *Devtools* pada tab Lighthouse kemudian Klik "Generate Report" dan tunggu hasil laporannya.

    Mengoptimalkan Kinerja adalah Proses untuk meningkatkan Kinerja aplikasi web berdasarkan informasi skor matriks ukur. Ada istilah **Core Web Vitals** yaitu kumpulan metriks website yang ditentukan oleh Google. Kumpulan metriks ini diterapkan sebagai bagian dari indikator ranking pencarian terbaru Google, yaitu *page experience*. Ada 3 Indikator *Core Web Vitals* yaitu:
    * **LCP** atau *(Larges Contentenful Paint)*, bisa juga disebut *(Loading)* berkatian dengan kecepatan website.
    * **FID** atau *(First Input Delay)*, bisa juga disebut *(Interactivity)* berkaitan dengan baik atau tidaknya respon element halaman website. 
    * **CLS** atau *(Cumulative Layout Shift)*, bisa juga disebut *(Visual Stability)* berkaitan dengan stabilitas layout halaman website.