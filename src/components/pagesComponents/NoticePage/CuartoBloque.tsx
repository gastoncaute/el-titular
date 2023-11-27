import { Noticia } from "@/types/componentes.types";
import {
  modifyImageUrl,
  modifyTweetCode,
  modifyVideoCode,
} from "@/utils/modifyCodes";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import React from "react";
import { Tweet } from "react-tweet";

export default function CuartoBloque({
  cuartoBloque,
}: {
  cuartoBloque: Noticia["cuarto_bloque"];
}) {
  return (
    <section>
      {cuartoBloque?.imagen_4 && (
        <div>
          <Image
            src={modifyImageUrl(cuartoBloque?.imagen_4.imagen.asset._ref)}
            alt={cuartoBloque?.imagen_4.epigrafe}
            height={1000}
            width={1000}
          />
          <h5 className="pt-4 text-gray-700">
            {cuartoBloque?.imagen_4.epigrafe}
          </h5>
        </div>
      )}
      {cuartoBloque && (
        <p className="text-2xl py-4 noticepage_parrafo">
          <PortableText
            value={cuartoBloque.cuarta_descripcion.map((item: any) => ({
              ...item,
              children: item.children.map((child: any) => ({
                ...child,
                text: child.text.replace(/&/g, "\n"),
              })),
            }))}
          />
        </p>
      )}
      {modifyVideoCode(cuartoBloque?.YouTubeCode_3) && (
        <div className="py-4 video-container">
          <iframe
            width="100%"
            height="315"
            className="video-iframe"
            src={`https://www.youtube.com/embed/${modifyVideoCode(
              cuartoBloque?.YouTubeCode_3
            )}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      )}
      {cuartoBloque?.TwitterID_3 && (
        <Tweet id={modifyTweetCode(cuartoBloque.TwitterID_3)} />
      )}
    </section>
  );
}
