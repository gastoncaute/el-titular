import { Noticia } from "@/types/componentes.types";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import React from "react";
import { Tweet } from "react-tweet";

export default function QuintoBloque({
  quintoBloque,
}: {
  quintoBloque: Noticia["quinto_bloque"];
}) {
  const modifyImageUrl = (imageRef: any) => {
    const modifiedRef = String(imageRef)
      .replace("image-", "")
      .replace("-jpg", ".jpg")
      .replace("-webp", ".webp")
      .replace("-png", ".png");
    const baseUrl = "https://cdn.sanity.io/images/lrwm6m86/production/";
    return baseUrl + modifiedRef;
  };
  const modifyVideoCode = (videoCode: string | undefined) => {
    return videoCode ? videoCode.replace("https://youtu.be/", "") : "";
  };
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
            {quintoBloque?.imagen_5.epigrafe}
          </h5>
        </div>
      )}
      {modifyVideoCode(quintoBloque?.YouTubeCode_4) && (
        <div className="py-4 video-container">
          <iframe
            width="100%"
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
      {quintoBloque?.TwitterID_4 && <Tweet id={quintoBloque?.TwitterID_4} />}
      {quintoBloque?.quinta_descripcion && (
        <p className="text-2xl py-4 noticepage_parrafo">
          <PortableText value={quintoBloque?.quinta_descripcion} />
        </p>
      )}
    </section>
  );
}
