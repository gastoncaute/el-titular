import { Dolar } from "@/types/componentes.types";
import { obtenerDolar } from "@/utils/obtenerDolar";
import React from "react";

export default async function Dolar() {
  const dolarHoy = await obtenerDolar();
  console.log(dolarHoy);
  return (
    <section className="col-start-2 col-end-7 flex bg-gradient-to-b from-pageColor to-gradientColor w-max max-w-97.5rem m-auto p-4 border border-pageColor rounded-3xl fotos_widget_section text-white text-sm">
      {dolarHoy.map((dolar: Dolar) => (
        <section
          key={dolar.casa.nombre}
          className="flex flex-col w-max mx-2 p-2 border rounded-xl"
        >
          <h1 className="border-b mb-1">{dolar.casa.nombre}</h1>
          <h2>Compra: $ {dolar.casa.compra}</h2>
          {typeof dolar.casa.venta === "object" ? (
            <p>Venta: No Disponible</p>
          ) : (
            <h3>Venta: $ {dolar.casa.venta}</h3>
          )}
        </section>
      ))}
    </section>
  );
}
