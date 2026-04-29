import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import SplitSection from '@/components/SplitSection';
import Journal from '@/components/Journal';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ProductGrid />
      <SplitSection />
      <Journal />
      <Footer />
    </main>
  );
}
