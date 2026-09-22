import { obtenerCategorias } from "@/utils/obtenerCategorias";
import Categoria from "./Categoria";
import Recientes from "./Recientes";
import Socials from "../Widgets/Socials";
import Link from "next/link";
import Image from "next/image";

export default async function Noticia() {
  const categorias = await obtenerCategorias();
  const ordenCategorias = ["Politica", "Actualidad", "Policiales"];

  const categoriasUnicas = Array.from(new Set(categorias))
    .filter((categoria: any) => ordenCategorias.includes(categoria))
    .sort(
      (a: any, b: any) =>
        ordenCategorias.indexOf(a) - ordenCategorias.indexOf(b),
    );

  return (
    <>
      <Link
        href="https://www.edeaweb.com.ar/robo-de-energia/"
        target="#"
        className="w-100 m-auto"
      >
        <Image
          src={"/edea/Fraude-970x90.gif"}
          alt={"Edea"}
          width={970}
          height={90}
        />
      </Link>
      <Recientes />
      <div className="banner-publicidad">
        <p>
          <strong>Publicidad</strong>
        </p>
      </div>
      {categoriasUnicas.map((categoria: any) => (
        <Categoria key={categoria} categoria={categoria} />
      ))}
    </>
  );
}
