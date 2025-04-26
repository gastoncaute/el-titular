import type { Dolar } from "@/types/componentes.types";
import { obtenerDolar } from "@/utils/obtenerDolar";
import React from "react";

export default async function Dolar() {
  const dolarHoy = await obtenerDolar();
  return (
    <section className="dolar-section">
      <h1>Cotizacion del Dolar</h1>
      <div className="dolar_scroll">
        {dolarHoy.map((dolar: Dolar) => (
          <article key={dolar.nombre} className="dolar_article">
            <h2>{dolar.nombre}</h2>
            <h3>Compra: $ {dolar.compra}</h3>
            {typeof dolar.venta === "object" ? (
              <p>Venta: No Disponible</p>
            ) : (
              <h3>Venta: $ {dolar.venta}</h3>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
