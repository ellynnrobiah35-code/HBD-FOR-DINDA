// Animasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎉 Scrapbook ulang tahun Dinda telah dimuat!');
    
    // Tambahkan efek klik pada card
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(1.05) rotateZ(-2deg)';
            setTimeout(() => {
                this.style.transform = '';
            }, 300);
        });
    });

    // Confetti effect saat page load
    createConfetti();

    // Tampilkan pesan ulang tahun
    showBirthdayMessage();
});

// Fungsi untuk membuat confetti
function createConfetti() {
    const colors = ['#FF6B9D', '#FFA502', '#26D0FF', '#FF1654', '#FFD700', '#00D084'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-10px';
        confetti.style.borderRadius = '50%';
        confetti.style.opacity = '0.8';
        confetti.style.zIndex = '0';
        confetti.style.pointerEvents = 'none';
        
        document.body.appendChild(confetti);
        
        const duration = Math.random() * 2 + 2;
        const delay = Math.random() * 0.5;
        const distance = Math.random() * 100 + 50;
        const angle = Math.random() * 360;
        
        confetti.animate([
            {
                transform: 'translate(0, 0) rotate(0deg)',
                opacity: 0.8
            },
            {
                transform: `translate(${Math.cos(angle * Math.PI / 180) * distance}px, ${window.innerHeight + 50}px) rotate(${angle}deg)`,
                opacity: 0
            }
        ], {
            duration: duration * 1000,
            delay: delay * 1000,
            easing: 'ease-in'
        });
        
        setTimeout(() => {
            confetti.remove();
        }, (duration + delay) * 1000);
    }
}

// Fungsi untuk menampilkan pesan ulang tahun
function showBirthdayMessage() {
    const messages = [
        '🎉 Selamat Ulang Tahun Dinda! 🎂',
        '✨ Semoga hari ini penuh kebahagiaan! ✨',
        '💝 Terima kasih telah ada dalam hidup kami! 💝',
        '🌟 Wishing you a wonderful year ahead! 🌟'
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    console.log(randomMessage);
}

// Fungsi untuk menambahkan ucapan baru
function addNewMessage(from, message, sender = '🎁') {
    const scrapbook = document.querySelector('.scrapbook');
    const newCard = document.createElement('div');
    newCard.className = 'card';
    newCard.style.borderTop = '5px solid #9D4EDD';
    newCard.innerHTML = `
        <div class="card-header">${from}</div>
        <div class="card-content">
            <p class="message">"${message}"</p>
            <p class="sender">- ${sender}</p>
        </div>
    `;
    
    scrapbook.appendChild(newCard);
    
    // Animasi untuk card baru
    newCard.style.animation = 'fadeInUp 0.6s ease-out';
    
    newCard.addEventListener('click', function() {
        this.style.transform = 'scale(1.05) rotateZ(-2deg)';
        setTimeout(() => {
            this.style.transform = '';
        }, 300);
    });
}

// Event listener untuk scroll animation
window.addEventListener('scroll', function() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            card.style.animation = 'fadeInUp 0.6s ease-out forwards';
        }
    });
});

// Contoh penggunaan menambah ucapan baru (uncomment jika ingin digunakan):
// addNewMessage('Dari Teman Baru', 'Ucapan spesial dari teman terbaik!', 'Nama Teman');
