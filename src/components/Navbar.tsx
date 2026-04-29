'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag, Search, Menu, X, Share2, MessageCircle, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Left Links - Desktop */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link href="/shop" className="text-sm tracking-widest hover:opacity-60 transition-opacity uppercase">Shop</Link>
          <Link href="/story" className="text-sm tracking-widest hover:opacity-60 transition-opacity uppercase">Our Story</Link>
          <Link href="/journal" className="text-sm tracking-widest hover:opacity-60 transition-opacity uppercase">Journal</Link>
          <Link href="/contact" className="text-sm tracking-widest hover:opacity-60 transition-opacity uppercase">Contact</Link>
        </div>

        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 absolute left-1/2 -translate-x-1/2 group">
          <div className="relative w-10 h-10 transition-transform group-hover:scale-110">
            <Image 
              src="/images/logo.png" 
              alt="Petal & Grace Logo" 
              fill 
              className="object-contain"
            />
          </div>
          <span className="text-xl md:text-2xl font-serif tracking-[0.2em] uppercase pt-1">
            Petal & Grace
          </span>
        </Link>

        {/* Right Icons */}
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex items-center space-x-4">
            <Share2 size={18} className="hover:opacity-60 cursor-pointer transition-opacity" />
            <MessageCircle size={18} className="hover:opacity-60 cursor-pointer transition-opacity" />
            <Mail size={18} className="hover:opacity-60 cursor-pointer transition-opacity" />
          </div>
          <button className="hover:opacity-60 transition-opacity">
            <Search size={20} />
          </button>
          <button className="flex items-center space-x-2 hover:opacity-60 transition-opacity">
            <ShoppingBag size={20} />
            <span className="text-sm">(0)</span>
          </button>
          <button 
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
            className="fixed inset-0 bg-white z-[60] flex flex-col p-12"
          >
            <button 
              className="absolute top-8 right-8"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <div className="flex flex-col space-y-8 mt-12">
              <Link href="/shop" className="text-3xl font-serif" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
              <Link href="/story" className="text-3xl font-serif" onClick={() => setIsMobileMenuOpen(false)}>Our Story</Link>
              <Link href="/journal" className="text-3xl font-serif" onClick={() => setIsMobileMenuOpen(false)}>Journal</Link>
              <Link href="/contact" className="text-3xl font-serif" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            </div>
            <div className="mt-auto flex space-x-6">
              <Share2 size={24} />
              <MessageCircle size={24} />
              <Mail size={24} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
