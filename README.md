# 🎉 HBD-FOR-DINDA

Website scrapbook ulang tahun yang indah dan interaktif untuk merayakan ulang tahun istimewa Dinda dengan kumpulan ucapan dari orang-orang terkasih.

## ✨ Fitur Utama

- 🎨 **Desain Modern & Responsif** - Cantik di semua perangkat (desktop, tablet, mobile)
- 🎈 **Animasi Menarik** - Balon yang terbang dan konfeti yang jatuh saat halaman dibuka
- 💌 **Kartu Ucapan** - 6 kartu ucapan interaktif dengan pesan dari berbagai orang
- 🌈 **Warna-Warni** - Desain yang cerah, ceria, dan penuh warna
- 📱 **Mobile Friendly** - Sempurna untuk dibagikan di sosial media dan dilihat dari smartphone
- 🖼️ **Galeri Kenangan** - Bagian untuk menambahkan foto-foto spesial

## 🚀 Cara Menggunakan

### 1. Clone atau Download Repository
```bash
git clone https://github.com/ellynnrobiah35-code/HBD-FOR-DINDA.git
cd HBD-FOR-DINDA
```

### 2. Buka di Browser
- **Cara Mudah:** Double-click file `index.html` untuk membukanya langsung di browser
- **Cara Profesional:** Gunakan Live Server extension di VS Code
  - Install extension "Live Server" di VS Code
  - Right-click `index.html` → "Open with Live Server"

### 3. Personalisasi Konten

#### Mengubah Nama & Pesan Ucapan
Edit file `index.html` dan cari bagian kartu (card) yang ingin diubah:

```html
<div class="card card-1">
    <div class="card-header">Dari Keluarga</div>
    <div class="card-content">
        <p class="message">"Pesan Anda di sini"</p>
        <p class="sender">- Nama Pengirim</p>
    </div>
</div>
```

#### Mengubah Warna & Desain
Edit file `styles.css` dan ubah variable warna di bagian atas:

```css
:root {
    --primary-color: #FF6B9D;      /* Warna pink utama */
    --secondary-color: #FFA502;    /* Warna orange */
    --accent-color: #26D0FF;       /* Warna biru */
}
```

## 📝 Struktur File

```
HBD-FOR-DINDA/
├── index.html          # File HTML utama
├── styles.css          # Styling dan animasi CSS
├── script.js           # JavaScript untuk interaktivitas
└── README.md          # File dokumentasi ini
```

## 🎯 Menambahkan Ucapan Baru

Gunakan fungsi `addNewMessage()` yang sudah tersedia di `script.js`:

```javascript
// Cara penggunaan:
addNewMessage('Dari Siapa', 'Pesan ucapan Anda di sini', 'Nama Pengirim');

// Contoh:
addNewMessage('Dari Sahabat Baru', 'Semoga impianmu terwujud!', 'Teman Terbaik');
```

Atau tambahkan secara manual dengan membuat card baru di `index.html`:

```html
<div class="card card-7">
    <div class="card-header">Dari Nama Anda</div>
    <div class="card-content">
        <p class="message">"Pesan ucapan di sini"</p>
        <p class="sender">- Nama Pengirim</p>
    </div>
</div>
```

## 📸 Menambahkan Foto di Galeri

Edit bagian gallery di `index.html` untuk menambahkan foto:

```html
<div class="gallery-item">
    <img src="path/to/your/photo.jpg" alt="Foto Bersama">
</div>
```

## 🌐 Deploy ke Internet

Website ini bisa di-deploy secara gratis ke berbagai platform:

### Menggunakan GitHub Pages (Recommended)
1. Push semua file ke repository GitHub
2. Pergi ke Settings → Pages
3. Pilih branch `main` sebagai source
4. Website akan tersedia di: `https://ellynnrobiah35-code.github.io/HBD-FOR-DINDA/`

### Platform Hosting Gratis Lainnya
- **Vercel** - https://vercel.com
- **Netlify** - https://netlify.com
- **Surge** - https://surge.sh
- **Firebase Hosting** - https://firebase.google.com/products/hosting

## 🎨 Tips Personalisasi

### Mengubah Font
Edit di `styles.css`:
```css
body {
    font-family: 'Your Font Name', sans-serif;
}
```

### Menambah Background Music (Optional)
Tambahkan audio di `index.html`:
```html
<audio autoplay loop>
    <source src="path/to/music.mp3" type="audio/mpeg">
</audio>
```

### Mengubah Judul Halaman
Edit di `index.html`:
```html
<title>🎉 Happy Birthday Dinda! 🎂</title>
```

## 🖥️ Browser Support

| Browser | Support |
|---------|---------|
| Chrome  | ✅      |
| Firefox | ✅      |
| Safari  | ✅      |
| Edge    | ✅      |
| Mobile  | ✅      |

## 💡 Fitur Interaktif

- ✨ **Confetti Animation** - Konfeti otomatis jatuh saat halaman dibuka
- 🎈 **Floating Balloons** - Balon-balon berwarna terbang di background
- 🎯 **Card Click Effect** - Kartu animasi saat diklik
- 📱 **Responsive Design** - Menyesuaikan dengan ukuran layar

## 📄 Lisensi

Bebas digunakan untuk keperluan personal dan komersial.

## 💝 Catatan

Website ini dibuat dengan ❤️ untuk merayakan ulang tahun istimewa Dinda! Semoga website ini membuat perayaan ulang tahun Anda semakin berkesan dan penuh kebahagiaan.

**Selamat Ulang Tahun, Dinda! 🎂🎉✨**

---

**Dibuat dengan penuh cinta dan kebahagiaan untuk orang istimewa! 💕**
