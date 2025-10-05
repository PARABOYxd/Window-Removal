'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Wrench, RotateCcw, Paintbrush, Hammer, ArrowRight } from 'lucide-react';
import { MotionDiv, staggerContainer, fadeInUp } from '@/components/ui/motion-wrapper';
import { GlassCard } from '@/components/ui/glass-card';

const services = [
  {
    id: 1,
    title: 'Window Repair',
    description: 'Professional repair services for damaged windows, seals, and frames.',
    icon: Wrench,
    price: 'Starting From ₹399',
    duration: '1-2 hours',
    beforeImage: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    afterImage: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg'
  },
  {
    id: 2,
    title: 'Window Replacement',
    description: 'Complete window replacement with premium energy-efficient materials.',
    icon: RotateCcw,
    price: 'Starting From ₹599',
    duration: '2-4 hours',
    beforeImage: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg',
    afterImage: 'https://images.pexels.com/photos/1396126/pexels-photo-1396126.jpeg'
  },
  {
    id: 3,
    title: 'Window Repainting',
    description: 'Refresh and protect your windows with professional repainting services.',
    icon: Paintbrush,
    price: 'Starting From ₹499',
    duration: '2-3 hours',
    beforeImage: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    afterImage: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg'
  },
  {
    id: 4,
    title: 'New Installation',
    description: 'Expert installation of new windows for construction and renovation.',
    icon: Hammer,
    price: 'Starting From ₹799',
    duration: '3-6 hours',
    beforeImage: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg',
    afterImage: 'https://images.pexels.com/photos/1396126/pexels-photo-1396126.jpeg'
  }
];

export const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0e0e0e]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#f4f4f4] mb-6">
            Our Expert <span className="text-[#b8a47e]">Services</span>
          </h2>
          <p className="text-xl text-[#a1a1a1] max-w-3xl mx-auto leading-relaxed">
            From quick repairs to complete replacements, we provide comprehensive window services
            with premium materials and expert craftsmanship.
          </p>
        </MotionDiv>

        {/* Services Grid */}
        <MotionDiv
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            const isActive = hoveredService === service.id;

            return (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                onHoverStart={() => setHoveredService(service.id)}
                onHoverEnd={() => setHoveredService(null)}
                onClick={() => setHoveredService(isActive ? null : service.id)} // Mobile tap
                className="group cursor-pointer"
              >
                <GlassCard hover className="p-6 h-full">
                  <div className="flex flex-col h-full">
                    {/* Icon + Price */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-[#b8a47e]/20 group-hover:bg-[#b8a47e]/30 transition-colors">
                        <Icon className="w-6 h-6 text-[#b8a47e]" />
                      </div>
                      <div className="text-right">
                        <div className="text-[#b8a47e] font-bold text-lg">{service.price}</div>
                        <div className="text-[#a1a1a1] text-sm">{service.duration}</div>
                      </div>
                    </div>

                    {/* Title + Description */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#f4f4f4] mb-3">{service.title}</h3>
                      <p className="text-[#a1a1a1] mb-6 leading-relaxed">{service.description}</p>
                    </div>

                    {/* Before/After Image */}
                    <div className="relative mb-6 rounded-xl overflow-hidden aspect-video">
                      {/* Before image always visible */}
                      <Image
                        src={service.beforeImage}
                        alt={`${service.title} - Before`}
                        fill
                        className="object-cover transition-opacity duration-700 ease-in-out"
                      />

                      {/* After image overlay */}
                      <motion.div
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isActive ? 1 : 0 }}
                        transition={{ duration: 0.6, ease: 'easeInOut' }}
                      >
                        <Image
                          src={service.afterImage}
                          alt={`${service.title} - After`}
                          fill
                          className="object-cover"
                        />
                      </motion.div>

                      {/* Label */}
                      <div className="absolute bottom-2 left-2 flex gap-2">
                        <span
                          className={`px-2 py-1 rounded text-xs font-medium transition-all ${isActive
                            ? 'bg-[#b8a47e]/80 text-black'
                            : 'bg-black/60 text-white'
                            }`}
                        >
                          {isActive ? 'After' : 'Before'}
                        </span>
                      </div>
                    </div>

                    {/* Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-[#b8a47e]/10 hover:bg-[#b8a47e]/20 border border-[#b8a47e]/30 text-[#b8a47e] py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-colors"
                    >
                      Book Service
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </MotionDiv>

        {/* CTA */}
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#b8a47e] text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#b8a47e]/90 transition-colors shadow-lg"
          >
            Get Your Window Fixed Today
          </motion.button>
        </MotionDiv>
      </div>
    </section>
  );
};
