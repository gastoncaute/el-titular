import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Recientes from "@/components/Pages/Noticia/Ventanas/Recientes";
import Categoria from "@/components/Pages/Noticia/Ventanas/Categoria";
import { obtenerNoticias } from "@/utils/obtenerNoticia";
import { Noticia } from "@/types/componentes.types";
import Socials from "@/components/Pages/Noticia/Ventanas/Socials";
import Noticias from "@/components/Pages/Noticia/Noticia";

export default async function Page({ params }: any) {
  const noticias = await obtenerNoticias();
  const noticiaSeleccionada = decodeURIComponent(params.noticia);
  const datosDeNoticiaSeleccionada = noticias.filter(
    (noticia: Noticia) => noticia.title === noticiaSeleccionada
  );

  return (
    <>
      <Header />
      <main>
        {datosDeNoticiaSeleccionada.map((noticia: Noticia, index: number) => (
          <section className="noticias-main" key={index}>
            <article className="notice-article">
              <Noticias noticia={noticia} />
              <section className="noticia-section">
                <Categoria categoria={noticia.categoria} />
              </section>
            </article>
            <aside className="notice-aside">
              <Recientes />
              <Socials />
            </aside>
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}
