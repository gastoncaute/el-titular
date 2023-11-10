import Header from "@/components/HeaderComponents/Header";
import Footer from "@/components/FooterComponents/Footer";
import Image from "next/image";
import { Tweet } from "react-tweet";
import NoticiasMasRecientes from "@/components/NoticiasMasRecientes";
import Link from "next/link";
import { obtenerNoticias } from "@/utils/noticia";
import { Noticia, Autor } from "@/types/componentes.types";
import { obtenerAutor } from "@/utils/autor";
import { repalceParams } from "@/utils/replaceParams";

export default async function Page({ params }: any) {
  const noticias = await obtenerNoticias();
  const noticiaSeleccionada = params.noticia;
  const noticiaSeleccionadaArreglada = repalceParams(noticiaSeleccionada);
  const datosDeNoticiaSeleccionada = noticias.filter(
    (noticia: Noticia) => noticia.title === noticiaSeleccionadaArreglada
  );

  const autor = await obtenerAutor();
  const ref = autor.map((item: Autor) => item.photo.asset._ref);
  const modifiedRef = String(ref).replace("image-", "").replace("-jpg", ".jpg");
  const baseUrl = "https://cdn.sanity.io/images/lrwm6m86/production/";
  const imageUrl = baseUrl + modifiedRef;

  const formatCreatedAt = (createdAt: string) => {
    const date = new Date(createdAt);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    return `${day} de ${month}`;
  };

  return (
    <>
      <Header />
      {datosDeNoticiaSeleccionada.map((noticia: Noticia, index: any) => (
        <article
          className="grid grid-cols-3 mx-48 my-24 text-black"
          key={index}
        >
          <div className="row-span-1 flex items-center mt-12 mb-4">
            <Link
              href={`/pages/categorypage/${noticia.categoria}`}
              className="border border-black rounded-3xl p-2 px-4 font-bold button"
            >
              {noticia.categoria}
            </Link>
          </div>
          <div className="col-start-1 col-end-3 row-span-2 border border-black rounded-3xl  p-4">
            <div className="row-start-1 row-end-2 mb-8">
              <h1 className="text-5xl font-bold mb-4">{noticia.title}</h1>
              <h3 className="text-2xl border-b border-black pb-4">
                {noticia.descripcion}
              </h3>
              <h5 className="flex justify-end py-4 border-b border-black">
                {formatCreatedAt(noticia._createdAt)}
              </h5>
            </div>
            <div className="">
              <Image
                src={noticia.image_principal}
                alt={noticia.title}
                width={500}
                height={250}
              />
              <h5 className=" py-4 border-b border-black">
                {noticia.epigrafe}
              </h5>
            </div>
            <div className="border-b border-black pb-8">
              {autor.map((item: Autor) => (
                <p
                  className="my-8 border border-black rounded-xl p-2 w-52 text-sm flex items-center"
                  key={item._id}
                >
                  <Image
                    src={imageUrl}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="border border-black rounded-full mr-2"
                  />
                  <h5 className="border-l border-black pl-2">
                    Autor:
                    <br />
                    {item.name}
                  </h5>
                </p>
              ))}
              <p>{noticia.copete}</p>
              <p className="text-2xl">
                {noticia.parrafo_1}
                <br />
                {noticia.parrafo_2}
              </p>
              {noticia.YouTubeCode_1}
              <div>
                <Tweet id={noticia.TwitterID_1} />
              </div>
            </div>
            <div className="p-8 flex justify-center items-center">
              <p className="border border-black w-full h-full">Comentarios</p>
            </div>
          </div>
          <div className="col-start-3 col-end-4 row-span-2 border border-black rounded-3xl ml-12 flex items-center justify-center h-min">
            Noticias más recientes de {noticia.categoria}
          </div>
          <div className="col-start-2 col-end-3 row-span-3 border border-black rounded-3xl mt-12 flex items-center justify-center">
            <NoticiasMasRecientes />
          </div>
        </article>
      ))}
      <Footer />
    </>
  );
}
