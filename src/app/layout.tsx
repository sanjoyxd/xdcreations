import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'XD Studios — Building Digital Solutions',
  description: 'XD Studios is your partner for Website Development, Web Applications, SaaS Products, and Graphic Design. Premium digital solutions for individuals & businesses.',
  keywords: 'web development, web apps, SaaS, graphic design, XD Studios, digital agency',
  authors: [{ name: 'Sanjoy — XD Studios' }],
  openGraph: {
    title: 'XD Studios — Building Digital Solutions',
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
