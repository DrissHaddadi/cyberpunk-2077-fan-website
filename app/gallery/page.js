import Footer from "../_components/Footer";
import Header from "../_components/Header";

export default function Gangs() {
  return (
    <main className="min-h-screen flex flex-col justify-between bg-black">
      <Header />
      <div className="w-full flex items-center justify-center">
        <h1 className="text-cyber-yellow">Hello Gallery page</h1>
      </div>
      <Footer />
    </main>
  );
}
