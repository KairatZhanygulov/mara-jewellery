import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="bg-[#f6f4f1] text-black">
      <Header />

      <section className="max-w-6xl mx-auto px-10 py-24">
        <div className="grid md:grid-cols-2 bg-white shadow-sm rounded-md overflow-hidden">
          <div className="p-12 md:p-16 flex flex-col justify-center">
            <p className="uppercase tracking-[0.3em] text-xs text-gray-400 mb-5">
              Get in touch
            </p>

            <h1 className="text-5xl font-serif mb-6">Contact</h1>

            <p className="text-gray-500 leading-7 mb-10">
              We would love to assist you with questions about our collections,
              appointments, or custom jewellery pieces.
            </p>

            <div className="space-y-3 text-sm text-gray-600">
              <p>Email: marabrand@gmail.com</p>
              <p>Phone: +90 555 000 00 00</p>
              <p>Izmir, Türkiye
              </p>
            </div>
          </div>

          <form className="bg-[#fafafa] p-12 md:p-16 space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-sm border border-black/20 bg-white px-5 py-4 outline-none focus:border-black"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-sm border border-black/20 bg-white px-5 py-4 outline-none focus:border-black"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full rounded-sm border border-black/20 bg-white px-5 py-4 outline-none focus:border-black"
            />

            <select className="w-full rounded-sm border border-black/20 bg-white px-5 py-4 text-gray-500 outline-none focus:border-black">
              <option>Subject</option>
              <option>General Inquiry</option>
              <option>Appointment</option>
              <option>Custom Piece</option>
              <option>Collection Question</option>
            </select>

            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full rounded-sm border border-black/20 bg-white px-5 py-4 outline-none focus:border-black"
            />

            <button
              type="button"
              className="w-full rounded-sm bg-black text-white py-4 hover:bg-black/80 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}