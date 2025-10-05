import Link from 'next/link';
import { Wrench, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0e0e0e] border-t border-white/10 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 rounded-lg bg-[#b8a47e]">
                <Wrench className="w-5 h-5 text-black" />
              </div>
              <span className="text-xl font-bold text-white">WindowFix Pro</span>
            </div>
            <p className="text-[#a1a1a1] mb-6 max-w-md leading-relaxed">
              Professional window services for residential and commercial properties. 
              We specialize in repair, replacement, repainting, and installation with a commitment to excellence.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="p-2 rounded-lg bg-white/5 hover:bg-[#b8a47e]/20 text-[#a1a1a1] hover:text-[#b8a47e] transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-2 rounded-lg bg-white/5 hover:bg-[#b8a47e]/20 text-[#a1a1a1] hover:text-[#b8a47e] transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-2 rounded-lg bg-white/5 hover:bg-[#b8a47e]/20 text-[#a1a1a1] hover:text-[#b8a47e] transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#f4f4f4] font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-[#a1a1a1]">
              <li>
                <Link href="#" className="hover:text-[#b8a47e] transition-colors">
                  Window Repair
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#b8a47e] transition-colors">
                  Window Replacement
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#b8a47e] transition-colors">
                  Window Repainting
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#b8a47e] transition-colors">
                  New Installation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#b8a47e] transition-colors">
                  Emergency Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[#f4f4f4] font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-[#a1a1a1]">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#b8a47e]" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#b8a47e]" />
                <span>info@windowfixpro.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#b8a47e] mt-1" />
                <span>123 Main Street<br />City, State 12345</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-[#a1a1a1] text-sm">
            © {currentYear} WindowFix Pro. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="/privacy" className="text-[#a1a1a1] hover:text-[#b8a47e] text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[#a1a1a1] hover:text-[#b8a47e] text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};