import { Video } from "@/types/componentes.types";
import { modifyVideoCode } from "@/utils/modifyCodes";
import { obtenerVideos } from "@/utils/obtenerVideos";
import { PortableText } from "@portabletext/react";
import React from "react";

export default async function Videos() {
  const videos = await obtenerVideos();
  const selectedVideo = videos.length > 0 ? videos[0] : null;

  return (
    <>
      {(selectedVideo as Video) && (
        <section
          key={selectedVideo._id}
          className="col-start-2 col-end-7 bg-gradient-to-b from-pageColor to-gradientColor w-60rem h-full m-auto p-8 border border-pageColor rounded-3xl videos_main_section text-white"
          style={{ aspectRatio: "16 / 9" }}
        >
          <h1 className="flex justify-center text-4xl font-bold pb-4 videos_title">
            <PortableText value={selectedVideo.title} />
          </h1>
          <article className="video-container">
            <iframe
              width="100%"
              height="100%"
              className="video-iframe rounded-xl"
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
