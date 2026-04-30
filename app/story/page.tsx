import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function StoryPage() {
  return (
    <main className="bg-white text-black">
      <Header />

      <section className="relative h-[80vh]">
        <img src="/story.jpg" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/45"></div>

        <div className="absolute bottom-24 left-20 text-white max-w-3xl">
          <h1 className="text-6xl font-serif mb-6">This is our story...</h1>

          <p className="text-lg leading-8 mb-6">
            MA&RA: A synergy of distinct visions, captured in gold. We believe
            in the spirit of craftsmanship over the mechanics of mass production.
          </p>

          <div className="space-y-3 text-lg leading-8">
            <p>
              <strong>Ma</strong> — Transcendence beyond the ordinary.
            </p>
            <p>
              <strong>&</strong> — The unbreakable bond of our collective.
            </p>
            <p>
              <strong>Ra</strong> — The light and power infused into every piece.
            </p>
          </div>

          <p className="text-lg leading-8 mt-6">
            Our philosophy, <em>“Simply Beyond,”</em> defines our essence: true
            luxury is found when nothing is redundant, yet every detail holds
            profound depth.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}