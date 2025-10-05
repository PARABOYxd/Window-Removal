export const COLORS = {
  background: '#0e0e0e',
  accent: '#b8a47e', 
  text: '#f4f4f4',
  textSecondary: '#a1a1a1',
  card: '#1a1a1a',
  border: '#2a2a2a'
} as const;

export const SERVICES = [
  {
    id: '1',
    name: 'Window Repair',
    description: 'Professional repair services for damaged windows',
    icon: 'wrench',
    price: 'From $89',
    duration: '1-2 hours'
  },
  {
    id: '2', 
    name: 'Window Replacement',
    description: 'Complete window replacement with premium materials',
    icon: 'replace',
    price: 'From $299',
    duration: '2-4 hours'
  },
  {
    id: '3',
    name: 'Window Repainting',
    description: 'Refresh your windows with professional repainting',
    icon: 'paintbrush',
    price: 'From $149',
    duration: '2-3 hours'
  },
  {
    id: '4',
    name: 'New Installation',
    description: 'Expert installation of new windows',
    icon: 'hammer',
    price: 'From $399',
    duration: '3-6 hours'
  }
];

export const MOCK_BOOKINGS = [
  {
    id: '1',
    userId: '1',
    service: 'Window Repair',
    date: '2024-01-15',
    time: '10:00 AM',
    address: '123 Main Street, City',
    status: 'confirmed' as const,
    description: 'Broken window seal needs repair',
    createdAt: new Date('2024-01-10')
  },
  {
    id: '2',
    userId: '1', 
    service: 'Window Replacement',
    date: '2024-01-20',
    time: '2:00 PM',
    address: '456 Oak Avenue, City',
    status: 'pending' as const,
    description: 'Replace old double-hung windows',
    createdAt: new Date('2024-01-12')
  }
];