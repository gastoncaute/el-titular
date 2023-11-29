import { modifyImageUrl } from "@/utils/modifyCodes";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import React from "react";

export default function ArrayImages({ arrayImages }: { arrayImages: any }) {
  return (
    <section className="flex pt-8 bg-gradient-to-b from-pageColor to-gradientColor border border-black rounded-xl array_image_container">
      <div className="array_image_scroll">
        {arrayImages?.map((imagen: any) => (
          <div key={imagen._key} className="m-auto array_image_article">
            <Image
              className="m-auto array_image_noticepage"
              src={modifyImageUrl(imagen.imagen.asset._ref)}
              alt={imagen.epigrafe[0]}
              width={350}
              height={250}
            />
            <h5 className="py-4 w-max m-auto array_image_noticepage_epigrafe">
              <PortableText value={imagen.epigrafe} />
            </h5>
          </div>
        ))}
      </div>
    </section>
  );
}
