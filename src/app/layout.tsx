import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'XD Creations — Building Digital Solutions',
  description: 'XD Creations is your partner for Website Development, Web Applications, SaaS Products, and Graphic Design. Premium digital solutions for individuals & businesses.',
  keywords: 'web development, web apps, SaaS, graphic design, XD Creations, digital agency',
  authors: [{ name: 'Sanjoy — XD Creations' }],
  openGraph: {
    title: 'XD Creations — Building Digital Solutions',
    description: 'Premium digital solutions for individuals & businesses.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="mesh-bg" />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
