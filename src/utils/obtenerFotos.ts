export async function obtenerFotos() {
  const res = await fetch(
    "https://lrwm6m86.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27fotos%27%5D |order(_createdAt desc)",
    {
      method: "GET",
      cache: "no-store",
    }
  );
  if (res.ok) {
    const data = await res.json();
    if (data && data.result) {
      return data.result;
    } else {
      return [];
    }
  } else {
    throw new Error("Error al obtener fotos de la API");
  }
}
