import Image from "next/image";
import Clima from "./Widgets/Clima";
import Dolar from "./Widgets/Dolar";
import Noticia from "./components/Noticia";
import Socials from "./Widgets/Socials";

export default function Main() {
  return (
    <main>
      <section className="section-1">
        <Clima />
        <Image src={"/LogoET.png"} alt="ElTitular" width={224} height={100} />
        <Dolar />
      </section>
      <Socials />
      <section>
        <Noticia />
      </section>
    </main>
  );
}
