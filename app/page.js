import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Landing from "./_components/Landing";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-between bg-black">
      <Header />
      <div className="w-full flex items-center justify-center">
        <h1 className="text-cyber-yellow">Hello Cyberpunk 2077</h1>
      </div>
      <Landing />
      <Footer />
    </main>
  );
}
