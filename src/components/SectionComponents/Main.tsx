import Image from "next/image";
import Clima from "./components/Clima";
import Dolar from "./components/ComponentesEntreSecciones/Dolar";
import Noticia from "./components/Noticia";

export default function Main() {
  return (
    <main>
      <section className="section-1">
        <Clima />
        <Image src={"/LogoET.png"} alt="ElTitular" width={224} height={100} />
        <Dolar />
      </section>
      <section>
        <Noticia />
      </section>
    </main>
  );
}
