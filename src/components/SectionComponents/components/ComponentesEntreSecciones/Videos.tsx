import { Video } from "@/types/componentes.types";
import { modifyVideoCode } from "@/utils/modifyCodes";
import { obtenerVideos } from "@/utils/obtenerVideos";
import { PortableText } from "@portabletext/react";
import React from "react";

export default async function Videos({ categoria }: { categoria: any }) {
  const videos = await obtenerVideos();

  let filteredVideos;

  if (categoria === "masRecientes") {
    filteredVideos = videos.filter(
      (video: Video) => video.categoria === "Entrevistas"
    );
  } else if (categoria === "Policiales") {
    filteredVideos = videos.filter(
      (video: Video) => video.categoria === "Recorridos"
    );
  } else {
    filteredVideos = videos;
  }

  const selectedVideo = filteredVideos.length > 0 ? filteredVideos[0] : null;

  return (
    <>
      {selectedVideo && (
        <section
          key={selectedVideo.categoria}
          className="col-start-2 col-end-7 bg-gradient-to-b from-pageColor to-gradientColor m-auto p-8 border border-pageColor rounded-3xl videos_main_section text-white"
        >
          <h1 className="flex justify-center text-4xl font-bold pb-4 videos_title">
            <PortableText value={selectedVideo.title} />
          </h1>
          <article className="video-container">
            <iframe
              width="100%"
              height="315"
              className="video-iframe"
              src={`https://www.youtube.com/embed/${modifyVideoCode(
                selectedVideo.link_video
              )}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </article>
        </section>
      )}
    </>
  );
}
