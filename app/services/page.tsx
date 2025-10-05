'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Check, ArrowRight, Star, Shield, Clock } from 'lucide-react';
import { MotionDiv, staggerContainer, fadeInUp } from '@/components/ui/motion-wrapper';
import { GlassCard } from '@/components/ui/glass-card';

const services = [
  {
    id: 1,
    title: 'Window Repair',
    price: 'Starting at $89',
    duration: '1-2 hours',
    description: 'Professional repair services for all types of window damage including broken glass, faulty seals, damaged frames, and hardware issues.',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    features: [
      'Broken glass replacement',
      'Seal and weatherstrip repair',
      'Frame restoration',
      'Hardware replacement',
      '6-month warranty',
      'Emergency services available'
    ],
    popular: false
  },
  {
    id: 2,
    title: 'Window Replacement',
    price: 'Starting at $299',
    duration: '2-4 hours',
    description: 'Complete window replacement with energy-efficient materials and professional installation for maximum comfort and savings.',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
    features: [
      'Energy-efficient windows',
      'Professional measurement',
      'Full installation service',
      'Debris removal',
      '10-year warranty',
      'Free consultation'
    ],
    popular: true
  },
  {
    id: 3,
    title: 'Window Repainting',
    price: 'Starting at $149',
    duration: '2-3 hours',
    description: 'Refresh and protect your window frames with high-quality paint and primer designed for long-lasting durability.',
    image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg',
    features: [
      'Surface preparation',
      'Premium paint & primer',
      'Color matching service',
      'Weather protection',
      '5-year warranty',
      'Clean-up included'
    ],
    popular: false
  },
  {
    id: 4,
    title: 'New Installation',
    price: 'Starting at $399',
    duration: '3-6 hours',
    description: 'Expert installation of new windows for construction projects and home renovations with precision and care.',
    image: 'https://images.pexels.com/photos/1396126/pexels-photo-1396126.jpeg',
    features: [
      'Custom sizing available',
      'Professional installation',
      'Building code compliance',
      'Insulation & sealing',
      '15-year warranty',
      'Project management'
    ],
    popular: false
  }
];

const benefits = [
  {
    icon: Shield,
    title: 'Fully Insured',
    description: 'Licensed and insured professionals with comprehensive coverage'
  },
  {
    icon: Star,
    title: 'Quality Guaranteed',
    description: 'Premium materials and craftsmanship with extended warranties'
  },
  {
    icon: Clock,
    title: 'Fast Service',
    description: 'Quick response times and efficient completion of projects'
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen px-4 py-8 bg-gradient-to-br from-[#0e0e0e] via-[#1a1a1a] to-[#0e0e0e]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#f4f4f4] mb-6">
            Our <span className="text-[#b8a47e]">Services</span>
          </h1>
          <p className="text-xl text-[#a1a1a1] max-w-3xl mx-auto leading-relaxed">
            Professional window services with premium materials, expert craftsmanship, and comprehensive warranties. 
            Choose the perfect solution for your home or business.
          </p>
        </MotionDiv>

        {/* Benefits */}
        <MotionDiv
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div key={index} variants={fadeInUp}>
                <GlassCard hover className="p-6 text-center">
                  <div className="inline-flex items-center justify-center p-3 rounded-full bg-[#b8a47e]/20 mb-4">
                    <Icon className="w-8 h-8 text-[#b8a47e]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#f4f4f4] mb-2">{benefit.title}</h3>
                  <p className="text-[#a1a1a1]">{benefit.description}</p>
                </GlassCard>
              </motion.div>
            );
          })}
        </MotionDiv>

        {/* Services Grid */}
        <MotionDiv
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-16"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={fadeInUp}>
              <GlassCard hover className="h-full overflow-hidden">
                <div className="relative">
                  {service.popular && (
                    <div className="absolute top-4 right-4 z-10 bg-[#b8a47e] text-black px-3 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <div className="aspect-video relative">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                </div>
                
                <div className="p-4 sm:p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#f4f4f4] mb-2">{service.title}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm text-[#a1a1a1]">
                        <span className="text-[#b8a47e] font-semibold text-base sm:text-lg">{service.price}</span>
                        <span>• {service.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-[#a1a1a1] mb-6 leading-relaxed">{service.description}</p>
                  
                  {/* Features List */}
                  <div className="mb-6">
                    <h4 className="text-[#f4f4f4] font-semibold mb-3">What's Included:</h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-[#a1a1a1]">
                          <Check className="w-4 h-4 text-[#b8a47e] flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* CTA Buttons */}
                  <div className="flex flex-col gap-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-[#b8a47e] text-black py-3 px-4 rounded-lg font-semibold hover:bg-[#b8a47e]/90 transition-colors flex items-center justify-center gap-2"
                    >
                      Book Now
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full border border-[#b8a47e] text-[#b8a47e] py-3 px-4 rounded-lg font-semibold hover:bg-[#b8a47e]/10 transition-colors"
                    >
                      Get Quote
                    </motion.button>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </MotionDiv>

        {/* Call to Action */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <GlassCard className="p-8">
            <h2 className="text-3xl font-bold text-[#f4f4f4] mb-4">
              Ready to Transform Your Windows?
            </h2>
            <p className="text-[#a1a1a1] mb-8 max-w-2xl mx-auto">
              Get a free consultation and quote today. Our expert team is ready to help you choose 
              the perfect window solution for your home or business.
            </p>
            <div className="flex flex-col gap-4 justify-center max-w-sm sm:max-w-md mx-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-[#b8a47e] text-black px-6 py-4 rounded-lg font-semibold hover:bg-[#b8a47e]/90 transition-colors"
              >
                Schedule Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full border border-[#b8a47e] text-[#b8a47e] px-6 py-4 rounded-lg font-semibold hover:bg-[#b8a47e]/10 transition-colors"
              >
                Call (555) 123-4567
              </motion.button>
            </div>
          </GlassCard>
        </MotionDiv>
      </div>
    </div>
  );
}