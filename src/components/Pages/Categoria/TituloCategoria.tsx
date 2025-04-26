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
    <section className="category-image">
      <div className="category-logo">
        <Image src="/Logo.png" alt="Logo" width={160} height={160} />
      </div>
      <h1>
        <span className="seccion">SECCIÓN</span>
        <span className="categoria">{tituloAMostrar}</span>
      </h1>
      <h2>{informacionAMostrar}</h2>
    </section>
  );
}
