import Image from "next/image";
import Clima from "./Widgets/Clima";
import Dolar from "./Widgets/Dolar";
import Noticia from "./Noticias/Noticia";

export default function Main() {
  return (
    <main>
      <section className="widgets-section">
        <Clima />
        <Image src={"/Logo.png"} alt="ElTitular" width={168} height={100} />
        <Dolar />
      </section>
      <Noticia />
    </main>
  );
}
