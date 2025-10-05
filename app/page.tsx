import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/hero-section';
import { ServicesSection } from '@/components/sections/services-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';

export const metadata: Metadata = {
  title: 'Professional Window Services - Repair, Replace, Install',
  description: 'Expert window services including repair, replacement, repainting, and installation. Transform your home with our professional touch and premium materials.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
    </>
  );
}