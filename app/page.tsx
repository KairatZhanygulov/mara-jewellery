import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#fefefb] text-black">
      <Header />

      <section className="relative h-[80vh]">
        <img src="/hero.jpg" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/25"></div>

        <div className="absolute bottom-20 left-20 text-white max-w-xl">
          <h1 className="text-5xl font-serif leading-tight">
            Timeless Jewellery, Crafted by Hand
          </h1>
          <a href="/collection">
            <button className="mt-6 border border-white px-8 py-3">
              Explore Collection
            </button>
          </a>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-10 px-10 py-24 items-center">
        <img src="/workbench.jpg" className="w-full h-[420px] object-cover" />
        <div>
          <h2 className="text-4xl font-serif mb-4">The Workbench</h2>
          <p className="text-gray-600 mb-6">
            Discover the quiet process behind each handmade piece.
          </p>
          <a href="/workbench">
            <button className="border px-8 py-3">Explore</button>
          </a>
        </div>
      </section>

      <section className="bg-black text-white py-24 px-10">
        <p className="text-2xl max-w-2xl font-serif">
          “Every piece begins with a feeling, then becomes a form.”
        </p>
        <p className="mt-4 text-sm">— MA&RA</p>
      </section>

      <section className="py-24 px-10 text-center">
        <h2 className="text-4xl font-serif mb-4">Our Story</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          MA&RA is a jewellery universe inspired by elegance, memory, nature,
          and craftsmanship.
        </p>
        <a href="/story">
          <button className="border px-8 py-3">Read Story</button>
        </a>
      </section>

      <section className="py-20 px-10">
        <h2 className="text-3xl font-serif text-center mb-10">
          Social Inspiration
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src="/g1.jpg" className="w-full h-[420px] object-cover" />
          <img src="/g2.jpg" className="w-full h-[420px] object-cover" />
          <img src="/g3.jpg" className="w-full h-[420px] object-cover" />
          <img src="/g4.jpg" className="w-full h-[420px] object-cover" />
        </div>
      </section>

      <section className="grid md:grid-cols-2 px-10 py-24 gap-10 items-center">
        <img src="/store.jpg" className="w-full h-[420px] object-cover" />
        <div>
          <h2 className="text-4xl font-serif mb-4">Contact</h2>
          <p className="text-gray-600 mb-6">We would love to assist you.</p>
          <a href="/contact">
            <button className="border px-8 py-3">Contact Us</button>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}