import React from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import UltimaNoticia from "@/components/Pages/Ultimas/UltimaNoticia";
import Socials from "@/components/Main/Widgets/Socials";
import Noticias from "@/components/Pages/Ultimas/Noticias";

export default async function page() {
  return (
    <>
      <Header />
      <main className="category-main">
        <section className="noticia-section">
          <UltimaNoticia />
          <Socials />
          <Noticias />
        </section>
      </main>
      <Footer />
    </>
  );
}
