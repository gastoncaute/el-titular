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

export default function CuartoBloque({
  cuartoBloque,
}: {
  cuartoBloque: Noticia["cuarto_bloque"];
}) {
  return (
    <section className="contenido-bloque">
      {cuartoBloque?.imagen_4 && (
        <div className="bloque-imagen">
          <Image
            src={modifyImageUrl(cuartoBloque?.imagen_4.imagen.asset._ref)}
            alt={cuartoBloque?.imagen_4.epigrafe}
            height={800}
            width={800}
            style={{ maxHeight: "600px", maxWidth: "100%", width: "auto" }}
          />
          <p>
            <PortableText value={cuartoBloque?.imagen_4.epigrafe} />
          </p>
        </div>
      )}
      {cuartoBloque?.video && (
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
              src={modifyVideoFileUrl(cuartoBloque?.video?.asset._ref)}
              type="video/mp4"
            />
            Tu navegador no soporta el tag de video.
          </video>
        </div>
      )}
      {cuartoBloque && (
        <p className="bloque-descripcion">
          <PortableText
            value={cuartoBloque?.cuarta_descripcion?.map((item: any) => ({
              ...item,
              children: item.children.map((child: any) => ({
                ...child,
                text: child.text.replace(/&/g, ""),
              })),
            }))}
          />
        </p>
      )}
      {modifyVideoCode(cuartoBloque?.YouTubeCode_3) && (
        <div className="bloque-video-iframe">
          <iframe
            width="50%"
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
      {cuartoBloque?.TwitterID_3 && (
        <Tweet id={modifyTweetCode(cuartoBloque.TwitterID_3)} />
      )}
    </section>
  );
}
