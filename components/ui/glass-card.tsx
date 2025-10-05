import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const GlassCard = ({ children, className, hover = false }: GlassCardProps) => {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl border border-white/10',
        'bg-gradient-to-br from-white/5 to-white/0',
        'backdrop-blur-md backdrop-saturate-150',
        'shadow-2xl shadow-black/20',
        hover && 'transition-all duration-300 hover:border-[#b8a47e]/30 hover:shadow-[#b8a47e]/10',
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#b8a47e]/5 to-transparent" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};