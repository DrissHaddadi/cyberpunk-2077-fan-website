import Database from "../_components/Database";
import Footer from "../_components/Footer";
import Header from "../_components/Header";

export default function encyclopedia() {
  return (
    <main className="min-h-screen flex flex-col justify-between bg-black">
      <Header />
      <Database />
      <Footer />
    </main>
  );
}
