import React from "react";

export default function NoticiasImportantes() {
  return (
    <section
      className="col-start-2 col-end-7 bg-gradient-to-b from-pageColor to-gradientColor w-60rem h-full m-auto p-8 border border-pageColor rounded-3xl videos_main_section text-white"
      style={{ aspectRatio: "16 / 9" }}
    >
      <h1 className="flex justify-center text-4xl font-bold pb-4 videos_title">
        EN VIVO: LOS SHOWS DEL 150° ANIVERSARIO DE MAR DEL PLATA
      </h1>
      <article
        className="video-container"
        style={{
          position: "relative",
          paddingBottom: "56.25%",
          height: "0",
          overflow: "hidden",
        }}
      >
        <iframe
          width="100%"
          height="100%"
          className="video-iframe rounded-xl"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
          }}
          src="https://arcast.live/eventoc8"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </article>
    </section>
  );
}
