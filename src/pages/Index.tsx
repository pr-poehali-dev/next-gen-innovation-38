import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Advantages from "@/components/Advantages";
import Menu from "@/components/Menu";
import Promo from "@/components/Promo";
import Order from "@/components/Order";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Advantages />
      <Menu />
      <Promo />
      <Order />
      <Footer />
    </main>
  );
};

export default Index;
