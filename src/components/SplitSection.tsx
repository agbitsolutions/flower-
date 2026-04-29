'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const SplitSection = () => {
  return (
    <section className="bg-bg-dark text-white overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Text Content */}
        <div className="w-full md:w-1/2 section-padding flex flex-col justify-center order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="uppercase tracking-[0.2em] text-xs mb-4 opacity-60">The Perfect Gift</p>
            <h2 className="text-4xl md:text-6xl mb-8 leading-tight">Share the beauty <br /> of botanicals.</h2>
            <p className="text-lg opacity-80 mb-10 max-w-md font-sans leading-relaxed">
              Our digital gift cards are the perfect way to let your loved ones choose their own curated experience. Valid for all in-store and online purchases.
            </p>
            <a href="/gift-cards" className="btn-white uppercase text-xs tracking-widest">
              Purchase Gift Card
            </a>
          </motion.div>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 h-[500px] md:h-auto relative order-1 md:order-2">
          <Image 
            src="/images/gift.png"
            alt="Gift Card"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default SplitSection;
