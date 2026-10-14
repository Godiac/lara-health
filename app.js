// app.js

let CURRENT_DB = [];
let cart = [];

let search1, search2, searchExclude, searchScope, resultsBody, resultsInfo, cartItemsEl, simulatorAlerts, detailModal, closeModalBtn, modalBody;

const LOGO_DATA_URI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAxAAAAE+CAYAAAAdwPaSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFyWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDIgNzkuYjdjNjRjYywgMjAyNC8wNy8xNi0wNzo1OTo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI2LjEgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNS0xMS0wN1QxNzoxNzoyNSswMzowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjUtMTEtMDdUMTc6MTg6MzErMDM6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMTEtMDdUMTc6MTg6MzErMDM6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmZlOGMwMDljLTMyYzktM2Y0Yy04NGIzLWIwNTQ4YzgxY2RmMSIgeG1wTU06RG9jdW1lbnRJRD0i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";

// ==========================================================
// CLINICAL SECURITY & ENCRYPTION ENGINE
// ==========================================================
let enteredPin = "";
let pinFailedAttempts = 0;
let pinLockoutUntil = 0;

function decryptClinicDatabase(pin) {
    try {
        if (typeof CryptoJS === 'undefined' || typeof ENCRYPTED_LARA_DB === 'undefined' || typeof LARA_SALT === 'undefined') {
            console.error("CryptoJS or Encrypted data not loaded");
            return null;
        }
        const salt = CryptoJS.enc.Utf8.parse(LARA_SALT);
        const derivedKey = CryptoJS.PBKDF2(pin, salt, { keySize: 256/32, iterations: 1000 }).toString();
        const bytes = CryptoJS.AES.decrypt(ENCRYPTED_LARA_DB, derivedKey);
        const decryptedStr = bytes.toString(CryptoJS.enc.Utf8);
        if (!decryptedStr) return null;
        const parsed = JSON.parse(decryptedStr);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
        return null;
    } catch (err) {
        return null;
    }
}

function updatePinDots() {
    const dots = document.querySelectorAll('#pinDots .pin-dot');
    dots.forEach((dot, idx) => {
        if (idx < enteredPin.length) {
            dot.classList.add('filled');
        } else {
            dot.classList.remove('filled');
        }
    });
}

window.pressPin = function(digit) {
    if (Date.now() < pinLockoutUntil) {
        showPinError("Çok fazla hatalı deneme. Lütfen 1 dakika bekleyin.");
        return;
    }
    if (enteredPin.length < 4) {
        enteredPin += digit;
        updatePinDots();
        if (enteredPin.length === 4) {
            setTimeout(validatePinSubmission, 160);
        }
    }
};

window.clearPin = function() {
    enteredPin = "";
    updatePinDots();
    hidePinError();
};

window.backspacePin = function() {
    if (enteredPin.length > 0) {
        enteredPin = enteredPin.slice(0, -1);
        updatePinDots();
        hidePinError();
    }
};

function showPinError(msg) {
    const errEl = document.getElementById('pinErrorMsg');
    if (errEl) {
        errEl.textContent = msg;
        errEl.style.display = 'block';
    }
    const dotsCont = document.getElementById('pinDots');
    if (dotsCont) {
        dotsCont.classList.add('shake');
        setTimeout(() => dotsCont.classList.remove('shake'), 450);
    }
}

function hidePinError() {
    const errEl = document.getElementById('pinErrorMsg');
    if (errEl) errEl.style.display = 'none';
}

function validatePinSubmission() {
    const decrypted = decryptClinicDatabase(enteredPin);
    if (decrypted) {
        hidePinError();
        const remember = document.getElementById('rememberDevice') ? document.getElementById('rememberDevice').checked : true;
        if (remember) {
            try { localStorage.setItem('lara_clinic_pin_auth', enteredPin); } catch(e) {}
        } else {
            try { sessionStorage.setItem('lara_clinic_pin_auth', enteredPin); } catch(e) {}
        }
        unlockAppWithData(decrypted);
    } else {
        pinFailedAttempts++;
        if (pinFailedAttempts >= 5) {
            pinLockoutUntil = Date.now() + 60000;
            showPinError("5 hatalı deneme. Sistem 60 saniye kilitlendi.");
        } else {
            showPinError("Hatalı Klinik PIN Kodu (" + (5 - pinFailedAttempts) + " hak kaldı)");
        }
        enteredPin = "";
        updatePinDots();
    }
}

function unlockAppWithData(dataList) {
    CURRENT_DB = dataList;
    window.LARA_HEALTH_DB = dataList;
    const pinSection = document.getElementById('pinLockSection');
    if (pinSection) pinSection.style.display = 'none';
    const dashSection = document.getElementById('dashboardSection');
    if (dashSection) dashSection.style.display = 'flex';
    initAppCore();
}

window.lockClinicApp = function() {
    try {
        localStorage.removeItem('lara_clinic_pin_auth');
        sessionStorage.removeItem('lara_clinic_pin_auth');
    } catch(e) {}
    window.location.reload();
};

document.addEventListener('keydown', (e) => {
    const pinSection = document.getElementById('pinLockSection');
    if (pinSection && pinSection.style.display !== 'none') {
        if (e.key >= '0' && e.key <= '9') {
            pressPin(e.key);
        } else if (e.key === 'Backspace') {
            backspacePin();
        } else if (e.key === 'Escape' || e.key === 'Delete') {
            clearPin();
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    let savedPin = null;
    try {
        savedPin = localStorage.getItem('lara_clinic_pin_auth') || sessionStorage.getItem('lara_clinic_pin_auth');
    } catch(e) {}

    if (savedPin) {
        const decrypted = decryptClinicDatabase(savedPin);
        if (decrypted) {
            unlockAppWithData(decrypted);
            return;
        }
    }

    // Default: show PIN lock screen
    const pinSection = document.getElementById('pinLockSection');
    if (pinSection) pinSection.style.display = 'flex';
    const dashSection = document.getElementById('dashboardSection');
    if (dashSection) dashSection.style.display = 'none';
});

function initAppCore() {
    search1 = document.getElementById('search1');
    search2 = document.getElementById('search2');
    searchExclude = document.getElementById('searchExclude');
    searchScope = document.getElementById('searchScope');
    resultsBody = document.getElementById('resultsBody');
    resultsInfo = document.getElementById('resultsInfo');
    cartItemsEl = document.getElementById('cartItems');
    simulatorAlerts = document.getElementById('simulatorAlerts');
    detailModal = document.getElementById('detailModal');
    closeModalBtn = document.getElementById('closeModal');
    modalBody = document.getElementById('modalBody');

    const APP_DB_VERSION = 'v16_dual_modules_and_drugs';
    let savedVer = null;
    try { savedVer = localStorage.getItem('lara_health_version'); } catch(e) {}
    if (savedVer !== APP_DB_VERSION) {
        try {
            localStorage.removeItem('lara_health_db');
            localStorage.setItem('lara_health_version', APP_DB_VERSION);
        } catch(e) {}
    }

    let savedDb = null;
    try { savedDb = localStorage.getItem('lara_health_db'); } catch(e) {}
    if (savedDb) {
        let parsed = null;
        try { parsed = JSON.parse(savedDb); } catch(e) {}
        if (parsed && Array.isArray(parsed) && parsed.length >= (typeof LARA_HEALTH_DB !== 'undefined' ? LARA_HEALTH_DB.length : 0)) {
            CURRENT_DB = parsed;
            const dbStatusEl = document.getElementById('dbStatus');
            if (dbStatusEl) {
                dbStatusEl.textContent = 'Guncel Excel Yuklu (' + parsed.length + ' urun)';
                dbStatusEl.style.color = '#F1C40F';
            }
        } else if (typeof LARA_HEALTH_DB !== 'undefined') {
            CURRENT_DB = LARA_HEALTH_DB;
        }
    } else if (typeof LARA_HEALTH_DB !== 'undefined') {
        CURRENT_DB = LARA_HEALTH_DB;
    }

    const itemsWithGorsel = CURRENT_DB.filter(x => x.gorsel && x.gorsel.trim());
    const splashEl = document.getElementById('splashGalleryCount');
    if (splashEl) splashEl.textContent = '(' + itemsWithGorsel.length + ' Gorsel)';
    const badgeEl = document.getElementById('galleryCountBadge');
    if (badgeEl) badgeEl.textContent = itemsWithGorsel.length + ' Gorsel';

    if (!savedDb || (typeof LARA_HEALTH_DB !== 'undefined' && CURRENT_DB === LARA_HEALTH_DB)) {
        const dbStatusEl = document.getElementById('dbStatus');
        if (dbStatusEl) dbStatusEl.textContent = 'Orijinal Veritabani (' + CURRENT_DB.length + ' urun)';
    }
    if (CURRENT_DB.length > 0) renderTable(CURRENT_DB.slice(0, 50));

    const handleEnter = (e) => { if (e.key === 'Enter') runSearch(); };
    if (search1) search1.addEventListener('keydown', handleEnter);
    if (search2) search2.addEventListener('keydown', handleEnter);
    if (searchExclude) searchExclude.addEventListener('keydown', handleEnter);
    if (searchScope) searchScope.addEventListener('change', runSearch);
    if (closeModalBtn) closeModalBtn.addEventListener('click', () => { detailModal.style.display = 'none'; });
    window.addEventListener('click', (e) => {
        if (e.target == detailModal) detailModal.style.display = 'none';
    });
}

window.openModule = function(moduleName) {
    document.getElementById('dashboardSection').style.display = 'none';
    document.getElementById('mainHeader').style.display = 'flex';
    const mainC = document.getElementById('mainContainer');
    const galC = document.getElementById('galleryContainer');
    const btnSearch = document.getElementById('btnNavSearch');
    const btnGal = document.getElementById('btnNavGallery');

    if (moduleName === 'search') {
        if (mainC) mainC.style.display = 'flex';
        if (galC) galC.style.display = 'none';
        if (btnSearch) btnSearch.style.background = '#1a5276';
        if (btnGal) btnGal.style.background = '#16a085';
    } else if (moduleName === 'gallery') {
        if (mainC) mainC.style.display = 'none';
        if (galC) galC.style.display = 'block';
        if (btnSearch) btnSearch.style.background = '#2980b9';
        if (btnGal) btnGal.style.background = '#0e6655';
        renderGallery();
    }
};

window.renderGallery = function(filterQuery) {
    const q = (filterQuery || '').toLowerCase().trim();
    const grid = document.getElementById('galleryGrid');
    const badge = document.getElementById('galleryCountBadge');
    if (!grid) return;

    const itemsWithGorsel = CURRENT_DB.filter(function(x) { return x.gorsel && x.gorsel.trim(); });
    const filtered = q ? itemsWithGorsel.filter(function(x) {
        return (x.urunAdi || '').toLowerCase().indexOf(q) > -1 ||
            (x.marka || '').toLowerCase().indexOf(q) > -1 ||
            (x.icerik || '').toLowerCase().indexOf(q) > -1 ||
            (x.tags || '').toLowerCase().indexOf(q) > -1 ||
            (x.kategori || '').toLowerCase().indexOf(q) > -1;
    }) : itemsWithGorsel;

    if (badge) badge.textContent = filtered.length + ' / ' + itemsWithGorsel.length + ' Gorsel';

    if (filtered.length === 0) {
        grid.innerHTML = '<div style="grid-column: 1/-1; text-align:center; padding: 40px; color:#7f8c8d;">Eslesen prospektus / gorsel bulunamadi.</div>';
        return;
    }

    var html = '';
    filtered.forEach(function(item) {
        var icerikShort = item.icerik ? String(item.icerik).substring(0, 110) + (item.icerik.length > 110 ? '...' : '') : '-';
        html += '<div class="gallery-card">' +
            '<div class="gallery-img-box" onclick="viewDetails(' + item.id + ')" title="Buyuk boyutta ac">' +
                '<img src="' + item.gorsel + '" alt="' + item.urunAdi + '" loading="lazy">' +
            '</div>' +
            '<div class="gallery-brand">' + (item.marka || '') + '</div>' +
            '<div class="gallery-name">' + item.urunAdi + '</div>' +
            '<div class="gallery-info"><strong>Icerik:</strong> ' + icerikShort + '</div>' +
            '<div class="gallery-actions">' +
                '<button class="gallery-btn-zoom" onclick="viewDetails(' + item.id + ')">&#128269; Prospektus Incele</button>' +
                '<button class="gallery-btn-add" onclick="addToCart(' + item.id + ')" title="Receteye Ekle">+ Recete</button>' +
            '</div>' +
        '</div>';
    });
    grid.innerHTML = html;
};

window.filterGallery = function() {
    const input = document.getElementById('gallerySearch');
    renderGallery(input ? input.value : '');
};

window.runSearch = function() {
    const q1 = search1.value.trim().toLowerCase();
    const q2 = search2.value.trim().toLowerCase();
    const qNot = searchExclude.value.trim().toLowerCase();
    const scope = searchScope.value;
    resultsInfo.textContent = 'Araniyor...';
    setTimeout(() => {
        let results = [];
        for (let i = 0; i < CURRENT_DB.length; i++) {
            let item = CURRENT_DB[i];
            let t = '';
            if (scope === 'all') t = (item.urunAdi||'') + ' ' + (item.marka||'') + ' ' + (item.icerik||'') + ' ' + (item.endikasyon||'') + ' ' + (item.kontrendikasyon||'') + ' ' + (item.etkilesim||'') + ' ' + (item.tags||'');
            else if (scope === 'ingredients') t = item.icerik || '';
            else if (scope === 'indications') t = (item.endikasyon||'') + ' ' + (item.kontrendikasyon||'') + ' ' + (item.etkilesim||'');
            t = t.toLowerCase();
            if (q1 && t.indexOf(q1) === -1) continue;
            if (q2 && t.indexOf(q2) === -1) continue;
            if (qNot && t.indexOf(qNot) > -1) continue;
            results.push(item);
        }
        renderTable(results, [q1, q2]);
    }, 10);
};

function highlightText(text, queries) {
    if (!text) return '';
    let result = String(text);
    (queries || []).forEach(function(q) {
        if (!q || q.length < 2) return;
        try {
            var re = new RegExp('(' + q + ')', 'gi');
            result = result.replace(re, '<span class="highlight">$1</span>');
        } catch(e) {}
    });
    return result;
}

function renderTable(data, queries) {
    queries = queries || [];
    if (data.length === 0) { resultsBody.innerHTML = ''; resultsInfo.textContent = 'Eslesen takviye bulunamadi.'; return; }
    resultsInfo.textContent = 'Bulundu! Toplam ' + data.length + ' sonuc.';
    const limit = Math.min(data.length, 50);
    let html = '';
    for (let i = 0; i < limit; i++) {
        const item = data[i];
        const si = item.icerik ? String(item.icerik).substring(0, 80) + (String(item.icerik).length > 80 ? '...' : '') : '';
        const se = item.endikasyon ? String(item.endikasyon).substring(0, 60) + (String(item.endikasyon).length > 60 ? '...' : '') : '';
        const hasImg = item.gorsel && item.gorsel.trim();
        const imgThumb = hasImg ? 
            '<img src="' + item.gorsel + '" style="width:34px;height:34px;object-fit:contain;border-radius:4px;border:1px solid #ddd;vertical-align:middle;margin-right:8px;cursor:pointer;background:#fff;" onclick="viewDetails(' + item.id + ')" title="Prospektusu Buyut">' :
            '<span style="display:inline-block;width:34px;text-align:center;color:#bbb;margin-right:8px;font-size:15px;vertical-align:middle;">📄</span>';
        html += '<tr>' +
            '<td>' + (item.kategori||'') + '</td>' +
            '<td style="font-weight:bold;color:#1A5276;white-space:nowrap;">' + imgThumb + highlightText(item.urunAdi, queries) + '</td>' +
            '<td>' + highlightText(item.marka, queries) + '</td>' +
            '<td>' + highlightText(si, queries) + '</td>' +
            '<td>' + highlightText(se, queries) + '</td>' +
            '<td style="width:125px;text-align:center;">' +
                '<button class="add-btn" onclick="addToCart(' + item.id + ')">+ Ekle</button>' +
                '<button class="view-btn" onclick="viewDetails(' + item.id + ')">' + (hasImg ? '📷 Detay' : 'Detay') + '</button>' +
            '</td>' +
        '</tr>';
    }
    if (data.length > 50) html += '<tr><td colspan="6" style="text-align:center;color:#7F8C8D;font-style:italic;">(Ilk 50 sonuc. Daha spesifik arama yapin.)</td></tr>';
    resultsBody.innerHTML = html;
}

window.addToCart = function(id) {
    const item = CURRENT_DB.find(function(x) { return x.id === id; });
    if (!item) return;
    if (cart.find(function(x) { return x.id === id; })) { alert('Bu urun zaten recetede mevcut.'); return; }
    cart.push(item);
    renderCart();
};

window.removeFromCart = function(id) {
    cart = cart.filter(function(x) { return x.id !== id; });
    renderCart();
};

function renderCart() {
    cartItemsEl.innerHTML = '';
    simulatorAlerts.innerHTML = '';
    if (cart.length === 0) {
        cartItemsEl.innerHTML = '<div class="empty-cart">Receteye henuz urun eklenmedi.</div>';
        return;
    }
    var contrHTML = '';
    var interHTML = '';
    cart.forEach(function(item) {
        var div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = '<button class="remove-btn" onclick="removeFromCart(' + item.id + ')" title="Kaldir">&times;</button>' +
            '<h4>' + item.urunAdi + '</h4>' +
            '<p><strong>Icerik/Doz:</strong> ' + (item.icerik ? String(item.icerik).substring(0, 100) + '...' : '-') + '</p>';
        cartItemsEl.appendChild(div);
        if (item.kontrendikasyon && item.kontrendikasyon.toLowerCase() !== 'bilinmiyor') {
            contrHTML += '<div class="alert-box alert-contra"><span class="alert-title">' + item.urunAdi + ' - Kontrendikasyon:</span>' + item.kontrendikasyon + '</div>';
        }
        if (item.etkilesim && item.etkilesim.toLowerCase() !== 'bilinmiyor') {
            interHTML += '<div class="alert-box alert-interact"><span class="alert-title">' + item.urunAdi + ' - Ilac Etkilesimi:</span>' + item.etkilesim + '</div>';
        }
    });
    if (!contrHTML && !interHTML) {
        simulatorAlerts.innerHTML = '<div style="color:green;font-weight:bold;font-size:13px;text-align:center;margin-top:20px;">&#10003; Guvenli Kombinasyon.</div>';
    } else {
        simulatorAlerts.innerHTML = contrHTML + interHTML;
    }
}

window.viewDetails = function(id) {
    const item = CURRENT_DB.find(function(x) { return x.id === id; });
    if (!item) return;
    var html = '<div class="modal-header"><h2>' + item.urunAdi + '</h2><div class="brand">Marka: ' + item.marka + ' | Kategori: ' + item.kategori + '</div></div>' +
        '<div class="modal-section"><h4>Icerik &amp; Tam Dozaj</h4><p>' + (item.icerik||'-') + '</p></div>' +
        '<div class="modal-section"><h4>Endikasyon &amp; Kullanim Amaci</h4><p>' + (item.endikasyon||'-') + '</p></div>' +
        '<div class="modal-section"><h4>Kullanim Sekli</h4><p>' + (item.dozaj||'-') + '</p></div>' +
        '<div class="modal-section"><h4 style="color:#C0392B;">Kontrendikasyonlar</h4><p>' + (item.kontrendikasyon||'Bilinmiyor') + '</p></div>' +
        '<div class="modal-section"><h4 style="color:#D35400;">Ilac Etkilesimleri</h4><p>' + (item.etkilesim||'Bilinmiyor') + '</p></div>';
    if (item.webSitesi && item.webSitesi.trim()) {
        var link = item.webSitesi.startsWith('http') ? item.webSitesi : 'https://' + item.webSitesi;
        html += '<div class="modal-section"><h4 style="color:#2980B9;">Link</h4><p><a href="' + link + '" target="_blank" style="color:#2980B9;text-decoration:underline;">' + item.webSitesi + '</a></p></div>';
    }
    if (item.gorsel && item.gorsel.trim()) {
        html += '<div class="modal-section" style="text-align:center;"><h4 style="color:#27AE60;">Prospektus / Icerik Tablosu</h4><a href="' + item.gorsel + '" target="_blank" title="Tam boyutta gormek icin tiklayin"><img src="' + item.gorsel + '" alt="Prospektus" class="prospektus-img" style="cursor:zoom-in;"></a><p style="font-size:11px;color:#7f8c8d;margin-top:6px;">(Buyuk boyutta acmak icin fotoğrafa tiklayabilirsiniz)</p></div>';
    }
    modalBody.innerHTML = html;
    detailModal.style.display = 'block';
};

window.downloadPrescription = function() {
    if (cart.length === 0) { alert('Receteye urun eklenmemis.'); return; }
    var dateStr = new Date().toLocaleDateString('tr-TR');
    var itemsHtml = '';
    cart.forEach(function(item, i) {
        itemsHtml += '<div style="margin-bottom:25px;padding:15px 15px 15px 20px;background:#f9f9f9;border-left:3px solid #D4AF37;page-break-inside:avoid;">' +
            '<h3 style="margin:0 0 10px 0;color:#1a1a1a;font-size:16px;">' + (i+1) + '. ' + item.urunAdi + ' (' + item.marka + ')</h3>' +
            '<p style="margin:5px 0;font-size:13px;"><strong>Dozaj / Kullanim:</strong> ' + (item.dozaj || 'Belirtilmemis') + '</p>' +
            '<p style="margin:5px 0;font-size:13px;"><strong>Neden Verildi (Endikasyon):</strong> ' + (item.endikasyon || 'Destekleyici') + '</p>' +
            '</div>';
    });
    var htmlContent = '<!DOCTYPE html><html><head><meta charset="UTF-8">' +
        '<meta name="ProgId" content="Word.Document"><meta name="Generator" content="LaraHealth">' +
        '</head><body>' +
        '<div style="border:1.5px solid #D4AF37;padding:40px;margin:20px;min-height:90vh;box-sizing:border-box;">' +
        '<div style="text-align:center;border-bottom:1px solid #D4AF37;padding-bottom:20px;margin-bottom:30px;">' +
        '<img src="' + LOGO_DATA_URI + '" style="max-width:280px;display:block;margin:0 auto 15px auto;">' +
        '<h1 style="color:#333;font-size:20px;letter-spacing:2px;margin:5px 0;">TAKVIYE VE PROTOKOL RECETESI</h1>' +
        '<p style="color:#888;font-style:italic;margin:5px 0;">Tarih: ' + dateStr + '</p>' +
        '</div>' + itemsHtml +
        '<div style="margin-top:60px;text-align:center;font-size:11px;color:#aaa;border-top:1px solid #eee;padding-top:15px;">' +
        '<p><strong>Lara Health Akademi &amp; Klinik</strong></p>' +
        '<p>www.larahealth.com | Diyetisyen ve Hekim Kontrollu Protokol</p></div></div></body></html>';

    var filename = 'LaraHealth_Recete_' + dateStr.replace(/\./g, '-') + '.doc';

    // Use PyWebView Python API to save the file (Blob download doesn't work in EdgeHTML)
    if (window.pywebview && window.pywebview.api && window.pywebview.api.save_file) {
        window.pywebview.api.save_file(filename, htmlContent).then(function(result) {
            if (result && result.indexOf('ERROR') === -1) {
                alert('Recete basariyla kaydedildi!\nKonum: ' + result);
            } else {
                alert('Hata olustu: ' + result);
            }
        });
    } else {
        // Fallback for non-PyWebView browser testing
        var blob = new Blob([htmlContent], {type: 'application/msword'});
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url; a.download = filename;
        document.body.appendChild(a); a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
};

window.handleExcelUpload = function(event) {
    var file = event.target.files[0];
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function(e) {
        var data = new Uint8Array(e.target.result);
        var workbook = XLSX.read(data, {type: 'array'});
        var sheetName = workbook.SheetNames.indexOf('Veritabani') >= 0 ? 'Veritabani' : workbook.SheetNames[0];
        var worksheet = workbook.Sheets[sheetName];
        var json = XLSX.utils.sheet_to_json(worksheet);
        if (json.length === 0) { alert('Excel bos veya okunamadi.'); return; }
        var newDb = json.map(function(row, i) {
            return {
                id: i + 1,
                kategori: row['Kategori'] || '',
                urunAdi: row['Urun Adi'] || '',
                marka: row['Marka'] || '',
                icerik: row['Icerik (Tum Etken Maddeler)'] || '',
                endikasyon: row['Endikasyon'] || '',
                dozaj: row['Dozaj'] || '',
                kontrendikasyon: row['Kontrendikasyon'] || '',
                etkilesim: row['Ilac Etkilesimi'] || '',
                webSitesi: (row['Web Sitesi'] || '').toString().trim(),
                tags: row['Arama Etiketleri'] || '',
                gorsel: row['Prospektus Gorseli'] || ''
            };
        });
        try { localStorage.setItem('lara_health_db', JSON.stringify(newDb)); } catch(e) {}
        CURRENT_DB = newDb;
        const dbStatusEl = document.getElementById('dbStatus');
        if (dbStatusEl) {
            dbStatusEl.textContent = 'Guncel Excel Yuklu (' + newDb.length + ' urun)';
            dbStatusEl.style.color = '#F1C40F';
        }
        alert('Excel yuklendi! ' + newDb.length + ' urun aktarildi.');
        runSearch();
    };
    reader.readAsArrayBuffer(file);
};

window.resetDatabase = function() {
    if (confirm("Kendi yuklediginiz Excel silinecek ve sistemin guncel orijinal veritabanina donulecektir. Onayliyor musunuz?")) {
        localStorage.removeItem('lara_health_db');
        window.location.reload();
    }
};
