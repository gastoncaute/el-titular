import React from "react";
import Image from "next/image";
import Link from "next/link";
import { modifyImageUrl } from "@/utils/modifyCodes";

export default function Autor({ categoria }: { categoria: any }) {
  const autorName =
    categoria === "Infografias" ? "Juana Monti" : "Valentina Dodero";
  const autorImage = categoria === "Infografias" ? "" : "";
  const autorRedes =
    categoria === "Infografias"
      ? [
          "https://www.instagram.com/juanaamonti/",
          "https://www.montijuana1@gmail.com",
          "https://wa.me/5491164522101",
        ]
      : [
          "https://instagram.com/gastoncauteruccio/",
          "https://twitter.com/Gastoncaute",
          "https://twitter.com/Gastoncaute",
        ];

  return (
    <section className="border border-black bg-gradient-to-b from-pageColor to-gradientColor text-white flex flex-col w-40rem rounded-3xl mt-4 p-4 px-12 text-2xl font-bold fotos_section_autor">
      <h1 className="m-auto">Autora: {autorName}</h1>
      <h2 className="flex items-center justify-around">
        <Image
          src={modifyImageUrl(autorImage)}
          alt={autorName}
          width={70}
          height={70}
          className="border border-white text-xs rounded-full mr-2 left-0 noticepage_autor_image"
        />
        <ul className="flex justify-around">
          <li className="mx-2">
            <Link href={autorRedes[0]} target="#">
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
            <Link href={autorRedes[1]} target="#">
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
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                <path d="M3 7l9 6l9 -6" />
              </svg>
            </Link>
          </li>
          <li className="mx-2">
            <Link href={autorRedes[2]} target="#">
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
                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
              </svg>
            </Link>
          </li>
        </ul>
      </h2>
    </section>
  );
}
