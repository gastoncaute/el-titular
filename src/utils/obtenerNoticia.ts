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

// La página de una noticia necesita el contenido completo de sus bloques,
// pero no necesita metadatos internos como _rev, _updatedAt o _type.
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
  quinto_bloque,
  sexto_bloque,
  septimo_bloque,
  octavo_bloque,
  imagenes_array
}`;

const CACHE_60 = { next: { revalidate: 60, tags: ["noticias"] } };

export async function obtenerNoticias(limite = 20): Promise<Noticia[]> {
  const query = `*[_type == "noticias"] | order(_createdAt desc)[0...$limite] ${LIST_PROJECTION}`;
  return client.fetch<Noticia[]>(query, { limite }, CACHE_60);
}

export async function obtenerNoticiaPorTitulo(titulo: string): Promise<Noticia | null> {
  const query = `*[_type == "noticias" && title == $titulo][0] ${ARTICLE_PROJECTION}`;
  return client.fetch<Noticia | null>(query, { titulo }, CACHE_60);
}

export async function obtenerNoticiasPorCategoria(
  categoria: string,
  pagina = 1,
  porPagina = 12,
) {
  const start = 5 + Math.max(0, (pagina - 1) * porPagina);
  const end = start + porPagina;

  // Antes se devolvían 5 noticias en "featured" y además otras 12 en
  // "items". Ahora Sanity entrega una sola lista de hasta 17 noticias y
  // hacemos el corte en memoria. Así evitamos transferir 5 documentos dos veces.
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

export async function obtenerNoticiasRelacionadas(categoria: string, limite = 5) {
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
