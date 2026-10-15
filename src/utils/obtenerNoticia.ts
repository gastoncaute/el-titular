import { client } from "@/utils/configSanity";
import { Noticia } from "@/types/componentes.types";

const LIST_PROJECTION = `{
  _id,
  _createdAt,
  title,
  categoria,
  bajada,
  image_principal {
    epigrafe,
    imagen { asset { _ref } },
    video { asset { _ref } }
  }
}`;

const ARTICLE_PROJECTION = `{
  _id,
  _createdAt,
  autor,
  categoria,
  title,
  bajada,
  image_principal,
  copete,
  segundo_bloque,
  tercer_bloque,
  cuarto_bloque,
  imagenes_array
}`;

const CACHE_60 = { next: { revalidate: 60, tags: ["noticias"] } };

export async function obtenerNoticias(limite = 20): Promise<Noticia[]> {
  const query = `*[_type == "noticias"]
    | order(_createdAt desc)[0...$limite] ${LIST_PROJECTION}`;

  return client.fetch<Noticia[]>(query, { limite }, CACHE_60);
}

export async function obtenerNoticiaPorTitulo(
  titulo: string,
): Promise<Noticia | null> {
  const query = `*[_type == "noticias" && title == $titulo][0] ${ARTICLE_PROJECTION}`;

  return client.fetch<Noticia | null>(query, { titulo }, CACHE_60);
}

export async function obtenerNoticiaDestacada(): Promise<Noticia | null> {
  const query = `*[_type == "noticias" && destacada == true]
    | order(_createdAt desc)[0] ${LIST_PROJECTION}`;

  const destacada = await client.fetch<Noticia | null>(query, {}, CACHE_60);

  if (destacada) return destacada;

  const queryRespaldo = `*[_type == "noticias"]
    | order(_createdAt desc)[0] ${LIST_PROJECTION}`;

  return client.fetch<Noticia | null>(queryRespaldo, {}, CACHE_60);
}

export async function obtenerNoticiasPorCategoria(
  categoria: string,
  pagina = 1,
  porPagina = 12,
) {
  const start = 5 + Math.max(0, (pagina - 1) * porPagina);
  const end = start + porPagina;

  const query = `{
    "total": count(*[_type == "noticias" && lower(categoria) == lower($categoria)]),
    "items": *[_type == "noticias" && lower(categoria) == lower($categoria)]
      | order(_createdAt desc)[0...${end}] ${LIST_PROJECTION}
  }`;

  const result = await client.fetch<{ total: number; items: Noticia[] }>(
    query,
    { categoria },
    {
      next: {
        revalidate: 60,
        tags: ["noticias", `categoria:${categoria.toLowerCase()}`],
      },
    },
  );

  return {
    total: result.total,
    featured: result.items.slice(0, 5),
    items: result.items.slice(start, end),
  };
}

export async function obtenerNoticiasRelacionadas(
  categoria: string,
  limite = 5,
) {
  const query = `*[_type == "noticias" && lower(categoria) == lower($categoria)]
    | order(_createdAt desc)[0...$limite] ${LIST_PROJECTION}`;

  return client.fetch<Noticia[]>(
    query,
    { categoria, limite },
    {
      next: {
        revalidate: 60,
        tags: ["noticias", `categoria:${categoria.toLowerCase()}`],
      },
    },
  );
}

export async function buscarNoticias(texto: string, limite = 16) {
  const query = `*[_type == "noticias" && title match $texto]
    | order(_createdAt desc)[0...$limite] ${LIST_PROJECTION}`;

  return client.fetch<Noticia[]>(
    query,
    { texto: `${texto}*`, limite },
    CACHE_60,
  );
}
