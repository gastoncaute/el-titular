import { obtenerCategorias } from "@/utils/obtenerCategorias";
import Categoria from "./Categoria";
import Recientes from "./Recientes";
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

  return (
    <>
      <Recientes />
      <Socials />
      {categoriasUnicas.map((categoria: any) => (
        <Categoria key={categoria} categoria={categoria} />
      ))}
    </>
  );
}
