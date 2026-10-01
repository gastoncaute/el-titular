import { client } from "@/utils/configSanity";
import { Autor } from "@/types/componentes.types";

const AUTHOR_PROJECTION = `{
  _id,
  name,
  photo
}`;

export async function obtenerAutorPorReferencia(ref?: string): Promise<Autor | null> {
  if (!ref) return null;

  const cleanId = ref.replace(/^drafts\./, "");
  const query = `*[_type == "author" && (_id == $id || _id == $draftId)][0] ${AUTHOR_PROJECTION}`;

  return client.fetch<Autor | null>(
    query,
    {
      id: cleanId,
      draftId: `drafts.${cleanId}`,
    },
    { next: { revalidate: 300, tags: ["autores"] } },
  );
}

// Compatibilidad con el código existente. Mantiene todos los autores,
// pero evita transferir metadatos internos que la interfaz no utiliza.
export async function obtenerAutor(): Promise<Autor[]> {
  const query = `*[_type == "author"] ${AUTHOR_PROJECTION}`;
  return client.fetch<Autor[]>(
    query,
    {},
    { next: { revalidate: 300, tags: ["autores"] } },
  );
}
