import Clima from "./SectionComponents/Clima";
import Tendencias from "./SectionComponents/Tendencias";

export default function Section() {
    return(
        <section className="w-full h-screen grid grid-cols-4 grid-rows-1 py-14">
            <Clima />
            <div className="w-full h-full bg-green-600 col-start-2 col-end-4 flex justify-center items-center rounded-3xl">Noticias</div>
            <Tendencias />
        </section>
    )
}