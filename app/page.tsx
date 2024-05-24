import { Metadata } from 'next';
import Footer from '../components/Footer/Footer';
import AnimatedLine from '../components/AnimatedLine/AnimatedLine';
import Contact from '../components/Contact/Contact';
import Portfolio from '../components/Portfolio/Portfolio';
import Services from '../components/Services/Services';
import Testimonials from '../components/Testimonials/Testimonials';
import Hero from '../components/Hero/Hero';

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
