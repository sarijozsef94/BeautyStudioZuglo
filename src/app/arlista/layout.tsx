import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kozmetikai árlista Zuglóban',
  description:
    'Tekintsd meg a Beauty Studio Zugló arckezeléseinek, szempilla-lifting, szemöldök styling, gyantázás és smink szolgáltatásainak aktuális árait.',
  alternates: { canonical: '/arlista/' },
  openGraph: {
    title: 'Kozmetikai árlista Zuglóban',
    description:
      'Kezelések és szolgáltatások árai a Beauty Studio Zugló by Alexa kozmetikában.',
    url: '/arlista/',
  },
};

export default function PriceListLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
