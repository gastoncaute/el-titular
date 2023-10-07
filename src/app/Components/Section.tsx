import Clima from "./SectionComponents/Clima";
import Tendencias from "./SectionComponents/Tendencias";
import Noticia from "./SectionComponents/Noticia/Noticia";

export default function Section() {
    return(
        <section className="w-full h-screen grid grid-cols-5 grid-rows-1 py-14">
            <Clima />
            <Noticia />
            <Tendencias />
        </section>
    )
}