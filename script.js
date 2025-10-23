// Daftar nama file foto (sesuaikan dengan nama file di folder)
const photos = [
    'foto1.jpg',
    'foto2.jpg',
    
    // Tambahkan nama file lain sesuai foto yang ada
];

const gallery = document.querySelector('.gallery');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeModal = document.querySelector('.close');
let currentIndex = 0; // Menyimpan indeks foto yang sedang ditampilkan

// Memuat thumbnail ke galeri
photos.forEach((photo, index) => {
    const img = document.createElement('img');
    img.src = `foto/thumbnail/${photo}`;
    img.alt = photo;
    img.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImg.src = `foto/full/${photo}`;
        currentIndex = index; // Simpan indeks foto yang diklik
    });
    gallery.appendChild(img);
});

// Menutup modal saat tombol close diklik
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Menutup modal saat area luar foto diklik
modal.addEventListener('click', (e) => {
    if (e.target !== modalImg && !e.target.classList.contains('nav-button')) {
        modal.style.display = 'none';
    }
});

// Fungsi untuk navigasi foto (Next/Previous)
window.changeImage = function(direction) {
    currentIndex += direction;
    
    // Loop ke awal/akhir jika mencapai batas
    if (currentIndex >= photos.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = photos.length - 1;
    }
    
    modalImg.src = `foto/full/${photos[currentIndex]}`;

};

