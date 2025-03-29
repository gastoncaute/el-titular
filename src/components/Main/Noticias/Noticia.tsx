import Link from "next/link";
import { obtenerCategorias } from "@/utils/obtenerCategorias";
import Categoria from "./Categoria";
import Recientes from "./Recientes";
import Image from "next/image";
import Socials from "../Widgets/Socials";

export default async function Noticia() {
  const categorias = await obtenerCategorias();
  const ordenCategorias = ["Politica", "Actualidad", "Policiales"];

  const categoriasUnicas = Array.from(new Set(categorias))
    .filter((categoria: any) => ordenCategorias.includes(categoria))
    .sort(
      (a: any, b: any) =>
        ordenCategorias.indexOf(a) - ordenCategorias.indexOf(b)
    );

  const imagenesPorCategoria: { [key: string]: string } = {
    Politica: "/Politica.webp",
    Actualidad: "/Actualidad.jpg",
    Policiales: "/Policiales.avif",
  };

  return (
    <>
      <Recientes />
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
            <Categoria categoria={categoria} />
          </article>
        </section>
      ))}
    </>
  );
}
