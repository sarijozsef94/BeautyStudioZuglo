import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, ArrowLeft, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Adatvédelmi és Adatkezelési Tájékoztató | Beauty Studio Zugló by Alexa',
  description:
    'A beautystudiozuglo.hu hivatalos adatvédelmi és adatkezelési tájékoztatója (GDPR). Kohári Alexandra egyéni vállalkozó.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 bg-[#FAF6EE]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#B57E29] hover:text-[#946014] transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Vissza a kezdőlapra</span>
          </Link>
        </div>

        {/* Card Container */}
        <div className="bg-white rounded-3xl shadow-sm border border-[#E6C887]/40 p-8 sm:p-12 text-stone-800 space-y-8">
          {/* Header */}
          <div className="border-b border-stone-200 pb-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#DCA54A]/15 text-[#B57E29] text-xs font-semibold mb-3">
              <ShieldCheck className="w-4 h-4" />
              <span>GDPR Megfelelőség</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#0F172A]">
              Adatvédelmi és Adatkezelési Tájékoztató
            </h1>
            <p className="text-sm text-stone-500 mt-2">
              Hatályos: <strong>2025. július 23-tól</strong>
            </p>
          </div>

          {/* Bevezetés */}
          <div className="text-sm sm:text-base leading-relaxed text-stone-700 space-y-4">
            <p>
              Jelen Adatkezelési Nyilatkozat célja, hogy a <strong>beautystudiozuglo.hu</strong> weboldal felhasználói által, az oldal használata során megadott és a weboldal üzemeltetője (<strong>Kohári Alexandra egyéni vállalkozó</strong>) számára kezelt személyes adatok és egyéb adatok kezelésére vonatkozó elveket és szabályokat meghatározza.
            </p>
            <p>
              A tájékoztató rendelkezéseinek kialakításakor az adatkezelő különös tekintettel vette figyelembe az Európai Parlament és a Tanács 2016/679 Rendeletében (<strong>„Általános Adatvédelmi Rendelet” vagy „GDPR”</strong>), az információs önrendelkezési jogról és az információszabadságról szóló 2011. évi CXII. törvény (<strong>„Infotv.”</strong>), a Polgári Törvénykönyvről szóló 2013. évi V. törvény (<strong>„Ptk.”</strong>), továbbá a gazdasági reklámtevékenység alapvető feltételeiről és egyes korlátairól szóló 2008. évi XLVIII. törvény (<strong>„Grtv.”</strong>) rendelkezéseit.
            </p>
          </div>

          {/* 1. Az adatkezelő adatai */}
          <section className="space-y-4 pt-4 border-t border-stone-100">
            <h2 className="text-xl font-serif font-semibold text-[#0F172A]">
              1. Az Adatkezelő adatai
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#FAF6EE] p-6 rounded-2xl border border-[#E6C887]/30 text-sm">
              <div>
                <span className="text-xs uppercase text-stone-500 font-semibold block">Adatkezelő neve:</span>
                <span className="font-medium text-stone-900">Kohári Alexandra egyéni vállalkozó</span>
              </div>
              <div>
                <span className="text-xs uppercase text-stone-500 font-semibold block">Székhely / Szalon címe:</span>
                <span className="font-medium text-stone-900">1141 Budapest, Mogyoródi út 127/b</span>
              </div>
              <div>
                <span className="text-xs uppercase text-stone-500 font-semibold block">E-mail cím:</span>
                <a href="mailto:info@beautystudiozuglo.hu" className="font-medium text-[#B57E29] hover:underline">
                  info@beautystudiozuglo.hu
                </a>
              </div>
              <div>
                <span className="text-xs uppercase text-stone-500 font-semibold block">Telefonszám:</span>
                <a href="tel:+36708669059" className="font-medium text-[#B57E29] hover:underline">
                  +36 70 866 9059
                </a>
              </div>
              <div>
                <span className="text-xs uppercase text-stone-500 font-semibold block">Hivatalos weboldal:</span>
                <span className="font-medium text-stone-900">beautystudiozuglo.hu</span>
              </div>
              <div>
                <span className="text-xs uppercase text-stone-500 font-semibold block">Tárhelyszolgáltató:</span>
                <span className="font-medium text-stone-900">
                  Tárhely.Eu Kft. (1144 Budapest, Ormánság u. 4. X/241.)
                </span>
              </div>
            </div>
          </section>

          {/* 2. Kezelt adatok köre */}
          <section className="space-y-4 pt-4 border-t border-stone-100">
            <h2 className="text-xl font-serif font-semibold text-[#0F172A]">
              2. A kezelt személyes adatok köre
            </h2>
            <div className="space-y-3 text-sm text-stone-700 leading-relaxed">
              <p><strong>Kapcsolatfelvétel és időpontkérés esetén:</strong></p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Név (azonosítás)</li>
                <li>E-mail cím (visszajelzés, visszaigazolás)</li>
                <li>Telefonszám (egyeztetés, emlékeztető)</li>
                <li>Az üzenet tartalma és a választott szolgáltatás típusa</li>
              </ul>
              <p className="pt-2"><strong>Automatikusan rögzített technikai adatok:</strong></p>
              <p className="text-xs text-stone-600">
                A weboldal látogatása során a szervernaplókban rögzítésre kerülhet a látogató IP-címe (anonimizált formában), a böngésző és operációs rendszer típusa, a látogatás pontos időpontja és a megtekintett aloldalak.
              </p>
            </div>
          </section>

          {/* 3. Cookie-k (Sütik) */}
          <section className="space-y-4 pt-4 border-t border-stone-100">
            <h2 className="text-xl font-serif font-semibold text-[#0F172A]">
              3. Sütik (Cookie-k) használata
            </h2>
            <div className="space-y-3 text-sm text-stone-700 leading-relaxed">
              <p>
                Az Adatkezelő a honlap látogatása során úgynevezett cookie-kat (sütiket) használ. A cookie betűből és számokból álló információcsomag, amit honlapunk az Ön böngészőjének küld el azzal a céllal, hogy elmentse bizonyos beállításait, megkönnyítse a honlap használatát és statisztikai adatokat gyűjtsön a felhasználói élmény optimalizálására.
              </p>
              <p>
                A legtöbb cookie működéséhez személyes adat nem szükséges, a látogató személye nem azonosítható közvetlenül.
              </p>

              <div className="overflow-x-auto pt-2">
                <table className="w-full text-xs text-left border border-stone-200 rounded-xl overflow-hidden">
                  <thead className="bg-[#FAF6EE] text-stone-800 font-semibold border-b border-stone-200">
                    <tr>
                      <th className="p-3">Süti neve</th>
                      <th className="p-3">Szolgáltató</th>
                      <th className="p-3">Cél & Leírás</th>
                      <th className="p-3">Érvényesség</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    <tr>
                      <td className="p-3 font-mono">cookie_consent</td>
                      <td className="p-3">beautystudiozuglo.hu</td>
                      <td className="p-3">Süti értesítés elfogadásának rögzítése</td>
                      <td className="p-3">1 év</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono">_ga, _gid</td>
                      <td className="p-3">Google Analytics</td>
                      <td className="p-3">Anonim webhelystatisztika és látogatottságmérés</td>
                      <td className="p-3">2 év / 24 óra</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* 4. Cél és Jogalap */}
          <section className="space-y-4 pt-4 border-t border-stone-100">
            <h2 className="text-xl font-serif font-semibold text-[#0F172A]">
              4. Az adatkezelés célja, jogalapja és időtartama
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border border-stone-200 rounded-xl overflow-hidden">
                <thead className="bg-[#FAF6EE] text-stone-800 font-semibold border-b border-stone-200">
                  <tr>
                    <th className="p-3">Adatkezelési cél</th>
                    <th className="p-3">Jogalap (GDPR)</th>
                    <th className="p-3">Megőrzési időtartam</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-stone-700">
                  <tr>
                    <td className="p-3 font-medium">Kapcsolatfelvétel és időpontkezelés</td>
                    <td className="p-3">Önkéntes hozzájárulás (GDPR 6. cikk (1) a))</td>
                    <td className="p-3">Legfeljebb 6 hónap</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Weboldal technikai üzemeltetése</td>
                    <td className="p-3">Jogos érdek (GDPR 6. cikk (1) f))</td>
                    <td className="p-3">Legfeljebb 90 nap</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Számviteli kötelezettség (számlázás)</td>
                    <td className="p-3">Jogi kötelezettség teljesítése (GDPR 6. cikk (1) c))</td>
                    <td className="p-3">8 év (Számv. tv. alapján)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 5. Érintetti Jogok */}
          <section className="space-y-4 pt-4 border-t border-stone-100">
            <h2 className="text-xl font-serif font-semibold text-[#0F172A]">
              5. Az érintett jogai és jogérvényesítés
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-stone-700">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
                <strong className="text-stone-900 block mb-1">Tájékoztatáshoz való jog:</strong>
                Jogosult tájékoztatást kérni személyes adatai kezelésének körülményeiről.
              </div>
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
                <strong className="text-stone-900 block mb-1">Helyesbítéshez való jog:</strong>
                Kérheti pontatlan vagy változott adatainak azonnali javítását.
              </div>
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
                <strong className="text-stone-900 block mb-1">Törléshez való jog („elfeledtetés”):</strong>
                Kérheti adatainak törlését, ha a hozzájárulását visszavonja vagy az adatkezelés célja megszűnt.
              </div>
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
                <strong className="text-stone-900 block mb-1">Tiltakozáshoz és korlátozáshoz való jog:</strong>
                Bármikor tiltakozhat az adatkezelés ellen vagy kérheti annak zárolását.
              </div>
            </div>
          </section>

          {/* 6. Jogorvoslat & NAIH */}
          <section className="space-y-4 pt-4 border-t border-stone-100">
            <h2 className="text-xl font-serif font-semibold text-[#0F172A]">
              6. Jogorvoslati lehetőségek és felügyeleti hatóság
            </h2>
            <p className="text-xs sm:text-sm text-stone-700">
              Amennyiben úgy érzi, hogy az adatkezelő megsértette az Ön személyes adatainak védelméhez fűződő jogait, panasszal fordulhat az illetékes hatósághoz vagy bírósághoz:
            </p>

            <div className="bg-[#FAF6EE] p-6 rounded-2xl border border-[#E6C887]/30 text-xs sm:text-sm space-y-2">
              <strong className="text-stone-900 block text-base font-serif">
                Nemzeti Adatvédelmi és Információszabadság Hatóság (NAIH)
              </strong>
              <div className="text-stone-600">
                <strong>Cím:</strong> 1055 Budapest, Falk Miksa utca 9-11. (Levelezési cím: 1363 Budapest, Pf. 9.)
              </div>
              <div className="text-stone-600">
                <strong>Telefonszám:</strong> +36 (1) 391-1400
              </div>
              <div className="text-stone-600">
                <strong>E-mail cím:</strong> ügyfelszolgalat@naih.hu
              </div>
              <div className="text-stone-600">
                <strong>Hivatalos weboldal:</strong>{' '}
                <a
                  href="https://www.naih.hu"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#B57E29] underline hover:text-[#946014] inline-flex items-center"
                >
                  <span>www.naih.hu</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>
          </section>

          {/* Záró rendelkezések */}
          <div className="pt-6 border-t border-stone-200 text-xs text-stone-500">
            <p>
              Kelt: Budapest, 2025. július 23. (Frissítve: 2026. november)<br />
              <strong>Kohári Alexandra EV. – Beauty Studio Zugló</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
