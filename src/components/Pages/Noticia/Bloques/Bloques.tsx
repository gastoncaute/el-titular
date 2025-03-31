import React from "react";
import SegundoBloque from "@/components/Pages/Noticia/Bloques/Segundo";
import TercerBloque from "@/components/Pages/Noticia/Bloques/Tercer";
import CuartoBloque from "@/components/Pages/Noticia/Bloques/Cuarto";
import QuintoBloque from "@/components/Pages/Noticia/Bloques/Quinto";
import SextoBloque from "@/components/Pages/Noticia/Bloques/Sexto";
import SeptimoBloque from "@/components/Pages/Noticia/Bloques/Septimo";
import OctavoBloque from "@/components/Pages/Noticia/Bloques/Octavo";
import ArrayImages from "@/components/Pages/Noticia/Bloques/ArrayImages";
import { Noticia } from "@/types/componentes.types";

type NoticiasProps = {
  noticia: Noticia;
};

export default function Bloques({ noticia }: NoticiasProps) {
  const tieneBloques =
    noticia.segundo_bloque ||
    noticia.tercer_bloque ||
    noticia.cuarto_bloque ||
    noticia.quinto_bloque ||
    noticia.sexto_bloque ||
    noticia.septimo_bloque ||
    noticia.octavo_bloque ||
    (noticia.imagenes_array?.length ?? 0) > 0;

  if (!tieneBloques) return null;

  return (
    <>
      <SegundoBloque segundoBloque={noticia.segundo_bloque} />
      <TercerBloque tercerBloque={noticia.tercer_bloque} />
      <CuartoBloque cuartoBloque={noticia.cuarto_bloque} />
      <QuintoBloque quintoBloque={noticia.quinto_bloque} />
      <SextoBloque sextoBloque={noticia.sexto_bloque} />
      <SeptimoBloque septimoBloque={noticia.septimo_bloque} />
      <OctavoBloque octavoBloque={noticia.octavo_bloque} />
      {noticia.imagenes_array?.length > 0 && (
        <ArrayImages arrayImages={noticia.imagenes_array} />
      )}
    </>
  );
}
