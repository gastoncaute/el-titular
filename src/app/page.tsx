import Header from "@/components/HeaderComponents/Header";
import Section from "@/components/SectionComponents/Section";
import Footer from "@/components/FooterComponents/Footer";

export default function Home() {
  return (
    <main>
      <div className="pop-up-container">
        <div className="pop-up"></div>
      </div>
      <Header />
      <Section />
      <Footer />
    </main>
  );
}
