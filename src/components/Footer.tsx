'use client';

import React from 'react';
import { Share2, MessageCircle, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12 px-6 md:px-12 lg:px-24 border-t border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
        {/* Newsletter */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl mb-8">Join the inner circle.</h2>
          <p className="text-sm opacity-60 mb-8 max-w-sm font-sans leading-relaxed">
            Sign up for our newsletter to receive updates on new arrivals, special offers and curated botanical inspiration.
          </p>
          <form className="flex border-b border-black py-2 max-w-md">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-transparent border-none outline-none flex-grow text-sm placeholder:text-gray-300"
            />
            <button type="submit" className="hover:translate-x-1 transition-transform">
              <ArrowRight size={20} />
            </button>
          </form>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-xs uppercase tracking-widest mb-8 opacity-40">Explore</h4>
          <ul className="space-y-4 text-sm font-sans">
            <li><a href="/shop" className="hover:opacity-40 transition-opacity">Shop All</a></li>
            <li><a href="/story" className="hover:opacity-40 transition-opacity">Our Story</a></li>
            <li><a href="/journal" className="hover:opacity-40 transition-opacity">Journal</a></li>
            <li><a href="/faq" className="hover:opacity-40 transition-opacity">FAQ</a></li>
          </ul>
        </div>

        {/* Info */}
        <div>
          <h4 className="text-xs uppercase tracking-widest mb-8 opacity-40">Contact</h4>
          <ul className="space-y-4 text-sm font-sans">
            <li>support@agbtechnologies.com</li>
            <li>90498747804</li>
            <li>mangalwar peth pune</li>
            <li className="pt-4 flex space-x-6">
              <Share2 size={18} className="hover:opacity-40 cursor-pointer" />
              <MessageCircle size={18} className="hover:opacity-40 cursor-pointer" />
              <Mail size={18} className="hover:opacity-40 cursor-pointer" />
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] opacity-40">
        <p>© 2024 agbtechnologies. All Rights Reserved.</p>
        <div className="flex space-x-8 mt-4 md:mt-0">
          <a href="/privacy" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
          <a href="/terms" className="hover:opacity-100 transition-opacity">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
