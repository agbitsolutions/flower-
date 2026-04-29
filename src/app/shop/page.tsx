import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/ProductGrid';

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-16 section-padding border-b border-gray-100">
        <h1 className="text-5xl md:text-7xl mb-6">The Collection</h1>
        <p className="text-lg opacity-60 max-w-2xl font-sans">
          Curated botanicals, artisan candles, and handcrafted home goods designed to bring beauty and intention to your daily rituals.
        </p>
      </div>
      <ProductGrid />
      {/* Additional grid to make it look full */}
      <ProductGrid /> 
      <Footer />
    </main>
  );
}
