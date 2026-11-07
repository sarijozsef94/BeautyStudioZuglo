import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, Calendar, ArrowRight, ShieldCheck, Heart, Award, CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kozmetikai kezelések Zuglóban',
  description:
    'Ismerd meg a Beauty Studio Zugló szolgáltatásait: személyre szabott arckezelések, szempilla-lifting, szemöldök styling, gyantázás és alkalmi smink.',
  alternates: { canonical: '/szolgaltatasok/' },
  openGraph: {
    title: 'Kozmetikai kezelések és szolgáltatások Zuglóban',
    description:
      'Személyre szabott arckezelések, szempilla-lifting, szemöldök styling, gyantázás és alkalmi smink.',
    url: '/szolgaltatasok/',
  },
};

const serviceSections = [
  {
    id: 'arckezelesek',
    number: '01',
    title: 'Bőr- és Arckezelések',
    subtitle: 'Mélyhidratáló, anti-aging, folthalványító és pórustisztító kezelések',
    desc: 'Bőrünk állapotát a mindennapi stressz, a környezeti ártalmak és az életmódunk közvetlenül befolyásolja. Szalonunkban az olasz Vagheggi fitokozmetikai termékcsaládokkal és a legmodernebb elektrokozmetikai gépekkel végezzük a kezeléseket, garantálva a látványos és hosszantartó eredményt.',
    image: '/images/treatment-1.jpg',
    points: [
      'Bőrállapot felmérés és egyéni otthoni ápolási rutin felállítása',
      'Vagheggi 75.25 prémium ránctalanító és bőrfeltöltő kúra',
      'Faggyútermelés harmonizálás és mélytisztítás (Equilibrium, Balance)',
      'Érzékeny, rosaceára hajlamos bőr célzott ápolása (Emozioni Plus)',
      'Intenzív mélyhidratálás és folthalványítás (Rehydra, Bright Formula)',
    ],
  },
  {
    id: 'szempilla-szemoldok',
    number: '02',
    title: 'Szempilla- & Szemöldök Styling',
    subtitle: 'Természetes hatás, lenyűgöző és magabiztos tekintet',
    desc: 'A szemek és a szemöldök az arc legmeghatározóbb elemei. A szempilla-lifting segítségével saját természetes pilláidat emeljük meg a tövektől, így heteken át tartó íveltséget és dúsabb optikai hatást érünk el spirálozás nélkül is.',
    image: '/images/gallery-lashes-1.webp',
    points: [
      'Tartós szempilla-lifting és mélyfekete festés (4-6 hetes tartósság)',
      'Szemöldöklaminálás a rakoncátlan szálak fixálására és dúsítására',
      'Arcformához igazított precíz szemöldökformázás és színezés',
      'Kombinált szempilla- és szemöldökcsomagok',
    ],
  },
  {
    id: 'gyantazas',
    number: '03',
    title: 'Gyantázás & Tartós Szőrtelenítés',
    subtitle: 'Selymes és hosszan tartó simaság minden bőrfelületen',
    desc: 'Kíméletes, minőségi patronos és hagyományos gyantákkal dolgozunk, amelyek minimális irritáció mellett hatékonyan távolítják el a szőrszálakat a gyökerekkel együtt. Emellett modern IPL/lézeres szőrtelenítési lehetőséget is biztosítunk.',
    image: '/images/treatment-2.jpg',
    points: [
      'Gyors és kíméletes bajusz- és arcgyanta',
      'Hónalj, kar, comb és teljes láb szőrtelenítése',
      'Férfi és női mellkas- és hátgyantázás',
      'Bőrnyugtató, gyulladáscsökkentő utóápolás minden kezelés után',
    ],
  },
  {
    id: 'sminkeles',
    number: '04',
    title: 'Menyasszonyi & Alkalmi Smink',
    subtitle: 'Ragyogj a legfontosabb pillanataidban',
    desc: 'Esküvő, céges gála vagy családi esemény? Alexa szakértő kezei gondoskodnak a fotóbiztos, tartós és természetesen ragyogó megjelenésről. Menyasszonyi csomagunk próbasminket is tartalmaz, igény esetén külső helyszínre történő kiszállással.',
    image: '/images/alexa-portrait.jpg',
    points: [
      'Menyasszonyi smink teljes körű előzetes próbasminkkel',
      'Elegáns alkalmi és fotózási sminkek',
      'Örömanya és koszorúslány sminkek az esküvő napján',
      'Kiszállás egyeztetett helyszínre igény szerint',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div>
      {/* Header Banner */}
      <section className="bg-[#0F172A] text-white py-16 sm:py-20 border-b border-[#DCA54A]/20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-banner.jpg"
            alt="Szolgáltatások háttér"
            fill
            className="object-cover opacity-20 filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-[#0F172A]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#DCA54A] block mb-2">
            Prémium Kozmetika Zuglóban
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-medium text-white">
            Szolgáltatásaink
          </h1>
          <p className="text-stone-300 max-w-xl mx-auto mt-4 text-sm sm:text-base font-light">
            Személyre szabott figyelem, tiszta fitokozmetikumok és korszerű elektrokozmetikai eljárások bőröd egészségéért.
          </p>
        </div>
      </section>

      {/* Detailed Services Sections */}
      <section className="py-20 bg-[#FAF6EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {serviceSections.map((srv, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <div
                key={srv.id}
                id={srv.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`lg:col-span-5 ${isReversed ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] group">
                    <Image
                      src={srv.image}
                      alt={srv.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-[#0F172A]/80 backdrop-blur-sm text-[#DCA54A] text-xs font-serif font-bold px-3 py-1.5 rounded-full border border-[#DCA54A]/30">
                      {srv.number}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-7 space-y-6 ${isReversed ? 'lg:order-1' : ''}`}>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#B57E29] block mb-1">
                      {srv.subtitle}
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-serif text-[#0F172A] font-medium">
                      {srv.title}
                    </h2>
                  </div>

                  <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
                    {srv.desc}
                  </p>

                  <ul className="space-y-2.5 pt-2">
                    {srv.points.map((pt, i) => (
                      <li key={i} className="flex items-start space-x-3 text-sm text-stone-600">
                        <CheckCircle className="w-4 h-4 text-[#B57E29] flex-shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <Link
                      href="/arlista"
                      className="inline-flex items-center space-x-2 bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs uppercase tracking-wider font-semibold px-6 py-3 rounded-full transition"
                    >
                      <span>Árak megtekintése</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#DCA54A]" />
                    </Link>
                    <Link
                      href={`/kapcsolat?service=${encodeURIComponent(srv.title)}`}
                      className="inline-flex items-center space-x-2 bg-[#DCA54A] hover:bg-[#E6B65C] text-[#0F172A] text-xs uppercase tracking-wider font-bold px-6 py-3 rounded-full transition shadow-md shadow-[#DCA54A]/20"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Időpontfoglalás</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
