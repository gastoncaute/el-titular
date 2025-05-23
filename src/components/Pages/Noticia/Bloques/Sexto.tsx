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

export default function SextoBloque({
  sextoBloque,
}: {
  sextoBloque: Noticia["sexto_bloque"];
}) {
  if (!sextoBloque) return null;

  return (
    <section className="contenido-bloque">
      {sextoBloque?.imagen_5 && (
        <div className="bloque-imagen">
          <Image
            src={modifyImageUrl(sextoBloque?.imagen_5.imagen.asset._ref)}
            alt={sextoBloque?.imagen_5.epigrafe}
            height={800}
            width={800}
            style={{ maxHeight: "600px", maxWidth: "100%", width: "auto" }}
          />
          <p>
            <PortableText value={sextoBloque?.imagen_5.epigrafe} />
          </p>
        </div>
      )}
      {sextoBloque?.video && (
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
              src={modifyVideoFileUrl(sextoBloque?.video?.asset._ref)}
              type="video/mp4"
            />
            Tu navegador no soporta el tag de video.
          </video>
        </div>
      )}
      {sextoBloque?.quinta_descripcion && (
        <p className="bloque-descripcion">
          <PortableText
            value={sextoBloque?.quinta_descripcion?.map((item: any) => ({
              ...item,
              children: item.children.map((child: any) => ({
                ...child,
                text: child.text.replace(/&/g, ""),
              })),
            }))}
          />
        </p>
      )}
      {modifyVideoCode(sextoBloque?.YouTubeCode_4) && (
        <div className="bloque-video-iframe">
          <iframe
            width="50%"
            height="315"
            className="video-iframe"
            src={`https://www.youtube.com/embed/${modifyVideoCode(
              sextoBloque?.YouTubeCode_4
            )}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      )}
      {sextoBloque?.TwitterID_4 && (
        <Tweet id={modifyTweetCode(sextoBloque?.TwitterID_4)} />
      )}
    </section>
  );
}
