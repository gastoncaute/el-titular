import { client } from "@/utils/configSanity";

export async function obtenerCategorias() {
  const query = `array::unique(*[_type == "noticias"].categoria)`;
  return client.fetch<string[]>(query, {}, {
    next: { revalidate: 300, tags: ["noticias"] },
  });
}
