/**
 * ads.js - Skrip Iklan All-in-One Terpisah untuk Gofile Clone
 * Menggabungkan iklan atas (320x50) dan iklan bawah (728x90) secara dinamis.
 */

(function() {
    // ==========================================
    // CONFIGURATION (Aktifkan / Matikan Iklan)
    // ==========================================
    const CONFIG = {
        enableHeaderAd: true,        // Iklan 320x50 di samping menu garis tiga
        enableBottomStickyAd: true   // Iklan 728x90 melayang di bawah layar
    };

    // Tunggu sampai seluruh struktur halaman web selesai dimuat
    window.addEventListener('DOMContentLoaded', function() {

        // ------------------------------------------
        // SLOT 1: INJECT IKLAN KE HEADER (320x50)
        // ------------------------------------------
        if (CONFIG.enableHeaderAd) {
            const header = document.querySelector('header');
            if (header) {
                const headerAdContainer = document.createElement('div');
                headerAdContainer.className = 'header-ad-space';
                
                // Gaya CSS agar pas di samping tombol menu dan responsif
                headerAdContainer.style.display = 'flex';
                headerAdContainer.style.justifyContent = 'center';
                headerAdContainer.style.alignItems = 'center';
                headerAdContainer.style.flexGrow = '1';
                headerAdContainer.style.maxWidth = '320px';
                headerAdContainer.style.height = '50px';
                headerAdContainer.style.overflow = 'hidden';
                headerAdContainer.style.marginLeft = 'auto'; 

                const scriptOptions1 = document.createElement('script');
                scriptOptions1.type = 'text/javascript';
                scriptOptions1.text = `
                    atOptions = {
                        'key' : 'baa0afb18e2e70c00e4c1406e4824e4b',
                        'format' : 'iframe',
                        'height' : 50,
                        'width' : 320,
                        'params' : {}
                    };
                `;

                const scriptInvoke1 = document.createElement('script');
                scriptInvoke1.type = 'text/javascript';
                scriptInvoke1.src = 'https://braverybreezebinding.com/baa0afb18e2e70c00e4c1406e4824e4b/invoke.js';

                headerAdContainer.appendChild(scriptOptions1);
                headerAdContainer.appendChild(scriptInvoke1);
                header.appendChild(headerAdContainer);
                console.log("Header Adsterra Banner (320x50) loaded.");
            }
        }

        // ------------------------------------------
        // SLOT 2: INJECT IKLAN STICKY BAWAH (728x90)
        // ------------------------------------------
        if (CONFIG.enableBottomStickyAd) {
            const bottomAdContainer = document.createElement('div');
            bottomAdContainer.className = 'bottom-sticky-ad-space';
            
            // Gaya CSS agar melayang pas di bawah tengah layar
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

            const scriptOptions2 = document.createElement('script');
            scriptOptions2.type = 'text/javascript';
            // Variabel harus dibedakan namanya/langsung eksekusi agar tidak bentrok dengan slot 1
            scriptOptions2.text = `
                atOptions = {
                    'key' : '64e783bd557c30cbf66293b5c5fda05f',
                    'format' : 'iframe',
                    'height' : 90,
                    'width' : 728,
                    'params' : {}
                };
            `;

            const scriptInvoke2 = document.createElement('script');
            scriptInvoke2.type = 'text/javascript';
            scriptInvoke2.src = 'https://braverybreezebinding.com/64e783bd557c30cbf66293b5c5fda05f/invoke.js';

            bottomAdContainer.appendChild(scriptOptions2);
            bottomAdContainer.appendChild(scriptInvoke2);
            document.body.appendChild(bottomAdContainer);
            console.log("Bottom Sticky Adsterra Banner (728x90) loaded.");
        }

    });
})();
