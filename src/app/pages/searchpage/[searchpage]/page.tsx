import React from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Noticias from "@/components/Pages/Search/Noticias";

export default async function searchPage({ params }: { params: string }) {
  return (
    <>
      <Header />
      <Noticias params={params} />
      <Footer />
    </>
  );
}
