import { Noticia } from "@/types/componentes.types";

export async function obtenerCategorias() {
  const res = await fetch(
    "https://lrwm6m86.api.sanity.io/v2022-03-07/data/query/production?query=*[_type == 'noticias']{categoria,_createdAt} | order(_createdAt desc)",
    {
      method: "GET",
      cache: "no-store",
    }
  );
  if (res.ok) {
    const data = await res.json();
    if (data && data.result) {
      const categorias = data.result.map(
        (noticia: Noticia) => noticia.categoria
      );
      return categorias;
    } else {
      return [];
    }
  } else {
    throw new Error("Error al obtener categorías de la API");
  }
}
