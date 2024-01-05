import { Dolar } from "@/types/componentes.types";
import { obtenerDolar } from "@/utils/obtenerDolar";
import React from "react";

export default async function Dolar() {
  const dolarHoy = await obtenerDolar();
  return (
    <section className="col-start-2 col-end-7 flex bg-gradient-to-b from-pageColor to-gradientColor w-max max-w-97.5rem m-auto p-4 border border-pageColor rounded-3xl dolar_widget_container text-white text-sm">
      <div className="flex dolar_scroll">
        {dolarHoy.map((dolar: Dolar) => (
          <article
            key={dolar.nombre}
            className="flex flex-col w-max mx-4 p-4 border rounded-xl dolar_article"
          >
            <h1 className="border-b mb-1 text-xl dolar_title">
              {dolar.nombre}
            </h1>
            <h2 className="text-base dolar_subtitle">
              Compra: $ {dolar.compra}
            </h2>
            {typeof dolar.venta === "object" ? (
              <p>Venta: No Disponible</p>
            ) : (
              <h3 className="text-base dolar_subtitle">
                Venta: $ {dolar.venta}
              </h3>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
