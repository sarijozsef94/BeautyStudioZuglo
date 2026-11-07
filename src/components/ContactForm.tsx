'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface ContactFormProps {
  defaultService?: string;
}

export default function ContactForm({ defaultService }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: defaultService || '',
    message: '',
    privacy: false,
    honeypot: '', // bot trap
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [responseMsg, setResponseMsg] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const servicesList = [
    'Bőrállapot felmérés és konzultáció (10 000 Ft)',
    'Prémium ránctalanító arckezelés 75.25 (25 000 Ft)',
    'Faggyútermelés normalizáló Balance kezelés (15 000 Ft)',
    'Tisztításos kezelés Equilibrium (15 000 Ft)',
    'Anti-aging kezelés Delay Infinity (15 000 Ft)',
    'Mélyhidratáló kezelés Rehydra (15 000 Ft)',
    'Érzékeny bőr Emozioni Plus kezelés (15 000 Ft)',
    'Folthalványító Bright Formula (15 000 Ft)',
    'Arcmasszázs (5 000 Ft)',
    'Szempilla-lifting festéssel (10 000 Ft)',
    'Szemöldöklaminálás festéssel és formázással (10 000 Ft)',
    'Szempilla-lifting és szemöldöklaminálás kombináció (15 000 Ft)',
    'Menyasszonyi / Alkalmi smink (15 000 - 20 000 Ft)',
    'Gyantázás / Szőrtelenítés',
    'Egyéb kérdés / Egyedi egyeztetés',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFieldErrors({});

    // Client-side quick check
    if (!formData.name.trim()) {
      setFieldErrors((prev) => ({ ...prev, name: 'Kérjük, adja meg a nevét!' }));
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setFieldErrors((prev) => ({ ...prev, email: 'Kérjük, adjon meg érvényes e-mail címet!' }));
      return;
    }
    if (!formData.message.trim()) {
      setFieldErrors((prev) => ({ ...prev, message: 'Kérjük, írjon üzenetet!' }));
      return;
    }
    if (!formData.privacy) {
      setFieldErrors((prev) => ({
        ...prev,
        privacy: 'Az adatvédelmi tájékoztató elfogadása szükséges.',
      }));
      return;
    }

    setStatus('loading');
    setResponseMsg('');

    try {
      const response = await fetch('/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('success');
        setResponseMsg(
          result.message ||
            'Köszönjük megkeresését! Üzenetét sikeresen rögzítettük és hamarosan felvesszük Önnel a kapcsolatot.'
        );
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
          privacy: false,
          honeypot: '',
        });
      } else {
        setStatus('error');
        setResponseMsg(
          result.message || 'Hiba történt az üzenet küldése során. Kérjük próbálja újra!'
        );
        if (result.errors) {
          setFieldErrors(result.errors);
        }
      }
    } catch (err: unknown) {
      console.error(err);
      setStatus('error');
      setResponseMsg(
        'Váratlan hiba történt a küldés során. Kérjük, hívjon minket közvetlenül a +36 70 866 9059-es telefonszámon!'
      );
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-[#E6C887]/30 p-6 sm:p-10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#DCA54A]/5 rounded-bl-full pointer-events-none" />

      <div className="mb-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#B57E29] block mb-1">
          Lépj kapcsolatba velünk
        </span>
        <h3 className="text-2xl sm:text-3xl font-serif text-[#0F172A] font-medium">
          Időpontfoglalás és Érdeklődés
        </h3>
        <p className="text-stone-500 text-sm mt-2">
          Töltsd ki az alábbi űrlapot, és Alexa a lehető leghamarabb visszajelez a részletekkel!
        </p>
      </div>

      {status === 'success' && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-start space-x-3 animate-in fade-in">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm">
            <h5 className="font-semibold text-emerald-900">Sikeres küldés!</h5>
            <p className="mt-1">{responseMsg}</p>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 flex items-start space-x-3 animate-in fade-in">
          <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm">
            <h5 className="font-semibold text-rose-900">Nem sikerült az elküldés</h5>
            <p className="mt-1">{responseMsg}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Honeypot field for bot spam */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={formData.honeypot}
            onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Név */}
          <div>
            <label className="block text-xs font-medium uppercase tracking-wider text-stone-700 mb-1.5">
              Név <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="Kovács Katalin"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={`w-full px-4 py-3 text-sm rounded-xl border bg-stone-50/50 focus:bg-white focus:outline-none transition ${
                fieldErrors.name
                  ? 'border-rose-400 focus:ring-2 focus:ring-rose-200'
                  : 'border-stone-200 focus:border-[#DCA54A] focus:ring-2 focus:ring-[#DCA54A]/20'
              }`}
            />
            {fieldErrors.name && (
              <p className="text-xs text-rose-500 mt-1">{fieldErrors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-medium uppercase tracking-wider text-stone-700 mb-1.5">
              E-mail cím <span className="text-rose-500">*</span>
            </label>
            <input
              type="email"
              required
              placeholder="pelda@email.hu"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`w-full px-4 py-3 text-sm rounded-xl border bg-stone-50/50 focus:bg-white focus:outline-none transition ${
                fieldErrors.email
                  ? 'border-rose-400 focus:ring-2 focus:ring-rose-200'
                  : 'border-stone-200 focus:border-[#DCA54A] focus:ring-2 focus:ring-[#DCA54A]/20'
              }`}
            />
            {fieldErrors.email && (
              <p className="text-xs text-rose-500 mt-1">{fieldErrors.email}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Telefon */}
          <div>
            <label className="block text-xs font-medium uppercase tracking-wider text-stone-700 mb-1.5">
              Telefonszám
            </label>
            <input
              type="tel"
              placeholder="+36 30 123 4567"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 text-sm rounded-xl border border-stone-200 bg-stone-50/50 focus:bg-white focus:border-[#DCA54A] focus:ring-2 focus:ring-[#DCA54A]/20 focus:outline-none transition"
            />
          </div>

          {/* Szolgáltatás */}
          <div>
            <label className="block text-xs font-medium uppercase tracking-wider text-stone-700 mb-1.5">
              Kívánt Szolgáltatás
            </label>
            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-4 py-3 text-sm rounded-xl border border-stone-200 bg-stone-50/50 focus:bg-white focus:border-[#DCA54A] focus:ring-2 focus:ring-[#DCA54A]/20 focus:outline-none transition text-stone-800"
            >
              <option value="">-- Válassz kezelést (opcionális) --</option>
              {servicesList.map((srv, i) => (
                <option key={i} value={srv}>
                  {srv}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Üzenet */}
        <div>
          <label className="block text-xs font-medium uppercase tracking-wider text-stone-700 mb-1.5">
            Üzenet / Preferált időpont <span className="text-rose-500">*</span>
          </label>
          <textarea
            rows={4}
            required
            placeholder="Kérlek írd meg, milyen időpont lenne számodra ideális, vagy ha bármilyen kérdésed van..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className={`w-full px-4 py-3 text-sm rounded-xl border bg-stone-50/50 focus:bg-white focus:outline-none transition ${
              fieldErrors.message
                ? 'border-rose-400 focus:ring-2 focus:ring-rose-200'
                : 'border-stone-200 focus:border-[#DCA54A] focus:ring-2 focus:ring-[#DCA54A]/20'
            }`}
          />
          {fieldErrors.message && (
            <p className="text-xs text-rose-500 mt-1">{fieldErrors.message}</p>
          )}
        </div>

        {/* Adatvédelmi nyilatkozat checkbox */}
        <div className="pt-1">
          <label className="flex items-start space-x-3 cursor-pointer select-none">
            <input
              type="checkbox"
              required
              checked={formData.privacy}
              onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
              className="mt-1 h-4 w-4 rounded border-stone-300 text-[#DCA54A] focus:ring-[#DCA54A]"
            />
            <span className="text-xs text-stone-600 leading-normal">
              Megismertem és elfogadom az{' '}
              <Link
                href="/adatvedelem"
                target="_blank"
                className="text-[#B57E29] underline hover:text-[#946014]"
              >
                Adatvédelmi tájékoztatót
              </Link>
              , és hozzájárulok a megadott személyes adataim kapcsolatfelvétel céljából történő kezeléséhez. *
            </span>
          </label>
          {fieldErrors.privacy && (
            <p className="text-xs text-rose-500 mt-1 ml-7">{fieldErrors.privacy}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#DCA54A] via-[#D09A40] to-[#B57E29] hover:from-[#E6B65C] hover:to-[#C68D33] text-[#0F172A] font-bold text-sm uppercase tracking-wider px-8 py-3.5 rounded-full shadow-lg shadow-[#DCA54A]/25 transition-all transform hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Küldés folyamatban...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Üzenet küldése</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
