import Clima from "./components/Clima";
import Noticia from "./components/Noticia";

export default function Section() {
  return (
    <section className="w-full h-full grid grid-cols-6 grid-rows-1 py-32 main_section">
      <Clima />
      <Noticia />
    </section>
  );
}
