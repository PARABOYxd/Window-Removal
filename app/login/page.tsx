'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Wrench, Phone } from 'lucide-react';
import { MotionDiv } from '@/components/ui/motion-wrapper';
import { GlassCard } from '@/components/ui/glass-card';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    phone: '',
    password: '',
    remember: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const router = useRouter();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.password) newErrors.password = 'Password is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    // Mock login - simulate API call
    setTimeout(() => {
      localStorage.setItem('user', JSON.stringify({
        name: 'John Doe',
        phone: formData.phone,
        email: 'john@example.com'
      }));
      setIsLoading(false);
      router.push('/dashboard');
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-[#0e0e0e] via-[#1a1a1a] to-[#0e0e0e]">
      <MotionDiv
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-full max-w-md"
      >
        <GlassCard className="p-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-[#b8a47e]/20 mb-4">
              <Wrench className="w-8 h-8 text-[#b8a47e]" />
            </div>
            <h1 className="text-2xl font-bold text-[#f4f4f4] mb-2">Welcome Back</h1>
            <p className="text-[#a1a1a1]">Sign in to your WindowFix Pro account</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-[#f4f4f4] mb-2">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#a1a1a1]" />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full pl-12 pr-4 py-3 bg-white/5 border rounded-lg text-[#f4f4f4] placeholder-[#a1a1a1] focus:outline-none focus:ring-1 transition-colors ${
                    errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-[#b8a47e] focus:ring-[#b8a47e]'
                  }`}
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#f4f4f4] mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 pr-12 bg-white/5 border rounded-lg text-[#f4f4f4] placeholder-[#a1a1a1] focus:outline-none focus:ring-1 transition-colors ${
                    errors.password ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-[#b8a47e] focus:ring-[#b8a47e]'
                  }`}
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#a1a1a1] hover:text-[#b8a47e] transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-[#b8a47e] bg-white/5 border border-white/10 rounded focus:ring-[#b8a47e] focus:ring-2"
                />
                <span className="ml-2 text-sm text-[#a1a1a1]">Remember me</span>
              </label>
              <Link href="/forgot-password" className="text-sm text-[#b8a47e] hover:text-[#b8a47e]/80 transition-colors">
                Forgot password?
              </Link>
            </div>

            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[#b8a47e] text-black py-3 px-4 rounded-lg font-semibold hover:bg-[#b8a47e]/90 focus:outline-none focus:ring-2 focus:ring-[#b8a47e] focus:ring-offset-2 focus:ring-offset-[#0e0e0e] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin mr-2" />
                  Signing In...
                </div>
              ) : (
                'Sign In'
              )}
            </motion.button>
          </form>

          {/* Sign Up Link */}
          <div className="mt-8 text-center">
            <p className="text-[#a1a1a1]">
              Don't have an account?{' '}
              <Link href="/signup" className="text-[#b8a47e] hover:text-[#b8a47e]/80 font-medium transition-colors">
                Sign up
              </Link>
            </p>
          </div>
        </GlassCard>
      </MotionDiv>
    </div>
  );
}