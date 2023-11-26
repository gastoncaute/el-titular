import { Dolar } from "@/types/componentes.types";
import { obtenerDolar } from "@/utils/obtenerDolar";
import React from "react";

export default async function Dolar() {
  const dolarHoy = await obtenerDolar();
  const dolarAExcluir = ["Dolar Soja", "Dolar", "Dolar turista", "Argentina"];
  const casaFilter = dolarHoy.filter(
    (dolar: Dolar) => !dolarAExcluir.includes(dolar.casa.nombre)
  );
  return (
    <section className="col-start-2 col-end-7 flex bg-gradient-to-b from-pageColor to-gradientColor w-max max-w-97.5rem m-auto p-4 border border-pageColor rounded-3xl dolar_widget_container text-white text-sm">
      <div className="flex dolar_scroll">
        {casaFilter.map((dolar: Dolar) => (
          <article
            key={dolar.casa.nombre}
            className="flex flex-col w-max mx-4 p-4 border rounded-xl dolar_article"
          >
            <h1 className="border-b mb-1 text-xl dolar_title">
              {dolar.casa.nombre}
            </h1>
            <h2 className="text-base dolar_subtitle">
              Compra: $ {dolar.casa.compra}
            </h2>
            {typeof dolar.casa.venta === "object" ? (
              <p>Venta: No Disponible</p>
            ) : (
              <h3 className="text-base dolar_subtitle">
                Venta: $ {dolar.casa.venta}
              </h3>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
