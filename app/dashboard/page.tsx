'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Headphones as HeadphonesIcon, Clock, CircleCheck as CheckCircle, CircleAlert as AlertCircle, Circle as XCircle } from 'lucide-react';
import { MotionDiv, staggerContainer, fadeInUp } from '@/components/ui/motion-wrapper';
import { GlassCard } from '@/components/ui/glass-card';
import { MOCK_BOOKINGS } from '@/lib/constants';
import type { Booking, User as UserType } from '@/lib/types';
import { useRouter } from 'next/navigation';

const statusConfig = {
  pending: { icon: Clock, color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
  confirmed: { icon: CheckCircle, color: 'text-green-500', bg: 'bg-green-500/10' },
  completed: { icon: CheckCircle, color: 'text-[#b8a47e]', bg: 'bg-[#b8a47e]/10' },
  cancelled: { icon: XCircle, color: 'text-red-500', bg: 'bg-red-500/10' }
};

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('bookings');
  const [user, setUser] = useState<UserType | null>(null);
  const [bookings] = useState<Booking[]>(MOCK_BOOKINGS);
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      router.push('/login');
      return;
    }
    setUser(JSON.parse(userData));
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    router.push('/login');
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#b8a47e]" />
      </div>
    );
  }

  const tabs = [
    { id: 'bookings', label: 'My Bookings', icon: Calendar },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'support', label: 'Support', icon: HeadphonesIcon }
  ];

  return (
    <div className="min-h-screen px-4 py-8 bg-gradient-to-br from-[#0e0e0e] via-[#1a1a1a] to-[#0e0e0e]">
      <div className="max-w-6xl mx-auto">
        {/* Welcome Header */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-[#f4f4f4] mb-2">
            Welcome back, <span className="text-[#b8a47e]">{user.name}</span>
          </h1>
          <p className="text-[#a1a1a1]">Manage your window services and account settings</p>
        </MotionDiv>

        {/* Tab Navigation */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <GlassCard className="p-2">
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-all relative ${
                      activeTab === tab.id
                        ? 'text-[#b8a47e] bg-[#b8a47e]/10'
                        : 'text-[#a1a1a1] hover:text-[#f4f4f4] hover:bg-white/5'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {tab.label}
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-[#b8a47e]/10 rounded-lg"
                        initial={false}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </GlassCard>
        </MotionDiv>

        {/* Tab Content */}
        <MotionDiv
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeTab === 'bookings' && (
            <MotionDiv
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="space-y-4"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-[#f4f4f4]">Your Bookings</h2>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#b8a47e] text-black px-4 py-2 rounded-lg font-medium hover:bg-[#b8a47e]/90 transition-colors"
                >
                  Book New Service
                </motion.button>
              </div>

              {bookings.map((booking) => {
                const StatusIcon = statusConfig[booking.status].icon;
                return (
                  <motion.div key={booking.id} variants={fadeInUp}>
                    <GlassCard hover className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="text-xl font-semibold text-[#f4f4f4] mb-1">
                                {booking.service}
                              </h3>
                              <p className="text-[#a1a1a1] text-sm">{booking.description}</p>
                            </div>
                            <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${statusConfig[booking.status].bg}`}>
                              <StatusIcon className={`w-4 h-4 ${statusConfig[booking.status].color}`} />
                              <span className={`text-sm font-medium ${statusConfig[booking.status].color}`}>
                                {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                              </span>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                            <div>
                              <span className="text-[#a1a1a1]">Date & Time:</span>
                              <p className="text-[#f4f4f4] font-medium">{booking.date} at {booking.time}</p>
                            </div>
                            <div>
                              <span className="text-[#a1a1a1]">Address:</span>
                              <p className="text-[#f4f4f4] font-medium">{booking.address}</p>
                            </div>
                            <div>
                              <span className="text-[#a1a1a1]">Booked on:</span>
                              <p className="text-[#f4f4f4] font-medium">{booking.createdAt.toLocaleDateString()}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex gap-2 mt-4 md:mt-0">
                          {booking.status === 'pending' && (
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-4 py-2 bg-red-500/10 text-red-500 border border-red-500/20 rounded-lg text-sm font-medium hover:bg-red-500/20 transition-colors"
                            >
                              Cancel
                            </motion.button>
                          )}
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 bg-[#b8a47e]/10 text-[#b8a47e] border border-[#b8a47e]/20 rounded-lg text-sm font-medium hover:bg-[#b8a47e]/20 transition-colors"
                          >
                            View Details
                          </motion.button>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </MotionDiv>
          )}

          {activeTab === 'profile' && (
            <GlassCard className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-[#f4f4f4]">Profile Settings</h2>
                <motion.button
                  onClick={handleLogout}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-red-500/10 text-red-500 border border-red-500/20 rounded-lg text-sm font-medium hover:bg-red-500/20 transition-colors"
                >
                  Logout
                </motion.button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#f4f4f4] mb-2">Name</label>
                  <input
                    type="text"
                    value={user.name}
                    readOnly
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-[#f4f4f4]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#f4f4f4] mb-2">Email</label>
                  <input
                    type="email"
                    value={user.email}
                    readOnly
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-[#f4f4f4]"
                  />
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                <p className="text-yellow-500 text-sm">
                  <AlertCircle className="w-4 h-4 inline mr-2" />
                  Profile editing will be available in a future update.
                </p>
              </div>
            </GlassCard>
          )}

          {activeTab === 'support' && (
            <GlassCard className="p-6">
              <h2 className="text-2xl font-bold text-[#f4f4f4] mb-6">Customer Support</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 bg-[#b8a47e]/10 border border-[#b8a47e]/20 rounded-lg">
                    <h3 className="text-lg font-semibold text-[#f4f4f4] mb-2">24/7 Phone Support</h3>
                    <p className="text-[#a1a1a1] mb-3">Need immediate help? Call us anytime.</p>
                    <p className="text-[#b8a47e] font-bold">(555) 123-4567</p>
                  </div>
                  
                  <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                    <h3 className="text-lg font-semibold text-[#f4f4f4] mb-2">Email Support</h3>
                    <p className="text-[#a1a1a1] mb-3">Send us your questions via email.</p>
                    <p className="text-[#b8a47e] font-medium">support@windowfixpro.com</p>
                  </div>
                </div>
                
                <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                  <h3 className="text-lg font-semibold text-[#f4f4f4] mb-4">Frequently Asked Questions</h3>
                  <ul className="space-y-2 text-[#a1a1a1]">
                    <li>• How to reschedule an appointment?</li>
                    <li>• What's included in window repair service?</li>
                    <li>• How long does window replacement take?</li>
                    <li>• Do you offer emergency services?</li>
                    <li>• What payment methods do you accept?</li>
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-4 text-[#b8a47e] hover:text-[#b8a47e]/80 font-medium transition-colors"
                  >
                    View All FAQs →
                  </motion.button>
                </div>
              </div>
            </GlassCard>
          )}
        </MotionDiv>
      </div>
    </div>
  );
}