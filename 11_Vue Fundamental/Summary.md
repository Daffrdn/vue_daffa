Nama   : Daffa Erdian Fahrezy

Kelas  : VueJs-D

Materi : Vue Fundamental

# (11) Vue Fundamental

1. **Vue**
    Vue Adalah sebuah Framework dari javascript untuk mengembangkan tampilan website yang lebih interaktif dan dinamis. Vue mudah membuat aplikasi frontend dan website, vue lebih mudah digunakan dan dokument yang lengkap, rapi, dan cepat. Website website yang menggunakan Framework vue ialah. *Google*, *Facebook*, *Netflix*, *Apple* dllnya. Cara kerja Vue dibagi menjadi dua yaitu **Vue CDN** dan **Vue CLI**.
    * **Vue CDN** digunakan langsung di file HTML dengan menambahkan `<script>...</script>`.
    * **Vue CLI** menggunakan perkakas standar dari ekosistem vue untuk memudahkan setup/pemnbuatan aplikasi vue.

    Vue Setup Dan Resources yang dibutuhkan yaitu 
    * Teks editor seperti **VCS** *(Visual Code Studio)*. 
    * Browser terbaru seperti **Chrome**. 
    * File HTML dengan memuat Dependensi `<script><script>` atau inisiasi aplikasi vue.

    Dasar Dasar Vue ada 3 yaitu Vue Instance, Vue Data Binding dan Vue Reactivity:
    * **Vue instance**, Setiap  aplikasi vue dimulai dengan membuat instance vue baru dengan fungsi vue
        ```
        var vm = new Vue({ /option })
        ```
    * **Vue Data Binding**, Vue.js menggunakan sintaks template berbasis HTML yang memungkiknkan kita secara deklaratif mengkat DOM yang dirender ke data instance vue yang mendasarinya ada 3 jenis data binding di vue:
        1. Didalam Konten, untuk menambahkan text ke dalam kontent element dapat menggunakan kurung kurawal :
            ```
            <span>Message :  {{ msg }}</span>
            ```
        2. Di Atribute Element, untuk menambahkan variabel kedalam atribute element dapat menggunakan v-bind 
            ```
            <div v-blind:id="dynamicId"></div>
            ```
        3. Element HTML, untuk menambahkan HTML element kedalam DOM dapat menggunakan atribut V-html 
            ```
            <p>v-html directive: <span v-html="rawHtml"></span></p>
            ```
    * **Vue Reactivity**, Vue instance memiliki property yang namanya data, jika value dari data ada yang berubah maka value yang ditampilkan pada interface akan berubah otomatis tanpa harus dimuat ulang.

2. **Vue Directive, Event dan Method**
    Vue Directive adalah atribute khusus yang diawali dengan v-, Directive berfungsi untuk menjalankan satu perintah atau ekspresi java script didalam atribute. ada beberapa macam Vue Directive:
    * **v-bind** Direktif ingin melakukan *One way data binding*.
    * **v-model** Direktif ingin melakukan *Two way data binding*.
    * **v-if, v-else, dan v-else-if** direktif digunakan untuk rendering secara kondisional.
    * **v-on** direktif untuk memanggil fungsi.
    * **v-for** direktif untuk memanggil pengulangan atau *looping*.
    Shorthand Vue Direkttive khsusus untuk v-bind dan v-on dapat disingkat dengan sintaks seperti berikut
    ```
    <a v-blind:href="url"> ... </a>
    <a :href="url"> ... </a> //disingkat

    <a v-on:click="doSomething"> ... </a>
    <a @click="doSomething"> ... </a>
    ```

    Event dan Method dibagi menjadi dua yaiut "Memantau Events" dan "Menggunakan Fungsi".
    * **Memantau events**, Kita dapat menggunakan v-on untuk mendengarkan peristiwa DOM dan menjalankan beberapa javascript saat dipicu.
    * **Menggunakan Fungsi**, Method adalah fungsi yang dapat diakses secara langsung pada instance vue atau menggunakan dalam eksrpeksi direktif, semua method ini memiliki konteks "This" secara otomatis terikat ke instance vue.

3. Component, Computed Properties dan Watcher
    **Computed Properties** yaitu terlalu banyak logika secara langsung ditemplate dapat menyebabkan *overload* dan susah dipelihara. pada poin ini tepmlate tidak lagi sederhana dan deklaratif. masalahnya diperburuk ketika kita ingin memasukan pesan terbalik itu kedalam template lebih dari sekali. ketika logika yang kompleks kita harus menggunakan ini yaitu Computed properties.
    **Watcher** adalah fitur khusus yang memungkinkan kita untuk memantau sebuah variabel dan melakukan tindakan tertentu ketika nilai tersebut berubah.

    **Component** adalah vue instance yang dapat digunakan kembali dengan nama yang kita didefinisikan. kita bisa menggunakan komponen ini sebagai kustom elemen didalam vue instance root vue  yang dibuat dengan *new Vue*.