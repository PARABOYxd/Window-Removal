'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { forwardRef, ReactNode, Ref } from 'react';

interface MotionWrapperProps extends Omit<HTMLMotionProps<'div'>, 'ref'> {
  children: ReactNode;
  className?: string;
}

export const MotionDiv = forwardRef<HTMLDivElement, MotionWrapperProps>(
  ({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
    return (
      <motion.div ref={ref} className={className} {...props}>
        {children}
      </motion.div>
    );
  }
);

export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8, ease: 'easeOut' }
};

export const slideInLeft = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: 'easeOut' }
};

export const slideInRight = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: 'easeOut' }
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};