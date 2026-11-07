import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';

export const metadata: Metadata = {
  metadataBase: new URL('https://beautystudiozuglo.hu'),
  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'PLyzsevmOiyRauTSjQHmQFyKWcq6WwHurNtkoeiFiSQ',
  },
  title: {
    default: 'Beauty Studio Zugló by Alexa | Kozmetika Zuglóban',
    template: '%s | Beauty Studio Zugló',
  },
  description:
    'Kozmetika Zuglóban, Budapest XIV. kerületében: személyre szabott arckezelések, szempilla-lifting, szemöldök styling és alkalmi smink. Ismerd meg szolgáltatásainkat és árainkat!',
  keywords: [
    'kozmetika zugló',
    'kozmetikus Zugló',
    'kozmetika Budapest 14. kerület',
    'arckezelés Budapest XIV. kerület',
    'Kohári Alexandra',
    'arckezelés Zugló',
    'szempilla lifting zugló',
    'szemöldök laminálás',
    'Vagheggi kozmetika',
    'Mogyoródi út kozmetika',
  ],
  authors: [{ name: 'Kohári Alexandra' }],
  creator: 'Kohári Alexandra',
  publisher: 'Beauty Studio Zugló by Alexa',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Beauty Studio Zugló by Alexa | Kozmetika Zuglóban',
    description: 'Személyre szabott kozmetikai kezelések, szempilla-lifting és szemöldök styling Budapest XIV. kerületében.',
    url: '/',
    siteName: 'Beauty Studio Zugló by Alexa',
    images: [
      {
        url: '/images/hero-banner.jpg',
        alt: 'Beauty Studio Zugló by Alexa – kozmetika Zuglóban',
      },
    ],
    locale: 'hu_HU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beauty Studio Zugló by Alexa | Kozmetika Zuglóban',
    description: 'Személyre szabott kozmetikai kezelések Budapest XIV. kerületében.',
    images: ['/images/hero-banner.jpg'],
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'BeautySalon',
  name: 'Beauty Studio Zugló by Alexa',
  url: 'https://beautystudiozuglo.hu/',
  image: 'https://beautystudiozuglo.hu/images/hero-banner.jpg',
  logo: 'https://beautystudiozuglo.hu/logo.png',
  telephone: '+36708669059',
  email: 'alexandrakohari@beautystudiozuglo.hu',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Mogyoródi út 127/b',
    addressLocality: 'Budapest',
    postalCode: '1141',
    addressCountry: 'HU',
  },
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Budapest XIV. kerület, Zugló',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '21:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '21:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '10:00',
      closes: '20:00',
    },
  ],
  knowsAbout: [
    'arckezelés',
    'bőrdiagnosztika',
    'szempilla-lifting',
    'szemöldök styling',
    'gyantázás',
    'alkalmi smink',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#FDFBF7] text-stone-800 antialiased selection:bg-[#DCA54A]/30 selection:text-[#0F172A]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
    </html>
  );
}
