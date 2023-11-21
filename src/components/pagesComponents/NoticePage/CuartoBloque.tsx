import { Noticia } from "@/types/componentes.types";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import React from "react";
import { Tweet } from "react-tweet";

export default function CuartoBloque({
  cuartoBloque,
}: {
  cuartoBloque: Noticia["cuarto_bloque"];
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
      {cuartoBloque?.TwitterID_3 && <Tweet id={cuartoBloque?.TwitterID_3} />}
      {cuartoBloque && (
        <p className="text-2xl py-4 noticepage_parrafo">
          <PortableText value={cuartoBloque.cuarta_descripcion} />
        </p>
      )}
    </section>
  );
}
