import Link from "next/link";

export default function CategoriesButton() {
  const categorias = ["Politica", "Actualidad", "Policiales"];
  return (
    <>
      {categorias.map((categoria: string) => (
        <Link
          key={categoria}
          className="headersButtons"
          href={`/pages/categorypage/${categoria}`}
        >
          {categoria}
        </Link>
      ))}
    </>
  );
}
