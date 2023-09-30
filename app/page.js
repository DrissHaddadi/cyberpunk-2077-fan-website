import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Landing from "./_components/Landing";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-between bg-black">
      <Header />
      <Landing />
      <Footer />
    </main>
  );
}
