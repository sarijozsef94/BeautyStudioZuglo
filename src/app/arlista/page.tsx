'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Clock, Calendar, Check, Tag, Info, ArrowRight } from 'lucide-react';

const categories = [
  { id: 'all', name: 'Összes kezelés' },
  { id: 'facial', name: 'Bőr- és Arckezelések' },
  { id: 'lashes-brows', name: 'Szempilla & Szemöldök' },
  { id: 'waxing', name: 'Gyantázás & Szőrtelenítés' },
  { id: 'makeup', name: 'Sminkelés' },
];

const pricesData = [
  // Bőr- és arckezelések
  {
    category: 'facial',
    title: 'Bőrállapot felmérés és konzultáció, otthoni ápolás felállítása',
    duration: '60 perc',
    price: '10 000 Ft',
    desc: 'Személyre szabott bőrdiagnosztika, állapotfelmérés, hatóanyag-igények és személyre szabott otthoni ápolási rutin összeállítása.',
  },
  {
    category: 'facial',
    title: 'Arcmasszázs',
    duration: '30 perc',
    price: '5 000 Ft',
    desc: 'Frissítő, mikrokeringést serkentő kényeztető arcmasszázs prémium növényi olajokkal.',
  },
  {
    category: 'facial',
    title: 'Prémium ránctalanító, bőrfeltöltő kezelés 75.25 termékcsaláddal',
    duration: '90 perc',
    price: '25 000 Ft',
    pass: '4 alkalmas bérlet: 75 000 Ft',
    badge: 'Prémium Anti-Aging',
    desc: 'Intenzív lifting és sejtmegújítás prémium fitokozmetikai hatóanyagokkal és elektrokozmetikával.',
  },
  {
    category: 'facial',
    title: 'Faggyútermelés normalizáló kezelés Balance termékcsaláddal',
    duration: '90 perc',
    price: '15 000 Ft',
    pass: '4 alkalmas bérlet: 45 000 Ft',
    desc: 'Zsíros, kombinált bőr faggyútermelésének harmonizálása és mattítása tiszta növényi kivonatokkal.',
  },
  {
    category: 'facial',
    title: 'Tisztításos kezelés Equilibrium termékcsaláddal (18 év alatt)',
    duration: '90 perc',
    price: '10 000 Ft',
    pass: '4 alkalmas bérlet: 35 000 Ft',
    badge: 'Diák & Ifjúsági',
    desc: 'Kifejezetten tinédzserek és fiatalok bőrére szabott kíméletes, pórustisztító kezelés.',
  },
  {
    category: 'facial',
    title: 'Tisztításos kezelés Equilibrium termékcsaláddal',
    duration: '90 perc',
    price: '15 000 Ft',
    pass: '4 alkalmas bérlet: 45 000 Ft',
    desc: 'Klasszikus, alapos tisztítás, fertőtlenítés és bőrnyugtatás professzionális szalonhigiéniával.',
  },
  {
    category: 'facial',
    title: 'Anti-aging kezelés Delay Infinity termékcsaláddal',
    duration: '90 perc',
    price: '15 000 Ft',
    desc: 'Megelőző és regeneráló ránctalanító kezelés a korai bőröregedés ellen.',
  },
  {
    category: 'facial',
    title: 'Anti-aging kezelés 75.15 termékcsaláddal',
    duration: '90 perc',
    price: '18 000 Ft',
    desc: 'Híoszi pisztácia gyantával dúsított exkluzív fiatalság-aktiváló bőrfeltöltő rituálé.',
  },
  {
    category: 'facial',
    title: 'Mélyhidratáló kezelés Rehydra termékcsaláddal',
    duration: '90 perc',
    price: '15 000 Ft',
    pass: '4 alkalmas bérlet: 45 000 Ft',
    badge: 'Vendégkedvenc',
    desc: 'Szomjazó, fakó bőr intenzív nedvességpótlása és védőrétegének megerősítése.',
  },
  {
    category: 'facial',
    title: 'Érzékeny és rosacea-ra hajlamos bőr kezelése Emozioni Plus',
    duration: '90 perc',
    price: '15 000 Ft',
    desc: 'Kifejezetten érzékeny, kipirosodásra, gyulladásra és rosaceára hajlamos bőr kíméletes ápolása és erősítése.',
  },
  {
    category: 'facial',
    title: 'Folthalványító arckezelés Bright Formula termékcsaláddal',
    duration: '90 perc',
    price: '15 000 Ft',
    pass: '4 alkalmas bérlet: 45 000 Ft',
    desc: 'Pigmentfoltok egységesítése, ragyogásfokozó és bőrtónus-javító eljárás.',
  },

  // Szempilla & Szemöldök
  {
    category: 'lashes-brows',
    title: 'Szempillafestés',
    duration: '45 perc',
    price: '3 000 Ft',
    desc: 'Tartós mélyfekete vagy kékesfekete színezés a tekintet kiemelésére.',
  },
  {
    category: 'lashes-brows',
    title: 'Szemöldökfestés',
    duration: '45 perc',
    price: '3 000 Ft',
    desc: 'Hozzá illő egyedi árnyalat kikeverése és precíz felvitele.',
  },
  {
    category: 'lashes-brows',
    title: 'Szemöldökszedés, formázás',
    duration: '20 perc',
    price: '2 000 Ft',
    desc: 'Arcformához igazított precíz csipeszes formázás.',
  },
  {
    category: 'lashes-brows',
    title: 'Szempilla-lifting',
    duration: '60 perc',
    price: '9 000 Ft',
    desc: 'Természetes saját szempillák tövektől történő megemelése, 4-6 hétig tartó íveltség.',
  },
  {
    category: 'lashes-brows',
    title: 'Szempilla-lifting festéssel',
    duration: '60 perc',
    price: '10 000 Ft',
    badge: 'Kiemelt népszerűség',
    desc: 'Ívelés és intenzív mélyfekete festés a spirálozott hatásért.',
  },
  {
    category: 'lashes-brows',
    title: 'Szemöldöklaminálás',
    duration: '60 perc',
    price: '9 000 Ft',
    desc: 'A rakoncátlan szemöldökszálak rendezése, dúsabb és formázott hatás biztosítása.',
  },
  {
    category: 'lashes-brows',
    title: 'Szemöldöklaminálás festéssel és formázással',
    duration: '60 perc',
    price: '10 000 Ft',
    badge: 'Komplett styling',
    desc: 'Laminálás, formaigazítás és egyedi színezés a tökéletesen definiált szemöldökért.',
  },
  {
    category: 'lashes-brows',
    title: 'Szempilla-lifting festéssel és szemöldöklaminálás festéssel, formázással',
    duration: '90 perc',
    price: '15 000 Ft',
    badge: 'Kombinált luxus csomag',
    desc: 'A tekintet teljes átalakítása és ragyogása egyetlen kezelés alatt.',
  },
  {
    category: 'lashes-brows',
    title: 'Szempilla-lifting és szemöldöklaminálás formázással (festés nélkül)',
    duration: '90 perc',
    price: '13 000 Ft',
    desc: 'Természetes hatású szálrendezés és ívelés formázással.',
  },

  // Gyantázás & Szőrtelenítés
  {
    category: 'waxing',
    title: 'Bajusz gyanta',
    duration: '10 perc',
    price: '2 000 Ft',
    desc: 'Gyors és kíméletes szőreltávolítás érzékeny bőrre kifejlesztett gyantával.',
  },
  {
    category: 'waxing',
    title: 'Hónalj gyanta',
    duration: '15 perc',
    price: '3 000 Ft',
    desc: 'Higiénikus és hosszantartó simaság.',
  },
  {
    category: 'waxing',
    title: 'Kar gyanta',
    duration: '15 perc',
    price: '3 000 Ft',
    desc: 'Alkar vagy teljes kar szőrtelenítése.',
  },
  {
    category: 'waxing',
    title: 'Láb térdig',
    duration: '20 perc',
    price: '3 500 Ft',
    desc: 'Lábszár gyantázása professzionális patronos gyantával.',
  },
  {
    category: 'waxing',
    title: 'Comb',
    duration: '20 perc',
    price: '3 500 Ft',
    desc: 'Comb területének precíz szőrtelenítése.',
  },
  {
    category: 'waxing',
    title: 'Has',
    duration: '20 perc',
    price: '5 000 Ft',
    desc: 'Has területének gyantázása.',
  },
  {
    category: 'waxing',
    title: 'Mellkas',
    duration: '30 perc',
    price: '7 000 Ft',
    desc: 'Mellkas gyantázása bőrnyugtató utóápolással.',
  },
  {
    category: 'waxing',
    title: 'Hát',
    duration: '30 perc',
    price: '7 000 Ft',
    desc: 'Teljes hát gyantázása fertőtlenítő és nyugtató szérummal.',
  },
  {
    category: 'waxing',
    title: 'Lézeres szőrtelenítés (Philips Lumea)',
    duration: '15 perc',
    price: '2 500 Ft',
    badge: 'IPL / Lézer',
    desc: 'Tartós szőrtelenítési kezelés modern villanófényes/lézeres technológiával.',
  },

  // Sminkelés
  {
    category: 'makeup',
    title: 'Menyasszonyi smink (próbasminkkel)',
    duration: '90 perc',
    price: '20 000 Ft',
    badge: 'Esküvői Csomag',
    desc: 'A csomag tartalmazza a próbasminket a szalonban, valamint a menyasszonyi smink elkészítését a nagy napon. (Kiszállás igény esetén: 100 Ft/km).',
  },
  {
    category: 'makeup',
    title: 'Alkalmi smink',
    duration: '90 perc',
    price: '15 000 Ft',
    desc: 'Eseményekre, fotózásra, ünnepi alkalmakra tartós prémium smink. Kérjük smink nélkül érkezz!',
  },
  {
    category: 'makeup',
    title: 'Örömanya smink',
    duration: '90 perc',
    price: '15 000 Ft',
    desc: 'Elegáns, érett bőrhöz illő esküvői smink a nagy napra. Igény esetén előzetes próbasmink kérhető.',
  },
  {
    category: 'makeup',
    title: 'Koszorúslány smink',
    duration: '90 perc',
    price: '15 000 Ft',
    desc: 'Harmonikus, fiatalos és fotóbiztos alkalmi smink.',
  },
];

export default function PriceListPage() {
  const [selectedCat, setSelectedCat] = useState('all');

  const handleFilterClick = (catId: string) => {
    setSelectedCat(catId);
    if (typeof document !== 'undefined') {
      const cards = document.querySelectorAll<HTMLElement>('[data-price-card]');
      cards.forEach((card) => {
        const itemCat = card.getAttribute('data-category');
        if (catId === 'all' || itemCat === catId) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
      const btns = document.querySelectorAll<HTMLElement>('[data-filter-btn]');
      btns.forEach((btn) => {
        if (btn.getAttribute('data-filter-btn') === catId) {
          btn.classList.add('bg-[#0F172A]', 'text-white', 'shadow-md');
          btn.classList.remove('bg-white', 'text-stone-600', 'border-stone-200');
        } else {
          btn.classList.remove('bg-[#0F172A]', 'text-white', 'shadow-md');
          btn.classList.add('bg-white', 'text-stone-600', 'border-stone-200');
        }
      });
    }
  };

  return (
    <div>
      {/* Header Banner */}
      <section className="bg-[#0F172A] text-white py-16 sm:py-20 border-b border-[#DCA54A]/20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-banner.jpg"
            alt="Árlista háttér"
            fill
            className="object-cover opacity-20 filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-[#0F172A]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#DCA54A] block mb-2">
            Transzparens díjszabás
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-medium text-white">
            Árlista & Szolgáltatások
          </h1>
          <p className="text-stone-300 max-w-xl mx-auto mt-4 text-sm sm:text-base font-light">
            Minden kezelés személyre szabott, az árak tartalmazzák a prémium hatóanyagokat és az elektrokozmetikai gépek használatát is.
          </p>
        </div>
      </section>

      {/* Main Prices Content */}
      <section className="py-16 bg-[#FAF6EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Important Notices Box */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#E6C887]/40 mb-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-stone-600">
            <div className="flex items-start space-x-3">
              <Check className="w-5 h-5 text-[#B57E29] flex-shrink-0 mt-0.5" />
              <span>
                <strong>Gépi kezelések:</strong> Az arckezelési árak tartalmazzák az elektrokozmetikai gépek használatát.
              </span>
            </div>
            <div className="flex items-start space-x-3">
              <Check className="w-5 h-5 text-[#B57E29] flex-shrink-0 mt-0.5" />
              <span>
                <strong>Bérlet akciók:</strong> 4 alkalmas bérleteinkkel jelentős kedvezménnyel kényeztetheted bőröd.
              </span>
            </div>
            <div className="flex items-start space-x-3">
              <Info className="w-5 h-5 text-[#B57E29] flex-shrink-0 mt-0.5" />
              <span>
                <strong>Érkezés:</strong> Pillás és szemöldökös szolgáltatásokra kérjük smink nélkül érkezz (lemosás: 1000 Ft).
              </span>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12" id="price-filter-container">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                data-filter-btn={cat.id}
                onClick={() => handleFilterClick(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer select-none ${
                  selectedCat === cat.id
                    ? 'bg-[#0F172A] text-white shadow-md'
                    : 'bg-white text-stone-600 hover:bg-[#FAF5E5] hover:text-[#B57E29] border border-stone-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Pricing Grid - All items in DOM with data-category for instant filtering */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="price-cards-grid">
            {pricesData.map((item, idx) => (
              <div
                key={idx}
                data-price-card="true"
                data-category={item.category}
                style={{ display: selectedCat === 'all' || selectedCat === item.category ? 'flex' : 'none' }}
                className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-[#E6C887]/30 hover:border-[#DCA54A] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-serif text-lg font-semibold text-[#0F172A] group-hover:text-[#B57E29] transition-colors">
                      {item.title}
                    </h3>
                    <div className="text-right flex-shrink-0">
                      <span className="text-lg font-bold text-[#B57E29] block">
                        {item.price}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 text-xs text-stone-500 mb-3">
                    <span className="flex items-center space-x-1 bg-stone-100 px-2.5 py-0.5 rounded-full">
                      <Clock className="w-3 h-3 text-stone-400" />
                      <span>{item.duration}</span>
                    </span>
                    {item.badge && (
                      <span className="bg-[#DCA54A]/15 text-[#B57E29] font-semibold px-2.5 py-0.5 rounded-full text-[11px]">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {item.desc}
                  </p>

                  {item.pass && (
                    <div className="bg-[#FAF5E5] px-3.5 py-2 rounded-xl text-xs text-[#8E5E17] font-medium border border-[#E6C887]/40 mb-4 inline-block">
                      🏷️ {item.pass}
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-[11px] text-stone-400">
                    Személyre szabott ápolás
                  </span>
                  <Link
                    href={`/kapcsolat?service=${encodeURIComponent(item.title)}`}
                    className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#B57E29] hover:text-[#946014] transition"
                  >
                    <span>Időpont kérése</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Vagheggi Promo Banner */}
          <div className="mt-16 bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="inline-flex items-center space-x-2 text-[#DCA54A] text-xs font-semibold uppercase tracking-wider">
                <Tag className="w-4 h-4" />
                <span>10% Otthoni Bőrápolási Kedvezmény</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif text-white">
                Vásárolj professzionális Vagheggi termékeket kedvezménnyel!
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                Regisztrálj lakossági felhasználóként a <strong>www.vagheggi.hu</strong> weboldalon, és írd be a vendégkódot a kosárnál:
              </p>
            </div>
            <div className="bg-white/10 px-6 py-4 rounded-2xl border border-white/20 text-center min-w-[200px]">
              <div className="text-[11px] uppercase tracking-wider text-stone-300">Vendégkód:</div>
              <div className="text-2xl font-mono font-bold text-[#DCA54A] my-1">2025-836785</div>
              <div className="text-[11px] text-stone-400">10% azonnali engedmény</div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Client-side Fallback Script (guarantees filtering works even without hydration) */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              function attachPriceFilter() {
                var container = document.getElementById('price-filter-container');
                if (!container) return;
                container.addEventListener('click', function(e) {
                  var btn = e.target.closest('[data-filter-btn]');
                  if (!btn) return;
                  var targetCat = btn.getAttribute('data-filter-btn');
                  var btns = container.querySelectorAll('[data-filter-btn]');
                  for (var i = 0; i < btns.length; i++) {
                    var b = btns[i];
                    if (b.getAttribute('data-filter-btn') === targetCat) {
                      b.className = 'px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer select-none bg-[#0F172A] text-white shadow-md';
                    } else {
                      b.className = 'px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer select-none bg-white text-stone-600 hover:bg-[#FAF5E5] hover:text-[#B57E29] border border-stone-200';
                    }
                  }
                  var cards = document.querySelectorAll('[data-price-card]');
                  for (var j = 0; j < cards.length; j++) {
                    var c = cards[j];
                    var itemCat = c.getAttribute('data-category');
                    if (targetCat === 'all' || itemCat === targetCat) {
                      c.style.setProperty('display', 'flex', 'important');
                    } else {
                      c.style.setProperty('display', 'none', 'important');
                    }
                  }
                });
              }
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', attachPriceFilter);
              } else {
                attachPriceFilter();
              }
            })();
          `,
        }}
      />
    </div>
  );
}
