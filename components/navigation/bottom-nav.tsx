'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Chrome as Home, Settings, Phone, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/services', label: 'Services', icon: Settings },
  { href: '/contact', label: 'Contact', icon: Phone },
  { href: '/dashboard', label: 'Profile', icon: User }
];

export const BottomNav = () => {
  const pathname = usePathname();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
      <div className="bg-black/90 backdrop-blur-md border-t border-white/10 px-4 py-2">
        <div className="flex justify-around items-center">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link key={item.href} href={item.href} className="relative">
                <motion.div
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    'flex flex-col items-center p-3 rounded-xl transition-colors',
                    isActive ? 'text-[#b8a47e]' : 'text-[#a1a1a1]'
                  )}
                >
                  <Icon className="w-5 h-5 mb-1" />
                  <span className="text-xs font-medium">{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-[#b8a47e]/10 rounded-xl"
                      initial={false}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};