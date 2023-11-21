import Header from "@/components/HeaderComponents/Header";
import Footer from "@/components/FooterComponents/Footer";
import Image from "next/image";
import { Tweet } from "react-tweet";
import NoticiasMasRecientes from "@/components/pagesComponents/MasRecientesVentana";
import Link from "next/link";
import { obtenerNoticias } from "@/utils/noticia";
import { Noticia, Autor } from "@/types/componentes.types";
import { obtenerAutor } from "@/utils/autor";
import { repalceParams } from "@/utils/replaceParams";
import MasRecientesDeCategoria from "@/components/pagesComponents/MasRecientesDeCategoria";
import { PortableText } from "@portabletext/react";

export default async function Page({ params }: any) {
  const noticias = await obtenerNoticias();
  const noticiaSeleccionada = params.noticia;
  const noticiaSeleccionadaArreglada = repalceParams(noticiaSeleccionada);
  const datosDeNoticiaSeleccionada = noticias.filter(
    (noticia: Noticia) => noticia.title === noticiaSeleccionadaArreglada
  );

  const autor = await obtenerAutor();
  const ref = autor.map((item: Autor) => item.photo.asset._ref);
  const imageUrls = ref.map((ref: any) => {
    const modifiedRef = String(ref)
      .replace("image-", "")
      .replace("-jpg", ".jpg")
      .replace("-webp", ".webp");
    const baseUrl = "https://cdn.sanity.io/images/lrwm6m86/production/";
    return baseUrl + modifiedRef;
  });
  const modifyImageUrl = (imageRef: any) => {
    const modifiedRef = String(imageRef)
      .replace("image-", "")
      .replace("-jpg", ".jpg")
      .replace("-webp", ".webp");
    const baseUrl = "https://cdn.sanity.io/images/lrwm6m86/production/";
    return baseUrl + modifiedRef;
  };

  const modifyVideoCode = (videoCode: string | undefined) => {
    return videoCode ? videoCode.replace("https://youtu.be/", "") : "";
  };

  const formatCreatedAt = (createdAt: string) => {
    const date = new Date(createdAt);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    return `${day} de ${month}`;
  };

  return (
    <>
      <Header />
      {datosDeNoticiaSeleccionada.map((noticia: Noticia, index: number) => {
        const noticeImageUrl = modifyImageUrl(
          noticia.image_principal.imagen.asset._ref
        );
        const image2Url =
          noticia.segundo_bloque?.imagen_2 &&
          modifyImageUrl(noticia.segundo_bloque.imagen_2.imagen.asset._ref);

        const image3Url =
          noticia.tercer_bloque?.imagen_3 &&
          modifyImageUrl(noticia.tercer_bloque.imagen_3.imagen.asset._ref);

        const image4Url =
          noticia.cuarto_bloque?.imagen_4 &&
          modifyImageUrl(noticia.cuarto_bloque.imagen_4.imagen.asset._ref);

        const image5Url =
          noticia.quinto_bloque?.imagen_5 &&
          modifyImageUrl(noticia.quinto_bloque.imagen_5.imagen.asset._ref);
        const modifiedVideoCode1 = modifyVideoCode(
          noticia.segundo_bloque?.YouTubeCode_1
        );
        const modifiedVideoCode2 = modifyVideoCode(
          noticia.tercer_bloque?.YouTubeCode_2
        );
        const modifiedVideoCode3 = modifyVideoCode(
          noticia.cuarto_bloque?.YouTubeCode_3
        );
        const modifiedVideoCode4 = modifyVideoCode(
          noticia.quinto_bloque?.YouTubeCode_4
        );
        return (
          <article
            className="grid grid-cols-3 mx-48 my-24 text-black noticepage_main_section"
            key={index}
          >
            <div className="row-span-1 flex items-center mt-12 mb-4">
              <Link
                href={
                  noticia.categoria === "Infografias"
                    ? `/pages/infografiaspage/${noticia.categoria}`
                    : `/pages/categorypage/${noticia.categoria}`
                }
                className="border border-pageColor rounded-3xl p-2 px-4 font-bold button"
              >
                {noticia.categoria}
              </Link>
            </div>
            <div className="col-start-1 col-end-3 row-span-2 border border-pageColor rounded-3xl p-4 ">
              <div className="row-start-1 row-end-2">
                <h1 className="text-5xl font-bold mb-4 noticepage_title">
                  {noticia?.title}
                </h1>
                <h3 className="text-2xl border-b border-pageColor pb-4 noticepage_bajada">
                  {noticia?.bajada}
                </h3>
                <h5 className="flex justify-end py-4 border-b border-pageColor noticepage_fecha">
                  {formatCreatedAt(noticia._createdAt)}
                </h5>
              </div>
              <div className="mt-8 noticepage_div_image">
                <Image
                  className="noticepage_image"
                  src={noticeImageUrl}
                  alt={noticia?.title}
                  width={1000}
                  height={250}
                />
                <h5 className="py-4 text-gray-700 border-b border-pageColor noticepage_epigrafe">
                  {noticia.image_principal.epigrafe}
                </h5>
              </div>
              <div className="pb-4">
                {autor.map((item: Autor, index: number) => {
                  const imageUrl = imageUrls[index];
                  if (item._id === noticia.autor._ref && imageUrl) {
                    return (
                      <article
                        className="my-8 border border-pageColor rounded-xl p-2 w-52 text-sm flex items-center noticepage_autor"
                        key={item._id}
                      >
                        <Image
                          src={imageUrl}
                          alt={item.name}
                          width={50}
                          height={50}
                          className="border border-pageColor rounded-full mr-2 noticepage_autor_image"
                        />
                        <h5 className="border-l border-pageColor pl-2 noticepage_autor_name">
                          Autor:
                          <br />
                          {item.name}
                        </h5>
                      </article>
                    );
                  }
                  return null;
                })}
                <p className="text-2xl py-4 noticepage_parrafo">
                  <PortableText value={noticia?.copete} />
                </p>

                {noticia.segundo_bloque?.imagen_2 && (
                  <div>
                    <Image
                      src={image2Url}
                      alt="Imagen 2"
                      height={1000}
                      width={1000}
                    />
                    <h5 className="py-4 text-gray-700">
                      {noticia.segundo_bloque?.imagen_2.epigrafe}
                    </h5>
                  </div>
                )}
                {modifiedVideoCode1 && (
                  <div className="py-4 video-container">
                    <iframe
                      width="100%"
                      height="315"
                      className="video-iframe"
                      src={`https://www.youtube.com/embed/${modifiedVideoCode1}`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
                {noticia.segundo_bloque?.TwitterID_1 && (
                  <Tweet id={noticia.segundo_bloque?.TwitterID_1} />
                )}
                {noticia.segundo_bloque?.segunda_descripcion && (
                  <p className="text-2xl py-4 noticepage_parrafo">
                    <PortableText
                      value={noticia.segundo_bloque?.segunda_descripcion}
                    />
                  </p>
                )}

                {noticia.tercer_bloque?.imagen_3 && (
                  <div>
                    <Image
                      src={image3Url}
                      alt="Imagen 3"
                      height={1000}
                      width={1000}
                    />
                    <h5 className="pt-4 text-gray-700">
                      {noticia.tercer_bloque?.imagen_3.epigrafe}
                    </h5>
                  </div>
                )}
                {modifiedVideoCode2 && (
                  <div className="py-4 video-container">
                    <iframe
                      width="100%"
                      height="315"
                      className="video-iframe"
                      src={`https://www.youtube.com/embed/${modifiedVideoCode2}`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
                {noticia.tercer_bloque?.TwitterID_2 && (
                  <Tweet id={noticia.tercer_bloque?.TwitterID_2} />
                )}
                {noticia.tercer_bloque?.tercera_descripcion && (
                  <p className="text-2xl py-4 noticepage_parrafo">
                    <PortableText
                      value={noticia.tercer_bloque?.tercera_descripcion}
                    />
                  </p>
                )}

                {noticia.cuarto_bloque?.imagen_4 && (
                  <div>
                    <Image
                      src={image4Url}
                      alt="Imagen 4"
                      height={1000}
                      width={1000}
                    />
                    <h5 className="pt-4 text-gray-700">
                      {noticia.cuarto_bloque?.imagen_4.epigrafe}
                    </h5>
                  </div>
                )}
                {modifiedVideoCode3 && (
                  <div className="py-4 video-container">
                    <iframe
                      width="100%"
                      height="315"
                      className="video-iframe"
                      src={`https://www.youtube.com/embed/${modifiedVideoCode3}`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
                {noticia.cuarto_bloque?.TwitterID_3 && (
                  <Tweet id={noticia.cuarto_bloque?.TwitterID_3} />
                )}
                {noticia?.cuarto_bloque && (
                  <p className="text-2xl py-4 noticepage_parrafo">
                    <PortableText
                      value={noticia?.cuarto_bloque.cuarta_descripcion}
                    />
                  </p>
                )}

                {noticia.quinto_bloque?.imagen_5 && (
                  <div>
                    <Image
                      src={image5Url}
                      alt="Imagen 5"
                      height={1000}
                      width={1000}
                    />
                    <h5 className="pt-4 text-gray-700">
                      {noticia.quinto_bloque?.imagen_5.epigrafe}
                    </h5>
                  </div>
                )}
                {modifiedVideoCode4 && (
                  <div className="py-4 video-container">
                    <iframe
                      width="100%"
                      height="315"
                      className="video-iframe"
                      src={`https://www.youtube.com/embed/${modifiedVideoCode4}`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
                {noticia.quinto_bloque?.TwitterID_4 && (
                  <Tweet id={noticia.quinto_bloque?.TwitterID_4} />
                )}
                {noticia.quinto_bloque?.quinta_descripcion && (
                  <p className="text-2xl py-4 noticepage_parrafo">
                    <PortableText
                      value={noticia.quinto_bloque?.quinta_descripcion}
                    />
                  </p>
                )}
              </div>

              {/* <div className="border-t border-pageColor p-8 flex justify-center items-center">
                <p className="border border-pageColor w-full h-full">
                  Comentarios
                </p>
              </div> */}
            </div>
            <div className="col-start-3 col-end-4 row-span-2 border border-pageColor rounded-3xl ml-12 flex items-center justify-center h-min display_none">
              <MasRecientesDeCategoria categoria={noticia.categoria} />
            </div>
            <div className="col-span-3 row-span-3 mt-12 flex items-center justify-center">
              <NoticiasMasRecientes />
            </div>
          </article>
        );
      })}
      <Footer />
    </>
  );
}
