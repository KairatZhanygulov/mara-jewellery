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
            Zamansız Mücevherler, El İşçiliğiyle Hazırlandı
          </h1>
          <a href="/collection">
            <button className="mt-6 border border-white px-8 py-3">
              Koleksiyonu Keşfet
            </button>
          </a>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-10 px-10 py-24 items-center">
        <img src="/workbench.jpg" className="w-full h-[420px] object-cover" />
        <div>
          <h2 className="text-4xl font-serif mb-4">Atölye</h2>
          <p className="text-gray-600 mb-6">
            Her el yapımı parçanın ardındaki sakin süreci keşfedin.
          </p>
          <a href="/workbench">
            <button className="border px-8 py-3">Keşfet</button>
          </a>
        </div>
      </section>

      <section className="bg-black text-white py-24 px-10">
        <p className="text-2xl max-w-2xl font-serif">
          “Her parça bir hisle başlar, ardından bir forma dönüşür.”
        </p>
        <p className="mt-4 text-sm">— MA&RA</p>
      </section>

      <section className="py-24 px-10 text-center">
        <h2 className="text-4xl font-serif mb-4">Hikayemiz</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          MA&RA; zarafet, anılar, doğa ve zanaatkarlıktan ilham alan bir
          mücevher evrenidir.
        </p>
        <a href="/story">
          <button className="border px-8 py-3">Hikayeyi Oku</button>
        </a>
      </section>

      <section className="py-20 px-10">
        <h2 className="text-3xl font-serif text-center mb-10">
          Sosyal İlham
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
          <h2 className="text-4xl font-serif mb-4">İletişim</h2>
          <p className="text-gray-600 mb-6">Size yardımcı olmaktan memnuniyet duyarız.</p>
          <a href="/contact">
            <button className="border px-8 py-3">Bizimle İletişime Geçin</button>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}