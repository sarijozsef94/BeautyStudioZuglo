import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, Calendar, ArrowRight, ShieldCheck, Clock, MapPin, Phone, Star, Tag, Award, CheckCircle } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import TestimonialSlider from '@/components/TestimonialSlider';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kozmetika Zuglóban | Beauty Studio Zugló',
  description:
    'Beauty Studio Zugló by Alexa: személyre szabott arckezelések, szempilla-lifting, szemöldök styling és alkalmi smink Budapest XIV. kerületében. Nézd meg árainkat és kérj időpontot!',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Kozmetika Zuglóban – Beauty Studio Zugló by Alexa',
    description:
      'Személyre szabott arckezelések, szempilla-lifting és szemöldök styling Budapest XIV. kerületében.',
    url: '/',
  },
};

export default function HomePage() {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-[#0F172A] text-white overflow-hidden">
        {/* Background photo overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-banner.jpg"
            alt="Beauty Studio Zugló szalon háttér"
            fill
            className="object-cover opacity-25 filter brightness-75 contrast-125"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/70 to-[#0F172A]/80" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#DCA54A]/15 border border-[#DCA54A]/30 text-[#DCA54A] text-xs font-semibold tracking-wider uppercase mb-6 animate-in fade-in">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Kohári Alexandra okleveles kozmetikus • Zugló</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal tracking-tight text-white mb-6">
            Beauty Studio Zugló <br />
            <span className="font-light italic text-[#DCA54A]">by Alexa</span>
          </h1>

          <p className="text-lg sm:text-2xl font-light text-stone-200 tracking-wide max-w-2xl mx-auto mb-4 font-serif italic">
            „Szépséged az én küldetésem”
          </p>

          <p className="text-sm sm:text-base text-stone-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Elegáns, modern szépségszalon Budapest 14. kerületében. Személyre szabott bőrdiagnosztika, prémium fitokozmetikai kezelések, tartós szempilla és szemöldök styling exkluzív környezetben.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kapcsolat"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#DCA54A] to-[#B57E29] hover:from-[#E6B65C] hover:to-[#C68D33] text-[#0F172A] font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full shadow-xl shadow-[#DCA54A]/25 transition transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Időpontfoglalás</span>
            </Link>

            <Link
              href="/arlista"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white font-medium text-sm tracking-wider px-8 py-4 rounded-full border border-white/20 transition backdrop-blur-sm"
            >
              <span>Kezelések & Árlista</span>
              <ArrowRight className="w-4 h-4 text-[#DCA54A]" />
            </Link>
          </div>

          {/* Micro badges */}
          <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-stone-300">
            <div className="flex items-center justify-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-[#DCA54A]" />
              <span>Szakértő Bőrápolás</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Sparkles className="w-4 h-4 text-[#DCA54A]" />
              <span>Vagheggi Prémium Termékek</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Clock className="w-4 h-4 text-[#DCA54A]" />
              <span>Rugalmas Időpontok</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <MapPin className="w-4 h-4 text-[#DCA54A]" />
              <span>Zugló Szívében (Mogyoródi út)</span>
            </div>
          </div>
        </div>
      </section>

      {/* RÓLUNK SECTION WITH ALEXA'S PORTRAIT */}
      <section className="py-20 bg-[#FAF6EE] border-b border-[#E6C887]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image Col */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5]">
                  <Image
                    src="/images/alexa-portrait.jpg"
                    alt="Kohári Alexandra okleveles kozmetikus"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Text Col */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#B57E29] block">
                  Tudj meg többet
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif text-[#0F172A] font-medium mt-1">
                  Kedves Leendő Vendégem!
                </h2>
              </div>

              <p className="text-stone-700 leading-relaxed">
                Örömmel és szeretettel köszöntelek az oldalamon! <strong>Kohári Alexandra</strong> vagyok, okleveles kozmetikus, aki szenvedélyesen hisz a professzionális szépségápolás és a tudatos bőregészség megőrzésének fontosságában.
              </p>

              <p className="text-stone-600 leading-relaxed text-sm">
                A képzés során a szakma legkiválóbb oktatóitól tanulhattam, ami lehetőséget adott arra, hogy mélyreható tudást szerezzek nemcsak az arckezelésekről, hanem a bőrápolás tudományos hátteréről is. Mindennapjaimban közgazdászként is tevékenykedem, de mindig is vonzott a biológia világa, a hatóanyagok pontos működése és a bőr regenerációja.
              </p>

              <p className="text-stone-600 leading-relaxed text-sm">
                Szalonomban egy igazi feltöltődést, énidőt biztosítok Számodra egy nyugodt, harmonikus légkörben, miközben a legmodernebb kezelésekkel hozzuk ki bőrödből a maximumot.
              </p>

              <div className="pt-2 flex items-center space-x-6">
                <div>
                  <div className="text-sm font-semibold text-[#0F172A]">Kohári Alexandra</div>
                  <div className="text-xs text-[#B57E29]">Alapító & Kozmetikus</div>
                </div>
                <div className="relative w-36 h-12">
                  <Image
                    src="/images/signature.png"
                    alt="Aláírás"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/rolunk"
                  className="inline-flex items-center space-x-2 text-[#0F172A] font-semibold text-sm hover:text-[#B57E29] transition group"
                >
                  <span>Tudj meg többet történetünkről</span>
                  <ArrowRight className="w-4 h-4 text-[#DCA54A] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES OVERVIEW */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B57E29]">
              Prémium Szolgáltatásaink
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#0F172A] font-normal mt-2">
              Legnépszerűbb Kezeléseink
            </h2>
            <p className="text-stone-500 text-sm sm:text-base mt-4 leading-relaxed">
              Fedezd fel a Beauty Studio Zugló by Alexa legkedveltebb eljárásait, melyekkel bőröd ragyogóbb, fiatalosabb és egészségesebb lehet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="luxury-card rounded-2xl p-8 relative flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FAF5E5] flex items-center justify-center text-[#B57E29] font-serif font-bold text-lg mb-6 border border-[#E6C887]/40">
                  01
                </div>
                <h3 className="text-xl font-serif font-semibold text-[#0F172A] mb-3">
                  Bőr- és Arckezelések
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-6">
                  Mélyhidratáló, anti-aging, folthalványító, faggyútermelés-normalizáló és speciális tisztító kezelések olasz prémium Vagheggi fitokozmetikumokkal.
                </p>
                <ul className="space-y-2 text-xs text-stone-500 border-t border-stone-100 pt-4 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#DCA54A]" />
                    <span>Bőrállapot felmérés és otthoni rutin</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#DCA54A]" />
                    <span>Vagheggi 75.25 prémium ránctalanítás</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#DCA54A]" />
                    <span>Elektrokozmetikai gépek használata</span>
                  </li>
                </ul>
              </div>
              <Link
                href="/arlista"
                className="text-xs uppercase tracking-wider font-bold text-[#B57E29] hover:text-[#946014] flex items-center space-x-1 mt-auto"
              >
                <span>Részletek és árak</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="luxury-card rounded-2xl p-8 relative flex flex-col justify-between border-[#DCA54A]/40 ring-1 ring-[#DCA54A]/20">
              <div className="absolute top-4 right-4 bg-[#DCA54A] text-[#0F172A] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                Kiemelt kedvenc
              </div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FAF5E5] flex items-center justify-center text-[#B57E29] font-serif font-bold text-lg mb-6 border border-[#E6C887]/40">
                  02
                </div>
                <h3 className="text-xl font-serif font-semibold text-[#0F172A] mb-3">
                  Szempilla & Szemöldök Styling
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-6">
                  Szempillafestés és tartós szempilla-lifting, szemöldöklaminálás, precíz formaigazítás és professzionális festés a tekintet kiemelésére.
                </p>
                <ul className="space-y-2 text-xs text-stone-500 border-t border-stone-100 pt-4 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#DCA54A]" />
                    <span>Szempilla-lifting festéssel</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#DCA54A]" />
                    <span>Szemöldöklaminálás és formázás</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#DCA54A]" />
                    <span>Kombinált kényeztető csomagok</span>
                  </li>
                </ul>
              </div>
              <Link
                href="/arlista"
                className="text-xs uppercase tracking-wider font-bold text-[#B57E29] hover:text-[#946014] flex items-center space-x-1 mt-auto"
              >
                <span>Részletek és árak</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="luxury-card rounded-2xl p-8 relative flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FAF5E5] flex items-center justify-center text-[#B57E29] font-serif font-bold text-lg mb-6 border border-[#E6C887]/40">
                  03
                </div>
                <h3 className="text-xl font-serif font-semibold text-[#0F172A] mb-3">
                  Gyantázás & Alkalmi Smink
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-6">
                  Kíméletes hagyományos gyanta és modern lézeres szőrtelenítés (Philips Lumea), valamint esküvői, menyasszonyi és alkalmi smink készítése.
                </p>
                <ul className="space-y-2 text-xs text-stone-500 border-t border-stone-100 pt-4 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#DCA54A]" />
                    <span>Hagyományos és kímélő gyanta</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#DCA54A]" />
                    <span>Menyasszonyi smink próbasminkkel</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#DCA54A]" />
                    <span>Alkalmi és örömanya sminkek</span>
                  </li>
                </ul>
              </div>
              <Link
                href="/arlista"
                className="text-xs uppercase tracking-wider font-bold text-[#B57E29] hover:text-[#946014] flex items-center space-x-1 mt-auto"
              >
                <span>Részletek és árak</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/arlista"
              className="inline-flex items-center space-x-2 bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs uppercase tracking-widest font-semibold px-8 py-3.5 rounded-full transition"
            >
              <span>Teljes árlista megtekintése</span>
              <ArrowRight className="w-4 h-4 text-[#DCA54A]" />
            </Link>
          </div>
        </div>
      </section>

      {/* VAGHEGGI DISCOUNT PROMO CARD */}
      <section className="py-12 bg-[#FAF5E5] border-y border-[#E6C887]/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center space-x-2 bg-[#DCA54A]/20 text-[#DCA54A] px-3 py-1 rounded-full text-xs font-semibold">
                <Tag className="w-3.5 h-3.5" />
                <span>Exkluzív Vendégkedvezmény</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-medium text-white">
                10% Kedvezmény a Vagheggi webshopban!
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                Regisztrálj a <strong>www.vagheggi.hu</strong> weboldalon lakossági felhasználóként, és a vásárlásnál a kosárban add meg Alexa vendégkódját a kedvezmény azonnali érvényesítéséhez:
              </p>
            </div>

            <div className="flex flex-col items-center justify-center bg-white/10 p-6 rounded-2xl border border-white/15 text-center min-w-[220px]">
              <span className="text-xs uppercase text-stone-300 tracking-wider">Vendégkód:</span>
              <span className="text-2xl sm:text-3xl font-mono font-bold text-[#DCA54A] tracking-wider my-1">
                2025-836785
              </span>
              <span className="text-[11px] text-stone-400">10% azonnali levonás</span>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL & STATS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Stats */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-6 text-center">
              <div className="p-6 rounded-2xl bg-[#FAF6EE] border border-[#E6C887]/30">
                <div className="text-4xl font-serif font-bold text-[#B57E29] mb-1">100%</div>
                <div className="text-xs text-stone-600 font-medium">Visszatérő vendégek elégedettsége</div>
              </div>
              <div className="p-6 rounded-2xl bg-[#FAF6EE] border border-[#E6C887]/30">
                <div className="text-4xl font-serif font-bold text-[#B57E29] mb-1">30+</div>
                <div className="text-xs text-stone-600 font-medium">Különböző prémium kezelés</div>
              </div>
              <div className="p-6 rounded-2xl bg-[#FAF6EE] border border-[#E6C887]/30">
                <div className="text-4xl font-serif font-bold text-[#B57E29] mb-1">40+</div>
                <div className="text-xs text-stone-600 font-medium">Hatóanyag és fitoterápiás esszencia</div>
              </div>
              <div className="p-6 rounded-2xl bg-[#FAF6EE] border border-[#E6C887]/30">
                <div className="text-4xl font-serif font-bold text-[#B57E29] mb-1">5 ★</div>
                <div className="text-xs text-stone-600 font-medium">Kiemelkedő vendégértékelések</div>
              </div>
            </div>

            {/* Interactive Testimonial Slider */}
            <div className="lg:col-span-7">
              <TestimonialSlider />
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="py-20 bg-[#FAF6EE] border-t border-[#E6C887]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#B57E29]">
                Nézz körbe nálunk
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#0F172A] font-normal mt-1">
                Képgaléria
              </h2>
              <p className="text-stone-600 text-sm mt-2 max-w-lg">
                Igényes környezet, nyugodt hangulat – ahol a szépség és a harmónia kezdődik.
              </p>
            </div>
            <Link
              href="/galeria"
              className="mt-4 md:mt-0 inline-flex items-center space-x-2 text-xs uppercase tracking-wider font-bold text-[#B57E29] hover:text-[#946014]"
            >
              <span>Teljes galéria megtekintése</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative rounded-2xl overflow-hidden aspect-square shadow-md group">
              <Image
                src="/images/gallery-salon-1.webp"
                alt="Beauty Studio Zugló szalon fotó"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex items-end">
                <span className="text-white text-xs font-medium">Kozmetika belső tér</span>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-square shadow-md group">
              <Image
                src="/images/gallery-lashes-1.webp"
                alt="Szempilla lifting eredmény"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex items-end">
                <span className="text-white text-xs font-medium">Szempilla-lifting</span>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-square shadow-md group">
              <Image
                src="/images/gallery-brows-1.webp"
                alt="Szemöldöklaminálás"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex items-end">
                <span className="text-white text-xs font-medium">Szemöldöklaminálás</span>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-square shadow-md group">
              <Image
                src="/images/gallery-salon-3.jpg"
                alt="Szalon kezelőhelyiség"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex items-end">
                <span className="text-white text-xs font-medium">Prémium kezelő</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT & BOOKING SECTION ON HOMEPAGE */}
      <section className="py-20 bg-white" id="kapcsolat">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Details & Info */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#B57E29]">
                  Lépj kapcsolatba
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif text-[#0F172A] font-normal mt-1">
                  Foglalj Időpontot
                </h2>
                <p className="text-stone-600 text-sm mt-3 leading-relaxed">
                  Foglalj időpontot még ma, és hagyd, hogy szakértő kezek gondoskodjanak rólad! Válaszd ki a neked legjobban tetsző kezelést, és élvezd a profi törődést egy különleges, nyugodt környezetben.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 rounded-xl bg-[#FAF6EE] border border-[#E6C887]/30">
                  <MapPin className="w-5 h-5 text-[#B57E29] flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <span className="font-semibold text-stone-900 block">Címünk</span>
                    <span className="text-stone-600">1141 Budapest, Mogyoródi út 127/b</span>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-xl bg-[#FAF6EE] border border-[#E6C887]/30">
                  <Phone className="w-5 h-5 text-[#B57E29] flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <span className="font-semibold text-stone-900 block">Telefonszám</span>
                    <a href="tel:+36708669059" className="text-[#B57E29] hover:underline font-medium">
                      +36 70 866 9059
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-xl bg-[#FAF6EE] border border-[#E6C887]/30">
                  <Clock className="w-5 h-5 text-[#B57E29] flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <span className="font-semibold text-stone-900 block">Nyitvatartás</span>
                    <span className="text-stone-600 block">H-P: 07:00 – 21:00</span>
                    <span className="text-stone-600 block">Sz: 08:00 – 21:00</span>
                    <span className="text-stone-600 block">V: 10:00 – 20:00</span>
                  </div>
                </div>
              </div>

              {/* Google Maps embed */}
              <div className="rounded-2xl overflow-hidden shadow-md border border-stone-200 aspect-[16/9] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.258036124033!2d19.129093776225012!3d47.51749617118182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741db763eef2e4b%3A0x29b97b49faa1b37c!2sBeauty%20Studio%20Zugl%C3%B3%20by%20Alexa!5e1!3m2!1shu!2shu!4v1739296459559!5m2!1shu!2shu"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Beauty Studio Zugló térkép"
                />
              </div>
            </div>

            {/* Interactive Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
