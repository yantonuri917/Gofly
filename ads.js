/**
 * ads.js - Skrip Iklan All-in-One Terpisah (Queue Timeout Version)
 * Memberikan jeda waktu eksekusi agar sistem Adsterra tidak tabrakan di memori browser.
 */

(function() {
    const CONFIG = {
        enableHeaderAd: true,        // Iklan 320x50 di samping menu garis tiga
        enableBottomStickyAd: true   // Iklan 728x90 melayang di bawah layar
    };

    window.addEventListener('DOMContentLoaded', function() {

        // ==========================================================
        // SLOT 1: LANGSUNG MUAT IKLAN ATAS (320x50) SAAT START
        // ==========================================================
        if (CONFIG.enableHeaderAd) {
            const header = document.querySelector('header');
            if (header) {
                const headerAdContainer = document.createElement('div');
                headerAdContainer.className = 'header-ad-space';
                
                headerAdContainer.style.display = 'flex';
                headerAdContainer.style.justifyContent = 'center';
                headerAdContainer.style.alignItems = 'center';
                headerAdContainer.style.flexGrow = '1';
                headerAdContainer.style.maxWidth = '320px';
                headerAdContainer.style.height = '50px';
                headerAdContainer.style.overflow = 'hidden';
                headerAdContainer.style.marginLeft = 'auto'; 

                // Set konfigurasi global untuk Iklan Pertama
                window.atOptions = {
                    'key' : 'baa0afb18e2e70c00e4c1406e4824e4b',
                    'format' : 'iframe',
                    'height' : 50,
                    'width' : 320,
                    'params' : {}
                };

                const scriptInvoke1 = document.createElement('script');
                scriptInvoke1.type = 'text/javascript';
                scriptInvoke1.src = 'https://braverybreezebinding.com/baa0afb18e2e70c00e4c1406e4824e4b/invoke.js';

                headerAdContainer.appendChild(scriptInvoke1);
                header.appendChild(headerAdContainer);
                console.log("Slot 1: Header Adsterra dipanggil.");
            }
        }

        // ==========================================================
        // SLOT 2: BERI JEDA WAKTU (1.5 DETIK) BARU MUAT IKLAN BAWAH (728x90)
        // ==========================================================
        if (CONFIG.enableBottomStickyAd) {
            // Kita beri jeda 1500ms (1.5 detik) agar iklan pertama selesai dirender oleh Adsterra
            setTimeout(function() {
                const bottomAdContainer = document.createElement('div');
                bottomAdContainer.className = 'bottom-sticky-ad-space';
                
                bottomAdContainer.style.position = 'fixed';
                bottomAdContainer.style.bottom = '0';          
                bottomAdContainer.style.left = '50%';
                bottomAdContainer.style.transform = 'translateX(-50%)'; 
                bottomAdContainer.style.zIndex = '995';         
                bottomAdContainer.style.width = '100%';         
                bottomAdContainer.style.maxWidth = '728px';     
                bottomAdContainer.style.height = '90px';        
                bottomAdContainer.style.display = 'flex';
                bottomAdContainer.style.justifyContent = 'center';
                bottomAdContainer.style.alignItems = 'center';
                bottomAdContainer.style.backgroundColor = 'rgba(24, 36, 54, 0.9)'; 
                bottomAdContainer.style.boxShadow = '0 -4px 12px rgba(0,0,0,0.5)'; 
                bottomAdContainer.style.overflow = 'hidden';

                // Timpa atOptions secara aman karena iklan pertama sudah selesai dibuat
                window.atOptions = {
                    'key' : '64e783bd557c30cbf66293b5c5fda05f',
                    'format' : 'iframe',
                    'height' : 90,
                    'width' : 728,
                    'params' : {}
                };

                const scriptInvoke2 = document.createElement('script');
                scriptInvoke2.type = 'text/javascript';
                scriptInvoke2.src = 'https://braverybreezebinding.com/64e783bd557c30cbf66293b5c5fda05f/invoke.js';

                bottomAdContainer.appendChild(scriptInvoke2);
                document.body.appendChild(bottomAdContainer);
                console.log("Slot 2: Bottom Sticky Adsterra dipanggil setelah jeda.");
            }, 1500); 
        }

    });
})();
