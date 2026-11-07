import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, Heart, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0B1120] text-stone-300 border-t border-[#DCA54A]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3.5">
              <div className="relative h-14 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Beauty Studio Zugló by Alexa"
                  width={56}
                  height={56}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div>
                <span className="font-serif tracking-wider text-lg font-semibold text-white block">
                  BEAUTY STUDIO ZUGLÓ
                </span>
                <span className="text-xs uppercase tracking-widest text-[#DCA54A] font-light">
                  by Alexa
                </span>
              </div>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed">
              Prémium szépségszalon Zuglóban. Professzionális bőrápolás, szempilla- és szemöldök styling, valamint személyre szabott kozmetikai kezelések modern és békés környezetben.
            </p>
            <div className="pt-2">
              <p className="text-xs text-[#DCA54A] italic mb-1 font-serif">„Szépséged az én küldetésem”</p>
              <div className="relative w-44 h-14">
                <Image
                  src="/images/signature.png"
                  alt="Kohári Alexandra aláírása"
                  fill
                  style={{ filter: 'invert(1) brightness(1.8) contrast(1.2)' }}
                  className="object-contain object-left"
                />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white border-b border-[#DCA54A]/30 pb-2 inline-block">
              Gyorsmenü
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-[#DCA54A] transition flex items-center space-x-2">
                  <span className="text-[#DCA54A] text-xs">›</span>
                  <span>Kezdőlap</span>
                </Link>
              </li>
              <li>
                <Link href="/rolunk" className="hover:text-[#DCA54A] transition flex items-center space-x-2">
                  <span className="text-[#DCA54A] text-xs">›</span>
                  <span>Rólunk & Filozófiánk</span>
                </Link>
              </li>
              <li>
                <Link href="/szolgaltatasok" className="hover:text-[#DCA54A] transition flex items-center space-x-2">
                  <span className="text-[#DCA54A] text-xs">›</span>
                  <span>Szolgáltatásaink</span>
                </Link>
              </li>
              <li>
                <Link href="/arlista" className="hover:text-[#DCA54A] transition flex items-center space-x-2">
                  <span className="text-[#DCA54A] text-xs">›</span>
                  <span>Árlista & Csomagok</span>
                </Link>
              </li>
              <li>
                <Link href="/galeria" className="hover:text-[#DCA54A] transition flex items-center space-x-2">
                  <span className="text-[#DCA54A] text-xs">›</span>
                  <span>Képgaléria</span>
                </Link>
              </li>
              <li>
                <Link href="/kapcsolat" className="hover:text-[#DCA54A] transition flex items-center space-x-2">
                  <span className="text-[#DCA54A] text-xs">›</span>
                  <span>Kapcsolat & Időpont</span>
                </Link>
              </li>
              <li>
                <Link href="/adatvedelem" className="hover:text-[#DCA54A] transition flex items-center space-x-2 text-stone-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#DCA54A]" />
                  <span>Adatvédelmi tájékoztató</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white border-b border-[#DCA54A]/30 pb-2 inline-block">
              Kapcsolat
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#DCA54A] flex-shrink-0 mt-1" />
                <span>
                  <strong className="text-white block font-medium">Beauty Studio Zugló</strong>
                  1141 Budapest, Mogyoródi út 127/b
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#DCA54A] flex-shrink-0" />
                <a href="tel:+36708669059" className="hover:text-[#DCA54A] transition font-medium text-white">
                  +36 70 866 9059
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#DCA54A] flex-shrink-0" />
                <a href="mailto:alexandrakohari@beautystudiozuglo.hu" className="hover:text-[#DCA54A] transition break-all">
                  alexandrakohari@beautystudiozuglo.hu
                </a>
              </li>
              <li className="pt-2">
                <span className="text-xs text-stone-400 block">Vagheggi termékkód 10% kedvezményhez:</span>
                <span className="font-mono text-xs bg-[#DCA54A]/20 text-[#DCA54A] px-2 py-1 rounded inline-block mt-1 font-bold">
                  2025-836785
                </span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white border-b border-[#DCA54A]/30 pb-2 inline-block">
              Nyitvatartás
            </h4>
            <div className="space-y-2 text-sm bg-white/5 p-4 rounded-lg border border-white/5">
              <div className="flex justify-between items-center py-1 border-b border-white/5">
                <span className="text-stone-400">Hétfő – Péntek:</span>
                <span className="font-semibold text-white">07:00 – 21:00</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-white/5">
                <span className="text-stone-400">Szombat:</span>
                <span className="font-semibold text-white">08:00 – 21:00</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-stone-400">Vasárnap:</span>
                <span className="font-semibold text-[#DCA54A]">10:00 – 20:00</span>
              </div>
            </div>
            <p className="text-xs text-stone-400">
              * Kezeléseinkre előzetes időpontfoglalás szükséges.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-stone-400 gap-4">
          <p suppressHydrationWarning>
            © 2026 Beauty Studio Zugló by Alexa. Minden jog fenntartva.
          </p>
          <div className="flex items-center space-x-6">
            <Link href="/adatvedelem" className="hover:text-[#DCA54A] transition">
              Adatvédelmi tájékoztató
            </Link>
            <span>•</span>
            <span className="text-stone-500">Kohári Alexandra EV.</span>
            <span>•</span>
            <Link href="/kapcsolat" className="hover:text-[#DCA54A] transition">
              Időpontkérés
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
