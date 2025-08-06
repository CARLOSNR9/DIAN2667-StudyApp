// src/studyContent/DianOrgMission.jsx
import React from 'react';

const DianOrgMission = ({ onBack, onStartSimulacro }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-xl">
      <button
        onClick={onBack}
        className="mb-6 py-2 px-4 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors duration-200 font-semibold"
      >
        ← Volver al Cronograma
      </button>

      <h2 className="text-3xl font-bold text-gray-800 mb-6">Material de Estudio: Estructura Organizacional y Misionalidad de la DIAN</h2>

      {/* Primer Bloque de Contenido */}
      <p className="mb-4 text-gray-700">La Dirección de Impuestos y Aduanas Nacionales (DIAN) es una entidad clave en el andamiaje del Estado colombiano, encargada de funciones vitales para el financiamiento y el control del comercio exterior. Su estructura y misionalidad se rigen por principios de eficiencia, transparencia y servicio.</p>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">1. Naturaleza y Propósito Fundamental (Misionalidad de la DIAN)</h3>
        <p className="mb-2 text-gray-700">La DIAN es una <span className="font-semibold">unidad administrativa especial con personería jurídica, autonomía administrativa y presupuestal y patrimonio propio, adscrita al Ministerio de Hacienda y Crédito Público.</span> Su propósito principal es <span className="font-semibold">garantizar la seguridad fiscal del Estado colombiano y la protección del orden público económico nacional, mediante la administración y control del cumplimiento de las obligaciones tributarias, aduaneras y cambiarias, así como la facilitación de las operaciones de comercio exterior.</span></p>
        <p className="mb-2 text-gray-700">Desglosando su misionalidad, se pueden identificar los siguientes pilares:</p>
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
          <li><span className="font-semibold">Administración y Recaudo de Impuestos Nacionales:</span> Es la función más reconocida. La DIAN se encarga de la gestión, recaudación, fiscalización y cobro de impuestos como el Impuesto sobre la Renta y Complementarios, el Impuesto sobre las Ventas (IVA), el Gravamen a los Movimientos Financieros (GMF), entre otros. El objetivo es asegurar los recursos necesarios para el gasto público.</li>
          <li><span className="font-semibold">Gestión y Control Aduanero:</span> Administra el régimen aduanero del país, lo que implica el control de la entrada y salida de mercancías del territorio nacional. Busca prevenir y reprimir el contrabando, el lavado de activos y cualquier otra infracción aduanera, al tiempo que facilita las operaciones de comercio legítimo.</li>
          <li><span className="font-semibold">Control Cambiario (en Materia de Importaciones y Exportaciones):</span> Ejerce el control y la fiscalización sobre las operaciones de cambio de divisas que se derivan de las importaciones y exportaciones de bienes y servicios, así como de los endeudamientos externos y las inversiones internacionales que no correspondan a la inversión de capitales de corto plazo.</li>
          <li><span className="font-semibold">Servicio al Ciudadano:</span> Proporciona orientación y asistencia a los contribuyentes, usuarios aduaneros y demás ciudadanos para el correcto cumplimiento de sus obligaciones. Fomenta la cultura de la legalidad fiscal y aduanera.</li>
          <li><span className="font-semibold">Gestión de la Información y Análisis de Riesgos:</span> Utiliza la información y la tecnología para identificar riesgos de incumplimiento y focalizar sus acciones de control. Esto es vital para la efectividad de sus procesos de fiscalización y aduana.</li>
        </ul>
        <p className="text-gray-700">En resumen, la DIAN es el brazo ejecutor de la política fiscal y aduanera del país, buscando un equilibrio entre la recaudación eficiente, el control riguroso y la facilitación para los contribuyentes cumplidores.</p>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">2. Visión de la DIAN</h3>
        <p className="text-gray-700">Aunque las visiones pueden ajustarse periódicamente, la DIAN busca ser reconocida como una <span className="font-semibold">administración tributaria, aduanera y cambiaria de clase mundial, moderna, eficiente, transparente, y sustentada en el talento humano y el uso intensivo de la tecnología, que contribuye a la sostenibilidad fiscal y al desarrollo económico del país.</span></p>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">3. Principios y Valores Institucionales (Código de Integridad)</h3>
        <p className="mb-2 text-gray-700">Los servidores públicos de la DIAN, al igual que todos los funcionarios estatales en Colombia, se rigen por el Código de Integridad del Servicio Público Colombiano, adaptado a las particularidades de la entidad. Este código promueve valores esenciales para el ejercicio de la función pública y son la base de la cultura organizacional de la DIAN:</p>
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
          <li><span className="font-semibold">Honestidad:</span> Actuar con rectitud, sinceridad y transparencia. Implica no engañar ni defraudar, y obrar con probidad en el manejo de los recursos y la información.</li>
          <li><span className="font-semibold">Respeto:</span> Valorar y tratar con dignidad a todas las personas, sus opiniones y sus derechos. Un trato amable, digno y justo a los ciudadanos y entre compañeros.</li>
          <li><span className="font-semibold">Compromiso:</span> Demostrar dedicación y responsabilidad en el cumplimiento de los deberes y objetivos institucionales. Implica la lealtad con la misión de la DIAN y el servicio al país.</li>
          <li><span className="font-semibold">Diligencia:</span> Actuar con prontitud, eficiencia, eficacia y cuidado en el cumplimiento de las funciones. Implica el uso óptimo de los recursos públicos y la búsqueda constante de la mejora en los procesos.</li>
          <li><span className="font-semibold">Justicia:</span> Obrar con equidad e imparcialidad, garantizando la igualdad de derechos y oportunidades para todos, sin discriminación. Tomar decisiones basadas en hechos y normas, no en prejuicios o influencias indebidas.</li>
        </ul>
        <p className="text-gray-700">Estos valores son fundamentales para el ejercicio ético y transparente de las funciones de cualquier servidor de la DIAN, y son constantemente reforzados en su gestión.</p>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">4. Estructura Organizacional de la DIAN</h3>
        <p className="mb-2 text-gray-700">La DIAN, para cumplir su compleja misión, está organizada en una estructura jerárquica y funcional. Si bien los nombres exactos y la distribución de ciertas oficinas pueden variar con el tiempo debido a reestructuraciones, la estructura general incluye:</p>
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
          <li><span className="font-semibold">Dirección General:</span> Es la máxima autoridad y representante legal de la DIAN. Define las políticas generales y la estrategia institucional.</li>
          <li><span className="font-semibold">Direcciones de Gestión (Misionales):</span> Son las áreas centrales encargadas de las funciones sustantivas de la DIAN. Estas incluyen:
            <ul className="list-circle list-inside text-gray-700 ml-8">
              <li>Dirección de Gestión de Impuestos: Responsable de la administración del sistema tributario nacional, la definición de políticas en materia de impuestos internos y la emisión de conceptos jurídicos.</li>
              <li>Dirección de Gestión de Aduanas: A cargo de la administración del régimen aduanero, la facilitación del comercio exterior y la lucha contra el fraude aduanero.</li>
              <li>Dirección de Gestión de Fiscalización: Se encarga de la investigación, detección y sanción de conductas de evasión, elusión y contrabando, a través de procesos de auditoría y control.</li>
              <li>Dirección de Gestión de Cobranzas: Lidera los procesos para la recuperación de las deudas tributarias, aduaneras y cambiarias.</li>
              <li>Dirección de Gestión de Recursos y Administración de Riesgos: Esta área combina funciones de administración de recursos y la gestión de riesgos asociados a los procesos misionales, utilizando información para anticipar y mitigar amenazas.</li>
            </ul>
          </li>
          <li><span className="font-semibold">Direcciones de Gestión (Estratégicas y de Apoyo):</span> Proveen el soporte necesario para el funcionamiento de la entidad y la toma de decisiones estratégicas. Aquí es donde se ubica tu rol:
            <ul className="list-circle list-inside text-gray-700 ml-8">
              <li><span className="font-semibold">Dirección de Gestión de Tecnología y Telecomunicaciones (o similar, como Información, Innovación y Tecnología):</span> Esta dirección es crucial en una entidad moderna como la DIAN. Es responsable de la planeación, diseño, desarrollo, implementación, mantenimiento y seguridad de los sistemas de información, infraestructura tecnológica, y herramientas de análisis de datos. Aquí se gestiona el dato como un activo estratégico. Tu rol como <span className="font-semibold">Gestor II</span> probablemente se ubica dentro de un subproceso de esta Dirección, como Innovación y Tecnología o Procesamiento de Datos, dadas tus funciones de generar reportes y mantener la integridad de datos.</li>
              <li>Dirección de Gestión de Talento Humano: Administra todo lo relacionado con el personal de la DIAN, desde la selección y capacitación hasta la gestión del desempeño y el bienestar.</li>
              <li>Dirección de Gestión Jurídica: Proporciona asesoría legal a toda la entidad y representa a la DIAN en procesos judiciales y administrativos.</li>
              <li>Dirección de Gestión de Planeación y Proyectos: Encargada de la formulación del plan estratégico, el seguimiento a la gestión y la coordinación de proyectos institucionales.</li>
              <li>Oficina de Control Interno: Realiza el seguimiento y evaluación a los sistemas de control interno, la gestión de riesgos y el cumplimiento normativo.</li>
              <li>Oficina de Comunicaciones: Gestiona la relación con los medios y la comunicación interna y externa de la entidad.</li>
            </ul>
          </li>
          <li><span className="font-semibold">Oficinas Seccionales:</span> La DIAN tiene una presencia a nivel nacional a través de sus Direcciones Seccionales de Impuestos, Aduanas o Impuestos y Aduanas, que replican parte de la estructura central para la atención y el control regional.</li>
        </ul>
        <p className="mb-2 text-gray-700"><span className="font-semibold">Tu Rol como Gestor II en este Contexto:</span></p>
        <p className="mb-2 text-gray-700">Como Gestor II adscrito a una Dirección de Tecnología/Información/Innovación, tu papel es fundamental para la modernización y eficiencia de la DIAN. Tus funciones de "<span className="font-semibold">Generar reportes y efectuar el seguimiento permanente de los lineamientos que permitan mantener la integridad y disponibilidad de los datos, de acuerdo a los estándares establecidos en el gobierno de datos de la DIAN</span>", te posicionan como un actor clave en la <span className="font-semibold">gobernanza de datos</span> y el soporte analítico.</p>
        <p className="text-gray-700">Trabajarás en el corazón de la inteligencia de la DIAN, asegurando que la información sea confiable, accesible y útil para la toma de decisiones en todas las áreas misionales (impuestos, aduanas, fiscalización). Estarás involucrado en procesos que garantizan la calidad y seguridad de los datos, vitales para combatir la evasión y facilitar el comercio legítimo, haciendo operativa la política de datos y la arquitectura digital de la entidad.</p>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">Para Repasar y Practicar (Actividades Adicionales):</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
          <li><span className="font-semibold">Investigación Directa:</span> Visita la página web oficial de la DIAN (<a href="www.dian.gov.co" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.dian.gov.co</a>) y busca las secciones de "Quiénes Somos", "Nuestra Entidad", "Misión, Visión y Valores", y "Estructura Organizacional". Compara esta información con lo que has leído aquí y con lo que ya tenías de los documentos anteriores para asegurar que tienes la información más precisa y actualizada.</li>
          <li><span className="font-semibold">Organigramas:</span> Busca el organigrama oficial de la DIAN en su sitio web. Identifica tu posición dentro de ese organigrama. Comprende las líneas de reporte y las interrelaciones entre las diferentes direcciones.</li>
          <li><span className="font-semibold">Casos de Estudio/Noticias:</span> Busca noticias recientes o casos de éxito/desafío de la DIAN que involucren su misión (ej., operativos contra el contrabando, mejoras en el recaudo, implementación de nuevas tecnologías). Esto te ayudará a ver cómo la teoría se aplica en la práctica.</li>
          <li><span className="font-semibold">Simulación de Roles:</span> Imagina que eres un Gestor II y se te pide explicar la importancia de tu trabajo para la misión de la DIAN. ¿Cómo lo harías? ¿Qué aspectos de la estructura y misionalidad resaltarías?</li>
          <li><span className="font-semibold">Preguntas de Reflexión:</span>
            <ul className="list-circle list-inside text-gray-700 ml-8">
              <li>¿Cómo se relaciona la función de 'Procesamiento de Datos' con la misión de fiscalización de la DIAN?</li>
              <li>¿Por qué es crucial el 'Gobierno de Datos' para una entidad como la DIAN?</li>
              <li>¿De qué manera los valores de Honestidad y Justicia son aplicables directamente en tu rol de Gestor II?</li>
              <li>Si la DIAN es el 'brazo ejecutor de la política fiscal', ¿quién define esa política a un nivel superior? (Pista: Ministerio de Hacienda).</li>
              <li>¿Cómo la 'Arquitectura Digital' mencionada en las funciones de tu cargo se alinea con la visión de una DIAN moderna y tecnológica?</li>
            </ul>
          </li>
        </ul>
        <p className="text-gray-700">Este material ampliado te brindará una comprensión sólida de la DIAN, su propósito y su funcionamiento, lo cual es vital para responder preguntas de contexto y aplicación en el examen.</p>
      </section>

      {/* SEGUNDO BLOQUE DE INFORMACIÓN ADICIONAL */}
      <div className="border-t border-gray-200 pt-6 mt-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Información Adicional Clave:</h3>
        <section className="mb-8 bg-gray-50 p-4 rounded-md">
          <h4 className="text-xl font-semibold text-blue-600 mb-2">📚 MATERIAL DE ESTUDIO: ESTRUCTURA ORGANIZACIONAL Y MISIONALIDAD DE LA DIAN</h4>
          <h5 className="text-lg font-semibold text-gray-700 mb-2">📌 1. ¿Qué es la DIAN?</h5>
          <p className="mb-2 text-gray-700">La Dirección de Impuestos y Aduanas Nacionales (DIAN) es una Unidad Administrativa Especial con personería jurídica, autonomía administrativa y patrimonio independiente, adscrita al Ministerio de Hacienda y Crédito Público.</p>
          <ul className="list-disc list-inside text-gray-700 mb-2 ml-4">
            <li>Creación: Decreto 2117 de 1992.</li>
            <li>Naturaleza: Unidad Administrativa Especial del orden nacional.</li>
            <li>Regulación actual: Decreto 4048 de 2008 (estructura y funciones).</li>
          </ul>
          <h5 className="text-lg font-semibold text-gray-700 mb-2">🎯 2. Misionalidad de la DIAN (Para memorizar con claridad)</h5>
          <p className="mb-2 text-gray-700">La DIAN tiene la misión de: <span className="italic">“Contribuir a la seguridad fiscal del Estado y la protección del orden público económico nacional, mediante la administración y control del cumplimiento de las obligaciones tributarias, aduaneras y cambiarias.”</span></p>
          <p className="font-semibold text-gray-700 mb-2">Objetivos claves:</p>
          <ul className="list-disc list-inside text-gray-700 mb-2 ml-4">
            <li>Recaudar los tributos nacionales.</li>
            <li>Controlar el contrabando y el lavado de activos.</li>
            <li>Facilitar el comercio exterior.</li>
            <li>Promover la cultura de cumplimiento voluntario.</li>
          </ul>
          <h5 className="text-lg font-semibold text-gray-700 mb-2">🏛️ 3. Visión institucional</h5>
          <p className="mb-2 text-gray-700">“Ser en 2030 una organización moderna, confiable e inteligente, que garantiza el cumplimiento voluntario de las obligaciones tributarias, aduaneras y cambiarias, facilitando el comercio y la competitividad del país.”</p>

          <h5 className="text-lg font-semibold text-gray-700 mb-2">📊 4. Estructura Organizacional (Decreto 4048 de 2008)</h5>
          <h6 className="font-semibold text-gray-700 mb-1">a. NIVEL DIRECCIONAL</h6>
          <ul className="list-disc list-inside text-gray-700 mb-2 ml-4">
            <li>Dirección General</li>
            <li>Oficina de Control Interno</li>
            <li>Oficina de Comunicaciones Estratégicas</li>
            <li>Oficina Jurídica</li>
            <li>Oficina de Planeación</li>
          </ul>
          <h6 className="font-semibold text-gray-700 mb-1">b. NIVEL ASESOR</h6>
          <ul className="list-disc list-inside text-gray-700 mb-2 ml-4">
            <li>Subdirección de Gestión de Tecnología y Telecomunicaciones</li>
            <li>Subdirección de Gestión de Talento Humano</li>
            <li>Subdirección de Gestión Estratégica del Talento</li>
          </ul>
          <h6 className="font-semibold text-gray-700 mb-1">c. NIVEL MISIONAL</h6>
          <ul className="list-disc list-inside text-gray-700 mb-2 ml-4">
            <li>Dirección de Gestión de Ingresos</li>
            <li>Dirección de Gestión de Fiscalización</li>
            <li>Dirección de Gestión de Aduanas</li>
            <li>Dirección de Gestión de Recursos y Administración Económica</li>
            <li>Dirección de Gestión Organizacional</li>
            <li>Dirección de Gestión de Grandes Contribuyentes</li>
            <li>Dirección de Gestión de Fiscalización de Personas Jurídicas</li>
            <li>Dirección de Gestión de Fiscalización de Personas Naturales</li>
          </ul>
          <h6 className="font-semibold text-gray-700 mb-1">d. NIVEL TERRITORIAL</h6>
          <ul className="list-disc list-inside text-gray-700 mb-2 ml-4">
            <li>Direcciones Seccionales en ciudades principales.</li>
            <li>Coordinaciones y Administraciones Locales.</li>
          </ul>
          <p className="text-gray-700 mb-4">📌 Enlace oficial: <a href="https://www.dian.gov.co/dian/quienes/Paginas/EstrucutraOrganizacional.aspx" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">DIAN - Estructura Organizacional</a></p>

          <h5 className="text-lg font-semibold text-gray-700 mb-2">🧩 5. Funciones Clave de la DIAN</h5>
          <p className="mb-2 text-gray-700">(Art. 3 del Decreto 4048 de 2008)</p>
          <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
            <li>Administrar impuestos, tasas, contribuciones, derechos y demás ingresos del orden nacional.</li>
            <li>Controlar la entrada, salida y circulación de mercancías del territorio aduanero.</li>
            <li>Controlar el cumplimiento de obligaciones cambiarias.</li>
            <li>Recaudar los tributos nacionales, aplicar sanciones e intereses.</li>
            <li>Suministrar información al Gobierno Nacional y ciudadanía.</li>
            <li>Proponer reformas normativas sobre fiscalización y control aduanero/cambiario.</li>
            <li>Diseñar y administrar sistemas informáticos integrados de control y recaudo.</li>
          </ul>

          <h5 className="text-lg font-semibold text-gray-700 mb-2">🧠 Posibles Preguntas Tipo CNSC (Prueba de Juicio Situacional)</h5>
          <div className="mb-4 bg-white p-4 rounded-md shadow-sm border border-gray-100">
            <p className="font-semibold text-gray-800">🧪 CASO 1:</p>
            <p className="mb-2 text-gray-700">La DIAN quiere lanzar una estrategia de control en zonas de frontera donde el contrabando ha aumentado. Se requiere coordinación entre el nivel central y las Direcciones Seccionales.</p>
            <p className="font-semibold text-gray-800">ENUNCIADO:</p>
            <p className="mb-2 text-gray-700">Como Gestor II, ¿qué principio organizacional permite articular de forma eficaz la acción de las Direcciones Seccionales con las políticas del nivel central?</p>
            <ul className="list-alpha list-inside text-gray-700 mb-2 ml-4">
              <li>A) El principio de descentralización por servicios que asigna total autonomía a las sedes regionales.</li>
              <li>B) El principio de desconcentración que permite delegar funciones a las seccionales bajo supervisión del nivel central.</li>
              <li>C) El principio de centralización operativa, que permite al Director General tomar decisiones exclusivas para todas las zonas.</li>
            </ul>
            <p className="font-bold text-emerald-700">✅ Respuesta Correcta: B</p>
            <p className="text-sm text-gray-600">Justificación: La DIAN aplica el principio de desconcentración funcional, en donde las Direcciones Seccionales ejecutan funciones delegadas con supervisión técnica del nivel central. Está en línea con el Decreto 4048 de 2008.</p>
          </div>

          <div className="mb-4 bg-white p-4 rounded-md shadow-sm border border-gray-100">
            <p className="font-semibold text-gray-800">🧪 CASO 2:</p>
            <p className="mb-2 text-gray-700">Un funcionario de nivel profesional debe presentar un informe sobre el cumplimiento de la misión institucional.</p>
            <p className="font-semibold text-gray-800">ENUNCIADO:</p>
            <p className="mb-2 text-gray-700">¿Cuál de las siguientes afirmaciones representa mejor la misión de la DIAN?</p>
            <ul className="list-alpha list-inside text-gray-700 mb-2 ml-4">
              <li>A) Supervisar y sancionar a todos los contribuyentes sin excepción.</li>
              <li>B) Velar por la seguridad nacional mediante vigilancia tributaria.</li>
              <li>C) Contribuir a la seguridad fiscal del Estado, administrando los tributos y controlando el cumplimiento de las obligaciones tributarias, aduaneras y cambiarias.</li>
            </ul>
            <p className="font-bold text-emerald-700">✅ Respuesta Correcta: C</p>
            <p className="text-sm text-gray-600">Justificación: Corresponde al texto oficial de la misión institucional de la DIAN.</p>
          </div>

          <div className="mb-4 bg-white p-4 rounded-md shadow-sm border border-gray-100">
            <p className="font-semibold text-gray-800">🧪 CASO 3:</p>
            <p className="mb-2 text-gray-700">Durante una auditoría interna, se detecta que una Dirección Seccional ha emitido directrices fiscales contradictorias a las del nivel central.</p>
            <p className="font-semibold text-gray-800">ENUNCIADO:</p>
            <p className="mb-2 text-gray-700">¿Qué órgano debe intervenir para alinear directrices conforme a la estructura institucional?</p>
            <ul className="list-alpha list-inside text-gray-700 mb-2 ml-4">
              <li>A) La Oficina de Planeación.</li>
              <li>B) La Dirección General.</li>
              <li>C) La Dirección de Gestión de Grandes Contribuyentes.</li>
            </ul>
            <p className="font-bold text-emerald-700">✅ Respuesta Correcta: B</p>
            <p className="text-sm text-gray-600">Justificación: La Dirección General tiene la máxima autoridad dentro de la estructura de la DIAN y es responsable de la alineación general de políticas y directrices.</p>
          </div>

          <h5 className="text-lg font-semibold text-gray-700 mb-2">📝 Recomendaciones de Estudio</h5>
          <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
            <li>Memoriza misión, visión y funciones según el Decreto 4048 de 2008.</li>
            <li>Estudia organigramas actualizados desde la web oficial de la DIAN: <a href="https://www.dian.gov.co" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">👉 https://www.dian.gov.co</a></li>
            <li>Realiza esquemas o mapas mentales de la estructura.</li>
            <li>Conecta cada dependencia con las funciones del cargo GESTOR II: uso de datos, reportes, arquitectura digital y gobierno de datos.</li>
          </ul>
          <h5 className="text-lg font-semibold text-gray-700 mb-2">🎁 Recursos Complementarios</h5>
          <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
            <li>Decreto 4048 de 2008 - Estructura DIAN (PDF oficial)</li>
            <li>DIAN - Misión, Visión y Valores</li>
            <li>Organigrama actual DIAN</li>
          </ul>
          <p className="mb-4 text-gray-700">Este material ampliado te brindará una comprensión sólida de la DIAN, su propósito y su funcionamiento, lo cual es vital para responder preguntas de contexto y aplicación en el examen.</p>
        </section>
      </div>

      {/* Bloque Adicional de Material de Estudio */}
      <div className="border-t border-gray-200 pt-6 mt-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Información Adicional Clave:</h3>
        <section className="mb-8 bg-gray-50 p-4 rounded-md">
          <h4 className="text-xl font-semibold text-blue-600 mb-2">📚 MATERIAL DE ESTUDIO: ESTRUCTURA ORGANIZACIONAL Y MISIONALIDAD DE LA DIAN</h4>
          <h5 className="text-lg font-semibold text-gray-700 mb-2">📌 1. Estructura Organizacional de la DIAN</h5>
          <p className="mb-2 text-gray-700">La Dirección de Impuestos y Aduanas Nacionales (DIAN) es una Unidad Administrativa Especial adscrita al Ministerio de Hacienda y Crédito Público. Su estructura organizacional está definida en el Decreto 1071 de 2015 (compilado en el Decreto 1625 de 2016) y actualizada por resoluciones internas.</p>
          <h6 className="font-semibold text-gray-700 mb-1">1.1. Órganos Principales</h6>
          <div className="overflow-x-auto mb-4">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b bg-gray-100 text-left text-sm font-semibold text-gray-600">Órgano</th>
                  <th className="py-2 px-4 border-b bg-gray-100 text-left text-sm font-semibold text-gray-600">Funciones Principales</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="py-2 px-4 border-b border-gray-200">Dirección General</td><td className="py-2 px-4 border-b border-gray-200">Máxima autoridad, representa legalmente a la DIAN. Define políticas y estrategias.</td></tr>
                <tr><td className="py-2 px-4 border-b border-gray-200">Subdirección de Gestión Aduanera</td><td className="py-2 px-4 border-b border-gray-200">Control de importaciones/exportaciones, lucha contra el contrabando.</td></tr>
                <tr><td className="py-2 px-4 border-b border-gray-200">Subdirección de Gestión Tributaria</td><td className="py-2 px-4 border-b border-gray-200">Fiscalización, recaudo y control de impuestos nacionales.</td></tr>
                <tr><td className="py-2 px-4 border-b border-gray-200">Subdirección de Gestión de Información e Innovación</td><td className="py-2 px-4 border-b border-gray-200">Gobierno de datos, TI, analítica y transformación digital.</td></tr>
                <tr><td className="py-2 px-4 border-b border-gray-200">Oficina de Planeación</td><td className="py-2 px-4 border-b border-gray-200">Diseña planes estratégicos y de modernización.</td></tr>
                <tr><td className="py-2 px-4 border-b border-gray-200">Oficina Jurídica</td><td className="py-2 px-4 border-b border-gray-200">Asesoría legal, defensa en litigios.</td></tr>
                <tr><td className="py-2 px-4 border-b border-gray-200">Oficina de Control Interno</td><td className="py-2 px-4 border-b border-gray-200">Vigila el cumplimiento normativo y la gestión de riesgos.</td></tr>
              </tbody>
            </table>
          </div>
          <h6 className="font-semibold text-gray-700 mb-1">1.2. Estructura Territorial</h6>
          <p className="mb-4 text-gray-700">La DIAN opera en 9 Direcciones Seccionales (Bogotá, Medellín, Cali, Barranquilla, Bucaramanga, Cartagena, Pereira, Cúcuta y Villavicencio) y 72 oficinas aduaneras y tributarias.</p>
          <p className="text-gray-700 mb-4">📌 Enlace oficial: <a href="https://www.dian.gov.co/dian/quienes/Paginas/EstrucutraOrganizacional.aspx" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">DIAN - Estructura Organizacional</a></p>

          <h5 className="text-lg font-semibold text-gray-700 mb-2">2. Misionalidad de la DIAN</h5>
          <p className="mb-2 text-gray-700">La DIAN tiene tres funciones misionales según el Estatuto Tributario (Decreto 624 de 1989) y la Ley 1607 de 2012:</p>
          <h6 className="font-semibold text-gray-700 mb-1">2.1. Funciones Principales</h6>
          <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
            <li><span className="font-semibold">Recaudación Tributaria</span>
              <ul className="list-circle list-inside text-gray-700 ml-8">
                <li>Administra impuestos como IVA, Renta, Impuesto al Consumo, etc.</li>
                <li>Gestiona declaraciones y pagos (obligaciones tributarias).</li>
              </ul>
            </li>
            <li><span className="font-semibold">Control Aduanero</span>
              <ul className="list-circle list-inside text-gray-700 ml-8">
                <li>Regula importaciones/exportaciones.</li>
                <li>Combate el contrabando y elusión fiscal.</li>
                <li>Aplica tratados de libre comercio.</li>
              </ul>
            </li>
            <li><span className="font-semibold">Fiscalización y Control</span>
              <ul className="list-circle list-inside text-gray-700 ml-8">
                <li>Auditorías a contribuyentes.</li>
                <li>Lucha contra la evasión y el fraude fiscal.</li>
              </ul>
            </li>
          </ul>
          <h6 className="font-semibold text-gray-700 mb-1">2.2. Marco Legal Clave</h6>
          <div className="overflow-x-auto mb-4">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b bg-gray-100 text-left text-sm font-semibold text-gray-600">Norma</th>
                  <th className="py-2 px-4 border-b bg-gray-100 text-left text-sm font-semibold text-gray-600">Relevancia</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="py-2 px-4 border-b border-gray-200">Constitución Política (Art. 150, 338-339)</td><td className="py-2 px-4 border-b border-gray-200">Bases del sistema tributario.</td></tr>
                <tr><td className="py-2 px-4 border-b border-gray-200">Ley 223 de 1995</td><td className="py-2 px-4 border-b border-gray-200">Creación de la DIAN.</td></tr>
                <tr><td className="py-2 px-4 border-b border-gray-200">Decreto 1071 de 2015</td><td className="py-2 px-4 border-b border-gray-200">Estructura y funciones.</td></tr>
                <tr><td className="py-2 px-4 border-b border-gray-200">Ley 1943 de 2018 (Reforma Tributaria)</td><td className="py-2 px-4 border-b border-gray-200">Modernización y fortalecimiento de la DIAN.</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mb-4">📌 Enlace oficial: <a href="https://www.dian.gov.co/dian/quienes/Paginas/MisionVisionValores.aspx" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">DIAN - Misión y Visión</a></p>

          <h5 className="text-lg font-semibold text-gray-700 mb-2">3. Posibles Preguntas en el Examen</h5>
          <h6 className="font-semibold text-gray-700 mb-1">3.1. Preguntas de Estructura Organizacional</h6>
          <div className="mb-4 bg-white p-4 rounded-md shadow-sm border border-gray-100">
            <p className="font-semibold text-gray-800">🔹 Ejemplo 1 (Selección múltiple):</p>
            <p className="mb-2 text-gray-700">"¿Cuál de las siguientes subdirecciones de la DIAN es responsable del gobierno de datos y la innovación tecnológica?"</p>
            <p className="font-bold text-emerald-700">✅ Respuesta correcta: Subdirección de Gestión de Información e Innovación.</p>
          </div>
          <div className="mb-4 bg-white p-4 rounded-md shadow-sm border border-gray-100">
            <p className="font-semibold text-gray-800">🔹 Ejemplo 2 (Juicio situacional):</p>
            <p className="mb-2 text-gray-700">"Si un contribuyente presenta una queja por un cobro injusto de impuestos, ¿qué área de la DIAN debe resolver el caso?"</p>
            <p className="font-bold text-emerald-700">✅ Respuesta correcta: Oficina Jurídica (o la Dirección Seccional correspondiente).</p>
          </div>

          <h6 className="font-semibold text-gray-700 mb-1 mt-6">3.2. Preguntas de Misionalidad</h6>
          <div className="mb-4 bg-white p-4 rounded-md shadow-sm border border-gray-100">
            <p className="font-semibold text-gray-800">🔹 Ejemplo 1 (Verdadero/Falso):</p>
            <p className="mb-2 text-gray-700">"La DIAN solo se encarga de recaudar impuestos y no tiene competencia en aduanas."</p>
            <p className="font-bold text-emerald-700">✅ Respuesta correcta: Falso (también gestiona aduanas).</p>
          </div>
          <div className="mb-4 bg-white p-4 rounded-md shadow-sm border border-gray-100">
            <p className="font-semibold text-gray-800">🔹 Ejemplo 2 (Selección múltiple):</p>
            <p className="mb-2 text-gray-700">"¿Cuál de estas NO es una función misional de la DIAN?"</p>
            <ul className="list-alpha list-inside text-gray-700 mb-2 ml-4">
              <li>a) Recaudar impuestos.</li>
              <li>b) Controlar importaciones.</li>
              <li>c) Otorgar créditos bancarios. (Correcta, no es función de la DIAN)</li>
            </ul>
            <p className="font-bold text-emerald-700">✅ Respuesta correcta: c) Otorgar créditos bancarios.</p>
          </div>

          <h5 className="text-lg font-semibold text-gray-700 mb-2 mt-6">4. Material Adicional para Profundizar</h5>
          <h6 className="font-semibold text-gray-700 mb-1">📚 Documentos oficiales:</h6>
          <ul className="list-disc list-inside text-gray-700 mb-2 ml-4">
            <li>Decreto 1071 de 2015 (Estructura DIAN)</li>
            <li>Estatuto Tributario (Decreto 624 de 1989)</li>
          </ul>
          <h6 className="font-semibold text-gray-700 mb-1">📌 Páginas clave:</h6>
          <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
            <li><a href="https://www.dian.gov.co/dian/quienes/Paginas/default.aspx" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">DIAN - ¿Quiénes Somos?</a></li>
            <li><a href="https://www.dian.gov.co/normatividad/Paginas/Marco-Normativo.aspx" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">DIAN - Marco Normativo</a></li>
          </ul>
          <p className="mb-4 text-gray-700">Conclusión: Este material cubre todo lo que podrían preguntar en el examen sobre Estructura y Misionalidad de la DIAN. Si necesitas más detalles sobre algún punto (ej: procesos aduaneros, normativa tributaria), dime y te preparo una guía adicional.</p>
        </section>
      </div>

      {/* Botón "Ahora repasa lo que aprendiste y haz el simulacro" */}
      <section className="mt-8 pt-6 border-t border-gray-200 text-center">
        <h3 className="text-2xl font-semibold text-emerald-700 mb-4">¡Ahora, repasa lo que aprendiste!</h3>
        <p className="text-lg text-gray-700 mb-6">Pon a prueba tus conocimientos con un simulacro de este tema.</p>
        <button
          onClick={onStartSimulacro}
          className="py-3 px-8 bg-emerald-600 text-white rounded-md font-bold text-lg hover:bg-emerald-700 transition-colors duration-200 shadow-md"
        >
          Hacer Simulacro de "Estructura Organizacional y Misionalidad" (20 preguntas)
        </button>
      </section>

      {/* Botón de volver al cronograma al final */}
      <button
        onClick={onBack}
        className="mt-6 py-2 px-4 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors duration-200 font-semibold"
      >
        ← Volver al Cronograma
      </button>
    </div>
  );
};

export default DianOrgMission;

