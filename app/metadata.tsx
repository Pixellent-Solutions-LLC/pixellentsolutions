import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pixellent Solutions LLC',
  metadataBase: new URL('https://pixellent-solutions.vercel.app/'),
  twitter: {
    card: 'summary_large_image',
  },
  openGraph: {
    url: 'https://pixellent-solutions.vercel.app/',
    images: [
      {
        width: 1200,
        height: 630,
        url: '/assets/logo2.png',
      },
    ],
  },
};
