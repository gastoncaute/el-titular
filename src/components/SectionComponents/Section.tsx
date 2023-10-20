import Clima from "./components/Clima";
import Tendencias from "./components/Tendencias";
import Noticia from "./components/Noticia";

export default function Section() {
    return(
        <main className="w-full h-full grid grid-cols-6 grid-rows-1 py-14">
            <Clima />
            <Noticia />
            <Tendencias />
        </main>
    )
}