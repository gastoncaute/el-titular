import Image from "next/image";
import React from "react";

export default async function TituloCategoria({ params }: any) {
  const categoriaSeleccionada = params.categoria.toLowerCase();

  const tituloCategoria: Record<string, string> = {
    politica: "POLÍTICA",
    policiales: "POLICIALES",
    actualidad: "ACTUALIDAD",
  };

  const tituloAMostrar =
    tituloCategoria[categoriaSeleccionada] || "Información no disponible.";

  const informacionPorCategoria: Record<string, string> = {
    politica:
      "Toda la actualidad política de Mar del Plata, la Provincia de Buenos Aires y el país, junto con noticias internacionales y económicas de impacto.",
    policiales:
      "Cobertura de hechos delictivos, investigaciones y casos judiciales de Mar del Plata, Argentina y el mundo.",
    actualidad:
      "Lo más relevante del día a día, incluyendo deportes, contenidos virales y temas de interés general.",
  };

  const informacionAMostrar =
    informacionPorCategoria[categoriaSeleccionada] ||
    "Información no disponible.";

  return (
    <section className="category-banner">
      <div>
        <h1 className="banner-categoria">{tituloAMostrar}</h1>
        <h2 className="banner-subtitulo">{informacionAMostrar}</h2>
      </div>
      <div className="category-banner-logo">
        <Image src="/logos/Logo.png" alt="Logo" width={100} height={100} />
      </div>
    </section>
  );
}
