import MasRecientes from "@/components/SectionComponents/components/MasRecientesPaginaPrincipal";
import Link from "next/link";
import { obtenerCategorias } from "@/utils/obtenerCategorias";
import NoticiasPorCategoria from "./NoticiasPorCategoria";

export default async function Noticia() {
  const categorias = await obtenerCategorias();
  const ordenCategorias = [
    "Policiales",
    "Politica",
    "Economia",
    "Actualidad",
    "Deporte",
  ];

  const categoriasUnicas = Array.from(new Set(categorias)).sort(
    (a: any, b: any) => ordenCategorias.indexOf(a) - ordenCategorias.indexOf(b)
  );

  return (
    <>
      <MasRecientes />
      {categoriasUnicas.map((categoria: any) => (
        <section
          key={categoria}
          className="col-start-2 col-end-7 mainPage_noticia_section"
        >
          <div className="banner-2"></div>
          <article className="rounded-3xl m-8 border border-pageColor category_section">
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
        </section>
      ))}
    </>
  );
}
