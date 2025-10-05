'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowLeft, MessageCircle, CircleCheck as CheckCircle } from 'lucide-react';
import { MotionDiv } from '@/components/ui/motion-wrapper';
import { GlassCard } from '@/components/ui/glass-card';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const [step, setStep] = useState<'phone' | 'otp' | 'success'>('phone');
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    phone: '',
    otp: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validatePhone = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateOTP = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.otp.trim()) newErrors.otp = 'OTP is required';
    else if (!/^[0-9]{6}$/.test(formData.otp)) {
      newErrors.otp = 'Please enter a valid 6-digit OTP';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePhoneSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validatePhone()) return;
    
    setIsLoading(true);
    
    // Mock API call to send OTP
    setTimeout(() => {
      setIsLoading(false);
      setStep('otp');
    }, 2000);
  };

  const handleOTPSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateOTP()) return;
    
    setIsLoading(true);
    
    // Mock API call to verify OTP
    setTimeout(() => {
      setIsLoading(false);
      setStep('success');
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const resendOTP = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
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
          {/* Back Button */}
          <div className="mb-6">
            <Link 
              href="/login" 
              className="inline-flex items-center text-[#a1a1a1] hover:text-[#b8a47e] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Login
            </Link>
          </div>

          {/* Phone Step */}
          {step === 'phone' && (
            <>
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center p-3 rounded-full bg-[#b8a47e]/20 mb-4">
                  <Phone className="w-8 h-8 text-[#b8a47e]" />
                </div>
                <h1 className="text-2xl font-bold text-[#f4f4f4] mb-2">Forgot Password?</h1>
                <p className="text-[#a1a1a1]">Enter your phone number to receive an OTP</p>
              </div>

              <form onSubmit={handlePhoneSubmit} className="space-y-6">
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
                      Sending OTP...
                    </div>
                  ) : (
                    'Send OTP'
                  )}
                </motion.button>
              </form>
            </>
          )}

          {/* OTP Step */}
          {step === 'otp' && (
            <>
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center p-3 rounded-full bg-[#b8a47e]/20 mb-4">
                  <MessageCircle className="w-8 h-8 text-[#b8a47e]" />
                </div>
                <h1 className="text-2xl font-bold text-[#f4f4f4] mb-2">Enter OTP</h1>
                <p className="text-[#a1a1a1]">
                  We've sent a 6-digit code to<br />
                  <span className="text-[#b8a47e] font-medium">{formData.phone}</span>
                </p>
              </div>

              <form onSubmit={handleOTPSubmit} className="space-y-6">
                <div>
                  <label htmlFor="otp" className="block text-sm font-medium text-[#f4f4f4] mb-2">
                    Enter OTP
                  </label>
                  <input
                    type="text"
                    id="otp"
                    name="otp"
                    value={formData.otp}
                    onChange={handleInputChange}
                    maxLength={6}
                    className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-[#f4f4f4] placeholder-[#a1a1a1] focus:outline-none focus:ring-1 transition-colors text-center text-2xl tracking-widest ${
                      errors.otp ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-[#b8a47e] focus:ring-[#b8a47e]'
                    }`}
                    placeholder="000000"
                    required
                  />
                  {errors.otp && <p className="mt-1 text-sm text-red-500">{errors.otp}</p>}
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
                      Verifying OTP...
                    </div>
                  ) : (
                    'Verify OTP'
                  )}
                </motion.button>

                <div className="text-center">
                  <p className="text-[#a1a1a1] text-sm mb-2">Didn't receive the code?</p>
                  <button
                    type="button"
                    onClick={resendOTP}
                    disabled={isLoading}
                    className="text-[#b8a47e] hover:text-[#b8a47e]/80 font-medium transition-colors disabled:opacity-50"
                  >
                    Resend OTP
                  </button>
                </div>
              </form>
            </>
          )}

          {/* Success Step */}
          {step === 'success' && (
            <>
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center p-3 rounded-full bg-green-500/20 mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h1 className="text-2xl font-bold text-[#f4f4f4] mb-2">OTP Verified!</h1>
                <p className="text-[#a1a1a1]">You can now reset your password</p>
              </div>

              <div className="space-y-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#b8a47e] text-black py-3 px-4 rounded-lg font-semibold hover:bg-[#b8a47e]/90 transition-colors"
                  onClick={() => {
                    // In a real app, this would redirect to reset password page
                    alert('Redirect to reset password page');
                  }}
                >
                  Reset Password
                </motion.button>

                <Link
                  href="/login"
                  className="block w-full text-center py-3 px-4 border border-[#b8a47e] text-[#b8a47e] rounded-lg font-semibold hover:bg-[#b8a47e]/10 transition-colors"
                >
                  Back to Login
                </Link>
              </div>
            </>
          )}
        </GlassCard>
      </MotionDiv>
    </div>
  );
}