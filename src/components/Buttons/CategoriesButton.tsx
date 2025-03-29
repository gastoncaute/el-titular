import Link from "next/link";

export default function CategoriesButton() {
  const categorias = ["POLITICA", "ACTUALIDAD", "POLICIALES"];
  return (
    <>
      {categorias.map((categoria: string) => (
        <li className="button" key={categoria}>
          <Link href={`/pages/categorypage/${categoria}`}>{categoria}</Link>
        </li>
      ))}
    </>
  );
}
