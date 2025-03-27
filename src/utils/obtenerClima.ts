export async function obtenerClima() {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=-38.00&lon=-57.55&appid=156c31ab1b623e3dd0ca6bdeecfb9c69&units=metric&lang=es`,
    {
      method: "GET",
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Error al obtener el clima del servidor");
  }

  const data = await res.json();

  const pronosticoDiario = data.list
    .filter((item: any, index: number) => index % 8 === 0)
    .slice(0, 3)
    .map((item: any) => ({
      fecha: new Date(item.dt * 1000).toLocaleDateString("es-ES", {
        weekday: "long",
        day: "2-digit",
        month: "long",
      }),
      clima: item.weather[0].description,
      temperatura: {
        min: item.main.temp_min,
        max: item.main.temp_max,
      },
      icono: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
    }));

  return pronosticoDiario;
}
