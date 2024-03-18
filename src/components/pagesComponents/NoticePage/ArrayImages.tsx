import { modifyImageUrl } from "@/utils/modifyCodes";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import React from "react";

export default function ArrayImages({ arrayImages }: { arrayImages: any }) {
  return (
    <section>
      {arrayImages?.map((imagen: any) => (
        <div
          key={imagen._key}
          className="noticepage_div_image flex flex-col items-center"
        >
          <Image
            className="m-auto noticepage_image"
            src={modifyImageUrl(imagen.imagen.asset._ref)}
            alt={imagen.epigrafe[0]}
            height={800}
            width={800}
            style={{ maxHeight: "600px", maxWidth: "100%", width: "auto" }}
          />
          <h5 className="py-4 w-max m-auto array_image_noticepage_epigrafe">
            <PortableText value={imagen.epigrafe} />
          </h5>
        </div>
      ))}
    </section>
  );
}
