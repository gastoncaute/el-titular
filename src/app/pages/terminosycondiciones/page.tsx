import React from "react";
import Footer from "@/components/FooterComponents/Footer";
import Header from "@/components/HeaderComponents/Header";

export default async function Page() {
  return (
    <>
      <Header />
      <section className="flex flex-col mx-24 mt-36 mb-24 px-44 text-black main_section_ultimasNoticias space-y-6">
        <h1 className="flex m-auto text-2xl border border-pageColor rounded-3xl p-2 px-4 font-bold">
          Términos y Condiciones de Uso
        </h1>

        <article className="text-xl space-y-4">
          <p>
            Bienvenido/a a El Titular. Estos Términos y Condiciones regulan el
            uso de nuestro sitio web y el acceso a nuestro contenido. Al visitar
            nuestro sitio, aceptas estos términos en su totalidad. Si no estás
            de acuerdo con alguna parte, te recomendamos que no utilices nuestro
            sitio.
          </p>

          <h2 className="text-xl font-semibold">1. Objeto</h2>
          <p>
            El Titular ofrece información y noticias relevantes sobre la
            actualidad cultural, política, económica y social de Mar del Plata,
            la provincia de Buenos Aires, y el país en general.
          </p>

          <h2 className="text-xl font-semibold">
            2. Uso del Sitio y Contenido
          </h2>

          <h3 className="font-semibold">2.1 Propósito Informativo</h3>
          <p>
            Los contenidos en El Titular son de carácter informativo y están
            destinados a mantener a los usuarios actualizados. No se consideran
            asesoramiento profesional en ninguna materia.
          </p>

          <h3 className="font-semibold">2.2 Uso Aceptable</h3>
          <p>
            Los usuarios se comprometen a utilizar el sitio y sus contenidos
            respetando la legislación vigente y los presentes Términos y
            Condiciones.
          </p>

          <h3 className="font-semibold">
            2.3 Derechos de Propiedad Intelectual
          </h3>
          <p>
            El contenido publicado en El Titular, como artículos, imágenes y
            gráficos, es propiedad de nuestro medio o de terceros que nos han
            otorgado los derechos de uso. No se permite la reproducción,
            distribución, ni modificación de estos contenidos sin nuestro
            consentimiento previo. Puedes compartir el contenido en redes
            sociales siempre y cuando se atribuya correctamente a El Titular y
            se use para fines personales y no comerciales.
          </p>

          <h2 className="text-xl font-semibold">
            3. Responsabilidad y Garantías
          </h2>

          <h3 className="font-semibold">3.1 Disponibilidad del Servicio</h3>
          <p>
            No garantizamos que el acceso a El Titular sea ininterrumpido o esté
            siempre disponible. Podemos realizar tareas de mantenimiento o
            enfrentar problemas técnicos que afecten la accesibilidad del sitio.
            Nos reservamos el derecho de modificar, suspender o interrumpir el
            servicio en cualquier momento sin previo aviso.
          </p>

          <h3 className="font-semibold">3.2 Exactitud de la Información</h3>
          <p>
            Aunque procuramos que la información en El Titular sea precisa y
            actualizada, no garantizamos que esté libre de errores. Los usuarios
            deben considerar que algunos contenidos pueden quedar
            desactualizados y que El Titular no se responsabiliza por las
            decisiones que tomen los usuarios basándose en la información
            proporcionada.
          </p>

          <h2 className="text-xl font-semibold">
            4. Modificación de los Términos y Condiciones
          </h2>
          <p>
            Nos reservamos el derecho de modificar estos Términos y Condiciones
            en cualquier momento y sin previo aviso. Es responsabilidad del
            usuario revisarlos periódicamente para estar al tanto de las
            actualizaciones. La continuación del uso del sitio después de
            cualquier modificación implica la aceptación de los términos
            actualizados.
          </p>

          <h2 className="text-xl font-semibold">
            5. Legislación y Jurisdicción Aplicables
          </h2>
          <p>
            Estos Términos y Condiciones se rigen por las leyes de la República
            Argentina. Cualquier disputa que surja en relación con El Titular
            será resuelta en los Tribunales Ordinarios de la Ciudad de Mar del
            Plata, renunciando ambas partes a cualquier otro fuero o
            jurisdicción que pudiera corresponder.
          </p>

          <h2 className="text-xl font-semibold">6. Contacto</h2>
          <p>
            Para cualquier consulta relacionada con estos Términos y
            Condiciones, puedes contactarnos a través de nuestro correo
            electrónico:{" "}
            <a
              href="mailto:eltitularmdp@gmail.com"
              className="text-blue-600 underline"
            >
              eltitularmdp@gmail.com
            </a>
            .
          </p>
        </article>
      </section>
      <Footer />
    </>
  );
}
