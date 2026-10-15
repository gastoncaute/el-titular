import React from "react";

export default async function TituloCategoria({ params }: any) {
  const categoriaSeleccionada = params.categoria.toLowerCase();

  const tituloCategoria: Record<string, string> = {
    politica: "POLÍTICA",
    cultura: "CULTURA",
    policiales: "POLICIALES",
    actualidad: "ACTUALIDAD",
  };

  const tituloAMostrar =
    tituloCategoria[categoriaSeleccionada] || "Información no disponible.";

  return (
    <section className="category-banner">
      <div>
        <h1 className="banner-categoria">{tituloAMostrar}</h1>
      </div>
    </section>
  );
}
