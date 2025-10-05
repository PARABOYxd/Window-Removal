export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  createdAt: Date;
}

export interface Booking {
  id: string;
  userId: string;
  service: string;
  date: string;
  time: string;
  address: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  description?: string;
  createdAt: Date;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  price: string;
  duration: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}