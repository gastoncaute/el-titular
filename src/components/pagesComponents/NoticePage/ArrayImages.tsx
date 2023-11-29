import { modifyImageUrl } from "@/utils/modifyCodes";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import React from "react";

export default function ArrayImages({ arrayImages }: { arrayImages: any }) {
  return (
    <section className="flex pt-8 border border-pageColor rounded-xl">
      {arrayImages?.map((imagen: any) => (
        <div key={imagen._key} className="m-auto">
          <Image
            className="m-auto noticepage_image"
            src={modifyImageUrl(imagen.imagen.asset._ref)}
            alt={imagen.epigrafe[0]}
            width={300}
            height={250}
          />
          <h5 className="py-4 noticepage_epigrafe">
            <PortableText value={imagen.epigrafe} />
          </h5>
        </div>
      ))}
    </section>
  );
}
