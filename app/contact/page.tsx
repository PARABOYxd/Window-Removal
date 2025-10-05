'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, CircleCheck as CheckCircle } from 'lucide-react';
import { MotionDiv, fadeInUp, staggerContainer } from '@/components/ui/motion-wrapper';
import { GlassCard } from '@/components/ui/glass-card';
import type { ContactForm } from '@/lib/types';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState<Partial<ContactForm>>({});

  const validateForm = () => {
    const newErrors: Partial<ContactForm> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactForm]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="min-h-screen px-4 py-8 bg-gradient-to-br from-[#0e0e0e] via-[#1a1a1a] to-[#0e0e0e]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#f4f4f4] mb-6">
            Get In <span className="text-[#b8a47e]">Touch</span>
          </h1>
          <p className="text-xl text-[#a1a1a1] max-w-2xl mx-auto">
            Ready to transform your windows? Contact us today for a free consultation and quote.
          </p>
        </MotionDiv>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <MotionDiv
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="order-1 lg:order-1"
          >
            <GlassCard className="p-6 sm:p-8">
              <motion.div variants={fadeInUp}>
                <h2 className="text-xl sm:text-2xl font-bold text-[#f4f4f4] mb-6">Send Us a Message</h2>
                
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-2"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-green-500 font-medium">Message sent successfully!</span>
                  </motion.div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#f4f4f4] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-[#f4f4f4] placeholder-[#a1a1a1] focus:outline-none focus:ring-1 transition-colors ${
                          errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-[#b8a47e] focus:ring-[#b8a47e]'
                        }`}
                        placeholder="Enter your full name"
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                    </div>
                    
                    <div className="sm:col-span-1">
                      <label htmlFor="phone" className="block text-sm font-medium text-[#f4f4f4] mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-[#f4f4f4] placeholder-[#a1a1a1] focus:outline-none focus:ring-1 transition-colors ${
                          errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-[#b8a47e] focus:ring-[#b8a47e]'
                        }`}
                        placeholder="Enter your phone number"
                      />
                      {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#f4f4f4] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-[#f4f4f4] placeholder-[#a1a1a1] focus:outline-none focus:ring-1 transition-colors ${
                        errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-[#b8a47e] focus:ring-[#b8a47e]'
                      }`}
                      placeholder="Enter your email address"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#f4f4f4] mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-[#f4f4f4] placeholder-[#a1a1a1] focus:outline-none focus:ring-1 transition-colors resize-none ${
                        errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-[#b8a47e] focus:ring-[#b8a47e]'
                      }`}
                      placeholder="Tell us about your window service needs..."
                    />
                    {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#b8a47e] text-black py-4 px-6 rounded-lg font-semibold hover:bg-[#b8a47e]/90 focus:outline-none focus:ring-2 focus:ring-[#b8a47e] focus:ring-offset-2 focus:ring-offset-[#0e0e0e] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin mr-2" />
                        Sending Message...
                      </div>
                    ) : (
                      'Send Message'
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </GlassCard>
          </MotionDiv>

          {/* Contact Information & Map */}
          <div className="order-2 lg:order-2 space-y-4 sm:space-y-6">
            {/* Contact Info Cards */}
            <MotionDiv
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="space-y-3 sm:space-y-4"
            >
              {[
                {
                  icon: Phone,
                  title: '24/7 Phone Support',
                  content: '(555) 123-4567',
                  description: 'Call us anytime for emergency repairs'
                },
                {
                  icon: Mail,
                  title: 'Email Us',
                  content: 'info@windowfixpro.com',
                  description: 'We respond within 24 hours'
                },
                {
                  icon: MapPin,
                  title: 'Visit Our Office',
                  content: '123 Main Street, City, State 12345',
                  description: 'Open Monday - Friday, 8AM - 6PM'
                },
                {
                  icon: Clock,
                  title: 'Business Hours',
                  content: 'Mon-Fri: 8AM-6PM, Sat: 9AM-4PM',
                  description: 'Emergency services available 24/7'
                }
              ].map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div key={index} variants={fadeInUp}>
                    <GlassCard hover className="p-4 sm:p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 sm:p-3 rounded-xl bg-[#b8a47e]/20 flex-shrink-0">
                          <Icon className="w-6 h-6 text-[#b8a47e]" />
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-[#f4f4f4] mb-1">{info.title}</h3>
                          <p className="text-[#b8a47e] font-medium mb-1 text-sm sm:text-base break-words">{info.content}</p>
                          <p className="text-[#a1a1a1] text-sm">{info.description}</p>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </MotionDiv>

            {/* Google Map Placeholder */}
            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <GlassCard className="p-4">
                <div className="aspect-video bg-gradient-to-br from-[#b8a47e]/20 to-[#b8a47e]/5 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-[#b8a47e] mx-auto mb-4" />
                    <p className="text-[#f4f4f4] font-medium mb-2">Interactive Map</p>
                    <p className="text-[#a1a1a1] text-sm">Find our location and get directions</p>
                  </div>
                </div>
              </GlassCard>
            </MotionDiv>
          </div>
        </div>
      </div>
    </div>
  );
}