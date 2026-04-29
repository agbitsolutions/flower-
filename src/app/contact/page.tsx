'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-bg-dark text-white">
      <Navbar />
      
      <div className="relative min-h-[80vh] flex items-center pt-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/contact_bg.png"
            alt="Contact Background"
            fill
            className="object-cover opacity-40"
          />
        </div>

        <div className="relative z-10 section-padding w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl mb-8">Get in touch.</h1>
            <p className="text-xl opacity-60 mb-12 max-w-md font-sans">
              Have a question about our collection or interested in a custom botanical arrangement? We'd love to hear from you.
            </p>
            
            <div className="space-y-8 font-sans">
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest opacity-40 mb-1">Email</p>
                  <p>support@agbtechnologies.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest opacity-40 mb-1">Phone</p>
                  <p>90498747804</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest opacity-40 mb-1">Visit Us</p>
                  <p>mangalwar peth pune</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-md p-10 border border-white/10"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest opacity-40">First Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/20 py-2 outline-none focus:border-white transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest opacity-40">Last Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/20 py-2 outline-none focus:border-white transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest opacity-40">Email Address</label>
                <input type="email" className="w-full bg-transparent border-b border-white/20 py-2 outline-none focus:border-white transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest opacity-40">Message</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-white/20 py-2 outline-none focus:border-white transition-colors resize-none" />
              </div>
              <button className="w-full btn-white uppercase text-xs tracking-widest mt-8">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
