import Footer from "../_components/Footer";
import GallerieCarousel from "../_components/GallerieCarousel";
import Header from "../_components/Header";

export default function Gangs() {
  return (
    <main className="min-h-screen flex flex-col justify-between bg-black">
      <Header />
      <GallerieCarousel />
      <Footer />
    </main>
  );
}
