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

export default function SeptimoBloque({
  septimoBloque,
}: {
  septimoBloque: Noticia["septimo_bloque"];
}) {
  return (
    <section>
      {septimoBloque?.imagen_5 && (
        <div className="bloque-imagen">
          <Image
            src={modifyImageUrl(septimoBloque?.imagen_5.imagen.asset._ref)}
            alt={septimoBloque?.imagen_5.epigrafe}
            height={800}
            width={800}
            style={{ maxHeight: "600px", maxWidth: "100%", width: "auto" }}
          />
          <p>
            <PortableText value={septimoBloque?.imagen_5.epigrafe} />
          </p>
        </div>
      )}
      {septimoBloque?.video && (
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
              src={modifyVideoFileUrl(septimoBloque?.video?.asset._ref)}
              type="video/mp4"
            />
            Tu navegador no soporta el tag de video.
          </video>
        </div>
      )}
      {septimoBloque?.quinta_descripcion && (
        <p className="bloque-descripcion">
          <PortableText
            value={septimoBloque?.quinta_descripcion?.map((item: any) => ({
              ...item,
              children: item.children.map((child: any) => ({
                ...child,
                text: child.text.replace(/&/g, "\n"),
              })),
            }))}
          />
        </p>
      )}
      {modifyVideoCode(septimoBloque?.YouTubeCode_4) && (
        <div className="bloque-video-iframe">
          <iframe
            width="50%"
            height="315"
            className="video-iframe"
            src={`https://www.youtube.com/embed/${modifyVideoCode(
              septimoBloque?.YouTubeCode_4
            )}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      )}
      {septimoBloque?.TwitterID_4 && (
        <Tweet id={modifyTweetCode(septimoBloque?.TwitterID_4)} />
      )}
    </section>
  );
}
