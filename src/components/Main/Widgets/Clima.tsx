/* eslint-disable @next/next/no-img-element */
import { obtenerClima } from "@/utils/obtenerClima";

export default async function Clima() {
  const climaData = await obtenerClima();
  const diaActual = climaData[0];

  const fechaHoy = new Date().toLocaleDateString("es-ES", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  function capitalizarTexto(texto: string) {
    return texto.replace(/\b\w/g, (letra) => letra.toUpperCase());
  }

  if (!diaActual) return null;

  return (
    <div className="clima-container">
      <span className="clima-fecha">{capitalizarTexto(fechaHoy)}</span>

      <div className="clima-info">
        <img
          src={diaActual.icono}
          alt={diaActual.clima}
          className="clima-icono"
        />

        <span className="clima-ciudad">Mar del Plata</span>

        <span className="clima-temp">
          {Math.round(diaActual.temperatura.max)}°C
        </span>

        <span className="clima-text">{capitalizarTexto(diaActual.clima)}</span>
      </div>
    </div>
  );
}
