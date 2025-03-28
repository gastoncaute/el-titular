import Link from "next/link";
import { obtenerCategorias } from "@/utils/obtenerCategorias";
import NoticiasPorCategoria from "./NoticiasPorCategoria";
import MasRecientes from "./MasRecientesPaginaPrincipal";
import Image from "next/image";
import Socials from "../Widgets/Socials";

export default async function Noticia() {
  const categorias = await obtenerCategorias();
  const ordenCategorias = [
    "Politica",
    "Actualidad",
    "Policiales",
    "Economia",
    "Deporte",
  ];

  const categoriasUnicas = Array.from(new Set(categorias)).sort(
    (a: any, b: any) => ordenCategorias.indexOf(a) - ordenCategorias.indexOf(b)
  );

  const imagenesPorCategoria: { [key: string]: string } = {
    Politica: "/Politica.webp",
    Actualidad: "/Actualidad.jpg",
    Policiales: "/Policiales.avif",
    Economia: "/Economia.jpg",
    Deporte: "/Deportes.jpg",
  };

  return (
    <>
      <MasRecientes />
      <Socials />
      {categoriasUnicas.map((categoria: any) => (
        <section key={categoria} className="noticia-section">
          <Link href={`/pages/categorypage/${categoria}`}>
            <Image
              src={imagenesPorCategoria[categoria]}
              alt={categoria}
              width={1500}
              height={600}
              style={{
                objectFit: "cover",
                maxWidth: "100%",
                maxHeight: "600px",
              }}
            />
          </Link>
          <div className="banner-2"></div>
          <article>
            <NoticiasPorCategoria categoria={categoria} />
          </article>
        </section>
      ))}
    </>
  );
}
