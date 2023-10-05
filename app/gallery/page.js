import Footer from "../_components/Footer";
import GalleryCarousel from "../_components/GalleryCarousel";
import Header from "../_components/Header";

export default function Gangs() {
  return (
    <main className="min-h-screen flex flex-col justify-between bg-black">
      <Header />
      <GalleryCarousel />
      <Footer />
    </main>
  );
}
