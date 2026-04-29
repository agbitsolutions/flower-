'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const posts = [
  {
    id: 1,
    title: 'Morning Rituals: The Art of Slow Living',
    category: 'Lifestyle',
    image: '/images/hero.png',
    date: 'April 24, 2024'
  },
  {
    id: 2,
    title: 'Spring Season: Curating Your Home Sanctuary',
    category: 'Design',
    image: '/images/product2.png',
    date: 'April 18, 2024'
  }
];

const Journal = () => {
  return (
    <section className="section-padding bg-bg-light">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <p className="uppercase tracking-[0.2em] text-xs mb-4 opacity-60">From the Journal</p>
        <h2 className="text-4xl md:text-5xl">Stories & Inspirations</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {posts.map((post, index) => (
          <motion.div 
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-video overflow-hidden mb-8">
              <Image 
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-4">
                <span className="text-[10px] uppercase tracking-widest bg-white px-2 py-1">{post.category}</span>
                <span className="text-[10px] uppercase tracking-widest opacity-40">{post.date}</span>
              </div>
              <h3 className="text-2xl group-hover:opacity-60 transition-opacity">{post.title}</h3>
              <p className="text-sm border-b border-black w-fit pb-1 uppercase tracking-widest mt-6">Read More</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Journal;
