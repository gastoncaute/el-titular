import React from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export default async function Page() {
  return (
    <>
      <Header />
      <main className="privacy-container">
        <header className="privacy-header">
          <h1 className="privacy-title">Política de Privacidad</h1>
          <p className="privacy-subtitle">
            En <strong>El Titular</strong> respetamos la privacidad de nuestros
            lectores, usuarios y personas que se comunican con nuestro medio.
          </p>
        </header>

        <article className="privacy-body">
          <p>
            La presente Política de Privacidad tiene como finalidad informar de
            manera clara y transparente cómo se recopilan, utilizan, almacenan y
            protegen los datos personales relacionados con la utilización de
            nuestro sitio web.
          </p>
          <p>
            El tratamiento de datos personales se encuentra sujeto a la
            legislación vigente de la República Argentina, especialmente a la
            Ley N.º 25.326 de Protección de Datos Personales, su normativa
            reglamentaria y las disposiciones de la autoridad competente.
          </p>

          <section className="privacy-section">
            <h2>1. Responsable del tratamiento de datos</h2>
            <div className="privacy-contact-box">
              <p>
                <strong>Medio:</strong> El Titular
              </p>
              <p>
                <strong>Actividad:</strong> Medio de comunicación periodístico
                digital
              </p>
              <p>
                <strong>Localidad:</strong> Mar del Plata, provincia de Buenos
                Aires, República Argentina
              </p>
              <p>
                <strong>Responsable:</strong> Rodrigo Nahuel Lopez
              </p>
              <p>
                <strong>Domicilio de contacto del responsable:</strong> Juan B.
                Justo 50
              </p>
              <p>
                <strong>Correo electrónico:</strong>{" "}
                <a href="mailto:eltitularmdp@gmail.com">
                  eltitularmdp@gmail.com
                </a>
              </p>
            </div>
            <p>
              El responsable del medio administra el tratamiento de los datos
              personales vinculados con el funcionamiento del sitio, dentro del
              alcance de sus actividades y obligaciones legales.
            </p>
          </section>

          <section className="privacy-section">
            <h2>2. Información que podemos recopilar</h2>
            <p>
              El Titular podrá tratar diferentes categorías de información
              dependiendo de la forma en que los usuarios utilicen el sitio y de
              las funcionalidades efectivamente habilitadas.
            </p>

            <h3>2.1. Información proporcionada voluntariamente</h3>
            <p>
              Cuando un usuario se comunica con El Titular mediante correo
              electrónico, formularios u otros canales disponibles, puede
              proporcionar información como:
            </p>
            <ul>
              <li>Nombre y apellido.</li>
              <li>Dirección de correo electrónico.</li>
              <li>Número de teléfono, si lo facilita voluntariamente.</li>
              <li>
                Información incluida en consultas, solicitudes, mensajes o
                comunicaciones.
              </li>
              <li>Documentación que el usuario decida proporcionar.</li>
            </ul>
            <p>
              Los datos solicitados serán los necesarios para atender la
              comunicación o finalidad correspondiente.
            </p>

            <h3>2.2. Información técnica de navegación</h3>
            <p>
              Durante la utilización del sitio, el servidor y las herramientas
              tecnológicas que se encuentren habilitadas pueden procesar
              información técnica, como direcciones IP, tipo de navegador,
              sistema operativo, fecha y hora de acceso, páginas solicitadas e
              identificadores técnicos.
            </p>
            <p>
              Esta información puede resultar necesaria para ofrecer el sitio,
              mantener su seguridad, diagnosticar errores y evaluar su
              funcionamiento.
            </p>

            <h3>2.3. Cookies y tecnologías similares</h3>
            <p>
              El Titular podrá utilizar cookies y otras tecnologías de
              almacenamiento o identificación cuando sean necesarias para el
              funcionamiento del sitio o cuando se hayan incorporado
              herramientas adicionales de medición, contenido externo o
              publicidad.
            </p>
            <p>
              Los tipos de cookies utilizados, sus finalidades y las opciones
              disponibles para los usuarios se explican en nuestra Política de
              Cookies.
            </p>
          </section>

          <section className="privacy-section">
            <h2>3. Finalidades del tratamiento</h2>
            <p>
              Los datos personales se utilizarán únicamente para finalidades
              determinadas, legítimas y relacionadas con las actividades del
              medio, entre ellas:
            </p>
            <ul>
              <li>Responder consultas y comunicaciones recibidas.</li>
              <li>
                Gestionar solicitudes relacionadas con publicaciones
                periodísticas.
              </li>
              <li>Mantener la seguridad y el funcionamiento del sitio.</li>
              <li>
                Prevenir accesos no autorizados o actividades que comprometan la
                plataforma.
              </li>
              <li>
                Gestionar relaciones con anunciantes, colaboradores y
                proveedores.
              </li>
              <li>
                Cumplir obligaciones legales o atender requerimientos de
                autoridades competentes.
              </li>
            </ul>
            <p>
              Si se incorporan servicios de suscripción, medición de audiencia,
              publicidad personalizada u otras funcionalidades que requieran
              tratamientos adicionales, se informarán sus finalidades y se
              solicitará el consentimiento cuando corresponda.
            </p>
            <p>
              El suministro de datos será voluntario salvo en los casos en que
              determinados datos sean necesarios para prestar un servicio
              solicitado o cumplir una obligación legal. No proporcionar los
              datos necesarios puede impedir responder una consulta o completar
              la gestión correspondiente.
            </p>
          </section>

          <section className="privacy-section">
            <h2>4. Consentimiento y utilización legítima</h2>
            <p>
              El tratamiento de datos personales se realizará conforme a las
              condiciones y excepciones establecidas por la legislación
              argentina.
            </p>
            <p>
              Cuando corresponda solicitar consentimiento, este deberá ser
              informado, libre y obtenido mediante mecanismos adecuados.
            </p>
            <p>
              El acceso a noticias y contenidos periodísticos públicos no
              implica, por sí solo, una autorización para utilizar datos
              personales con finalidades comerciales distintas de las
              informadas.
            </p>
          </section>

          <section className="privacy-section">
            <h2>5. Confidencialidad y seguridad</h2>
            <p>
              El Titular procurará implementar medidas técnicas y organizativas
              apropiadas para proteger los datos personales frente al acceso no
              autorizado, la pérdida, alteración, divulgación o tratamiento
              indebido.
            </p>
            <p>
              El acceso a información personal deberá limitarse a quienes
              necesiten conocerla para cumplir funciones legítimas vinculadas
              con el medio.
            </p>
            <p>
              Sin embargo, ningún sistema conectado a Internet puede garantizar
              una seguridad absoluta frente a todos los riesgos tecnológicos.
            </p>
          </section>

          <section className="privacy-section">
            <h2>6. Comunicación de información a terceros</h2>
            <p>
              Los datos personales podrán ser tratados por proveedores que
              presten servicios tecnológicos necesarios para el funcionamiento
              del medio, como alojamiento web, correo electrónico, mantenimiento
              o servicios digitales, según las herramientas efectivamente
              contratadas.
            </p>
            <p>
              Dichos tratamientos deberán ajustarse a las finalidades
              informadas, las obligaciones de confidencialidad y las
              disposiciones legales aplicables.
            </p>
            <p>
              Los datos también podrán comunicarse cuando exista una obligación
              legal, una orden válida de autoridad competente, consentimiento
              del titular u otra causa autorizada por la legislación.
            </p>
            <p>
              No se utilizarán los datos de contacto proporcionados al medio
              para finalidades comerciales ajenas a las informadas sin contar
              con la habilitación legal correspondiente.
            </p>
          </section>

          <section className="privacy-section">
            <h2>7. Servicios y plataformas externas</h2>
            <p>
              El Titular puede incorporar enlaces o contenidos provenientes de
              plataformas externas, como redes sociales, servicios de video u
              otros sitios informativos.
            </p>
            <p>
              Al acceder a servicios externos, sus respectivos operadores pueden
              procesar información conforme a sus propias políticas de
              privacidad.
            </p>
            <p>
              Cuando se integren herramientas de terceros que recopilen datos
              directamente desde el sitio de El Titular, se informará su
              utilización y finalidad conforme a los requisitos legales
              aplicables.
            </p>
          </section>

          <section className="privacy-section">
            <h2>8. Transferencias internacionales</h2>
            <p>
              Determinados servicios tecnológicos pueden almacenar o procesar
              información fuera de la República Argentina.
            </p>
            <p>
              Cuando exista una transferencia internacional de datos personales,
              esta deberá realizarse mediante los mecanismos y garantías
              previstos por la Ley N.º 25.326 y la normativa correspondiente.
            </p>
            <p>
              Las transferencias se identificarán y evaluarán de acuerdo con los
              proveedores efectivamente utilizados por El Titular.
            </p>
          </section>

          <section className="privacy-section">
            <h2>9. Conservación de los datos</h2>
            <p>
              Los datos personales se conservarán durante el período necesario
              para cumplir las finalidades que justificaron su recopilación,
              respetando los plazos legales de conservación aplicables.
            </p>
            <p>
              Cuando la información deje de resultar necesaria y no exista una
              obligación o justificación legítima para conservarla, se procederá
              a su eliminación, anonimización o tratamiento que legalmente
              corresponda.
            </p>
          </section>

          <section className="privacy-section">
            <h2>10. Derechos de los titulares de datos personales</h2>
            <p>
              Las personas titulares de datos personales tienen los derechos
              reconocidos por la Ley N.º 25.326, incluidos los de acceso,
              rectificación, actualización y supresión cuando correspondan.
            </p>
            <p>
              Para ejercerlos, podrán enviar una solicitud a:{" "}
              <a href="mailto:eltitularmdp@gmail.com">eltitularmdp@gmail.com</a>
            </p>
            <p>
              La solicitud deberá permitir identificar al solicitante y precisar
              el derecho que desea ejercer. Podrá requerirse la información
              necesaria para verificar su identidad, evitando una recopilación
              excesiva de datos.
            </p>
            <p>De acuerdo con la legislación vigente:</p>
            <ul>
              <li>
                Las solicitudes de acceso deben responderse dentro de los diez
                días corridos desde su requerimiento fehaciente.
              </li>
              <li>
                Las solicitudes procedentes de rectificación, actualización o
                supresión deben atenderse dentro de los cinco días hábiles
                correspondientes.
              </li>
            </ul>
            <p>
              La supresión de información estará sujeta a las limitaciones y
              obligaciones de conservación previstas por la ley.
            </p>
            <p>
              La Agencia de Acceso a la Información Pública (AAIP) es la
              autoridad de control de la Ley N.º 25.326 y tiene atribuciones
              para recibir denuncias y reclamos relacionados con su
              incumplimiento.
            </p>
            <p>
              <strong>Sitio oficial:</strong>{" "}
              <a
                href="https://www.argentina.gob.ar/aaip"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.argentina.gob.ar/aaip
              </a>
            </p>
          </section>

          <section className="privacy-section">
            <h2>11. Datos personales y actividad periodística</h2>
            <p>
              El Titular desarrolla actividades vinculadas con la producción y
              difusión de información periodística.
            </p>
            <p>
              Las solicitudes relativas a información personal mencionada en
              publicaciones serán evaluadas considerando los derechos de las
              personas involucradas, la libertad de expresión, el interés
              público y la legislación aplicable.
            </p>
            <p>
              El ejercicio de derechos sobre datos personales no implica
              necesariamente la eliminación automática de publicaciones
              periodísticas legítimas.
            </p>
            <p>
              Las solicitudes de corrección, aclaración o rectificación de
              noticias también podrán presentarse mediante nuestros canales de
              contacto.
            </p>
          </section>

          <section className="privacy-section">
            <h2>12. Privacidad de niños, niñas y adolescentes</h2>
            <p>
              El Titular reconoce la importancia de proteger especialmente la
              privacidad y los derechos de niños, niñas y adolescentes.
            </p>
            <p>
              El tratamiento de información relacionada con menores de edad
              deberá observar las disposiciones legales y los estándares
              especiales de protección que resulten aplicables.
            </p>
          </section>

          <section className="privacy-section">
            <h2>13. Modificaciones de la Política de Privacidad</h2>
            <p>
              El Titular podrá actualizar esta política como consecuencia de
              cambios legales, tecnológicos, operativos o en las funcionalidades
              del sitio.
            </p>
            <p>
              La versión vigente estará disponible en esta sección, indicando su
              fecha de última actualización.
            </p>
            <p>
              Cuando los cambios afecten sustancialmente las finalidades del
              tratamiento o requieran nuevas autorizaciones, se adoptarán las
              medidas de información y consentimiento que correspondan.
            </p>
          </section>

          <section className="privacy-section">
            <h2>14. Contacto</h2>
            <p>
              Para consultas relacionadas con esta Política de Privacidad, el
              tratamiento de datos personales o el ejercicio de derechos
              reconocidos por la legislación:
            </p>
            <div className="privacy-contact-box">
              <p>
                <strong>El Titular</strong> — Medio de comunicación digital
              </p>
              <p>Mar del Plata, Buenos Aires, Argentina</p>
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
