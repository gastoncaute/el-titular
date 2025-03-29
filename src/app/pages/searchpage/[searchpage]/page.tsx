import React from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { SearchPageProps } from "@/types/componentes.types";
import Noticias from "@/components/Pages/Search/Noticias";

export default async function searchPage({ params }: SearchPageProps) {
  return (
    <>
      <Header />
      <Noticias params={params} />
      <Footer />
    </>
  );
}
