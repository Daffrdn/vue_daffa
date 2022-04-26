Nama   : Daffa Erdian Fahrezy

Kelas  : VueJs-D

Materi : Vue Data

# (15) Vue Data

1. **Data Fetching**
    Data Fetching adalah pengambilan data oleh program lunak atau skrip. setelah diambil, data dipindahkan ke lokasi alternatif atau ditampilkan di layar. Singkatan dari *Application Programming Interface* (API) yaitu sebua protokol pada dasarnya menyediakan bahasa dan kontrak untuk bagaimana dua sistem berinteraksi. Saat berinteraksi dengan sistem lain titiknya disebut Endpoint yaitu berbentuk Link. cara fetch data dengan axios. Axios adalah pustaka yang dipakai front-end untuk melakukan HTTP Request kepada link API Endpoint. ada juga **Request Query**, Query adalah permohonan pengambilan data sedangkan, Request Queries adalah syarat yang menyatakan data seperti apa yang diambil contoh: 
    ```
    https://pokeapi.co/api/v2/pokemon?limit=20&offset=0
    // https://pokeapi.co = Host Endpoint
    // /api/v2/pokemon = Nama/Path Endpoint
    // limit=20&offset=0 = String Query
    ``` 
    Pagination Query, salah satu contoh penggunaan string query pada endpoint adalah pembagian/manajemen halaman
    ```
    https://pokeapi.co/api/v2/pokemon?limit=20&offset=0
    // limit=20 = limit atau batasan maksimal jumlah data yang diambil
    // offset=0 = Offset atau index untuk memulai pengambilan data
    ```

2. **Penanganan Data Error**
    Penangan Data Error adalah konsep untuk mencegah terjadinya runtime-error. cara kerja penanganan data error bisa menggunakan **Try Catch Finally**, **Try Catch Finally** adalah metode penangan error bawaan dari Javascript. Cara kerja **Promise**, Objek promise mewakili penyelesaian (atau kegagalan) akhirnya dari operasi asinkron dan nilai yang dihasilkannya. Aktivitas berkomunikasi dengan API pada umumnya berbentuk Promise :
    ```
    fungsiPromise().themn(res=>{}).catch(err=>{});
    // fungsiPromise() = nama fungsi
    // .themn(res=>{}) = handler jika fungsi sukses
    // .catch(err=>{}); = handler jika fungsi gagal
    ```

3. **Validasi Data Dan Autentikasi**
    Vaalidasi Data adalah konsep untuk melakukan pengecekan terhadap data apakah sudah sesuai dengan kriteria atua belum, terutama pada input pengguna. Fungsi validasi menerima nilai yang ingin dicek kemudian mengembalikan nilai keabsahan/validity berupa nilai boolean (true/false). Ada beberapa tipe validasi yang dipakai :
    * **Validasi manual menggunakan Javascript**, tipe validasi ini sangat kustom biasa menggunakan fungsi dengan if atau switch
    * **Validasi pada Form**, tag pada HTML5 memiliki fungsi bawaan untuk validasi input pengguna. contoh validasi mutakhir pada form yaotu email
    * **Validasi menggunakan Regex**, Regex adalah singkatan dari Regular Expression. Regex merupaka sebuah text (string) yang mendefinisikan sebuah pola pencarian sehingga dapat membantu kita untuk melakukan matching (pencocokan) dan locate (pencarian).

    **Autentikasi** Adalah Suatu proses yang menjadi tindakan atau pembuktian (validasi) terhadap identitias penggunaan ketika ingi memasuki dan mengakses sistem tertentu. Cara kerja autentikasi Pengguna A mengirimkan Kredensial yang biasanya berupa kombinasi username dan password, jika cocok maka server akan mengirim akses token tersebut adalah pembuktian mutlak kalau pengguna A adalah pengguna A bukan pengguna B, C atau yang lain. 
    Otoritas dibagi menjadi 2 yaitu:
    * **Authentication**, Mengkonfirmasi pengguna sesuai dengan siapa yang dia claim.
    * **Authorization**, mengatur perizinan terhadap tindakan yang dapat dilakukan pengguna.
    Cara kerja Otoritas contoh, pengguna A mengirimkan kredensial yang biasnya berupa kombinasi username dan password, jika cocok maka server akan mengirim akses token dimana token tersebut adalah pembuktian mutlak kalau pengguna A adalah pengguna A bukan pengguna B,C atau yang lain.