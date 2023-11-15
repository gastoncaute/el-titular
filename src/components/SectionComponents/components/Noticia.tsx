import MasRecientes from "@/components/MasRecientesPaginaPrincipal";
import Image from "next/image";
import Link from "next/link";
import { Noticia } from "@/types/componentes.types";
import { obtenerNoticias } from "@/utils/noticia";

export default async function Noticia() {
  const noticias = await obtenerNoticias();
  const noticiasPorCategoria: { [key: string]: Noticia[] } = {};

  noticias.forEach((noticia: Noticia) => {
    if (!noticiasPorCategoria[noticia.categoria]) {
      noticiasPorCategoria[noticia.categoria] = [];
    }
    noticiasPorCategoria[noticia.categoria].push(noticia);
  });

  const ref = noticias.map(
    (noticia: Noticia) => noticia.image_principal.imagen.asset._ref
  );
  const imageUrls = ref.map((ref: any) => {
    const modifiedRef = String(ref)
      .replace("image-", "")
      .replace("-jpg", ".jpg")
      .replace("-webp", ".webp");
    const baseUrl = "https://cdn.sanity.io/images/lrwm6m86/production/";
    return baseUrl + modifiedRef;
  });

  let globalIndex = 0;

  return (
    <>
      <MasRecientes />
      {Object.keys(noticiasPorCategoria).map((categoria) => (
        <article
          key={categoria}
          className="col-start-2 col-end-6 rounded-3xl m-8 border border-pageColor category_section"
        >
          <div className="m-4 pb-2 flex items-center justify-center mb-4 border-b border-pageColor category_button_section">
            <Link
              href={`/pages/categorypage/${categoria}`}
              className="flex justify-center text-2xl font-bold rounded-3xl p-2 border border-transparent button category_button_section_link"
            >
              {categoria}
            </Link>
          </div>

          <div className="grid grid-cols-2">
            {noticiasPorCategoria[categoria].map((noticia, index) => {
              const imageUrl = imageUrls[globalIndex];
              globalIndex++;
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
                      ? "col-start-1 col-end-2 row-start-3 row-end-4 p-4 second_section_notice"
                      : index === 2
                      ? "col-start-2 col-end-3 row-start-3 row-end-4 p-4 section_notice_none"
                      : index === 3
                      ? "col-start-1 col-end-2 row-start-4 row-end-5 p-4 section_notice_none"
                      : "col-start-2 col-end-3 row-start-4 row-end-5 p-4 section_notice_none"
                  }
                >
                  <Link
                    href={`/pages/noticepage/${noticia.title}`}
                    className="w-full h-full grid grid-cols-2 border rounded-3xl border-pageColor py-8 noticias_title main_section_notice"
                  >
                    <div className="col-start-1 col-end-2 flex justify-center items-center border-r border-pageColor category_section_image_content">
                      <Image
                        className={
                          index === 0
                            ? "max-h-350px max-w-min category_section_image"
                            : "max-h-130px max-w-min category_section_image"
                        }
                        src={imageUrl}
                        alt={noticia.title}
                        height={index === 0 ? 250 : 130}
                        width={index === 0 ? 500 : 220}
                      />
                    </div>
                    <div className="col-start-2 col-end-3 flex flex-col items-center justify-center m-4 ultimasNoticias_title_component">
                      <h1
                        className={
                          index === 0
                            ? "text-5xl mb-8 font-bold principal_page_title"
                            : "text-2xl font-bold principal_page_title"
                        }
                      >
                        {noticia.title}
                      </h1>
                      {index === 0 && (
                        <h2 className="text-3xl principal_page_bajada">
                          {noticia.bajada}
                        </h2>
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
