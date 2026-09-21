export async function obtenerDolar() {
  const res = await fetch("https://dolarapi.com/v1/dolares", {
    method: "GET",
    cache: "no-store",
  });

  if (res.ok) {
    const data = await res.json();
    return data.find((d: any) => d.casa === "blue") || null;
  } else {
    console.error("Error al obtener la API");
    return null;
  }
}
