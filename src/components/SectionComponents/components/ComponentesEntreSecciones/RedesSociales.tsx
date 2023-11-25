import React from "react";
import Link from "next/link";

export default function RedesSociales() {
  return (
    <section className="col-start-2 col-end-7 flex flex-col bg-gradient-to-b from-pageColor to-gradientColor w-max max-w-97.5rem m-auto p-4 border border-pageColor rounded-3xl dolar_widget_container text-white">
      <h1 className="m-auto text-xl">Siguenos en nuestras Redes Sociales</h1>
      <div className="flex dolar_scroll">
        <ul className="flex w-max dolar_article mt-4">
          <li className="flex items-center mx-2 px-2">
            <Link href={""} className="flex items-center widget_socials_link">
              <svg
                width="34"
                height="34"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#fff"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="widget_socials_svg"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M16.5 7.5l0 .01" />
              </svg>
              <h1 className="widget_socials_title">Nuestro Instagram</h1>
            </Link>
          </li>

          <li className="flex items-center mx-2 px-2">
            <Link href={""} className="flex items-center widget_socials_link">
              <svg
                width="34"
                height="34"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#fff"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="widget_socials_svg"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" />
              </svg>
              <h1 className="widget_socials_title">Nuestro Twitter</h1>
            </Link>
          </li>

          <li className="flex items-center mx-2 px-2">
            <Link href={""} className="flex items-center widget_socials_link">
              <svg
                width="34"
                height="34"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#fff"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="widget_socials_svg"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z" />
              </svg>
              <h1 className="widget_socials_title">Nuestro TikTok</h1>
            </Link>
          </li>

          <li className="flex items-center mx-2 px-2">
            <Link href={""} className="flex items-center widget_socials_link">
              <svg
                width="34"
                height="34"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#fff"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="widget_socials_svg"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" />
                <path d="M10 9l5 3l-5 3z" />
              </svg>
              <h1 className="widget_socials_title">Nuestro YouTube</h1>
            </Link>
          </li>

          <li className="flex items-center mx-2 px-2">
            <Link href={""} className="flex items-center widget_socials_link">
              <svg
                width="34"
                height="34"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#fff"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="widget_socials_svg"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
              </svg>
              <h1 className="widget_socials_title">Nuestro FaceBook</h1>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
