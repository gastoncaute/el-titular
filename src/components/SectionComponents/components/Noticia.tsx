/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";

async function obtenerNoticias() {
  const res = await fetch(
    "https://lrwm6m86.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27noticias%27%5D|order(_createdAt desc)",
    {
      method: "GET",
      cache: "no-store",
    }
  );
  if (res.ok) {
    const data = await res.json();
    if (data && data.result) {
      return data.result;
    } else {
      return [];
    }
  } else {
    throw new Error("Error al obtener noticias de la API");
  }
}

interface Noticia {
  _id: string;
  bajada: string;
  descripcion: string;
  title: string;
  _createdAt: any;
  categoria: string;
  image_principal: string;
}

export default async function Noticia() {
  const noticias = await obtenerNoticias();
  const noticiasPorCategoria: { [key: string]: Noticia[] } = {};

  noticias.forEach((noticia: Noticia) => {
    if (!noticiasPorCategoria[noticia.categoria]) {
      noticiasPorCategoria[noticia.categoria] = [];
    }
    noticiasPorCategoria[noticia.categoria].push(noticia);
  });

  return (
    <>
      {Object.keys(noticiasPorCategoria).map((categoria) => (
        <article
          key={categoria}
          className="col-start-2 col-end-6 rounded-3xl m-8 border border-pageColor"
        >
          <Link
            href={`/pages/categorypage/${categoria}`}
            className="m-4 pb-2 flex justify-center text-2xl border-b border-pageColor"
          >
            {categoria}
          </Link>
          <div className="grid grid-cols-2">
            {noticiasPorCategoria[categoria].map((noticia, index) => {
              if (index >= 5) {
                return null;
              }
              return (
                <div
                  key={noticia._id}
                  className={
                    index === 0
                      ? "col-start-1 col-end-3 row-start-1 row-end-3 p-4"
                      : index === 1
                      ? "col-start-1 col-end-2 row-start-3 row-end-4 p-4"
                      : index === 2
                      ? "col-start-2 col-end-3 row-start-3 row-end-4 p-4"
                      : index === 3
                      ? "col-start-1 col-end-2 row-start-4 row-end-5 p-4"
                      : "col-start-2 col-end-3 row-start-4 row-end-5 p-4"
                  }
                >
                  <Link
                    href={`/pages/noticepage/${noticia.title}`}
                    className="w-full h-full grid grid-cols-2 border rounded-3xl border-pageColor py-8"
                  >
                    <div className="col-start-1 col-end-2 flex justify-center items-center border-r border-pageColor">
                      <Image
                        className={
                          index === 0
                            ? "max-h-400px max-w-500px"
                            : "max-h-130px max-w-220px"
                        }
                        src={noticia.image_principal}
                        alt={noticia.title}
                        height={index === 0 ? 250 : 130}
                        width={index === 0 ? 500 : 220}
                      />
                    </div>
                    <div className="col-start-2 col-end-3 flex flex-col items-center justify-center m-4">
                      <p
                        className={
                          index === 0
                            ? "text-5xl mb-8 font-bold"
                            : "text-2xl font-bold"
                        }
                      >
                        {noticia.title}
                      </p>
                      {index === 0 && (
                        <p className="text-3xl">{noticia.bajada}</p>
                      )}
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </article>
      ))}
    </>
  );
}
