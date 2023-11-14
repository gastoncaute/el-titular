import React from "react";
import Footer from "@/components/FooterComponents/Footer";
import Header from "@/components/HeaderComponents/Header";
import Link from "next/link";
import Image from "next/image";
import { obtenerNoticias } from "@/utils/noticia";
import { Noticia } from "@/types/componentes.types";

export default async function page() {
  const noticias = await obtenerNoticias();

  const noticeRef = noticias.map(
    (noticia: Noticia) => noticia.image_principal.imagen.asset._ref
  );
  const noticeImageUrls = noticeRef.map((ref: any) => {
    const modifiedRef = String(ref)
      .replace("image-", "")
      .replace("-jpg", ".jpg")
      .replace("-webp", ".webp");
    const baseUrl = "https://cdn.sanity.io/images/lrwm6m86/production/";
    return baseUrl + modifiedRef;
  });

  return (
    <>
      <Header />
      <section className="grid grid-cols-2 mx-48 my-24 text-black">
        <div className="row-span-1 flex items-center mt-12 mb-4">
          <Link
            href={"/pages/masrecientes"}
            className="border border-pageColor rounded-3xl p-2 px-4 font-bold button"
          >
            Ultimas Noticias
          </Link>
        </div>
        <article className="col-start-1 col-end-3 border border-pageColor rounded-3xl h-min p-4 flex flex-col items-center">
          {noticias.slice(0, 5).map((noticia: Noticia, index: number) => {
            const noticeImageUrl = noticeImageUrls[index];
            return (
              <Link
                href={`/pages/noticepage/${noticia.title}`}
                className="w-full h-min grid grid-cols-2 border rounded-3xl border-pageColor py-8 my-8"
                key={index}
              >
                <div className="col-start-1 col-end-2 flex justify-center items-center border-r border-pageColor">
                  <div>
                    <Image
                      className="max-h-300px max-w-min"
                      src={noticeImageUrl}
                      alt={noticia.title}
                      height={250}
                      width={400}
                    />
                  </div>
                </div>
                <div className="col-start-2 col-end-3 flex flex-col items-center justify-center m-4">
                  <h1 className={"text-3xl mb-8 font-bold"}>{noticia.title}</h1>
                  <h2 className="text-xl">{noticia.bajada}</h2>
                </div>
              </Link>
            );
          })}
          {noticias.length > 5 && (
            <button className="border border-pageColor rounded-3xl p-2 w-60 text-xl font-bold button">
              VER MAS
            </button>
          )}
        </article>
      </section>
      <Footer />
    </>
  );
}
