"use client";

import React from "react";
import {
  InstagramEmbed,
  FacebookEmbed,
  TikTokEmbed,
} from "react-social-media-embed";

export type IncrustacionItem = {
  _key?: string;
  tipo?: "youtube" | "facebook" | "instagram" | "tiktok" | "html" | "pdf";
  url?: string;
  codigoHtml?: string;
  tituloPdf?: string;
  archivoPdfUrl?: string;
};

function obtenerYoutubeId(url: string): string | null {
  try {
    const parsed = new URL(url);

    if (parsed.hostname === "youtu.be") {
      return parsed.pathname.slice(1).split("/")[0] || null;
    }

    if (
      parsed.hostname === "youtube.com" ||
      parsed.hostname === "www.youtube.com" ||
      parsed.hostname === "m.youtube.com"
    ) {
      if (parsed.pathname === "/watch") {
        return parsed.searchParams.get("v");
      }

      const match = parsed.pathname.match(/^\/(?:embed|shorts)\/([^/]+)/);
      return match?.[1] ?? null;
    }
  } catch {
    return null;
  }

  return null;
}

export default function Incrustaciones({
  items,
}: {
  items?: IncrustacionItem[] | null;
}) {
  if (!items?.length) return null;

  return (
    <div className="incrustaciones">
      {items.map((item, index) => {
        const key = item._key ?? `${item.tipo ?? "contenido"}-${index}`;

        // 1. YOUTUBE
        if (item.tipo === "youtube" && item.url) {
          const videoId = obtenerYoutubeId(item.url);

          if (!videoId) {
            return <p key={key}>No se pudo reconocer la URL de YouTube.</p>;
          }

          return (
            <div className="incrustacion-video" key={key}>
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}`}
                title="Video de YouTube"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          );
        }

        // 2. PDF
        if (item.tipo === "pdf" && item.archivoPdfUrl) {
          return (
            <div className="incrustacion-pdf" key={key}>
              {item.tituloPdf && <h3>{item.tituloPdf}</h3>}

              <iframe
                src={item.archivoPdfUrl}
                title={item.tituloPdf || "Documento PDF"}
                loading="lazy"
              />

              <a
                href={item.archivoPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Abrir PDF en una pestaña nueva
              </a>
            </div>
          );
        }

        // 3. INSTAGRAM (Vista previa nativa como tarjeta)
        if (item.tipo === "instagram" && item.url) {
          return (
            <div
              className="incrustacion-red-social instagram-embed-container"
              key={key}
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <InstagramEmbed url={item.url} width={340} />
            </div>
          );
        }

        // 4. TIKTOK (Vista previa nativa como tarjeta)
        if (item.tipo === "tiktok" && item.url) {
          return (
            <div
              className="incrustacion-red-social tiktok-embed-container"
              key={key}
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <TikTokEmbed url={item.url} width={325} />
            </div>
          );
        }

        // 5. FACEBOOK (Vista previa nativa como tarjeta)
        if (item.tipo === "facebook" && item.url) {
          return (
            <div
              className="incrustacion-red-social facebook-embed-container"
              key={key}
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <FacebookEmbed url={item.url} width={500} />
            </div>
          );
        }

        if (item.tipo === "html") {
          return (
            <p key={key} className="incrustacion-html-aviso">
              La inserción HTML requiere una integración segura específica.
            </p>
          );
        }

        return null;
      })}
    </div>
  );
}
