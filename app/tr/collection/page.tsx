import Header from "@/components/Header";
import Footer from "@/components/Footer";

const collections = [
  {
    title: "Işığın Mimarı",
    text: "Mimarinin zarafetle buluştuğu yer. Yapıda ve netlikte güzelliği bulanlar için tasarlanmış güçlü geometrik formlar.",
    image: "/collection1.jpg",
    color: "bg-[#a88745]",
  },
  {
    title: "Toprağın Yankısı",
    text: "Modern ruh için kadim bir enerji. Doğanın vahşi elementlerinden ilham alan organik dokular ve derin değerli taşlar.",
    image: "/collection2.jpg",
    color: "bg-[#a88745]",
  },
  {
    title: "Sıvı Altın",
    text: "Zamanda donmuş sıvı altın. Feminenliğin doğal kıvrımlarını ve akışını kutlayan yumuşak, erimiş silüetler.",
    image: "/collection3.jpg",
    color: "bg-[#a88745]",
  },
  {
    title: "Derin Kor",
    text: "Her ışıltıda bir miras. Sofistike bir güç ve derin gizem görünümü için tasarlanmış yoğun ateş tonları ve zamansız altın.",
    image: "/collection4.jpg",
    color: "bg-[#a88745]",
  },
];

const categories = [
  { name: "Küpeler", image: "/earrings.jpg" },
  { name: "Bileklikler", image: "/bracelets.jpg" },
  { name: "Kolye Uçları", image: "/pendants.jpg" },
  { name: "Broşlar", image: "/brooches.jpg" },
  { name: "Saatler", image: "/watches.jpg" },
  { name: "Kolyeler", image: "/necklaces.jpg" },
  { name: "Yüzükler", image: "/rings.jpg" },
];

export default function CollectionPage() {
  return (
    <main className="bg-[#f5f5f5] text-black">
      <Header />

      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <h1 className="text-4xl md:text-5xl font-serif text-center mb-12 md:mb-16">
          Koleksiyon
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {collections.map((item, index) => (
            <div
              key={item.title}
              className={`grid md:grid-cols-2 min-h-[420px] ${
                index % 2 === 1 ? "md:grid-flow-dense" : ""
              }`}
            >
              <div className={`${item.color} text-white flex flex-col justify-center items-center text-center px-8 md:px-10 py-14`}>
                <h2 className="text-3xl md:text-4xl font-serif mb-6">
                  {item.title}
                </h2>

                <p className="text-sm leading-7 mb-8 max-w-sm">
                  “{item.text}”
                </p>

                <button className="border border-white px-10 py-3 text-sm">
                  Keşfet
                </button>
              </div>

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full min-h-[420px] object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-3">Kategoriler</h2>

        <p className="text-gray-500 mb-10 md:mb-14">
          İlgili parçaları incelemek için bir kategoriye dokunabilir veya tıklayabilirsiniz.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {categories.map((item) => (
            <div
              key={item.name}
              className="group relative h-[360px] md:h-[320px] overflow-hidden bg-white cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/35 md:bg-black/0 transition duration-500 md:group-hover:bg-black/45"></div>

              <h3 className="absolute inset-0 flex items-center justify-center text-3xl font-serif text-white opacity-100 md:opacity-0 transition duration-500 md:group-hover:opacity-100 drop-shadow-lg">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}