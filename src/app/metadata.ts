import { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  title: {
    default: 'Lyre Intercommunale du Limouxin - Orchestre et Événements Musicaux',
    template: '%s - Lyre Intercommunale du Limouxin',
  },
  description:
    'La Lyre Intercommunale du Limouxin est un orchestre dynamique réunissant des musiciens passionnés pour des concerts, animations et événements culturels dans le Limouxin et au-delà.',
  keywords: [
    'Lyre Intercommunale du Limouxin',
    'orchestre',
    'musique',
    'concerts',
    'animations',
    'culture',
    'Limoux',
    'musiciens',
    'fanfare',
  ],
  openGraph: {
    title: 'Lyre Intercommunale du Limouxin - Orchestre et Événements Musicaux',
    description:
      'Découvrez les activités de la Lyre Intercommunale du Limouxin : concerts, animations et événements culturels.',
    url: 'https://www.lyre-limouxin.fr',
    siteName: 'Lyre Intercommunale du Limouxin',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Logo de la Lyre Intercommunale du Limouxin',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lyre Intercommunale du Limouxin - Orchestre et Événements Musicaux',
    description:
      'Découvrez les activités de la Lyre Intercommunale du Limouxin : concerts, animations et événements culturels.',
    images: ['/og-image.jpg'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};
