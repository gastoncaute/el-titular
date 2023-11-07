import Clima from "./components/Clima";
import Tendencias from "./components/Tendencias";
import Noticia from "./components/Noticia";

export default function Section() {
  return (
    <section className="w-full h-full grid grid-cols-6 grid-rows-1 py-32">
      <Clima />
      <Noticia />
      <Tendencias />
    </section>
  );
}
