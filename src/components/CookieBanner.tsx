'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Cookie, Check, X } from 'lucide-react';

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('beauty_studio_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('beauty_studio_cookie_consent', 'accepted');
    setShow(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem('beauty_studio_cookie_consent', 'necessary_only');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 bg-[#0F172A] text-stone-200 border border-[#DCA54A]/30 rounded-2xl p-5 shadow-2xl backdrop-blur-lg animate-in slide-in-from-bottom duration-300">
      <div className="flex items-start space-x-3 mb-3">
        <div className="p-2 bg-[#DCA54A]/10 rounded-xl text-[#DCA54A]">
          <Cookie className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <h4 className="text-sm font-semibold text-white">Sütik (Cookie-k) használata</h4>
          <p className="text-xs text-stone-400 mt-1 leading-relaxed">
            Weboldalunk sütiket használ a felhasználói élmény javítása, a weboldal működésének biztosítása és látogatottsági statisztikák gyűjtése céljából. Részletek az{' '}
            <Link href="/adatvedelem" className="text-[#DCA54A] underline hover:text-white">
              Adatvédelmi tájékoztatóban
            </Link>
            .
          </p>
        </div>
      </div>
      <div className="flex items-center justify-end space-x-2 pt-2 border-t border-white/10 text-xs">
        <button
          onClick={acceptNecessary}
          className="px-3 py-1.5 rounded-lg border border-white/20 text-stone-300 hover:text-white hover:bg-white/5 transition"
        >
          Csak szükséges
        </button>
        <button
          onClick={acceptAll}
          className="px-4 py-1.5 rounded-lg bg-[#DCA54A] hover:bg-[#E6B65C] text-[#0F172A] font-semibold transition"
        >
          Elfogadom
        </button>
      </div>
    </div>
  );
}
