'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, Calendar, Menu, X, MapPin, Clock } from 'lucide-react';

const navItems = [
  { name: 'Kezdőlap', href: '/' },
  { name: 'Rólunk', href: '/rolunk' },
  { name: 'Szolgáltatások', href: '/szolgaltatasok' },
  { name: 'Árlista', href: '/arlista' },
  { name: 'Galéria', href: '/galeria' },
  { name: 'Kapcsolat', href: '/kapcsolat' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[#0F172A]/95 backdrop-blur-md border-b border-[#DCA54A]/20 text-white">
      {/* Top micro bar for quick info */}
      <div className="hidden md:block bg-[#161F33] py-2 px-6 border-b border-white/5 text-xs text-stone-300">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-2">
              <MapPin className="w-3.5 h-3.5 text-[#DCA54A]" />
              <span>1141 Budapest, Mogyoródi út 127/b</span>
            </span>
            <span className="flex items-center space-x-2">
              <Clock className="w-3.5 h-3.5 text-[#DCA54A]" />
              <span>H-P: 07:00-21:00 | Sz: 08:00-21:00 | V: 10:00-20:00</span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="tel:+36708669059"
              className="flex items-center space-x-1.5 text-[#DCA54A] hover:text-[#F5CE7C] font-medium transition"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+36 70 866 9059</span>
            </a>
            <span className="text-stone-500">|</span>
            <span className="text-stone-300">Kohári Alexandra okleveles kozmetikus</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo - Natural aspect ratio without circular container */}
        <Link href="/" className="flex items-center space-x-3.5 group">
          <div className="relative h-12 sm:h-14 flex items-center justify-center py-1">
            <Image
              src="/logo.png"
              alt="Beauty Studio Zugló by Alexa logó"
              width={56}
              height={56}
              className="h-11 sm:h-13 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif tracking-wider text-base sm:text-lg font-semibold text-white group-hover:text-[#DCA54A] transition">
              BEAUTY STUDIO ZUGLÓ
            </span>
            <span className="text-[11px] uppercase tracking-widest text-[#DCA54A] font-light">
              by Alexa
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm tracking-wide font-medium transition-colors py-1 border-b-2 ${
                  isActive
                    ? 'text-[#DCA54A] border-[#DCA54A]'
                    : 'text-stone-200 border-transparent hover:text-[#DCA54A] hover:border-[#DCA54A]/40'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="hidden sm:flex items-center space-x-4">
          <a
            href="tel:+36708669059"
            className="hidden xl:flex items-center space-x-2 text-stone-200 hover:text-white px-3 py-2 text-sm transition"
          >
            <Phone className="w-4 h-4 text-[#DCA54A]" />
            <span>Hívás</span>
          </a>
          <Link
            href="/kapcsolat"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#DCA54A] to-[#B57E29] hover:from-[#E6B65C] hover:to-[#C68D33] text-[#0F172A] font-semibold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full shadow-lg shadow-[#DCA54A]/20 transition transform hover:-translate-y-0.5"
          >
            <Calendar className="w-4 h-4" />
            <span>Időpontfoglalás</span>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex lg:hidden items-center space-x-3">
          <Link
            href="/kapcsolat"
            className="bg-[#DCA54A] text-[#0F172A] font-semibold text-xs px-3 py-2 rounded-full flex items-center space-x-1"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Foglalás</span>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-stone-300 hover:text-white hover:bg-white/10 transition"
            aria-label="Menü megnyitása"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#DCA54A]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0F172A] border-b border-[#DCA54A]/20 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium py-2 px-3 rounded-md transition ${
                    isActive
                      ? 'bg-[#DCA54A]/10 text-[#DCA54A] font-semibold'
                      : 'text-stone-200 hover:bg-white/5 hover:text-[#DCA54A]'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <Link
              href="/adatvedelem"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs text-stone-400 py-1 px-3 hover:text-stone-200 transition"
            >
              Adatvédelmi tájékoztató
            </Link>
          </div>

          <div className="pt-4 border-t border-white/10 space-y-3 text-sm text-stone-300">
            <a
              href="tel:+36708669059"
              className="flex items-center space-x-3 text-[#DCA54A] font-medium"
            >
              <Phone className="w-4 h-4" />
              <span>+36 70 866 9059</span>
            </a>
            <div className="flex items-start space-x-3 text-xs text-stone-400">
              <MapPin className="w-4 h-4 text-[#DCA54A] flex-shrink-0 mt-0.5" />
              <span>1141 Budapest, Mogyoródi út 127/b</span>
            </div>
            <div className="flex items-start space-x-3 text-xs text-stone-400">
              <Clock className="w-4 h-4 text-[#DCA54A] flex-shrink-0 mt-0.5" />
              <span>H-P: 07:00-21:00 | Sz: 08:00-21:00 | V: 10:00-20:00</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
