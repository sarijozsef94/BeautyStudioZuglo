import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';

export const metadata: Metadata = {
  metadataBase: new URL('https://beautystudiozuglo.hu'),
  verification: {
    google: 'PLyzsevmOiyRauTSjQHmQFyKWcq6WwHurNtkoeiFiSQ',
  },
  title: 'Beauty Studio Zugló by Alexa | Prémium Kozmetika Zuglóban',
  description:
    'Beauty Studio Zugló by Alexa – Szépséged az én küldetésem. Professzionális bőr- és arckezelések, szempilla-lifting, szemöldöklaminálás, gyantázás és alkalmi smink Budapest 14. kerületében.',
  keywords: [
    'kozmetika zugló',
    'Beauty Studio Zugló',
    'Kohári Alexandra',
    'arckezelés zugló',
    'szempilla lifting zugló',
    'szemöldök laminálás',
    'Vagheggi kozmetika',
    'Mogyoródi út kozmetika',
  ],
  authors: [{ name: 'Kohári Alexandra' }],
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Beauty Studio Zugló by Alexa | Prémium Kozmetika Zuglóban',
    description:
      'Professzionális bőr- és arckezelések, szempilla-lifting, szemöldöklaminálás, gyantázás és alkalmi smink.',
    url: 'https://beautystudiozuglo.hu',
    siteName: 'Beauty Studio Zugló by Alexa',
    images: [
      {
        url: '/logo.png',
        width: 600,
        height: 600,
        alt: 'Beauty Studio Zugló by Alexa',
      },
    ],
    locale: 'hu_HU',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu" className="scroll-smooth">
      <head>
        <meta name="google-site-verification" content="PLyzsevmOiyRauTSjQHmQFyKWcq6WwHurNtkoeiFiSQ" />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FDFBF7] text-stone-800 antialiased selection:bg-[#DCA54A]/30 selection:text-[#0F172A]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
