import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Journal from '@/components/Journal';

export default function JournalPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-8 section-padding text-center">
        <h1 className="text-5xl md:text-7xl mb-6">Journal</h1>
        <p className="text-lg opacity-60 max-w-2xl mx-auto font-sans">
          Stories, seasonal inspirations, and reflections on the art of living beautifully with nature.
        </p>
      </div>
      <Journal />
      <div className="pb-24">
         <Journal /> 
      </div>
      <Footer />
    </main>
  );
}
