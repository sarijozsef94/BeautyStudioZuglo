'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, Calendar, X, Eye, ZoomIn } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    title: 'Igényes szalon környezet',
    category: 'salon',
    categoryName: 'Kozmetika & Szalon',
    src: '/images/gallery-salon-1.webp',
    desc: 'Nyugodt, modern és harmonikus enteriőr Zuglóban.',
  },
  {
    id: 2,
    title: 'Szempilla-lifting eredmény',
    category: 'lashes',
    categoryName: 'Szempilla-lifting',
    src: '/images/gallery-lashes-1.webp',
    desc: 'Természetes hatású, ívelt és mélyfekete pillák.',
  },
  {
    id: 3,
    title: 'Szemöldöklaminálás és festés',
    category: 'brows',
    categoryName: 'Szemöldök styling',
    src: '/images/gallery-brows-1.webp',
    desc: 'Tökéletesen rendezett, dúsabb hatású szemöldök.',
  },
  {
    id: 4,
    title: 'Kezelőhelyiség és kozmetikai eszközök',
    category: 'salon',
    categoryName: 'Kozmetika & Szalon',
    src: '/images/gallery-salon-3.jpg',
    desc: 'Higiénikus, professzionális elektrokozmetikai háttér.',
  },
  {
    id: 5,
    title: 'Szempilla-lifting előtte-utána',
    category: 'lashes',
    categoryName: 'Szempilla-lifting',
    src: '/images/gallery-lashes-2.jpg',
    desc: 'Látványos megemelés és tartós színezés.',
  },
  {
    id: 6,
    title: 'Szemöldök formázás',
    category: 'brows',
    categoryName: 'Szemöldök styling',
    src: '/images/gallery-brows-2.jpg',
    desc: 'Arcformához illeszkedő, precíz ív.',
  },
  {
    id: 7,
    title: 'Kényeztető kezelőágy',
    category: 'salon',
    categoryName: 'Kozmetika & Szalon',
    src: '/images/gallery-salon-2.webp',
    desc: 'Maximális kényelem a 90 perces rituálék során.',
  },
  {
    id: 8,
    title: 'Dúsító szempilla kezelés',
    category: 'lashes',
    categoryName: 'Szempilla-lifting',
    src: '/images/gallery-lashes-3.webp',
    desc: 'Kíméletes és tartós formulák.',
  },
  {
    id: 9,
    title: 'Szemöldök laminált struktúra',
    category: 'brows',
    categoryName: 'Szemöldök styling',
    src: '/images/gallery-brows-3.jpg',
    desc: 'Minden szál a helyén – hetekig tartó rendezettség.',
  },
  {
    id: 10,
    title: 'Szalon részlet',
    category: 'salon',
    categoryName: 'Kozmetika & Szalon',
    src: '/images/gallery-salon-4.jpg',
    desc: 'Elegáns kiegészítők és nyugtató hangulatvilágítás.',
  },
  {
    id: 11,
    title: 'Professzionális Vagheggi termékek',
    category: 'salon',
    categoryName: 'Kozmetika & Szalon',
    src: '/images/gallery-salon-5.jpg',
    desc: 'Csúcsminőségű olasz fitoterápiás hatóanyagok.',
  },
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [activeModal, setActiveModal] = useState<typeof galleryItems[0] | null>(null);

  const handleFilterClick = (tabId: string) => {
    setActiveTab(tabId);
    if (typeof document !== 'undefined') {
      const cards = document.querySelectorAll<HTMLElement>('[data-gallery-card]');
      cards.forEach((card) => {
        const itemCat = card.getAttribute('data-category');
        if (tabId === 'all' || itemCat === tabId) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
      const btns = document.querySelectorAll<HTMLElement>('[data-filter-gallery]');
      btns.forEach((btn) => {
        if (btn.getAttribute('data-filter-gallery') === tabId) {
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
            alt="Galéria háttér"
            fill
            className="object-cover opacity-20 filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-[#0F172A]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#DCA54A] block mb-2">
            Nézz körbe nálunk
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-medium text-white">
            Galéria
          </h1>
          <p className="text-stone-300 max-w-xl mx-auto mt-4 text-sm sm:text-base font-light">
            Igényes környezet, nyugodt hangulat – ahol a szépség kezdődik. Pillák, szemöldök és kezelések képekben.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-[#FAF6EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12" id="gallery-filter-container">
            {[
              { id: 'all', label: 'Összes kép' },
              { id: 'salon', label: 'Kozmetika & Szalon' },
              { id: 'lashes', label: 'Szempilla-lifting' },
              { id: 'brows', label: 'Szemöldök styling' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                data-filter-gallery={tab.id}
                onClick={() => handleFilterClick(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer select-none ${
                  activeTab === tab.id
                    ? 'bg-[#0F172A] text-white shadow-md'
                    : 'bg-white text-stone-600 hover:bg-[#FAF5E5] hover:text-[#B57E29] border border-stone-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Grid - All items in DOM for instant native filtering */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" id="gallery-grid">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                data-gallery-card="true"
                data-category={item.category}
                data-title={item.title}
                data-category-name={item.categoryName}
                data-desc={item.desc}
                data-src={item.src}
                style={{ display: activeTab === 'all' || activeTab === item.category ? 'block' : 'none' }}
                onClick={() => setActiveModal(item)}
                className="group relative rounded-2xl overflow-hidden bg-white shadow-sm border border-[#E6C887]/30 cursor-pointer aspect-square"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end text-white">
                  <span className="text-[11px] uppercase tracking-wider text-[#DCA54A] font-medium">
                    {item.categoryName}
                  </span>
                  <h4 className="text-sm font-semibold">{item.title}</h4>
                  <div className="mt-2 flex items-center text-xs text-stone-300">
                    <ZoomIn className="w-3.5 h-3.5 mr-1" />
                    <span>Nagyítás</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom booking teaser */}
          <div className="mt-16 text-center bg-white rounded-3xl p-8 sm:p-12 border border-[#E6C887]/40 shadow-sm max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-[#B57E29] font-bold block mb-2">
              Kedvet kaptál a megújuláshoz?
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#0F172A] mb-4">
              Jelentkezz be még ma egy kényeztető kezelésre!
            </h3>
            <p className="text-stone-600 text-sm mb-6 max-w-xl mx-auto">
              Válaszd ki a neked legjobban tetsző kezelést, és élvezd a profi törődést egy különleges, csendes környezetben Zugló szívében.
            </p>
            <Link
              href="/kapcsolat"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#DCA54A] to-[#B57E29] hover:from-[#E6B65C] hover:to-[#C68D33] text-[#0F172A] font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-full transition shadow-lg shadow-[#DCA54A]/20"
            >
              <Calendar className="w-4 h-4" />
              <span>Időpontfoglalás</span>
            </Link>
          </div>
        </div>
      </section>

      {/* React Lightbox Modal */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#0F172A] text-white rounded-3xl overflow-hidden border border-[#DCA54A]/30 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-[#DCA54A] hover:text-[#0F172A] transition cursor-pointer"
              aria-label="Bezárás"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full bg-black">
              <Image
                src={activeModal.src}
                alt={activeModal.title}
                fill
                className="object-contain"
              />
            </div>

            <div className="p-6 bg-[#0F172A] border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#DCA54A] font-semibold block">
                  {activeModal.categoryName}
                </span>
                <h3 className="text-lg font-serif font-medium text-white mt-1">
                  {activeModal.title}
                </h3>
                <p className="text-stone-400 text-xs mt-1">{activeModal.desc}</p>
              </div>

              <Link
                href="/kapcsolat"
                className="inline-flex items-center space-x-2 bg-[#DCA54A] text-[#0F172A] text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-full hover:bg-[#E6B65C] transition flex-shrink-0"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Időpont kérése</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Standalone Native Lightbox Modal (guarantees modal works even without React hydration) */}
      <div
        id="native-gallery-modal"
        style={{ display: 'none' }}
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      >
        <div
          className="relative max-w-4xl w-full bg-[#0F172A] text-white rounded-3xl overflow-hidden border border-[#DCA54A]/30 shadow-2xl"
        >
          <button
            type="button"
            id="native-modal-close"
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-[#DCA54A] hover:text-[#0F172A] transition cursor-pointer"
            aria-label="Bezárás"
          >
            ✕
          </button>
          <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full bg-black flex items-center justify-center">
            <img id="native-modal-img" src="" alt="" className="max-h-full max-w-full object-contain" />
          </div>
          <div className="p-6 bg-[#0F172A] border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <span id="native-modal-cat" className="text-xs uppercase tracking-wider text-[#DCA54A] font-semibold block"></span>
              <h3 id="native-modal-title" className="text-lg font-serif font-medium text-white mt-1"></h3>
              <p id="native-modal-desc" className="text-stone-400 text-xs mt-1"></p>
            </div>
            <a
              href="/kapcsolat"
              className="inline-flex items-center space-x-2 bg-[#DCA54A] text-[#0F172A] text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-full hover:bg-[#E6B65C] transition flex-shrink-0"
            >
              <span>Időpont kérése</span>
            </a>
          </div>
        </div>
      </div>

      {/* Embedded Client-side Fallback Script (guarantees tab filtering and modal work everywhere) */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              function attachGalleryEvents() {
                var container = document.getElementById('gallery-filter-container');
                if (container) {
                  container.addEventListener('click', function(e) {
                    var btn = e.target.closest('[data-filter-gallery]');
                    if (!btn) return;
                    var targetCat = btn.getAttribute('data-filter-gallery');
                    var btns = container.querySelectorAll('[data-filter-gallery]');
                    for (var i = 0; i < btns.length; i++) {
                      var b = btns[i];
                      if (b.getAttribute('data-filter-gallery') === targetCat) {
                        b.className = 'px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer select-none bg-[#0F172A] text-white shadow-md';
                      } else {
                        b.className = 'px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer select-none bg-white text-stone-600 hover:bg-[#FAF5E5] hover:text-[#B57E29] border border-stone-200';
                      }
                    }
                    var cards = document.querySelectorAll('[data-gallery-card]');
                    for (var j = 0; j < cards.length; j++) {
                      var c = cards[j];
                      var itemCat = c.getAttribute('data-category');
                      if (targetCat === 'all' || itemCat === targetCat) {
                        c.style.setProperty('display', 'block', 'important');
                      } else {
                        c.style.setProperty('display', 'none', 'important');
                      }
                    }
                  });
                }

                // Native Modal fallback
                var nativeModal = document.getElementById('native-gallery-modal');
                var modalImg = document.getElementById('native-modal-img');
                var modalTitle = document.getElementById('native-modal-title');
                var modalCat = document.getElementById('native-modal-cat');
                var modalDesc = document.getElementById('native-modal-desc');
                var closeBtn = document.getElementById('native-modal-close');

                document.addEventListener('click', function(e) {
                  var card = e.target.closest('[data-gallery-card]');
                  if (card && nativeModal) {
                    modalImg.src = card.getAttribute('data-src') || '';
                    modalTitle.textContent = card.getAttribute('data-title') || '';
                    modalCat.textContent = card.getAttribute('data-category-name') || '';
                    modalDesc.textContent = card.getAttribute('data-desc') || '';
                    nativeModal.style.display = 'flex';
                  }
                });

                if (closeBtn && nativeModal) {
                  closeBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    nativeModal.style.display = 'none';
                  });
                  nativeModal.addEventListener('click', function(e) {
                    if (e.target === nativeModal) {
                      nativeModal.style.display = 'none';
                    }
                  });
                }
              }
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', attachGalleryEvents);
              } else {
                attachGalleryEvents();
              }
            })();
          `,
        }}
      />
    </div>
  );
}
