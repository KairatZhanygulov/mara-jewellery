import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function WorkbenchPage() {
  return (
    <main className="bg-[#f5f5f5] text-black">
      <Header />

      <section className="max-w-7xl mx-auto px-10 pt-16">
        <div className="relative h-[460px]">
          <img
            src="/workbench-hero.jpg"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/25"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-10">
            <h1 className="text-5xl font-serif mb-6">
              MA&RA Atölyesi
            </h1>
            <p className="max-w-3xl leading-7">
              İlhamın forma dönüştüğü ve her detayın sabır, özen ve hayal
              gücüyle şekillendiği yer.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto text-center px-10 py-20">
        <p className="text-gray-600 leading-8">
          Bir parçayı tasarlama süreci her zaman eskiz çizmekle veya taş
          seçmekle başlamaz. İlham, çalışmanın yönünü belirler. Ardından
          sessiz ve özenli bir yolculuk başlar.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-10 pb-24 text-center">
        <h2 className="text-5xl font-serif mb-6">
          MA&RA’nın benzersiz parçalarının yolculuğu
        </h2>
        <p className="text-gray-500 mb-12">
          Mücevherlerimizin ardındaki zanaata kısa bir bakış.
        </p>

        <div className="relative">
          <img
            src="/workbench-video.jpg"
            className="w-full h-[520px] object-cover"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}