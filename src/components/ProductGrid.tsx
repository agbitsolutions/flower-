'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Artisan Candle',
    price: '$45.00',
    image: '/images/product1.png',
    tag: 'Fan Favorite'
  },
  {
    id: 2,
    name: 'Minimalist Vase',
    price: '$72.00',
    image: '/images/product2.png',
    tag: 'New Arrival'
  },
  {
    id: 3,
    name: 'Botanical Bundle',
    price: '$58.00',
    image: '/images/hero.png', // Reusing hero for now if product3 wasn't generated
    tag: 'Gift Idea'
  }
];

const ProductGrid = () => {
  return (
    <section id="shop" className="section-padding bg-white">
      <div className="flex justify-between items-end mb-12">
        <div>
          <p className="uppercase tracking-widest text-xs mb-2 opacity-60">Featured Items</p>
          <h2 className="text-4xl md:text-5xl">Fan Favorites</h2>
        </div>
        <a href="/shop" className="text-sm border-b border-black pb-1 uppercase tracking-widest hover:opacity-60 transition-opacity">
          View All
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {products.map((product, index) => (
          <motion.div 
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-bg-light">
              <Image 
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {product.tag && (
                <span className="absolute top-4 left-4 bg-white px-3 py-1 text-[10px] uppercase tracking-widest">
                  {product.tag}
                </span>
              )}
            </div>
            <h3 className="text-xl mb-1">{product.name}</h3>
            <p className="opacity-60 font-sans">{product.price}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
