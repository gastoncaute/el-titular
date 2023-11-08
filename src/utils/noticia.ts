export async function obtenerNoticias() {
  const res = await fetch(
    "https://lrwm6m86.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27noticias%27%5D|order(_createdAt desc)",
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
    throw new Error("Error al obtener noticias de la API");
  }
}

export interface Noticia {
  _id: string;
  bajada: string;
  descripcion: string;
  title: string;
  _createdAt: any;
  categoria: string;
  image_principal: string;
  epigrafe: string;
  copete: string;
  parrafo_1: string;
  parrafo_2: string;
  YouTubeCode_1: any;
  TwitterID_1: string;
}
