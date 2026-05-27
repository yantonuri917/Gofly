/**
 * ads.js - Skrip Iklan All-in-One Terpisah (Iframe Isolation Version)
 * Isolasi window.atOptions menggunakan iframe dinamis agar tidak tabrakan di memori.
 */

(function() {
    const CONFIG = {
        enableHeaderAd: true,        // Iklan 320x50 di samping menu garis tiga
        enableBottomStickyAd: true   // Iklan 728x90 melayang di bawah layar
    };

    // Fungsi pembantu untuk membuat iklan di dalam ruang lingkup terisolasi
    function injectAdIsolated(container, adKey, width, height, scriptSrc) {
        // 1. Buat iframe kosong
        const iframe = document.createElement('iframe');
        iframe.style.width = width + 'px';
        iframe.style.height = height + 'px';
        iframe.style.border = 'none';
        iframe.style.overflow = 'hidden';
        iframe.scrolling = 'no';
        
        container.appendChild(iframe);

        // 2. Ambil dokumen di dalam iframe tersebut
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

        // 3. Tulis kode iklan langsung ke dalam dokumen iframe
        iframeDoc.open();
        iframeDoc.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <style>html, body { margin: 0; padding: 0; overflow: hidden; background: transparent; }</style>
            </head>
            <body>
                <script type="text/javascript">
                    window.atOptions = {
                        'key' : '${adKey}',
                        'format' : 'iframe',
                        'height' : ${height},
                        'width' : ${width},
                        'params' : {}
                    };
                </script>
                <script type="text/javascript" src="${scriptSrc}"></script>
            </body>
            </html>
        `);
        iframeDoc.close();
    }

    window.addEventListener('DOMContentLoaded', function() {

        // ==========================================================
        // SLOT 1: MUAT IKLAN ATAS (320x50)
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

                header.appendChild(headerAdContainer);

                // Inject menggunakan metode terisolasi
                injectAdIsolated(
                    headerAdContainer, 
                    'baa0afb18e2e70c00e4c1406e4824e4b', 
                    320, 
                    50, 
                    'https://braverybreezebinding.com/baa0afb18e2e70c00e4c1406e4824e4b/invoke.js'
                );
                console.log("Slot 1: Header Adsterra terisolasi disuntikkan.");
            }
        }

        // ==========================================================
        // SLOT 2: MUAT IKLAN BAWAH (728x90)
        // ==========================================================
        if (CONFIG.enableBottomStickyAd) {
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

            document.body.appendChild(bottomAdContainer);

            // Inject menggunakan metode terisolasi (Tanpa perlu setTimeout lagi!)
            injectAdIsolated(
                bottomAdContainer, 
                '64e783bd557c30cbf66293b5c5fda05f', 
                728, 
                90, 
                'https://braverybreezebinding.com/64e783bd557c30cbf66293b5c5fda05f/invoke.js'
            );
            console.log("Slot 2: Bottom Sticky Adsterra terisolasi disuntikkan.");
        }

    });
})();
