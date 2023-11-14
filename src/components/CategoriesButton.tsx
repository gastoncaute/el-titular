import Link from "next/link";

export default function CategoriesButton() {
  const categorias = [
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
        <Link
          key={categoria}
          href={
            categoria === "Infografias"
              ? `/pages/fotospage/${categoria}`
              : `/pages/categorypage/${categoria}`
          }
        >
          <p className="flex items-center p-3 border-x h-2 headersButtons">
            {categoria}
          </p>
        </Link>
      ))}
    </>
  );
}
