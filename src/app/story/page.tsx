'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function StoryPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full mt-24">
        <Image 
          src="/images/story_hero.png"
          alt="Our Story"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <h1 className="text-6xl md:text-8xl">Our Story</h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-[0.3em] text-xs mb-8 opacity-40 text-black">Since 2024</p>
          <h2 className="text-4xl md:text-5xl mb-12 leading-tight">Rooted in the belief that nature is the ultimate designer.</h2>
          <div className="space-y-8 text-lg font-sans opacity-70 leading-relaxed text-left">
            <p>
              Petal & Grace began with a simple vision: to bridge the gap between the wild beauty of the outdoors and the curated comfort of our homes. Our journey started in a small studio in Los Angeles, where we experimented with rare botanical arrangements and sustainable artisan goods.
            </p>
            <p>
              Every stem we select and every product we carry is chosen with intention. We work closely with local growers and independent artisans who share our commitment to quality, sustainability, and the art of slow living.
            </p>
            <p>
              Today, Petal & Grace is more than just a shop; it's a sanctuary for those who seek inspiration in the natural world. We invite you to explore our collection and bring a piece of that beauty into your own space.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Image Grid */}
      <section className="px-6 md:px-12 lg:px-24 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative aspect-square">
            <Image src="/images/product1.png" alt="Process" fill className="object-cover" />
          </div>
          <div className="relative aspect-square">
            <Image src="/images/product2.png" alt="Workshop" fill className="object-cover" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
