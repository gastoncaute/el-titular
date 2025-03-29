import { Noticia } from "@/types/componentes.types";
import {
  modifyImageUrl,
  modifyTweetCode,
  modifyVideoCode,
  modifyVideoFileUrl,
} from "@/utils/modifyCodes";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import React from "react";
import { Tweet } from "react-tweet";

export default async function SegundoBloque({
  segundoBloque,
}: {
  segundoBloque: Noticia["segundo_bloque"];
}) {
  return (
    <section>
      {segundoBloque?.imagen_2 && (
        <div className="noticepage_div_image flex flex-col items-center">
          <Image
            className="m-auto noticepage_image"
            src={modifyImageUrl(segundoBloque?.imagen_2.imagen.asset._ref)}
            alt={segundoBloque?.imagen_2.epigrafe}
            height={800}
            width={800}
            style={{ maxHeight: "600px", maxWidth: "100%", width: "auto" }}
          />
          <h5 className="py-4 text-gray-700">
            <PortableText value={segundoBloque?.imagen_2.epigrafe} />
          </h5>
        </div>
      )}
      {segundoBloque?.video && (
        <div className="flex w-full justify-center py-4 notice-video-container">
          <video
            controls
            className="m-auto noticepage_video"
            style={{
              maxHeight: "600px",
              maxWidth: "100%",
              width: "auto",
            }}
          >
            <source
              src={modifyVideoFileUrl(segundoBloque?.video?.asset._ref)}
              type="video/mp4"
            />
            Tu navegador no soporta el tag de video.
          </video>
        </div>
      )}
      {segundoBloque?.segunda_descripcion && (
        <p className="text-2xl py-4 noticepage_parrafo">
          <PortableText
            value={segundoBloque?.segunda_descripcion?.map((item: any) => ({
              ...item,
              children: item.children.map((child: any) => ({
                ...child,
                text: child.text.replace(/&/g, "\n"),
              })),
            }))}
          />
        </p>
      )}

      {modifyVideoCode(segundoBloque?.YouTubeCode_1) && (
        <div className="py-4 video-container">
          <iframe
            width="50%"
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
