import Header from "@/components/HeaderComponents/Header";
import Footer from "@/components/FooterComponents/Footer";
import Image from "next/image";
import NoticiasMasRecientes from "@/components/pagesComponents/MasRecientesVentana";
import Link from "next/link";
import { obtenerNoticias } from "@/utils/obtenerNoticia";
import { Noticia, Autor } from "@/types/componentes.types";
import { obtenerAutor } from "@/utils/obtenerAutor";
import MasRecientesDeCategoria from "@/components/pagesComponents/MasRecientesDeCategoria";
import { PortableText } from "@portabletext/react";
import SegundoBloque from "@/components/pagesComponents/NoticePage/SegundoBloque";
import TercerBloque from "@/components/pagesComponents/NoticePage/TercerBloque";
import CuartoBloque from "@/components/pagesComponents/NoticePage/CuartoBloque";
import QuintoBloque from "@/components/pagesComponents/NoticePage/QuintoBloque";
import { modifyImageUrl, modifyVideoFileUrl } from "@/utils/modifyCodes";
import ArrayImages from "@/components/pagesComponents/NoticePage/ArrayImages";
import SextoBloque from "@/components/pagesComponents/NoticePage/SextoBloque";
import SeptimoBloque from "@/components/pagesComponents/NoticePage/SeptimoBloque";
import OctavoBloque from "@/components/pagesComponents/NoticePage/OctavoBloque";

export default async function Page({ params }: any) {
  const noticias = await obtenerNoticias();
  const autor = await obtenerAutor();
  const noticiaSeleccionada = decodeURIComponent(params.noticia);
  const datosDeNoticiaSeleccionada = noticias.filter(
    (noticia: Noticia) => noticia.title === noticiaSeleccionada
  );
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
        return (
          <article
            className="grid grid-cols-3 mx-12 mt-24 text-black noticepage_main_section"
            key={index}
          >
            <div className="banner-3"></div>
            <div className="row-span-1 flex items-center mt-8 mb-4">
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
                {noticia.image_principal && noticia.image_principal.imagen && (
                  <Image
                    className="m-auto noticepage_image"
                    src={modifyImageUrl(
                      noticia.image_principal.imagen.asset._ref
                    )}
                    alt={noticia.image_principal.epigrafe}
                    height={800}
                    width={800}
                    style={{
                      maxHeight: "600px",
                      maxWidth: "100%",
                      width: "auto",
                    }}
                  />
                )}
                {(!noticia.image_principal ||
                  !noticia.image_principal.imagen) &&
                  noticia.image_principal?.video && (
                    <video controls className="m-auto noticepage_image">
                      <source
                        src={modifyVideoFileUrl(
                          noticia.image_principal.video.asset._ref
                        )}
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  )}
                <h5 className="py-4 text-gray-700 border-b border-pageColor noticepage_epigrafe">
                  <PortableText value={noticia.image_principal.epigrafe} />
                </h5>
              </div>
              <div className="pb-4">
                {autor.map((item: Autor) => {
                  if (
                    item._id === noticia.autor._ref &&
                    modifyImageUrl(item.photo.asset._ref)
                  ) {
                    return (
                      <article
                        className="my-8 border border-pageColor rounded-xl p-2 w-52 text-sm flex items-center noticepage_autor"
                        key={item._id}
                      >
                        <Image
                          src={modifyImageUrl(item.photo.asset._ref)}
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
                  <PortableText
                    value={noticia?.copete.map((item: any) => ({
                      ...item,
                      children: item.children.map((child: any) => ({
                        ...child,
                        text: child.text.replace(/&/g, "\n"),
                      })),
                    }))}
                  />
                </p>
                <SegundoBloque segundoBloque={noticia.segundo_bloque} />
                <TercerBloque tercerBloque={noticia.tercer_bloque} />
                <CuartoBloque cuartoBloque={noticia.cuarto_bloque} />
                <QuintoBloque quintoBloque={noticia.quinto_bloque} />
                <SextoBloque sextoBloque={noticia.sexto_bloque} />
                <SeptimoBloque septimoBloque={noticia.septimo_bloque} />
                <OctavoBloque octavoBloque={noticia.octavo_bloque} />
                {noticia.imagenes_array &&
                  noticia.imagenes_array.length > 0 && (
                    <ArrayImages arrayImages={noticia.imagenes_array} />
                  )}
              </div>

              {/* <div className="border-t border-pageColor p-8 flex justify-center items-center">
                <p className="border border-pageColor w-full h-full">
                  Comentarios
                </p>
              </div> */}
            </div>

            <div className="col-start-3 col-end-4 row-span-2">
              <div className="border border-pageColor rounded-3xl ml-12 h-min display_none">
                <MasRecientesDeCategoria categoria={noticia.categoria} />
              </div>
              <div className="banner-5 ml-12 display_none"></div>
              <div className="banner-5 ml-12 display_none"></div>
              <div className="banner-5 ml-12 display_none"></div>
            </div>
            <div className="col-span-2 row-span-3 mt-12">
              <NoticiasMasRecientes context="noticePage" />
            </div>
          </article>
        );
      })}
      <div className="banner-4"></div>
      <Footer />
    </>
  );
}
