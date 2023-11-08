import Header from "@/components/HeaderComponents/Header";
import Footer from "@/components/FooterComponents/Footer";
import Image from "next/image";
import { Tweet } from "react-tweet";
import NoticiasMasRecientes from "@/components/NoticiasMasRecientes";
import Link from "next/link";

async function obtenerNoticias() {
  const res = await fetch(
    "https://lrwm6m86.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27noticias%27%5D|order(_createdAt desc)",
    {
      method: "GET",
      cache: "no-store",
    }
  );
  if (res.ok) {
    const data = await res.json();
    if (data && data.result) {
      return data.result;
    } else {
      return [];
    }
  } else {
    throw new Error("Error al obtener noticias de la API");
  }
}

interface Noticia {
  _id: string;
  bajada: string;
  descripcion: string;
  title: string;
  _createdAt: any;
  categoria: string;
  image_principal: string;
  epigrafe: string;
  copete: string;
  parrafo_1: string;
  parrafo_2: string;
  YouTubeCode_1: any;
  TwitterID_1: string;
}

async function obtenerAutor() {
  const res = await fetch(
    "https://lrwm6m86.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27author%27%5D",
    {
      method: "GET",
      cache: "no-store",
    }
  );
  if (res.ok) {
    const data = await res.json();
    if (data && data.result) {
      return data.result;
    } else {
      return [];
    }
  } else {
    throw new Error("Error al obtener noticias de la API");
  }
}

interface Autor {
  _id: string;
  photo: string;
  name: string;
}

export default async function Page({ params }: any) {
  const noticias = await obtenerNoticias();
  const noticiaSeleccionada = params.noticia;
  const noticiaSeleccionadaArreglada = noticiaSeleccionada.replace(
    /%20|%26|%2C|%E2%80%93|%C3%BA/g,
    (match: any) => {
      switch (match) {
        case "%20":
          return " ";
        case "%2C":
          return ",";
        case "%E2%80%93":
          return "-";
        case "%26":
          return "&";
        case "%C3%BA":
          return "ú";
        default:
          return match;
      }
    }
  );
  const datosDeNoticiaSeleccionada = noticias.filter(
    (noticia: Noticia) => noticia.title === noticiaSeleccionadaArreglada
  );

  const autor = await obtenerAutor();

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
              className="border border-black rounded-3xl p-4"
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
                {noticia._createdAt}
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
                    src={item.photo}
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
