/**
 * ads.js - Skrip Iklan Terpisah untuk Gofile Clone
 * Menyuntikkan iklan Adsterra (320x50) ke dalam Header yang sudah Sticky.
 */

(function() {
    const CONFIG = {
        enableHeaderAd: true
    };

    if (CONFIG.enableHeaderAd) {
        window.addEventListener('DOMContentLoaded', function() {
            const header = document.querySelector('header');
            
            if (header) {
                const adContainer = document.createElement('div');
                adContainer.className = 'header-ad-space';
                
                adContainer.style.display = 'flex';
                adContainer.style.justifyContent = 'center';
                adContainer.style.alignItems = 'center';
                adContainer.style.flexGrow = '1';
                adContainer.style.maxWidth = '320px';
                adContainer.style.height = '50px';
                adContainer.style.overflow = 'hidden';
                adContainer.style.marginLeft = 'auto'; 

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

                const scriptInvoke = document.createElement('script');
                scriptInvoke.type = 'text/javascript';
                scriptInvoke.src = 'https://braverybreezebinding.com/baa0afb18e2e70c00e4c1406e4824e4b/invoke.js';

                adContainer.appendChild(scriptOptions);
                adContainer.appendChild(scriptInvoke);

                header.appendChild(adContainer);
                console.log("Header Sticky Adsterra Banner injected successfully.");
            }
        });
    }

})();
