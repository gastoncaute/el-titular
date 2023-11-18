import MasRecientes from "@/components/SectionComponents/components/MasRecientesPaginaPrincipal";
import Image from "next/image";
import Link from "next/link";
import { Noticia } from "@/types/componentes.types";
import { obtenerNoticias } from "@/utils/noticia";
import { obtenerCategorias } from "@/utils/obtenerCategorias";
import NoticiasPorCategoria from "./NoticiasPorCategoria";

export default async function Noticia() {
  const categorias = await obtenerCategorias();
  const noticias = await obtenerNoticias();

  // Eliminar duplicados usando un Set y luego convertirlo a un array
  const categoriasUnicas = Array.from(new Set(categorias));

  const ref = noticias.map(
    (noticia: Noticia) => noticia.image_principal.imagen.asset._ref
  );
  const imageUrls = ref.map((ref: any) => {
    const modifiedRef = String(ref)
      .replace("image-", "")
      .replace("-jpg", ".jpg")
      .replace("-webp", ".webp");
    const baseUrl = "https://cdn.sanity.io/images/lrwm6m86/production/";
    return baseUrl + modifiedRef;
  });

  return (
    <>
      <MasRecientes />
      {categoriasUnicas.map((categoria: any) => (
        <article
          key={categoria}
          className="col-start-2 col-end-6 rounded-3xl m-8 border border-pageColor category_section w-69rem"
        >
          <div className="m-4 pb-2 flex items-center justify-center mb-4 border-b border-pageColor category_button_section">
            <Link
              href={`/pages/categorypage/${categoria}`}
              className="flex justify-center text-2xl font-bold rounded-3xl p-2 border border-transparent button category_button_section_link"
            >
              {categoria}
            </Link>
          </div>
          <NoticiasPorCategoria categoria={categoria} />
        </article>
      ))}
    </>
  );
}
