'use client';

import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'T. Andrea',
    location: 'Budapest',
    service: 'Mélyhidratáló kezelés',
    rating: 5,
    text: 'Már régóta keresek egy helyet, ahol igazán törődnek a bőrömmel, és végre megtaláltam! Alexa kozmetikája egyszerűen csodálatos – a hangulat modern és elegáns, minden egyes kezelés igazi kényeztetés. Mélyhidratáló kezelésre érkeztem és a bőröm soha nem nézett ki jobban! Az arcmasszázsok és a hidratáló kezelések után frissnek és üdének éreztem magam. Alexa kedvessége és szakértelme igazán különlegessé tette az élményt. Ajánlom mindenkinek!',
  },
  {
    id: 2,
    name: 'B. Viktória',
    location: 'Budapest, Zugló',
    service: 'Szempilla-lifting & Laminálás',
    rating: 5,
    text: 'Első alkalommal jártam Alexánál szempilla-liftingen és szemöldöklamináláson, és az eredmény minden várakozásomat felülmúlta! Reggelente alig kell sminkelnem, a pilláim gyönyörűen íveltek és dúsak maradtak hetekig. A szalon nagyon tiszta, békés, igazi énidő volt a náluk töltött másfél óra. Biztosan visszatérő vendég leszek!',
  },
  {
    id: 3,
    name: 'N. Judit',
    location: 'Budapest',
    service: 'Vagheggi 75.25 Prémium Anti-Aging',
    rating: 5,
    text: 'A 4 alkalmas bérletet választottam a 75.25 termékcsaláddal. A bőröm látványosan feszesebb, a finom vonalak kisimultak, és az arcbőröm tónusa ragyogó lett. Külön köszönöm Alexának az alapos bőrdiagnosztikát és a személyre szabott otthoni bőrápolási tanácsokat, sokat segített a megfelelő krémek kiválasztásában!',
  },
  {
    id: 4,
    name: 'K. Dóra',
    location: 'Gödöllő',
    service: 'Menyasszonyi smink & próbasmink',
    rating: 5,
    text: 'Az esküvőmre Alexa készítette a menyasszonyi sminkemet, ami reggeltől hajnalig hibátlanul a helyén maradt a könnyek és a tánc ellenére is! A próbasmink során rengeteg hasznos tippet kaptam, és pontosan olyan természetes, mégis ünnepi hatást értünk el, amilyet megálmodtam. Mindenkinek szívből ajánlom!',
  },
  {
    id: 5,
    name: 'M. Zsuzsanna',
    location: 'Budapest, XIV. kerület',
    service: 'Tisztításos Equilibrium kezelés',
    rating: 5,
    text: 'Érzékeny és pattanásokra hajlamos bőrrel érkeztem, ami miatt korábban mindig féltem kozmetikushoz menni. Alexa hihetetlenül gyengéden és precízen dolgozik, a tisztítás után sem volt pirosság vagy irritáció. A szalonban uralkodó csend és nyugalom pedig azonnal feltölti az embert a rohanó hétköznapokban.',
  },
  {
    id: 6,
    name: 'P. Boglárka',
    location: 'Budapest',
    service: 'Szemöldök styling & Gyanta',
    rating: 5,
    text: 'Végre egy szakember, aki nem sablon alapján dolgozik, hanem tényleg az arcom karakteréhez igazította a szemöldököm formáját! Gyors, precíz és szinte fájdalommentes volt a gyantázás is. Nagyon igényes a stúdió berendezése, öröm ide betérni.',
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <div className="bg-[#FAF6EE] p-6 sm:p-10 rounded-3xl border border-[#E6C887]/40 shadow-sm relative overflow-hidden">
      {/* Top controls & badge */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-stone-200/60">
        <div className="flex items-center space-x-1 text-[#DCA54A]">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current" />
          ))}
          <span className="text-xs font-bold text-stone-700 ml-2">5.0</span>
        </div>

        {/* Counter & Arrows */}
        <div className="flex items-center space-x-3">
          <span className="text-xs font-medium text-stone-400">
            {currentIndex + 1} / {testimonials.length}
          </span>
          <div className="flex items-center space-x-1">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Előző vélemény"
              className="p-2 rounded-full bg-white text-stone-700 hover:text-[#0F172A] hover:bg-[#FAF5E5] border border-stone-200 transition cursor-pointer shadow-xs"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Következő vélemény"
              className="p-2 rounded-full bg-white text-stone-700 hover:text-[#0F172A] hover:bg-[#FAF5E5] border border-stone-200 transition cursor-pointer shadow-xs"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Quote Content */}
      <div className="min-h-[170px] flex flex-col justify-between">
        <blockquote className="text-stone-700 italic text-base sm:text-lg leading-relaxed font-serif relative">
          <Quote className="w-8 h-8 text-[#DCA54A]/25 absolute -top-3 -left-3 -z-10" />
          „{current.text}”
        </blockquote>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-6 border-t border-stone-200/60 mt-6 gap-3">
          <div>
            <div className="font-semibold text-stone-900 text-sm sm:text-base">
              {current.name}
            </div>
            <div className="text-xs text-stone-500">{current.location}</div>
          </div>
          <div>
            <span className="text-xs text-[#B57E29] font-medium bg-[#DCA54A]/10 px-3.5 py-1.5 rounded-full inline-block border border-[#DCA54A]/20">
              {current.service}
            </span>
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex items-center justify-center space-x-2 mt-8 pt-4 border-t border-stone-200/40">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrentIndex(idx)}
            aria-label={`${idx + 1}. vélemény`}
            className={`transition-all rounded-full cursor-pointer ${
              currentIndex === idx
                ? 'w-8 h-2.5 bg-[#DCA54A]'
                : 'w-2.5 h-2.5 bg-stone-300 hover:bg-stone-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
