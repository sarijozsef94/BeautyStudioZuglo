import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Car, Bus } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kapcsolat & Időpontfoglalás | Beauty Studio Zugló by Alexa',
  description:
    'Lépj kapcsolatba Kohári Alexandrával. 1141 Budapest, Mogyoródi út 127/b. Telefon: +36 70 866 9059. Rugalmas nyitvatartás, kényelmes parkolás és professzionális kiszolgálás Zuglóban.',
};

export default function ContactPage() {
  return (
    <div>
      {/* Header Banner */}
      <section className="bg-[#0F172A] text-white py-16 sm:py-20 border-b border-[#DCA54A]/20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-banner.jpg"
            alt="Kapcsolat háttér"
            fill
            className="object-cover opacity-20 filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-[#0F172A]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#DCA54A] block mb-2">
            Lépj kapcsolatba
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-medium text-white">
            Kapcsolat & Időpontfoglalás
          </h1>
          <p className="text-stone-300 max-w-xl mx-auto mt-4 text-sm sm:text-base font-light">
            Tegyél egy lépést a ragyogóbb megjelenés felé! Várunk szeretettel exkluzív zuglói szalonunkban.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-[#FAF6EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            {/* Info Cards Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#E6C887]/30 space-y-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#B57E29] block mb-1">
                    Elérhetőségek
                  </span>
                  <h3 className="text-2xl font-serif text-[#0F172A]">
                    Beauty Studio Zugló
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">by Alexa • Kohári Alexandra EV.</p>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-[#FAF5E5] rounded-xl text-[#B57E29] border border-[#E6C887]/40">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold text-stone-900 block">Címünk</span>
                      <span className="text-stone-600">1141 Budapest, Mogyoródi út 127/b</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-[#FAF5E5] rounded-xl text-[#B57E29] border border-[#E6C887]/40">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold text-stone-900 block">Telefonszám</span>
                      <a href="tel:+36708669059" className="text-[#B57E29] hover:underline font-medium text-base">
                        +36 70 866 9059
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-[#FAF5E5] rounded-xl text-[#B57E29] border border-[#E6C887]/40">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold text-stone-900 block">E-mail címek</span>
                      <a href="mailto:alexandrakohari@beautystudiozuglo.hu" className="text-stone-600 hover:text-[#B57E29] block break-all">
                        alexandrakohari@beautystudiozuglo.hu
                      </a>
                      <a href="mailto:info@beautystudiozuglo.hu" className="text-stone-500 hover:text-[#B57E29] text-xs block mt-0.5">
                        info@beautystudiozuglo.hu
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-[#FAF5E5] rounded-xl text-[#B57E29] border border-[#E6C887]/40">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold text-stone-900 block">Nyitvatartás</span>
                      <div className="text-stone-600 space-y-0.5 mt-1 text-xs sm:text-sm">
                        <div className="flex justify-between w-48">
                          <span>Hétfő – Péntek:</span>
                          <strong>07:00 – 21:00</strong>
                        </div>
                        <div className="flex justify-between w-48">
                          <span>Szombat:</span>
                          <strong>08:00 – 21:00</strong>
                        </div>
                        <div className="flex justify-between w-48">
                          <span>Vasárnap:</span>
                          <strong>10:00 – 20:00</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Transportation hints */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E6C887]/30 space-y-4 text-xs sm:text-sm text-stone-600">
                <div className="flex items-center space-x-3 text-[#0F172A] font-semibold">
                  <Car className="w-4 h-4 text-[#B57E29]" />
                  <span>Megközelítés & Parkolás</span>
                </div>
                <p>
                  A stúdió Zuglóban, a Mogyoródi úton található. Autóval érkezőknek az utcában és a környező kisutcákban általában könnyen található szabad parkolóhely.
                </p>
                <div className="flex items-center space-x-3 text-[#0F172A] font-semibold pt-1">
                  <Bus className="w-4 h-4 text-[#B57E29]" />
                  <span>Tömegközlekedés</span>
                </div>
                <p>
                  A 82-es és 82A trolibusszal, valamint az Örs vezér tere és az Uzsoki Utcai Kórház felől induló buszjáratokkal közvetlenül és kényelmesen megközelíthető.
                </p>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>

          {/* Google Maps Embed Full Width */}
          <div className="rounded-3xl overflow-hidden shadow-xl border border-stone-200 aspect-[21/9] min-h-[350px] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.258036124033!2d19.129093776225012!3d47.51749617118182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741db763eef2e4b%3A0x29b97b49faa1b37c!2sBeauty%20Studio%20Zugl%C3%B3%20by%20Alexa!5e1!3m2!1shu!2shu!4v1739296459559!5m2!1shu!2shu"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Beauty Studio Zugló Google Térkép"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
