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

export default function OctavoBloque({
  octavoBloque,
}: {
  octavoBloque: Noticia["octavo_bloque"];
}) {
  return (
    <section>
      {octavoBloque?.imagen_5 && (
        <div className="noticepage_div_image flex flex-col items-center">
          <Image
            className="m-auto noticepage_image"
            src={modifyImageUrl(octavoBloque?.imagen_5.imagen.asset._ref)}
            alt={octavoBloque?.imagen_5.epigrafe}
            height={800}
            width={800}
            style={{ maxHeight: "600px", maxWidth: "100%", width: "auto" }}
          />
          <h5 className="pt-4 text-gray-700">
            <PortableText value={octavoBloque?.imagen_5.epigrafe} />
          </h5>
        </div>
      )}
      {octavoBloque?.video && (
        <div className="flex w-full justify-center py-4 video-container">
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
              src={modifyVideoFileUrl(octavoBloque?.video?.asset._ref)}
              type="video/mp4"
            />
            Tu navegador no soporta el tag de video.
          </video>
        </div>
      )}
      {octavoBloque?.quinta_descripcion && (
        <p className="text-2xl py-4 noticepage_parrafo">
          <PortableText
            value={octavoBloque?.quinta_descripcion?.map((item: any) => ({
              ...item,
              children: item.children.map((child: any) => ({
                ...child,
                text: child.text.replace(/&/g, "\n"),
              })),
            }))}
          />
        </p>
      )}
      {modifyVideoCode(octavoBloque?.YouTubeCode_4) && (
        <div className="py-4 video-container">
          <iframe
            width="50%"
            height="315"
            className="video-iframe"
            src={`https://www.youtube.com/embed/${modifyVideoCode(
              octavoBloque?.YouTubeCode_4
            )}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      )}
      {octavoBloque?.TwitterID_4 && (
        <Tweet id={modifyTweetCode(octavoBloque?.TwitterID_4)} />
      )}
    </section>
  );
}
