import Image from 'next/image';
import Link from 'next/link';
import { Award, Heart, CheckCircle2, Calendar, Phone, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rólunk és szakmai szemléletünk',
  description:
    'Ismerd meg Kohári Alexandrát, a Beauty Studio Zugló by Alexa okleveles kozmetikusát és a személyre szabott, tudatos bőrápolásra épülő szemléletet.',
  alternates: { canonical: '/rolunk/' },
  openGraph: {
    title: 'Rólunk – Kohári Alexandra kozmetikus',
    description:
      'Ismerd meg Kohári Alexandrát és a Beauty Studio Zugló személyre szabott kozmetikai szemléletét.',
    url: '/rolunk/',
  },
};

export default function AboutPage() {
  return (
    <div>
      {/* Header Banner */}
      <section className="bg-[#0F172A] text-white py-16 sm:py-20 border-b border-[#DCA54A]/20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-banner.jpg"
            alt="Szalon háttér"
            fill
            className="object-cover opacity-20 filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-[#0F172A]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#DCA54A] block mb-2">
            Tudj meg többet
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-medium text-white">
            Rólunk & Filozófiánk
          </h1>
          <p className="text-stone-300 max-w-xl mx-auto mt-4 text-sm sm:text-base font-light italic font-serif">
            „Szépséged az én küldetésem”
          </p>
        </div>
      </section>

      {/* Main About Story */}
      <section className="py-20 bg-[#FAF6EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5]">
                <Image
                  src="/images/alexa-portrait.jpg"
                  alt="Kohári Alexandra okleveles kozmetikus"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-2 sm:right-6 bg-white p-5 rounded-2xl shadow-xl border border-[#E6C887]/40 max-w-[240px]">
                <div className="flex items-center space-x-2 text-[#B57E29] mb-1">
                  <Award className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-wider">Kiváló minősítés</span>
                </div>
                <p className="text-xs text-stone-600 leading-snug">
                  BKSZC Erzsébet Királyné Szépészeti Technikum oklevél
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#B57E29] block mb-1">
                  Bemutatkozás
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif text-[#0F172A] font-medium">
                  Kohári Alexandra
                </h2>
                <p className="text-sm text-[#B57E29] font-medium mt-1">Okleveles Kozmetikus • Alapító</p>
              </div>

              <div className="prose prose-stone text-stone-700 space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  <strong>Kedves Leendő Vendégem!</strong> Örömmel és szeretettel köszöntelek az oldalamon! Kohári Alexandra vagyok, okleveles kozmetikus, aki szenvedélyesen hisz a szépségápolás és a bőregészség megőrzésének fontosságában.
                </p>
                <p>
                  Kozmetikus képesítésemet a <strong>BKSZC Erzsébet Királyné Szépészeti Technikumban</strong> szereztem meg, ahol tanulmányaimat kiváló eredménnyel zártam. A képzés során a szakma legkiválóbb oktatóitól tanulhattam, ami lehetőséget adott arra, hogy mélyreható tudást szerezzek nemcsak az arckezelésekről, hanem a bőrápolás tudományos hátteréről is.
                </p>
                <p>
                  Mindennapjaimban közgazdászként tevékenykedem, de mindig is vonzott a biológia világa, különösen a bőr szerkezete, működése és ápolása. Az évek során egyre jobban elmélyültem a kozmetikumok összetételében és a hatóanyagok megfelelő kiválasztásában, hiszen hiszem, hogy a tudatos bőrápolás nem csupán esztétikai kérdés, hanem az önbizalom és a jó közérzet alapja is.
                </p>
                <p>
                  Szalonomban szeretettel várlak, ha szakértő segítségre van szükséged a bőröd állapotának megértésében, és egy személyre szabott bőrápolási rutint szeretnél kialakítani. Egy alapos bőrdiagnosztika során meghatározzuk, mire van igazán szüksége a bőrödnek, és ennek megfelelően választjuk ki a legmegfelelőbb kezeléseket és otthoni ápolási termékeket.
                </p>
              </div>

              <div className="pt-2 flex items-center space-x-6">
                <div>
                  <div className="text-sm font-semibold text-[#0F172A]">Szeretettel,</div>
                  <div className="text-xs text-[#B57E29]">Kohári Alexandra</div>
                </div>
                <div className="relative w-40 h-12">
                  <Image
                    src="/images/signature.png"
                    alt="Aláírás"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Pillars of our work */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#E6C887]/30 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#FAF5E5] flex items-center justify-center text-[#B57E29]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-[#0F172A]">Tudatos Bőrápolás</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Nem hiszünk az egyenkúrákban. Minden bőrtípus más és más, ezért az egyéni bőrállapot felmérésére és a célzott hatóanyag-beépítésre fektetjük a legnagyobb hangsúlyt.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#E6C887]/30 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#FAF5E5] flex items-center justify-center text-[#B57E29]">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-[#0F172A]">Prémium Vagheggi Termékek</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Olasz fitokozmetikai készítményekkel dolgozunk, melyek növényi hatóanyag-koncentrációjukkal és tiszta összetételükkel kíméletesen, mégis maximális hatásfokkal revitalizálják a bőrt.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#E6C887]/30 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#FAF5E5] flex items-center justify-center text-[#B57E29]">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-[#0F172A]">Valódi Énidő & Nyugalom</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                A nálunk eltöltött idő nem csupán szépségápolás, hanem feltöltődés is. Nyugodt, harmonikus légkörben pihenhetsz meg a mindennapok rohanása után.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0F172A] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-4xl font-serif mb-4">
            Készen állsz arra, hogy együtt dolgozzunk bőröd egészségéért?
          </h2>
          <p className="text-stone-300 text-sm sm:text-base max-w-xl mx-auto mb-8 font-light">
            Várlak szeretettel szalonomban Zuglóban! Jelentkezz be kényelmesen online vagy telefonon.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kapcsolat"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#DCA54A] to-[#B57E29] hover:from-[#E6B65C] hover:to-[#C68D33] text-[#0F172A] font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full transition shadow-lg shadow-[#DCA54A]/20"
            >
              <Calendar className="w-4 h-4" />
              <span>Időpontfoglalás</span>
            </Link>
            <a
              href="tel:+36708669059"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white font-medium text-sm px-8 py-4 rounded-full border border-white/20 transition"
            >
              <Phone className="w-4 h-4 text-[#DCA54A]" />
              <span>+36 70 866 9059</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
