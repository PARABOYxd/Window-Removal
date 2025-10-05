'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { MotionDiv } from '@/components/ui/motion-wrapper';

const heroImages = [
  {
    src: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    alt: 'Window repair service'
  },
  {
    src: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
    alt: 'Window replacement'
  },
  {
    src: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg',
    alt: 'Window installation'
  }
];

export const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Parallax */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[currentImageIndex].src}
              alt={heroImages[currentImageIndex].alt}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#f4f4f4] mb-6 leading-tight">
            Professional
            <span className="text-[#b8a47e] block mt-2">Window Services</span>
          </h1>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-lg sm:text-xl text-[#a1a1a1] mb-8 max-w-2xl mx-auto leading-relaxed">
            Expert window repair, replacement, repainting, and installation services. 
            Transform your home with our professional touch.
          </p>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#b8a47e] text-black px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-[#b8a47e]/90 transition-colors shadow-lg"
          >
            Get Your Quote Now
            <ArrowRight className="w-5 h-5" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-[#b8a47e] text-[#b8a47e] px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-[#b8a47e]/10 transition-colors"
          >
            <Play className="w-5 h-5" />
            Watch Our Work
          </motion.button>
        </MotionDiv>

        {/* Service Highlights */}
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 flex justify-center items-center gap-8 text-[#a1a1a1] text-sm sm:text-base"
        >
          {['Repair', 'Replace', 'Repaint', 'Install'].map((service, index) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              className="flex items-center"
            >
              <span>{service}</span>
              {index < 3 && <div className="w-1 h-1 bg-[#b8a47e] rounded-full ml-8" />}
            </motion.div>
          ))}
        </MotionDiv>
      </div>

      {/* Scroll Indicator */}
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-[#b8a47e] rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-3 bg-[#b8a47e] rounded-full mt-2"
          />
        </motion.div>
      </MotionDiv>
    </div>
  );
};