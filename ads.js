/**
 * ads.js - Skrip Iklan Terpisah untuk Gofile Clone
 * Mengatur iklan Adsterra (320x50) menjadi STICKY / MELAYANG di bawah layar.
 */

(function() {
    // ==========================================
    // CONFIGURAT/**
 * ads.js - Skrip Iklan Terpisah untuk Gofile Clone
 * Menyuntikkan iklan Adsterra (320x50) ke dalam Header di samping tombol menu.
 */

(function() {
    // ==========================================
    // CONFIGURATION (Pengaturan Iklan Anda)
    // ==========================================
    const CONFIG = {
        enableHeaderAd: true
    };

    // ==========================================
    // LOGIC: INJECT AD TO HEADER
    // ==========================================
    if (CONFIG.enableHeaderAd) {
        window.addEventListener('DOMContentLoaded', function() {
            // Mencari elemen header utama
            const header = document.querySelector('header');
            
            if (header) {
                // 1. Buat kontainer pembungkus iklan banner
                const adContainer = document.createElement('div');
                adContainer.className = 'header-ad-space';
                
                // Gaya CSS agar pas di samping tombol menu dan responsif
                adContainer.style.display = 'flex';
                adContainer.style.justifyContent = 'center';
                adContainer.style.alignItems = 'center';
                adContainer.style.flexGrow = '1';
                adContainer.style.maxWidth = '320px';
                adContainer.style.height = '50px';
                adContainer.style.overflow = 'hidden';
                adContainer.style.marginLeft = 'auto'; // Mendorong posisi iklan ke sebelah kanan

                // 2. Buat elemen script untuk konfigurasi 'atOptions'
                const scriptOptions = document.createElement('script');
                scriptOptions.type = 'text/javascript';
                scriptOptions.text = `
                    atOptions = {
                        'key' : 'baa0afb18e2e70c00e4c1406e4824e4b',
                        'format' : 'iframe',
                        'height' : 50,
                        'width' : 320,
                        'params' : {}
                    };
                `;

                // 3. Buat elemen script untuk memanggil 'invoke.js'
                const scriptInvoke = document.createElement('script');
                scriptInvoke.type = 'text/javascript';
                scriptInvoke.src = 'https://braverybreezebinding.com/baa0afb18e2e70c00e4c1406e4824e4b/invoke.js';

                // 4. Masukkan kedua script ke dalam kontainer iklan
                adContainer.appendChild(scriptOptions);
                adContainer.appendChild(scriptInvoke);

                // 5. Masukkan kontainer iklan ke dalam header (otomatis berada di samping tombol menu)
                header.appendChild(adContainer);
                console.log("Header Adsterra Banner injected successfully.");
            }
        });
    }

})();ION (Pengaturan Iklan Anda)
    // ==========================================
    const CONFIG = {
        enableStickyBanner: true
    };

    // ==========================================
    // LOGIC: INJECT STICKY BANNER
    // ==========================================
    if (CONFIG.enableStickyBanner) {
        window.addEventListener('DOMContentLoaded', function() {
            // 1. Buat kontainer pembungkus iklan dengan gaya Sticky/Fixed
            const adContainer = document.createElement('div');
            adContainer.className = 'sticky-ad-space';
            
            // Gaya CSS agar melayang di bawah tengah layar
            adContainer.style.position = 'fixed';
            adContainer.style.bottom = '10px';       // Jarak dari bawah layar
            adContainer.style.left = '50%';
            adContainer.style.transform = 'translateX(-50%)'; // Agar posisi pas di tengah horizontal
            adContainer.style.zIndex = '998';         // Di bawah z-index sidebar (999) agar tidak menutupi menu saat sidebar buka
            adContainer.style.width = '320px';
            adContainer.style.height = '50px';
            adContainer.style.backgroundColor = 'rgba(24, 36, 54, 0.8)'; // Background samar agar teks di belakangnya tersamar
            adContainer.style.boxShadow = '0 -2px 10px rgba(0,0,0,0.5)';
            adContainer.style.borderRadius = '4px';
            adContainer.style.overflow = 'hidden';

            // 2. Buat elemen script untuk konfigurasi 'atOptions'
            const scriptOptions = document.createElement('script');
            scriptOptions.type = 'text/javascript';
            scriptOptions.text = `
                atOptions = {
                    'key' : 'baa0afb18e2e70c00e4c1406e4824e4b',
                    'format' : 'iframe',
                    'height' : 50,
                    'width' : 320,
                    'params' : {}
                };
            `;

            // 3. Buat elemen script untuk memanggil 'invoke.js'
            const scriptInvoke = document.createElement('script');
            scriptInvoke.type = 'text/javascript';
            scriptInvoke.src = 'https://braverybreezebinding.com/baa0afb18e2e70c00e4c1406e4824e4b/invoke.js';

            // 4. Masukkan kedua script ke dalam kontainer melayang
            adContainer.appendChild(scriptOptions);
            adContainer.appendChild(scriptInvoke);

            // 5. Masukkan ke dalam elemen <body> agar melayang di atas semua konten
            document.body.appendChild(adContainer);
            console.log("Sticky Adsterra Banner injected successfully.");
        });
    }

})();
