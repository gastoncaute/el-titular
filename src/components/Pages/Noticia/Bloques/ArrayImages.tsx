import { modifyImageUrl } from "@/utils/modifyCodes";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import React from "react";

export default function ArrayImages({ arrayImages }: { arrayImages: any }) {
  return (
    <section>
      {arrayImages?.map((imagen: any) => (
        <div key={imagen._key} className="bloque-imagen">
          <Image
            src={modifyImageUrl(imagen.imagen.asset._ref)}
            alt={
              imagen.epigrafe && imagen.epigrafe.length > 0
                ? imagen.epigrafe[0]
                : ""
            }
            height={800}
            width={800}
            style={{ maxHeight: "600px", maxWidth: "100%", width: "auto" }}
          />
          <p>
            <PortableText value={imagen.epigrafe} />
          </p>
        </div>
      ))}
    </section>
  );
}
