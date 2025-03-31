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
        <div className="bloque-imagen">
          <Image
            src={modifyImageUrl(octavoBloque?.imagen_5.imagen.asset._ref)}
            alt={octavoBloque?.imagen_5.epigrafe}
            height={800}
            width={800}
            style={{ maxHeight: "600px", maxWidth: "100%", width: "auto" }}
          />
          <p>
            <PortableText value={octavoBloque?.imagen_5.epigrafe} />
          </p>
        </div>
      )}
      {octavoBloque?.video && (
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
              src={modifyVideoFileUrl(octavoBloque?.video?.asset._ref)}
              type="video/mp4"
            />
            Tu navegador no soporta el tag de video.
          </video>
        </div>
      )}
      {octavoBloque?.quinta_descripcion && (
        <p className="bloque-descripcion">
          <PortableText
            value={octavoBloque?.quinta_descripcion?.map((item: any) => ({
              ...item,
              children: item.children.map((child: any) => ({
                ...child,
                text: child.text.replace(/&/g, ""),
              })),
            }))}
          />
        </p>
      )}
      {modifyVideoCode(octavoBloque?.YouTubeCode_4) && (
        <div className="bloque-video-iframe">
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
