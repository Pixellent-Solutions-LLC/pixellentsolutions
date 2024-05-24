import { Metadata } from 'next';
import Hero from '../components/Hero/Hero';
import Services from '../components/Services/Services';
import Portfolio from '../components/Portfolio/Portfolio';
import Testimonials from '../components/Testimonials/Testimonials';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import AnimatedLine from '../components/AnimatedLine/AnimatedLine';

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
        url: 'assets/logo2.png',
      },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <AnimatedLine />
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
