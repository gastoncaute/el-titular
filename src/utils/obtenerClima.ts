import { Clima } from "@/types/componentes.types";

export async function obtenerClima() {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=-38.00&lon=-57.55&appid=156c31ab1b623e3dd0ca6bdeecfb9c69`,
    {
      method: "GET",
      cache: "no-store",
    }
  );
  if (res.ok) {
    const data = await res.json();
    return data as Clima;
  } else {
    throw new Error("Error al obtener el autor del servidor");
  }
}
