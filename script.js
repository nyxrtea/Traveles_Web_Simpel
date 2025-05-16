// Data lokasi contoh (bisa diganti dengan data dari API atau sumber lain)
const locations = [
  {
    name: 'Bali',
    description: 'Travel dan wisata di Bali, kulinernya cagub dan kuliner yang menarik',
    icon: 'pin'
  },
  {
    name: 'Japan',
    description: 'Travel dan wisata di Japan, kulinernya cagub dan kuliner yang menarik',
    icon: 'pin'
  },
  {
    name: 'Singapore',
    description: 'This description supports and extends the bullet point above',
    icon: 'pin'
  },
  {
    name: 'Bandung',
    description: 'This description supports and extends the bullet point above',
    icon: 'pin'
  },
  {
    name: 'Surabaya',
    description: 'This description supports and extends the bullet point above',
    icon: 'pin'
  },
  {
    name: 'Third',
    description: 'This description supports and extends the bullet point above',
    icon: 'pin'
  }
];

// Fungsi untuk mengisi bagian lokasi secara dinamis
function populateLocations() {
  const locationContainer = document.getElementById('location-container');
  if (!locationContainer) {
    console.error('Kontainer lokasi tidak ditemukan');
    return;
  }
  locationContainer.innerHTML = ''; // Bersihkan konten yang ada
  locations.forEach(location => {
    const locationElement = document.createElement('div');
    locationElement.classList.add('location');
    locationElement.innerHTML = `
      <div class="icon ${location.icon}"></div>
      <h3>${location.name}</h3>
      <p>${location.description}</p>
    `;
    locationContainer.appendChild(locationElement);
  });
}

// Fungsi untuk mengatur konten utama (judul dan paragraf)
function setMainContent() {
  const headline = document.getElementById('headline');
  const paragraph = document.getElementById('paragraph');
  if (headline && paragraph) {
    headline.textContent = 'Your Closing Argument Headline';
    paragraph.textContent = 'Suspendisse eget sagittis rhoncus ut bibendum. Donec urna neque, ultricies sed justo quis, convallis interdum risus. Phasellus odio nulla vel erat fringilla.';
  } else {
    console.error('Elemen judul atau paragraf tidak ditemukan');
  }
}

// Event listener untuk tombol CTA
function setupCTA() {
  const ctaButton = document.getElementById('cta-button');
  if (ctaButton) {
    ctaButton.addEventListener('click', () => {
      alert('Tombol CTA diklik! Silakan tambahkan fungsi yang diinginkan di sini.');
      // Contoh: redirect ke halaman lain
      // window.location.href = '/halaman-lain';
    });
  } else {
    console.error('Tombol CTA tidak ditemukan');
  }
}

// Inisialisasi halaman saat DOM selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
  populateLocations();
  setMainContent();
  setupCTA();
});