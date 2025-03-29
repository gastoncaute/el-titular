import Link from "next/link";

export default function Categories() {
  const categorias = ["POLITICA", "ACTUALIDAD", "POLICIALES"];

  return (
    <>
      {categorias.map((categoria: string) => {
        const categoriaFormateada =
          categoria.charAt(0).toUpperCase() + categoria.slice(1).toLowerCase();

        return (
          <li className="button" key={categoria}>
            <Link href={`/pages/categorypage/${categoriaFormateada}`}>
              {categoria}
            </Link>
          </li>
        );
      })}
    </>
  );
}
