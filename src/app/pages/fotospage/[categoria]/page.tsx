import Footer from "@/components/FooterComponents/Footer";
import Header from "@/components/HeaderComponents/Header";
import { Foto } from "@/types/componentes.types";
import { obtenerFotos } from "@/utils/obtenerFotos";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function page({ params }: any) {
  const fotos = await obtenerFotos();

  const categoriaSeleccionada = params.categoria;
  const fotosDeCategoria = fotos.filter(
    (foto: Foto) => foto.categoria === categoriaSeleccionada
  );

  const ref = fotosDeCategoria.map((foto: Foto) => foto.photo.asset._ref);
  const imageUrls = ref.map((ref: any) => {
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
      <section className="grid grid-cols-2 mx-48 my-24 text-black fotos_main_section">
        <div className="row-span-1 col-span-2 flex flex-col justify-center items-center mt-16 mb-4 fotos_div_category_link">
          <Link
            href={""}
            className="border border-pageColor rounded-3xl p-2 px-16 text-2xl font-bold button fotos_div_link"
          >
            {categoriaSeleccionada}
          </Link>
          <section className="border border-black bg-gradient-to-b from-pageColor to-gradientColor text-white flex flex-col w-40rem rounded-3xl mt-4 p-4 px-12 text-2xl font-bold fotos_div_link">
            <h1 className="m-auto">Autora:</h1>
            <h2 className="flex items-center justify-around">
              <Image
                src={""}
                alt={""}
                width={70}
                height={70}
                className="border border-white rounded-full mr-2 left-0 noticepage_autor_image"
              />
              <ul className="flex justify-around">
                <li className="mx-2">
                  <Link
                    href="https://www.instagram.com/rorolopez02/"
                    target="#"
                  >
                    <svg
                      width="44"
                      height="44"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#fff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="headersButtons social_buttons"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                      <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                      <path d="M16.5 7.5l0 .01" />
                    </svg>
                  </Link>
                </li>
                <li className="mx-2">
                  <Link
                    href="https://www.instagram.com/rorolopez02/"
                    target="#"
                  >
                    <svg
                      width="44"
                      height="44"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#fff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="headersButtons social_buttons"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" />
                    </svg>
                  </Link>
                </li>
                <li className="mx-2">
                  <Link
                    href="https://www.instagram.com/rorolopez02/"
                    target="#"
                  >
                    <svg
                      width="44"
                      height="44"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#fff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="headersButtons social_buttons"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z" />
                    </svg>
                  </Link>
                </li>
              </ul>
            </h2>
          </section>
        </div>

        <article className="col-start-1 col-end-3 grid grid-cols-2 border border-pageColor rounded-3xl h-min p-4 fotos_main_article">
          {fotosDeCategoria.map((foto: Foto, index: number) => {
            const imageUrl = imageUrls[index];
            if (index >= 6) {
              return null;
            }
            return (
              <article
                key={index}
                className={
                  index === 0
                    ? "mx-8 m-4 col-start-1 col-end-2 row-start-1 row-end-2 py-8 noticias_title flex flex-col justify-center items-center border rounded-3xl border-pageColor fotos_image_article"
                    : index === 1
                    ? "mx-8 m-4 col-start-2 col-end-3 row-start-1 row-end-2 py-8 noticias_title flex flex-col justify-center items-center border rounded-3xl border-pageColor fotos_image_article"
                    : index === 2
                    ? "mx-8 m-4 col-start-1 col-end-2 row-start-2 row-end-3 py-8 noticias_title flex flex-col justify-center items-center border rounded-3xl border-pageColor fotos_image_article"
                    : index === 3
                    ? "mx-8 m-4 col-start-2 col-end-3 row-start-2 row-end-3 py-8 noticias_title flex flex-col justify-center items-center border rounded-3xl border-pageColor fotos_image_article"
                    : index === 4
                    ? "mx-8 m-4 col-start-1 col-end-2 row-start-3 row-end-4 py-8 noticias_title flex flex-col justify-center items-center border rounded-3xl border-pageColor fotos_image_article"
                    : "mx-8 m-4 col-start-2 col-end-3 row-start-3 row-end-4 py-8 noticias_title flex flex-col justify-center items-center border rounded-3xl border-pageColor fotos_image_article"
                }
              >
                <div className="flex justify-center items-center">
                  <Image
                    src={imageUrl}
                    alt={foto.title}
                    height={250}
                    width={600}
                  />
                </div>
                <h1
                  className={
                    "flex items-center justify-center fotos_title text-3xl font-bold mt-4"
                  }
                >
                  {foto.title}
                </h1>
              </article>
            );
          })}
          <div className="col-start-1 col-end-3 flex justify-center items-center w-full pt-4">
            {fotosDeCategoria.length > 6 && (
              <button className="border border-pageColor rounded-3xl p-2 w-60 text-xl font-bold button">
                VER MAS
              </button>
            )}
          </div>
        </article>
      </section>
      <Footer />
    </>
  );
}
