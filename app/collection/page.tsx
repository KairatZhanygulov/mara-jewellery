import Header from "@/components/Header";
import Footer from "@/components/Footer";

const collections = [
  {
    title: "Architect of Light",
    text: "Where architecture meets elegance. Bold geometric forms designed for those who find beauty in structure and clarity.",
    image: "/collection1.jpg",
    color: "bg-[#a88745]",
  },
  {
    title: "Echo of Earth",
    text: "Ancient energy for the modern soul. Organic textures and deep gemstones inspired by the untamed elements of the earth.",
    image: "/collection2.jpg",
    color: "bg-[#a88745]",
  },
  {
    title: "Liquid Gold",
    text: "Liquid gold frozen in time. Soft, molten silhouettes that celebrate the natural curves and flow of femininity.",
    image: "/collection3.jpg",
    color: "bg-[#a88745]",
  },
  {
    title: "Deep Ember",
    text: "A legacy in every glow. Intense fiery tones and timeless gold, crafted for a look of sophisticated power and deep mystery.",
    image: "/collection4.jpg",
    color: "bg-[#a88745]",
  },
];

const categories = [
  { name: "Earrings", image: "/earrings.jpg" },
  { name: "Bracelets", image: "/bracelets.jpg" },
  { name: "Pendants", image: "/pendants.jpg" },
  { name: "Brooches", image: "/brooches.jpg" },
  { name: "Watches", image: "/watches.jpg" },
  { name: "Necklaces", image: "/necklaces.jpg" },
  { name: "Rings", image: "/rings.jpg" },
];

export default function CollectionPage() {
  return (
    <main className="bg-[#f5f5f5] text-black">
      <Header />

      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <h1 className="text-4xl md:text-5xl font-serif text-center mb-12 md:mb-16">
          Collection
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
                  Explore Now
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
      <section className="bg-[#f5f5f5] px-6 md:px-10 py-20 md:py-24 text-center">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-serif mb-4">
      Categories
    </h2>

    <p className="text-gray-500 mb-12 md:mb-14 max-w-xl mx-auto leading-7">
      You may tap or click on a category to browse related pieces.
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
  </div>
</section>

      <Footer />
    </main>
  );
}