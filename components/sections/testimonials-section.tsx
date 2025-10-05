'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { MotionDiv, staggerContainer, fadeInUp } from '@/components/ui/motion-wrapper';
import { GlassCard } from '@/components/ui/glass-card';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import './embla.css'; // Assuming a global CSS file for embla styles

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'Downtown',
    rating: 5,
    text: 'WindowFix Pro transformed our old windows completely. The team was professional, punctual, and the results exceeded our expectations. Our energy bills have decreased significantly!',
    service: 'Window Replacement'
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'Riverside',
    rating: 5,
    text: 'Quick and efficient repair service. They fixed our broken window seal in under 2 hours and cleaned up everything perfectly. Highly recommend their services!',
    service: 'Window Repair'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    location: 'Hillside',
    rating: 5,
    text: 'The repainting service brought our old windows back to life. The attention to detail and quality of work was outstanding. Will definitely use them again!',
    service: 'Window Repainting'
  },
  {
    id: 4,
    name: 'Emily Rodriguez',
    location: 'Hillside',
    rating: 5,
    text: 'The repainting service brought our old windows back to life. The attention to detail and quality of work was outstanding. Will definitely use them again!',
    service: 'Window Repainting'
  }
];

export const TestimonialsSection = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000, stopOnInteraction: false })]);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0e0e0e] to-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#f4f4f4] mb-6">
            What Our <span className="text-[#b8a47e]">Customers Say</span>
          </h2>
          <p className="text-xl text-[#a1a1a1] max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our window services.
          </p>
        </MotionDiv>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {testimonials.map((testimonial) => (
              <div className="embla__slide" key={testimonial.id}>
                <MotionDiv variants={fadeInUp}>
                  <GlassCard hover className="p-6 h-full">
                    <div className="flex flex-col h-full">
                      {/* Quote Icon */}
                      <div className="flex justify-between items-start mb-4">
                        <Quote className="w-8 h-8 text-[#b8a47e]/60" />
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-[#b8a47e] fill-current" />
                          ))}
                        </div>
                      </div>

                      {/* Testimonial Text */}
                      <div className="flex-1 mb-6">
                        <p className="text-[#f4f4f4] leading-relaxed italic">
                          "{testimonial.text}"
                        </p>
                      </div>

                      {/* Customer Info */}
                      <div className="border-t border-white/10 pt-4">
                        <div className="flex justify-between items-end">
                          <div>
                            <h4 className="text-[#f4f4f4] font-semibold">{testimonial.name}</h4>
                            <p className="text-[#a1a1a1] text-sm">{testimonial.location}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-[#b8a47e] text-sm font-medium">{testimonial.service}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </MotionDiv>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 text-[#a1a1a1]">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-[#b8a47e]">500+</span>
              <span>Happy Customers</span>
            </div>
            <div className="w-1 h-1 bg-[#a1a1a1] rounded-full hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-[#b8a47e]">5 Years</span>
              <span>Experience</span>
            </div>
            <div className="w-1 h-1 bg-[#a1a1a1] rounded-full hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-[#b8a47e]">24/7</span>
              <span>Support</span>
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};