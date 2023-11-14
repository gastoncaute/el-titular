import Header from "@/components/HeaderComponents/Header";
import Footer from "@/components/FooterComponents/Footer";
import Image from "next/image";
import { Tweet } from "react-tweet";
import NoticiasMasRecientes from "@/components/MasRecientesVentana";
import Link from "next/link";
import { obtenerNoticias } from "@/utils/noticia";
import { Noticia, Autor } from "@/types/componentes.types";
import { obtenerAutor } from "@/utils/autor";
import { repalceParams } from "@/utils/replaceParams";
import MasRecientesDeCategoria from "@/components/MasRecientesDeCategoria";

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

  const noticeRef = noticias.map(
    (noticia: Noticia) => noticia.image_principal.imagen.asset._ref
  );
  const noticeImageUrls = noticeRef.map((ref: any) => {
    const modifiedRef = String(ref)
      .replace("image-", "")
      .replace("-jpg", ".jpg");
    const baseUrl = "https://cdn.sanity.io/images/lrwm6m86/production/";
    return baseUrl + modifiedRef;
  });

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
        const noticeImageUrl = noticeImageUrls[index];
        return (
          <article
            className="grid grid-cols-3 mx-48 my-24 text-black"
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
            <div className="col-start-1 col-end-3 row-span-2 border border-pageColor rounded-3xl  p-4">
              <div className="row-start-1 row-end-2 mb-8">
                <h1 className="text-5xl font-bold mb-4">{noticia.title}</h1>
                <h3 className="text-2xl border-b border-pageColor pb-4">
                  {noticia.bajada}
                </h3>
                <h5 className="flex justify-end py-4 border-b border-pageColor">
                  {formatCreatedAt(noticia._createdAt)}
                </h5>
              </div>
              <div className="">
                <Image
                  src={noticeImageUrl}
                  alt={noticia.title}
                  width={1000}
                  height={250}
                />
                <h5 className="py-4 text-gray-700 border-b border-pageColor">
                  {noticia.image_principal.epigrafe}
                </h5>
              </div>
              <div className="border-b border-pageColor pb-8">
                {autor.map((item: Autor, index: number) => {
                  const imageUrl = imageUrls[index];
                  if (item._id === noticia.autor._ref && imageUrl) {
                    return (
                      <p
                        className="my-8 border border-pageColor rounded-xl p-2 w-52 text-sm flex items-center"
                        key={item._id}
                      >
                        <Image
                          src={imageUrl}
                          alt={item.name}
                          width={50}
                          height={50}
                          className="border border-pageColor rounded-full mr-2"
                        />
                        <h5 className="border-l border-pageColor pl-2">
                          Autor:
                          <br />
                          {item.name}
                        </h5>
                      </p>
                    );
                  }
                  return null;
                })}

                <p className="text-2xl py-4">{noticia.copete}</p>
                <p className="text-2xl py-4">{noticia.parrafo_1}</p>
                <p className="text-2xl py-4"> {noticia.parrafo_2}</p>
                {noticia.YouTubeCode_1}
                <div>
                  <Tweet id={noticia.TwitterID_1} />
                </div>
                <Image
                  src={noticia.imagen_2}
                  alt="Imagen 2"
                  height={1000}
                  width={1000}
                />
                <p className="py-4 text-gray-700">{noticia.epigrafe}</p>
                <div className="py-4">
                  <p className="text-2xl py-4">{noticia.parrafo_3}</p>
                  <p className="text-2xl py-4">{noticia.parrafo_4}</p>
                </div>
                <Image
                  src={noticia.imagen_3}
                  alt="Imagen 3"
                  height={1000}
                  width={1000}
                />
                <p className="pt-4 text-gray-700">{noticia.epigrafe}</p>
              </div>

              <div className="p-8 flex justify-center items-center">
                <p className="border border-pageColor w-full h-full">
                  Comentarios
                </p>
              </div>
            </div>
            <div className="col-start-3 col-end-4 row-span-2 border border-pageColor rounded-3xl ml-12 flex items-center justify-center h-min">
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
