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
  if (!segundoBloque) return null;

  return (
    <section className="contenido-bloque">
      {segundoBloque?.imagen_2 && (
        <div className="bloque-imagen">
          <Image
            src={modifyImageUrl(segundoBloque?.imagen_2.imagen.asset._ref)}
            alt={segundoBloque?.imagen_2.epigrafe}
            height={800}
            width={800}
            style={{ maxHeight: "600px", maxWidth: "100%", width: "auto" }}
          />
          <p>
            <PortableText value={segundoBloque?.imagen_2.epigrafe} />
          </p>
        </div>
      )}
      {segundoBloque?.video && (
        <div className="bloque-video">
          <video
            controls
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
        <p className="bloque-descripcion">
          <PortableText
            value={segundoBloque?.segunda_descripcion?.map((item: any) => ({
              ...item,
              children: item.children.map((child: any) => ({
                ...child,
                text: child.text.replace(/&/g, ""),
              })),
            }))}
          />
        </p>
      )}

      {modifyVideoCode(segundoBloque?.YouTubeCode_1) && (
        <div className="bloque-video-iframe">
          <iframe
            width="50%"
            height="315"
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
