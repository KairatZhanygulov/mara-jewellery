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
          <h1 className="text-6xl font-serif mb-6">Bu bizim hikayemiz...</h1>

          <p className="text-lg leading-8 mb-6">
            MA&RA: Altında hayat bulan farklı vizyonların uyumu. Biz, seri
            üretimin mekanik yapısından çok zanaatkarlığın ruhuna inanıyoruz.
          </p>

          <div className="space-y-3 text-lg leading-8">
            <p>
              <strong>Ma</strong> — Sıradanlığın ötesine geçiş.
            </p>
            <p>
              <strong>&</strong> — Birlikteliğimizin kopmaz bağı.
            </p>
            <p>
              <strong>Ra</strong> — Her parçaya işlenen ışık ve güç.
            </p>
          </div>

          <p className="text-lg leading-8 mt-6">
            Felsefemiz, <em>“Simply Beyond,”</em> özümüzü tanımlar: Gerçek
            lüks, hiçbir şey gereksiz olmadığında ve her detay derin bir anlam
            taşıdığında ortaya çıkar.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}