Nama   : Daffa Erdian Fahrezy

Kelas  : VueJs-D

Materi : Version Control and Branch Management (Git)

## (02) Version Control and Branch Management (Git)

1. Version Control System
    Versioning ialah mengatur versidari source code, Ada beberapa Generasi Dari awal VCS yaitu
    * Single User, Dari SCCS 1972 Hingga RCS 1982
    * Centralized, Dari CVS pada tahun 1986, Perforce 1995, Subversion 2000 hingga Microsoft Team Foundation Tahun   2005
    * Distribute, Dari Git, Mercurial Dan Bazaar Semua berasal Dari Tahun yang sama 2005

    ``html
    Version Control System Yang Paling sering digunakan pada saat ini ialah Dsitribute atay bisa disebut terdistribusi yang dibuat oleh linus torvalds pada tahun 2005 - Linux Kernel Atau Yang sering kita sebut yaitu GitHub. Keuntungan dari Github ini yaitu dapat mengembang Project Secara bersama sama menggunakan Remote Server, dengan membuat repository atau folder project yang dapat diubah oleh siapapun didalam github atau git service hosting uagar dapat meremote server yang sudah dibuat.
    ``

2. Setting Up (Installation) dan Push pada Git
    Git bisa Diinstall Didalam Sistem Operasi Linux, MacOS, dan Windows dengan cara diinstall diweb resmi Github, jika sudah bisa dicek versi github tersebut dengan cara `git --version` pada command line masing masing, jika berhasil akan muncul versi git kalian.
   
   Setelah sudah terdeteksi versinya dapat membuat `Git Config` yang berfungsi untuk meremote kontrol semau aspek variabel yang akan bekerja, Sedangkan `Git Clone` untuk  merupakan sebuah perintah yang digunakan untuk membuat salinan repository lokal dan `Git init`

   Selanjutnya membuat Repository digithub dan melakukan git clone pada repositorynya jika sudah selanjutnya. masuk ke **Working Directory** lalu ketik `git add .` untuk masuk ke **Staging area** lalu jika  ingin memasukan working dirrectory ke repository selanjutnya melakukan `git commit -m "Message anda"` lalu `git push origin` dan dapat dilihat digithub anda

   Jika ingin mengubah file pada repository anda masuk keworking directory dan masukan `git diff --staged`jika sudah lakukan perulangan pada git commit, selanjutkan jika ingin melihat lgo atau history dari peruahan repository bisa melakaukan `git log --oneline` lalu jika sudah menenmukan dan ingin memilih kondisi dengan cara `git checkout xxxxx` yaitu code program pada log diatas. dan `git reset` jika ingin meresetnya.

3. Branch dan Conflict pada Git
   Branch ialah Cabang untuk menambahkan fitur fitur dari main branch
   