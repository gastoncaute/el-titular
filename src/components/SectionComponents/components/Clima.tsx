/* eslint-disable @next/next/no-img-element */
import type { Clima } from "@/types/componentes.types";
import { obtenerClima } from "@/utils/obtenerClima";

export default async function Clima() {
  const clima = await obtenerClima();
  const fechaHoy = new Date().toLocaleDateString("es-ES", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  function capitalizarTexto(texto: string) {
    return texto.replace(/\b\w/g, (letra) => letra.toUpperCase());
  }

  return (
    <>
      <section className="clima-section">
        <h1>{capitalizarTexto(fechaHoy)}</h1>
        <ul>
          {clima.map((dia: Clima) => (
            <li key={dia.fecha}>
              <h2>{capitalizarTexto(dia.fecha)}</h2>
              <img src={dia.icono} alt={capitalizarTexto(dia.clima)} />
              <p className="clima-temp">
                {Math.round(dia.temperatura.min)}°C -{" "}
                {Math.round(dia.temperatura.max)}°C
              </p>
              <p className="clima-text">{capitalizarTexto(dia.clima)}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
    // {/* <div className="banner-1"></div>
    // <div className="banner-1"></div>
    // <div className="banner-1"></div> */}
  );
}
