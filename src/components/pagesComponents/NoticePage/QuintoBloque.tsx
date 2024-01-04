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

export default function QuintoBloque({
  quintoBloque,
}: {
  quintoBloque: Noticia["quinto_bloque"];
}) {
  return (
    <section>
      {quintoBloque?.imagen_5 && (
        <div>
          <Image
            src={modifyImageUrl(quintoBloque?.imagen_5.imagen.asset._ref)}
            alt={quintoBloque?.imagen_5.epigrafe}
            height={1000}
            width={1000}
          />
          <h5 className="pt-4 text-gray-700">
            <PortableText value={quintoBloque?.imagen_5.epigrafe} />
          </h5>
        </div>
      )}
      {quintoBloque?.quinta_descripcion && (
        <p className="text-2xl py-4 noticepage_parrafo">
          <PortableText
            value={quintoBloque?.quinta_descripcion.map((item: any) => ({
              ...item,
              children: item.children.map((child: any) => ({
                ...child,
                text: child.text.replace(/&/g, "\n"),
              })),
            }))}
          />
        </p>
      )}
      {modifyVideoCode(quintoBloque?.YouTubeCode_4) && (
        <div className="py-4 video-container">
          <iframe
            width="50%"
            height="315"
            className="video-iframe"
            src={`https://www.youtube.com/embed/${modifyVideoCode(
              quintoBloque?.YouTubeCode_4
            )}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      )}
      {quintoBloque?.TwitterID_4 && (
        <Tweet id={modifyTweetCode(quintoBloque?.TwitterID_4)} />
      )}
    </section>
  );
}
