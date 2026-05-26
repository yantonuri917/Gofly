/**
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

})();
