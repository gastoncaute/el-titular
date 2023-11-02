import Link from "next/link";

export default function CategoriesButton() {
  const categorias = [
    // "men's clothing",
    // "women's clothing",
    // "electronics",
    // "jewelery",
    "Policiales",
    "Politica",
    "Economia",
    "Sociedad",
    "Deporte",
    "Cultura",
    "Tendencias",
    "Internacional",
    "Infografias",
  ];
  return (
    <>
      {categorias.map((categoria: string) => (
        <Link key={categoria} href={`/pages/categorypage/${categoria}`}>
          <p className="flex items-center p-3 border-x h-2">{categoria}</p>
        </Link>
      ))}
    </>
  );
}
