import React from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export default async function Page() {
  return (
    <>
      <Header />
      <main className="privacy-container">
        <header className="privacy-header">
          <h1 className="privacy-title">Términos y Condiciones de Uso</h1>
          <p className="privacy-subtitle">
            Bienvenido a <strong>El Titular</strong>, un medio de comunicación
            digital dedicado a la difusión de noticias, información periodística
            y contenidos de interés general.
          </p>
        </header>

        <article className="privacy-body">
          <p>
            Los presentes Términos y Condiciones regulan el acceso, navegación y
            utilización de nuestro sitio web, así como el uso de los contenidos
            publicados en él.
          </p>
          <p>
            Al utilizar este sitio, los usuarios deberán respetar las
            condiciones aquí establecidas, sin perjuicio de los derechos que les
            correspondan conforme a la legislación vigente en la República
            Argentina.
          </p>

          <section className="privacy-section">
            <h2>1. Identificación y objeto del sitio</h2>
            <p>
              El Titular es un medio periodístico digital con sede editorial en
              Mar del Plata, provincia de Buenos Aires, República Argentina.
            </p>
            <p>
              Su actividad está orientada a la producción, edición, publicación
              y difusión de contenidos informativos relacionados con la
              actualidad local, provincial, nacional e internacional.
            </p>
            <p>
              El sitio tiene como finalidad facilitar el acceso público a
              noticias, investigaciones, entrevistas, reportajes, análisis y
              otros materiales periodísticos de interés general.
            </p>
            <p>
              El Titular podrá ampliar, modificar o incorporar nuevas secciones,
              formatos y servicios relacionados con su actividad comunicacional.
            </p>
          </section>

          <section className="privacy-section">
            <h2>2. Acceso y utilización del sitio</h2>
            <p>
              El acceso a los contenidos públicos de El Titular es libre, salvo
              que se indique expresamente lo contrario para algún servicio
              específico.
            </p>
            <p>
              Los usuarios se comprometen a utilizar el sitio de manera lícita,
              responsable y respetuosa, sin realizar acciones que puedan afectar
              su funcionamiento, seguridad o disponibilidad.
            </p>
            <p>No está permitido:</p>
            <ul>
              <li>
                Intentar acceder sin autorización a sistemas, servidores o
                información restringida.
              </li>
              <li>
                Introducir programas maliciosos o realizar actividades
                destinadas a comprometer la seguridad del sitio.
              </li>
              <li>
                Utilizar el contenido de manera que infrinja derechos de
                propiedad intelectual u otros derechos de terceros.
              </li>
              <li>
                Realizar reproducciones masivas o extracciones automatizadas de
                contenidos que vulneren derechos o restricciones legalmente
                aplicables.
              </li>
            </ul>
            <p>
              Estas disposiciones no limitan los usos legítimos de la
              información ni los derechos reconocidos por la legislación
              vigente.
            </p>
          </section>

          <section className="privacy-section">
            <h2>3. Contenidos periodísticos y responsabilidad editorial</h2>
            <h3>3.1. Finalidad informativa</h3>
            <p>
              Los contenidos publicados por El Titular tienen una finalidad
              principalmente informativa y periodística.
            </p>
            <p>
              Aunque pueden abordar cuestiones jurídicas, económicas,
              sanitarias, financieras o de otras especialidades, su publicación
              no constituye necesariamente asesoramiento profesional
              personalizado.
            </p>

            <h3>3.2. Exactitud de la información</h3>
            <p>
              El Titular procura desarrollar su actividad periodística siguiendo
              criterios de precisión, responsabilidad y verificación de la
              información.
            </p>
            <p>
              No obstante, debido a la naturaleza dinámica de los
              acontecimientos, algunas publicaciones pueden requerir
              actualizaciones, ampliaciones o correcciones posteriores.
            </p>
            <p>
              El Titular podrá modificar, completar, corregir o actualizar los
              contenidos publicados cuando existan motivos periodísticos,
              editoriales o legales que lo justifiquen.
            </p>

            <h3>3.3. Rectificaciones y correcciones</h3>
            <p>
              El Titular reconoce la importancia de la precisión informativa y
              la responsabilidad editorial.
            </p>
            <p>
              Las personas que detecten errores relevantes, información inexacta
              o contenidos que pudieran afectar sus derechos podrán comunicarse
              con el medio para solicitar su revisión.
            </p>
            <p>
              Cada solicitud será evaluada considerando los antecedentes
              disponibles, el interés público, la libertad de expresión y la
              legislación aplicable.
            </p>
            <p>
              Cuando corresponda, El Titular podrá publicar aclaraciones,
              actualizaciones, rectificaciones o correcciones.
            </p>
            <p>
              Las solicitudes podrán enviarse a{" "}
              <a href="mailto:eltitularmdp@gmail.com">eltitularmdp@gmail.com</a>
              , indicando la publicación correspondiente y los motivos del
              pedido.
            </p>
          </section>

          <section className="privacy-section">
            <h2>4. Propiedad intelectual y derechos de autor</h2>
            <h3>4.1. Protección de los contenidos</h3>
            <p>
              Los artículos, investigaciones, textos originales, fotografías,
              videos, producciones audiovisuales, diseños, ilustraciones y demás
              obras publicadas en El Titular se encuentran protegidos por la
              legislación argentina de propiedad intelectual cuando reúnen los
              requisitos legales correspondientes.
            </p>
            <p>
              Los derechos sobre dichos materiales pertenecen a sus respectivos
              autores o titulares, entre ellos El Titular cuando corresponda por
              creación propia, adquisición, cesión o autorización.
            </p>
            <p>
              La protección alcanza a las expresiones originales de los
              contenidos, sin implicar apropiación exclusiva de hechos,
              acontecimientos, datos o ideas de libre utilización.
            </p>

            <h3>4.2. Reproducción y distribución</h3>
            <p>
              No se autoriza la reproducción íntegra, distribución comercial,
              modificación o explotación de contenidos protegidos pertenecientes
              a El Titular sin la autorización correspondiente, excepto en
              aquellos supuestos permitidos por la legislación vigente.
            </p>
            <p>
              La utilización de contenidos periodísticos deberá respetar los
              derechos de autor y las disposiciones aplicables de la Ley N.º
              11.723, incluidas las reglas relativas a las noticias de interés
              general y la identificación de sus fuentes.
            </p>

            <h3>4.3. Uso compartido y citas</h3>
            <p>
              Los usuarios pueden compartir enlaces a las publicaciones de El
              Titular a través de redes sociales, aplicaciones de mensajería y
              otros medios digitales.
            </p>
            <p>
              También podrán realizar citas, referencias y usos de contenidos en
              los casos y con los límites permitidos por la legislación vigente.
            </p>
            <p>
              Cuando corresponda, deberá identificarse correctamente la fuente
              original y, siempre que sea posible, incluir un enlace directo a
              la publicación.
            </p>
            <p>
              Compartir un enlace no implica autorización para reproducir
              íntegramente un contenido protegido en otro sitio o plataforma.
            </p>

            <h3>4.4. Materiales de terceros</h3>
            <p>
              El Titular podrá publicar fotografías, videos, declaraciones,
              documentos, contenidos de agencias y otros materiales provenientes
              de terceros, conforme a las autorizaciones o condiciones legales
              que resulten aplicables.
            </p>
            <p>
              Los derechos sobre estos materiales permanecerán en cabeza de sus
              respectivos titulares.
            </p>

            <h3>4.5. Solicitudes por derechos de autor</h3>
            <p>
              Quienes consideren que algún contenido publicado en El Titular
              vulnera sus derechos de propiedad intelectual podrán solicitar su
              revisión escribiendo a{" "}
              <a href="mailto:eltitularmdp@gmail.com">eltitularmdp@gmail.com</a>
              .
            </p>
            <p>
              Se recomienda identificar el contenido cuestionado, aportar su
              enlace y explicar los derechos que se consideran afectados.
            </p>
            <p>
              El Titular evaluará la solicitud y adoptará las medidas que
              correspondan conforme a la legislación aplicable.
            </p>
          </section>

          <section className="privacy-section">
            <h2>5. Publicidad y contenidos patrocinados</h2>
            <p>
              El Titular podrá incorporar anuncios publicitarios, campañas
              comerciales, espacios patrocinados y otros contenidos vinculados
              con acuerdos publicitarios.
            </p>
            <p>
              Los contenidos de carácter comercial o patrocinado se
              identificarán de manera adecuada cuando corresponda, procurando
              que los lectores puedan diferenciarlos de la información
              periodística.
            </p>
            <p>
              La contratación de publicidad no implica necesariamente que El
              Titular comparta, respalde o recomiende las opiniones, productos o
              servicios promocionados.
            </p>
            <p>
              Los anunciantes serán responsables por las afirmaciones y
              materiales publicitarios que proporcionen, conforme a la
              legislación aplicable, sin perjuicio de las responsabilidades que
              legalmente pudieran corresponder al medio.
            </p>
            <p>
              La contratación de espacios publicitarios podrá regirse por
              acuerdos comerciales específicos.
            </p>
          </section>

          <section className="privacy-section">
            <h2>6. Enlaces y servicios externos</h2>
            <p>
              El sitio puede incluir enlaces a páginas web, redes sociales,
              plataformas audiovisuales, documentos y otros recursos
              administrados por terceros.
            </p>
            <p>
              Estos enlaces se incorporan con fines informativos, periodísticos
              o de referencia.
            </p>
            <p>
              El Titular no controla necesariamente el contenido,
              funcionamiento, disponibilidad ni las políticas de privacidad de
              los sitios externos.
            </p>
            <p>
              La inclusión de un enlace no implica, por sí misma, respaldo,
              asociación comercial o aprobación de su contenido.
            </p>
            <p>
              El acceso a servicios externos estará sujeto a las condiciones
              establecidas por sus respectivos responsables.
            </p>
          </section>

          <section className="privacy-section">
            <h2>7. Participación de los usuarios</h2>
            <p>
              En caso de habilitar comentarios, formularios de participación u
              otros espacios interactivos, los usuarios deberán utilizarlos de
              manera respetuosa y conforme a la legislación vigente.
            </p>
            <p>
              No se permitirá la publicación de amenazas, acoso, contenidos
              discriminatorios ilícitos, información privada divulgada sin
              justificación legítima ni materiales que vulneren derechos de
              terceros.
            </p>
            <p>
              El Titular podrá moderar, ocultar o retirar participaciones cuando
              existan razones justificadas vinculadas con estas condiciones, la
              seguridad del servicio o el cumplimiento de obligaciones legales.
            </p>
            <p>
              Estas medidas se aplicarán respetando la libertad de expresión y
              los derechos de los usuarios.
            </p>
          </section>

          <section className="privacy-section">
            <h2>8. Privacidad y protección de datos personales</h2>
            <p>
              El Titular reconoce la importancia de proteger la privacidad y los
              datos personales de quienes visitan su sitio o se comunican con el
              medio.
            </p>
            <p>
              Los datos que eventualmente se recopilen mediante correos
              electrónicos, formularios de contacto, suscripciones u otros
              mecanismos serán tratados conforme a la legislación argentina
              aplicable, especialmente la Ley N.º 25.326 de Protección de Datos
              Personales.
            </p>
            <p>
              La información sobre las finalidades del tratamiento, las
              tecnologías utilizadas, los derechos de los titulares y los medios
              disponibles para ejercerlos deberá proporcionarse mediante los
              avisos y políticas de privacidad correspondientes.
            </p>
            <p>
              Las personas que deseen realizar consultas relacionadas con el
              tratamiento de sus datos personales podrán comunicarse a{" "}
              <a href="mailto:eltitularmdp@gmail.com">eltitularmdp@gmail.com</a>
              .
            </p>
          </section>

          <section className="privacy-section">
            <h2>9. Disponibilidad y funcionamiento</h2>
            <p>
              El Titular procura mantener su sitio disponible y en condiciones
              adecuadas de funcionamiento.
            </p>
            <p>
              Sin embargo, pueden producirse interrupciones temporales debido a
              tareas de mantenimiento, actualizaciones, fallas técnicas,
              problemas de conectividad o circunstancias ajenas al control del
              medio.
            </p>
            <p>
              El Titular podrá modificar la organización, apariencia,
              funcionalidades y contenidos del sitio cuando resulte necesario.
            </p>
            <p>
              Estas disposiciones no excluyen ni limitan las responsabilidades
              que pudieran corresponder conforme a la legislación vigente.
            </p>
          </section>

          <section className="privacy-section">
            <h2>10. Responsabilidad por la utilización de la información</h2>
            <p>
              Los usuarios deberán considerar el contexto, la fecha de
              publicación y las eventuales actualizaciones de los contenidos
              periodísticos.
            </p>
            <p>
              Las decisiones personales, comerciales o profesionales basadas en
              información publicada deberán adoptarse teniendo en cuenta las
              circunstancias particulares de cada caso y, cuando corresponda,
              con asesoramiento especializado.
            </p>
            <p>
              El Titular no garantiza que toda la información permanezca
              permanentemente actualizada, pero mantiene su compromiso de
              revisar y corregir los errores relevantes que lleguen a su
              conocimiento.
            </p>
            <p>
              Nada de lo establecido en estos Términos y Condiciones deberá
              interpretarse como una exclusión de responsabilidades que no
              puedan limitarse legalmente.
            </p>
          </section>

          <section className="privacy-section">
            <h2>11. Modificaciones de los Términos y Condiciones</h2>
            <p>
              El Titular podrá actualizar estos Términos y Condiciones para
              reflejar cambios en el funcionamiento del sitio, sus servicios o
              la normativa aplicable.
            </p>
            <p>
              La versión vigente se encontrará publicada en esta sección,
              indicando su fecha de última actualización.
            </p>
            <p>
              Las modificaciones regirán desde su publicación o desde la fecha
              que expresamente se informe, sin afectar derechos adquiridos ni
              otras garantías reconocidas por la legislación vigente.
            </p>
            <p>Se recomienda consultar periódicamente esta sección.</p>
          </section>

          <section className="privacy-section">
            <h2>12. Legislación y jurisdicción aplicables</h2>
            <p>
              Los presentes Términos y Condiciones se interpretarán de
              conformidad con las leyes de la República Argentina.
            </p>
            <p>
              Toda controversia relacionada con el acceso o utilización del
              sitio será sometida a las autoridades y tribunales que resulten
              competentes de acuerdo con la legislación aplicable.
            </p>
            <p>
              Ninguna disposición de este documento implica la renuncia a
              derechos, garantías o mecanismos de protección establecidos por
              normas de orden público.
            </p>
          </section>

          <section className="privacy-section">
            <h2>13. Contacto</h2>
            <p>
              Para consultas generales, solicitudes de rectificación, cuestiones
              relacionadas con derechos de autor o comunicaciones vinculadas con
              estos Términos y Condiciones, los usuarios podrán dirigirse a:
            </p>
            <div className="privacy-contact-box">
              <p>
                <strong>El Titular</strong> — Medio de comunicación digital
              </p>
              <p>Mar del Plata, provincia de Buenos Aires, Argentina</p>
              <p>
                <strong>Correo electrónico:</strong>{" "}
                <a href="mailto:eltitularmdp@gmail.com">
                  eltitularmdp@gmail.com
                </a>
              </p>
            </div>
          </section>
        </article>

        <footer className="privacy-footer">
          <p>
            &copy; 2026 El Titular. Todos los derechos reservados, con las
            excepciones y limitaciones previstas por la legislación vigente.
          </p>
        </footer>
      </main>
      <Footer />
    </>
  );
}
