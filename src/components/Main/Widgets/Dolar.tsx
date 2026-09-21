import { obtenerDolar } from "@/utils/obtenerDolar";
import React from "react";

export default async function Dolar() {
  const dolarBlue = await obtenerDolar();

  if (!dolarBlue) {
    return null;
  }

  return (
    <div className="dolar-container">
      <span className="dolar-label">Dólar Blue: ${dolarBlue.venta}</span>
    </div>
  );
}
