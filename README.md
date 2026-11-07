# Beauty Studio Zugló by Alexa – Next.js Weboldal

Modern, elegáns és reszponzív Next.js weboldal a **[beautystudiozuglo.hu](https://beautystudiozuglo.hu)** hivatalos weboldala alapján, **teljes statikus export (HTML/CSS/JS + PHP backend)** támogatással.

---

## 🌟 Főbb Jellemzők

1. **Eredeti weboldalról letöltött logó és arculati elemek**:
   - A hivatalos nagyfelbontású logó (`public/logo.png`, `public/images/logo.png`)
   - Favicon és alkalmazásikonok (`public/favicon.ico`, `public/favicon.png`, `public/icon.png`)
   - Kohári Alexandra hiteles portréja és kézjegye (`public/images/alexa-portrait.jpg`, `public/images/signature.png`)
   - Eredeti szalon- és munkaképek a galériában (belső tér, szempilla-lifting, szemöldöklaminálás)
   - Elegáns aranyszín-paletta (`#DCA54A`), sötétkék és krémszínű luxus szalon hangulat.

2. **PHP alapú kapcsolatfelvételi feldolgozó (`public/contact.php`)**:
   - Felkészítve hagyományos cPanel / Apache / Nginx / Tárhely.Eu PHP környezetekre.
   - Biztonságos input-tisztítás (HTML és XSS védelem).
   - Spam védelem rejtett honeypot mezővel.
   - HTML formázott e-mail értesítő Kohári Alexandra részére (`alexandrakohari@beautystudiozuglo.hu` és `info@beautystudiozuglo.hu`).
   - JSON válaszfeldolgozás a modern frontend számára.

3. **Teljes körű Adatvédelmi és Adatkezelési Tájékoztató (`/adatvedelem`)**:
   - GDPR és Infotv. jogszabályoknak maradéktalanul megfelelő, hivatalos tájékoztató szöveg.
   - Kohári Alexandra egyéni vállalkozó hivatalos adataival, székhelyével és elérhetőségeivel.
   - Tárhely.Eu Kft. adatfeldolgozói adatokkal és NAIH jogorvoslati tájékoztatással.
   - Finom, felhasználóbarát süti (Cookie) figyelmeztető sáv (`CookieBanner.tsx`).

4. **Aloldalak és Tartalom**:
   - **Kezdőlap (`/`)**: Hero banner, bemutatkozás, népszerű szolgáltatások, 10% Vagheggi vendégkedvezmény kód (`2025-836785`), vendégvélemény, galéria előnézet, beágyazott kapcsolat és Google Térkép.
   - **Rólunk (`/rolunk`)**: Kohári Alexandra okleveles kozmetikus szakmai háttere (BKSZC Erzsébet Királyné Szépészeti Technikum), filozófia, tudatos bőrápolás.
   - **Szolgáltatások (`/szolgaltatasok`)**: A 4 fő pillér részletes bemutatása (Bőr- és arckezelések, Szempilla & Szemöldök styling, Gyantázás & Szőrtelenítés, Sminkelés).
   - **Árlista (`/arlista`)**: Kategóriánként szűrhető árlista az összes kezeléssel, kezelési időkkel, árakkal, 4 alkalmas bérlet akciókkal és figyelmeztetésekkel.
   - **Galéria (`/galeria`)**: Kategóriaszűrős képgaléria (Szalon, Szempilla, Szemöldök) nagyítható interaktív Lightbox modallal.
   - **Kapcsolat (`/kapcsolat`)**: Interaktív kapcsolatfelvételi űrlap, közvetlen hívásgomb (`+36 70 866 9059`), nyitvatartási idők, megközelítési és parkolási útmutató, Google Maps beágyazás.

---

## 🚀 Statikus Exportálás és Tárhelyre Telepítés

A projekt beállítása (`output: 'export'`, `trailingSlash: true`) lehetővé teszi, hogy bármilyen statikus vagy PHP tárhelyen (pl. **Tárhely.Eu, cPanel, Apache**) fuss:

```bash
# 1. Statikus export fordítás
npm run build
```

A parancs lefutása után a kész weboldal az **`out/`** mappában található:
- `out/index.html` (Kezdőlap)
- `out/rolunk/index.html` (Rólunk)
- `out/szolgaltatasok/index.html` (Szolgáltatások)
- `out/arlista/index.html` (Árlista)
- `out/galeria/index.html` (Galéria)
- `out/kapcsolat/index.html` (Kapcsolat)
- `out/adatvedelem/index.html` (Adatvédelmi tájékoztató)
- `out/contact.php` (PHP kapcsolatfelvételi feldolgozó)
- `out/.htaccess` (Apache átirányítások, gzip és gyorsítótár)
- `out/logo.png`, `out/images/` (Médiatár)

### Feltöltés a tárhelyre:
Egyszerűen másold fel az **`out/` mappa teljes tartalmát** a tárhely gyökerébe (`public_html/`). A weboldal azonnal működik Node.js szerver nélkül is, a beépített PHP feldolgozóval!

---

## 💻 Helyi Fejlesztés

```bash
# Fejlesztői szerver indítása (http://localhost:3000)
npm run dev
```
