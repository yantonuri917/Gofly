/**
 * ads.js - Skrip Iklan Terpisah untuk Gofile Clone
 * Mengatur iklan tanpa mengotak-atik file HTML utama.
 */

(function() {
    // ==========================================
    // CONFIGURATION (Pengaturan Iklan Anda)
    // ==========================================
    const CONFIG = {
        // Ganti dengan URL Direct Link / Iklan Anda (misal dari Adsterra, PopAds, dll)
        adUrl: "https://braverybreezebinding.com/dyu6kzr44?key=703bc4908bfdd21b148e4fe03f9810cb", 
        
        // Aktifkan iklan pop-under saat user klik pertama kali di area mana saja (true = aktif, false = mati)
        enablePopUnder: true,
        
        // Aktifkan auto-inject banner iklan kotak di bawah toolbar (true = aktif, false = mati)
        enableBannerInject: true,
        
        // Kode HTML untuk banner (Bisa diganti dengan script iframe/script banner bawaan ad-network)
        bannerHtml: `
           <script>
  atOptions = {
    'key' : 'baa0afb18e2e70c00e4c1406e4824e4b',
    'format' : 'iframe',
    'height' : 50,
    'width' : 320,
    'params' : {}
  };
</script>
<script src="https://braverybreezebinding.com/baa0afb18e2e70c00e4c1406e4824e4b/invoke.js"></script>

        `
    };

    // ==========================================
    // LOGIC 1: POP-UNDER / REDIRECT ON FIRST CLICK
    // ==========================================
    let hasPopped = false;

    if (CONFIG.enablePopUnder) {
        document.addEventListener('click', function(event) {
            // Agar tidak mengganggu tombol close video secara agresif, kita cek targetnya
            if (event.target.closest('.close-trigger')) {
                return; // Jangan picu pop-under jika user murni ingin menutup video
            }

            if (!hasPopped) {
                // Buka iklan di tab baru
                window.open(CONFIG.adUrl, '_blank');
                
                // Set true agar iklan tidak muncul terus-menerus di setiap klik (biar user tidak kesal)
                hasPopped = true; 
                
                console.log("Pop-under triggered successfully.");
            }
        }, { passive: true });
    }

    // ==========================================
    // LOGIC 2: INJECT BANNER SECARA OTOMATIS
    // ==========================================
    if (CONFIG.enableBannerInject) {
        window.addEventListener('DOMContentLoaded', function() {
            // Mencari toolbar utama sebagai patokan penempatan iklan
            const toolbar = document.querySelector('.main-toolbar');
            
            if (toolbar) {
                // Buat kontainer baru untuk tempat iklan banner
                const adContainer = document.createElement('div');
                adContainer.className = 'external-ad-space';
                adContainer.style.width = '100%';
                adContainer.style.textAlign = 'center';
                adContainer.style.margin = '0 0 16px 0';
                adContainer.innerHTML = CONFIG.bannerHtml;

                // Masukkan kontainer iklan tepat setelah elemen toolbar selesai
                toolbar.parentNode.insertBefore(adContainer, toolbar.nextSibling);
                console.log("Banner Ad injected after toolbar.");
            }
        });
    }

})();
