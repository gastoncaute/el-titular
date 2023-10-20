import Link from "next/link";

export default function CategoriesButton() {
    const categorias = ["Policiales", 'Politica', 'Economia', 'Sociedad', 'Deporte', 'Cultura', 'Tendencias', 'Internacional', 'Fotos']
    return (
        <>
            {categorias.map((categoria, index) => (
                <Link key={index} href={``}>
                    <p className="flex items-center p-3 border-x h-2">
                    {categoria}
                    </p>
                </Link>
            ))}
        </>
    )
}