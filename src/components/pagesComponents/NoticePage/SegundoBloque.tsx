import { Noticia } from "@/types/componentes.types";
import { modifyImageUrl } from "@/utils/modifyCodes";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import React from "react";
import { Tweet } from "react-tweet";

export default async function SegundoBloque({
  segundoBloque,
}: {
  segundoBloque: Noticia["segundo_bloque"];
}) {
  const modifyVideoCode = (videoCode: string | undefined) => {
    return videoCode ? videoCode.replace("https://youtu.be/", "") : "";
  };
  const modifyTweetCode = (tweetCode: string | undefined) => {
    return tweetCode
      ? tweetCode.replace("https://twitter.com/Exbigote_/status/", "")
      : "";
  };

  return (
    <section>
      {segundoBloque?.imagen_2 && (
        <div>
          <Image
            src={modifyImageUrl(segundoBloque?.imagen_2.imagen.asset._ref)}
            alt={segundoBloque?.imagen_2.epigrafe}
            height={1000}
            width={1000}
          />
          <h5 className="py-4 text-gray-700">
            {segundoBloque?.imagen_2.epigrafe}
          </h5>
        </div>
      )}
      {segundoBloque?.segunda_descripcion && (
        <p className="text-2xl py-4 noticepage_parrafo">
          <PortableText value={segundoBloque?.segunda_descripcion} />
        </p>
      )}
      {modifyVideoCode(segundoBloque?.YouTubeCode_1) && (
        <div className="py-4 video-container">
          <iframe
            width="100%"
            height="315"
            className="video-iframe"
            src={`https://www.youtube.com/embed/${modifyVideoCode(
              segundoBloque?.YouTubeCode_1
            )}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      )}
      {segundoBloque?.TwitterID_1 && (
        <Tweet id={modifyTweetCode(segundoBloque?.TwitterID_1)} />
      )}
    </section>
  );
}
