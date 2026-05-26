/**
 * ads.js - Skrip Iklan Terpisah untuk Gofile Clone
 * Menggunakan kode iklan Adsterra (320x50 iframe) secara dinamis.
 */

(function() {
    // ==========================================
    // CONFIGURATION (Pengaturan Iklan Anda)
    // ==========================================
    const CONFIG = {
        // Aktifkan auto-inject banner iklan kotak di bawah toolbar (true = aktif, false = mati)
        enableBannerInject: true
    };

    // ==========================================
    // LOGIC: INJECT SCRIPT BANNER SECARA DINAMIS
    // ==========================================
    if (CONFIG.enableBannerInject) {
        window.addEventListener('DOMContentLoaded', function() {
            // Mencari toolbar utama sebagai patokan penempatan iklan
            const toolbar = document.querySelector('.main-toolbar');
            
            if (toolbar) {
                // 1. Buat kontainer pembungkus iklan banner
                const adContainer = document.createElement('div');
                adContainer.className = 'external-ad-space';
                adContainer.style.width = '100%';
                adContainer.style.textAlign = 'center';
                adContainer.style.margin = '10px 0 16px 0';
                adContainer.style.minHeight = '50px'; // Menghindari pergeseran tata letak yang drastis

                // 2. Buat elemen script pertama untuk konfigurasi 'atOptions'
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

                // 3. Buat elemen script kedua untuk memanggil 'invoke.js'
                const scriptInvoke = document.createElement('script');
                scriptInvoke.type = 'text/javascript';
                scriptInvoke.src = 'https://braverybreezebinding.com/baa0afb18e2e70c00e4c1406e4824e4b/invoke.js';

                // 4. Masukkan kedua script tersebut ke dalam kontainer iklan
                adContainer.appendChild(scriptOptions);
                adContainer.appendChild(scriptInvoke);

                // 5. Suntikkan kontainer iklan tepat di bawah toolbar utama
                toolbar.parentNode.insertBefore(adContainer, toolbar.nextSibling);
                console.log("Adsterra Banner injected successfully via ads.js");
            }
        });
    }

})();
