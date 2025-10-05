import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/navigation/navbar';
import { BottomNav } from '@/components/navigation/bottom-nav';
import { Footer } from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    default: 'WindowFix Pro - Professional Window Services',
    template: '%s | WindowFix Pro'
  },
  description: 'Expert window repair, replacement, repainting, and installation services. Professional solutions for residential and commercial properties with premium materials and craftsmanship.',
  keywords: ['window repair', 'window replacement', 'window installation', 'window repainting', 'glass repair', 'home improvement'],
  authors: [{ name: 'WindowFix Pro Team' }],
  creator: 'WindowFix Pro',
  publisher: 'WindowFix Pro',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://windowfixpro.com',
    siteName: 'WindowFix Pro',
    title: 'WindowFix Pro - Professional Window Services',
    description: 'Expert window repair, replacement, repainting, and installation services.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'WindowFix Pro - Professional Window Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WindowFix Pro - Professional Window Services',
    description: 'Expert window repair, replacement, repainting, and installation services.',
    creator: '@windowfixpro',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-[#0e0e0e] text-[#f4f4f4] font-sans antialiased">
        <Navbar />
        <main className="pt-16 pb-20 md:pb-0">
          {children}
        </main>
        <BottomNav />
        <Footer />
      </body>
    </html>
  );
}