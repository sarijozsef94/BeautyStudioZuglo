import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kozmetikai galéria Zuglóban',
  description:
    'Nézd meg a Beauty Studio Zugló szalonját, szempilla-lifting és szemöldök styling munkáit képgalériánkban.',
  alternates: { canonical: '/galeria/' },
  openGraph: {
    title: 'Kozmetikai galéria Zuglóban',
    description:
      'Szalon, szempilla-lifting és szemöldök styling képek a Beauty Studio Zugló by Alexa oldalán.',
    url: '/galeria/',
  },
};

export default function GalleryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
