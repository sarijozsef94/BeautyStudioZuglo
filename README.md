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

2. **PHP alapú kapcsolatfelvételi feldolgozó (`public/api/contact.php`)**:
   - A munkavedelem.info.hu oldalon használt azonos eredetű JSON-végpontot, fix feladót és envelope sender beállítást alkalmazza.
   - Éles környezetben támogatott PHP-verzió szükséges. A tárhelyen a `mail()` függvénynek engedélyezettnek, a fix feladói címnek a tárhely levelezési szabályai szerint használhatónak, a PHP ideiglenes könyvtárának pedig írhatónak kell lennie.
   - A sikeres válasz a levél levelezőszervernek történő átadását jelenti, nem a címzett postaládájába való kézbesítés garanciáját.
   - A levélküldési és az elkapott PHP futási hibát az űrlap HTTP 503 hibaként jelzi; nem mutat sikeres visszajelzést. A hibák típusa és helye a PHP hibanaplójába kerül, az űrlap személyes adatai nélkül.
   - Biztonságos input-tisztítás (HTML és XSS védelem).
   - Spam védelem rejtett honeypot mezővel.
   - UTF-8 szöveges e-mail értesítő Kohári Alexandra részére (`alexandrakohari@beautystudiozuglo.hu`, sikertelen átadáskor tartalék cím: `info@beautystudiozuglo.hu`).
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
- `out/api/contact.php` (PHP kapcsolatfelvételi végpont)
- `out/api/health.php` (független PHP működésellenőrzés, levélküldés nélkül)
- `out/contact.php` (kompatibilitási belépési pont a régi végponthoz)
- `out/.htaccess` (Apache átirányítások, gzip és gyorsítótár)
- `out/logo.png`, `out/images/` (Médiatár)

### Feltöltés a tárhelyre:
Egyszerűen másold fel az **`out/` mappa teljes tartalmát** a tárhely gyökerébe (`public_html/`). A weboldal azonnal működik Node.js szerver nélkül is, a beépített PHP feldolgozóval!

cPanel tárhelyen a domain tényleges dokumentumgyökerét használd. A meglévő `.htaccess` cPanel által létrehozott PHP-handler blokkját őrizd meg, és a projekt szabályait ezzel együtt alkalmazd; a PHP-verziót a MultiPHP Managerben állítsd be.

A PHP kapcsolatfelvételi logika automatizált, valódi e-mailt nem küldő tesztje: `php scripts/test-contact.php`.
A letiltott `mail()` esetének ellenőrzése: `php -d disable_functions=mail scripts/test-contact.php`.

### HTTP 500 hiba vizsgálata

Az `out/` tartalmának feltöltése után, levélküldés nélkül ellenőrizhető a PHP:

1. Nyisd meg a `https://beautystudiozuglo.hu/api/health.php` címet. Az elvárt válasz HTTP 200 és `{"ok":true}`. Ez a fájl nem tölti be a kapcsolatfelvételi kódot, nem használ ideiglenes fájlt és nem küld levelet. Ha ez is HTTP 500-at ad, a tárhely PHP-indítását, a domain PHP-beállítását és a fájl jogosultságait kell a szerver hibanaplója alapján ellenőrizni.
2. Nyisd meg a `https://beautystudiozuglo.hu/api/contact.php` címet. Böngészőből megnyitva az elvárt válasz HTTP 405, JSON hibaüzenettel: ez azt jelzi, hogy a feldolgozó elindult, de a GET metódust elutasítja. Ha a health végpont működik, de ez 500-at ad, ellenőrizd a PHP error_log fájlt és azt, hogy a friss `api/contact.php` került-e fel a megfelelő dokumentumgyökérbe.
3. A gyökérben lévő `contact.php` kompatibilitási belépési pont is igényli az `api/contact.php` fájlt. Mindkettőt töltsd fel; a gyökérfájl önmagában nem elegendő.
4. Ha csak a kitöltött űrlap küldése ad HTTP 503-at, a PHP napló `Beauty Studio contact:` bejegyzése jelzi a feldolgozás hibájának típusát és forrássorát. Ellenőrizd a `mail()` engedélyezését, a feladó beállítását és az ideiglenes könyvtár írási jogát.

A health végpont sikere a PHP futását igazolja, a levelezőszerver elérhetőségét és a kézbesítést nem vizsgálja. A `next dev` nem futtat PHP-fájlokat; a PHP-végpontok ellenőrzéséhez PHP-t futtató szerver szükséges.

---

## 💻 Helyi Fejlesztés

```bash
# Fejlesztői szerver indítása (http://localhost:3000)
npm run dev
```
