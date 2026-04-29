import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const faqs = [
  {
    q: "Do you ship internationally?",
    a: "Currently, we only ship within the continental United States. We are working on expanding our shipping capabilities soon."
  },
  {
    q: "How do I care for my botanicals?",
    a: "Each arrangement comes with a specific care card. Generally, keep them away from direct sunlight and change the water every 2-3 days."
  },
  {
    q: "Can I place a custom order?",
    a: "Yes, we love custom projects! Please use the contact form to reach out with your requirements."
  }
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-24 section-padding max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl mb-16 text-center">FAQ</h1>
        <div className="space-y-12">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-100 pb-12">
              <h3 className="text-2xl mb-4">{faq.q}</h3>
              <p className="text-lg opacity-60 font-sans leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
