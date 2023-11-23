import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Autor({ categoria }: { categoria: any }) {
  const autorName = categoria === "Fotografias" ? "Juana Monti" : "sda";

  return (
    <section className="border border-black bg-gradient-to-b from-pageColor to-gradientColor text-white flex flex-col w-40rem rounded-3xl mt-4 p-4 px-12 text-2xl font-bold fotos_section_autor">
      <h1 className="m-auto">Autora: {autorName}</h1>
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
            <Link href="https://www.instagram.com/rorolopez02/" target="#">
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
            <Link href="https://www.instagram.com/rorolopez02/" target="#">
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
            <Link href="https://www.instagram.com/rorolopez02/" target="#">
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
  );
}
