// src/studyContent/IntroDIAN2667.jsx
import React from 'react';

// El componente recibe dos props:
// - onBack: una función para regresar a la vista del cronograma
// - onStartSimulacro: una función para iniciar un simulacro específico de este tema
const IntroDIAN2667 = ({ onBack, onStartSimulacro }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-xl">
      {/* Botón para volver al cronograma */}
      <button
        onClick={onBack}
        className="mb-6 py-2 px-4 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors duration-200 font-semibold"
      >
        ← Volver al Cronograma
      </button>

      {/* Título principal del material de estudio */}
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Material de Estudio: Introducción al Proceso de Selección DIAN 2667</h2>

      {/* Sección 1: Presentación y Propósito */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">1. Presentación y Propósito del Proceso de Selección DIAN 2667</h3>
        <p className="mb-2 text-gray-700">El Proceso de Selección DIAN 2667 es un concurso público de méritos diseñado para proveer empleos en vacancia definitiva pertenecientes al sistema específico de carrera administrativa de la planta de personal de la Unidad Administrativa Especial Dirección de Impuestos y Aduanas Nacionales (DIAN). Este proceso se rige bajo los principios de Igualdad, Mérito y Oportunidad.</p>
        <p className="mb-2 text-gray-700">La gestión de este proceso está a cargo de la Comisión Nacional del Servicio Civil (CNSC), quien ha suscrito un contrato de prestación de servicios con la Fundación Universitaria del Área Andina (FUAA) para la realización de las pruebas escritas y de valoración de antecedentes.</p>
        <p className="mb-2 text-gray-700">El objetivo principal de este proceso es valorar y calificar los conocimientos, competencias laborales, aptitudes, habilidades y potencialidades de los aspirantes a los diferentes empleos ofertados.</p>
      </section>

      {/* Sección 2: Marco Normativo */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">2. Marco Normativo del Concurso Público de Méritos</h3>
        <p className="mb-2 text-gray-700">Las normas reguladoras de este proceso de selección son de obligatorio cumplimiento para la DIAN, la CNSC, los participantes inscritos y el operador (FUAA). Es crucial que te familiarices con ellas:</p>
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
          <li>Acuerdo No. 205 del 10 de octubre de 2024 y su Anexo: Estos documentos establecen las especificaciones técnicas de las diferentes fases del proceso de selección DIAN 2667, tanto en la modalidad de ingreso (tu caso) como de ascenso, para proveer empleos en vacancia definitiva.</li>
          <li>Decreto Ley 927 de 2023: Regula aspectos fundamentales del sistema de carrera de la DIAN, incluyendo las pruebas a aplicar.</li>
          <li>Ley 909 de 2004: Ley general de carrera administrativa.</li>
          <li>Decreto Ley 760 de 2005 y Decreto Ley 770 de 2005.</li>
          <li>Ley 1033 de 2006.</li>
          <li>Decreto 1083 de 2015: Aplicable en temas no regulados por el Decreto Ley 927 de 2023.</li>
          <li>Ley 1955 de 2019.</li>
          <li>Decreto 498 de 2020.</li>
          <li>Resoluciones de la DIAN No. 067 (que adopta el MERF), 065 y 066, todas de 2024, y 059 de 2017: Estas resoluciones contienen disposiciones internas de la DIAN relevantes para el proceso, especialmente la Resolución No. 067 que adopta el Manual Específico de Requisitos y Funciones (MERF).</li>
        </ul>
        <p className="text-gray-700">Es fundamental complementar la lectura de esta guía con la normativa completa disponible en el sitio web de la CNSC: <a href="https://www.cnsc.gov.co/convocatorias/dian-2667" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.cnsc.gov.co/convocatorias/dian-2667</a>.</p>
      </section>

      {/* Sección 3: Estructura del Proceso */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">3. Estructura del Proceso de Selección (Fases/Etapas)</h3>
        <p className="mb-2 text-gray-700">El Proceso de Selección DIAN 2667 se compone de varias etapas, de las cuales ya has superado algunas y te encuentras próximo a la aplicación de pruebas:</p>
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
          <li>Convocatoria y divulgación.</li>
          <li>Adquisición de Derechos de Participación e Inscripciones (Modalidad Ascenso).</li>
          <li>Declaratoria de desierto de vacantes ofertadas en Ascenso.</li>
          <li>Ajuste de la OPEC para incluir vacantes desiertas de Ascenso en Ingreso.</li>
          <li>Adquisición de Derechos de Participación e Inscripciones (Modalidad Ingreso).</li>
          <li>Verificación de Requisitos Mínimos (VRM): Etapa ya superada por ti, que permite la citación a pruebas.</li>
          <li>Aplicación de Pruebas de Selección: Esta es tu etapa actual, e incluye:
            <ul className="list-circle list-inside text-gray-700 ml-8">
              <li>7.1 Pruebas Escritas (el enfoque de tu estudio actual).</li>
              <li>7.2 Prueba de Ejecución.</li>
              <li>7.3 Prueba de Valoración de Antecedentes.</li>
            </ul>
          </li>
          <li>Conformación y adopción de las Listas de Elegibles.</li>
        </ul>
      </section>

      {/* Sección 4: Generalidades de las Pruebas Escritas */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">4. Generalidades de las Pruebas Escritas</h3>
        <p className="mb-2 text-gray-700">Para el empleo de GESTOR II, Nivel Profesional, Código 302, Grado 2, que requiere experiencia, las pruebas escritas tienen el siguiente carácter, ponderación y puntajes:</p>
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b bg-gray-100 text-left text-sm font-semibold text-gray-600">Prueba</th>
                <th className="py-2 px-4 border-b bg-gray-100 text-left text-sm font-semibold text-gray-600">Carácter</th>
                <th className="py-2 px-4 border-b bg-gray-100 text-left text-sm font-semibold text-gray-600">Peso porcentual</th>
                <th className="py-2 px-4 border-b bg-gray-100 text-left text-sm font-semibold text-gray-600">Puntaje mínimo aprobatorio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b border-gray-200">Prueba de Competencias Funcionales</td>
                <td className="py-2 px-4 border-b border-gray-200">Eliminatoria</td>
                <td className="py-2 px-4 border-b border-gray-200">60%</td>
                <td className="py-2 px-4 border-b border-gray-200">70</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-gray-200">Prueba de Competencias Comportamentales</td>
                <td className="py-2 px-4 border-b border-gray-200">Clasificatoria</td>
                <td className="py-2 px-4 border-b border-gray-200">20%</td>
                <td className="py-2 px-4 border-b border-gray-200">No aplica</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-gray-200">Valoración de Antecedentes</td>
                <td className="py-2 px-4 border-b border-gray-200">Clasificatoria</td>
                <td className="py-2 px-4 border-b border-gray-200">10%</td>
                <td className="py-2 px-4 border-b border-gray-200">No aplica</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-gray-200">Prueba de Integridad</td>
                <td className="py-2 px-4 border-b border-gray-200">Clasificatoria</td>
                <td className="py-2 px-4 border-b border-gray-200">10%</td>
                <td className="py-2 px-4 border-b border-gray-200">No aplica</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-gray-200 font-semibold">TOTAL</td>
                <td className="py-2 px-4 border-b border-gray-200"></td>
                <td className="py-2 px-4 border-b border-gray-200 font-semibold">100%</td>
                <td className="py-2 px-4 border-b border-gray-200"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-2 text-gray-700"><span className="font-semibold">Puntaje Mínimo Aprobatorio:</span> Debes obtener un puntaje mínimo de 70.00 puntos en la Prueba de Competencias Funcionales para seguir en el proceso. Si no lo superas, serás excluido.</p>
        <p className="mb-2 text-gray-700">Los resultados de las Pruebas de Competencias Comportamentales e Integridad solo se publicarán si alcanzas el puntaje mínimo aprobatorio en la Prueba de Competencias Funcionales.</p>
        <p className="mb-2 text-gray-700">Las pruebas se calificarán en una escala de cero (0) a cien (100) puntos, con una parte entera y dos (2) decimales truncados.</p>
        <p className="mb-2 text-gray-700">La calificación se obtiene tras un análisis técnico y psicométrico; los ítems que no cumplan con los criterios de calidad no harán parte de la calificación.</p>
      </section>

      {/* Sección 5: Tipos de Pruebas a Evaluar y Formato de Preguntas */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">5. Tipos de Pruebas a Evaluar y Formato de Preguntas</h3>
        <h4 className="text-xl font-medium text-gray-700 mb-2">1. Prueba sobre Competencias Funcionales:</h4>
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
          <li>Propósito: Evalúa los conocimientos teóricos, profesionales y/o técnicos, específicos y necesarios para desarrollar adecuadamente la actividad laboral del cargo de Gestor II, conforme al MERF de la DIAN.</li>
          <li>Formato de Pregunta: Prueba de Juicio Situacional.
            <ul className="list-circle list-inside text-gray-700 ml-8">
              <li>Cada pregunta o ítem es de selección múltiple con única respuesta.</li>
              <li>Se presenta un (1) Caso (circunstancias hipotéticas laborales).</li>
              <li>Luego, un (1) Enunciado (pregunta o tarea específica relacionada con el contenido a medir).</li>
              <li>Finalmente, tres (3) Opciones de Respuesta, de las cuales solo una es la correcta y presenta una solución efectiva.</li>
            </ul>
          </li>
          <li>Cantidad de Preguntas (Nivel Profesional): 66 preguntas.</li>
        </ul>

        <h4 className="text-xl font-medium text-gray-700 mb-2 mt-6">2. Prueba sobre Competencias Comportamentales:</h4>
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
          <li>Propósito: Evalúa el conjunto de capacidades y habilidades necesarias para dar respuesta a distintas situaciones laborales y de relacionamiento, de conformidad con el Diccionario de Competencias de la DIAN.</li>
          <li>Formato de Pregunta: Basado en frases evaluadas mediante una escala tipo Likert.
            <ul className="list-circle list-inside text-gray-700 ml-8">
              <li>Se presenta una serie de afirmaciones relacionadas con la competencia a medir.</li>
              <li>Debes seleccionar una única opción de respuesta en una escala de estimación de cuatro categorías: "Totalmente en desacuerdo", "En Desacuerdo", "De Acuerdo", "Totalmente de Acuerdo".</li>
              <li>Este formato no requiere conocimientos técnicos ni tiene respuestas "incorrectas", sino que identifica tu predisposición.</li>
            </ul>
          </li>
          <li>Cantidad de Preguntas (Nivel Profesional): 66 preguntas.</li>
        </ul>

        <h4 className="text-xl font-medium text-gray-700 mb-2 mt-6">3. Prueba de Integridad:</h4>
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
          <li>Propósito: Evalúa las características estables de una persona que dan cuenta de la coherencia entre su sistema de creencias y su forma de actuar frente a la búsqueda del bien común en situaciones cotidianas. Se fundamenta en los principios definidos en el Código de Integridad adoptado por la DIAN.</li>
          <li>Formato de Pregunta: Similar a las competencias comportamentales, utilizando frases evaluadas mediante una escala tipo Likert.</li>
          <li>Cantidad de Preguntas (Nivel Profesional): 20 preguntas.</li>
        </ul>
        <p className="mb-2 text-gray-700"><span className="font-semibold">Total de Preguntas por Cuadernillo (Nivel Profesional):</span> 152 preguntas (66 Funcionales + 66 Comportamentales + 20 Integridad).</p>
      </section>

      {/* Sección 6: Ejes de Evaluación */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">6. Ejes de Evaluación</h3>
        <p className="mb-2 text-gray-700">Los ejes temáticos específicos para tu cargo (Gestor II - Nivel Profesional), sobre los cuales se diseñaron y elaboraron las pruebas, son los que te proporcioné anteriormente:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-gray-700 ml-4">
            <span>• ADAPTABILIDAD NIVEL 1</span>
            <span>• CICLO DE VIDA DE GESTION DE DATOS</span>
            <span>• COMPORTAMIENTO ETICO NIVEL 1</span>
            <span>• COMPORTAMIENTO ETICO NIVEL 4</span>
            <span>• COMPROMISO</span>
            <span>• COMUNICACION EFECTIVA NIVEL 1</span>
            <span>• COMUNICACION EFECTIVA NIVEL 3</span>
            <span>• CONCEPTOS GENERALES DE METODOLOGIA AGIL PARA DATOS</span>
            <span>• DILIGENCIA</span>
            <span>• DISEÑO DE SOLUCIONES DE GESTION DE DATOS</span>
            <span>• ESTRUCTURA ORGANIZACIONAL DE LA DIAN</span>
            <span>• GOBIERNO DE DATOS</span>
            <span>• HERRAMIENTAS DE METODOLOGIAS AGILES PARA PROCESAMIENTO DE DATOS</span>
            <span>• HERRAMIENTAS ETL</span>
            <span>• HONESTIDAD</span>
            <span>• INNOVACION NIVEL 3</span>
            <span>• JUSTICIA</span>
            <span>• MISIONALIDAD DE LA DIAN</span>
            <span>• ORIENTACION AL LOGRO NIVEL 1</span>
            <span>• ORIENTACION AL USUARIO Y AL CIUDADANO NIVEL 1</span>
            <span>• PYTHON</span>
            <span>• RESPETO</span>
            <span>• ROLES Y RESPONSABILIDADES EN METODOLOGIA AGIL PARA PROCESAMIENTO DE DATOS</span>
            <span>• SQL</span>
            <span>• TRABAJO EN EQUIPO NIVEL 1</span>
            <span>• TRABAJO EN EQUIPO NIVEL 3</span>
        </div>
      </section>

      {/* Sección 7: Instrucciones y Recomendaciones Clave para el Día de la Prueba */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">7. Instrucciones y Recomendaciones Clave para el Día de la Prueba</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
          <li><span className="font-semibold">Fecha y Hora:</span> La aplicación de las pruebas escritas está programada para el 17 de agosto de 2025. Las puertas abrirán a las 7:15 a.m. y el inicio oficial será a las 8:00 a.m.. La sesión terminará a la 1:00 p.m., con una duración de cinco (5) horas.</li>
          <li><span className="font-semibold">Llegada:</span> Se recomienda llegar una (1) hora antes al sitio de aplicación. Las puertas se cerrarán a las 8:30 a.m.. Si llegas después de las 8:30 a.m., no se te permitirá el ingreso y serás considerado ausente.</li>
          <li><span className="font-semibold">Identificación:</span> Solo son válidos la cédula de ciudadanía (física o digital), pasaporte vigente o contraseña con código de barras/QR vigente (6 meses).</li>
          <li><span className="font-semibold">Elementos Permitidos:</span> Solo puedes ingresar con lápiz de mina negra N.º 2, sacapuntas y borrador de lápiz.</li>
          <li><span className="font-semibold">Elementos Prohibidos:</span> Absolutamente prohibido el ingreso de armas, maletas, bolsos, gorras, libros, revistas, códigos, hojas, anotaciones, cuadernos, ni ningún tipo de aparato electrónico o mecánico (celulares - salvo excepción para cédula digital que debe permanecer apagado-, tabletas, audífonos, smartwatches, calculadoras, cámaras, etc.).</li>
          <li><span className="font-semibold">Comportamiento en el Salón:</span> No se permite el consumo de alimentos ni bebidas. No está permitido rayar, marcar, destruir, doblar o extraer el cuadernillo o la hoja de respuestas. No puedes salir del salón sin autorización del jefe de salón y, si sales al baño, debes dejar el material. Debes permanecer en el salón mínimo una hora o hasta que se realice la toma de huella y se firmen los formatos.</li>
          <li><span className="font-semibold">Hoja de Respuestas:</span> Es fundamental rellenar completamente el círculo de la respuesta escogida con lápiz de mina negra número 2. No marques más de una respuesta por ítem (será anulada). Borra totalmente la respuesta que desees cambiar. Verifica que el número de la respuesta coincida con el número del ítem.</li>
          <li><span className="font-semibold">Fraudulentas y Causales de Exclusión:</span> Se iniciarán actuaciones administrativas por posibles fraudes, copia, divulgación o sustracción de materiales, o suplantación. Estas conductas pueden llevar a la invalidación de la prueba y exclusión del proceso, sin perjuicio de acciones legales.</li>
        </ul>
      </section>

      {/* Sección 8: Acceso a Pruebas Escritas (Post-Examen, para Reclamaciones) */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">8. Acceso a Pruebas Escritas (Post-Examen, para Reclamaciones)</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
          <li>Propósito: Permitir a los aspirantes verificar sus respuestas y compararlas con las respuestas clave-correctas, para fundamentar posibles reclamaciones.</li>
          <li>Restricciones: Solo podrás acceder a las pruebas que tú presentaste, por un tiempo máximo equivalente a la mitad del tiempo total de la aplicación (2.5 horas para ti). Está estrictamente prohibida la reproducción física y/o digital del material (fotocopias, fotos, escaneos, etc.). El material es propiedad patrimonial de la CNSC y su uso indebido es un delito.</li>
          <li>Documentos que Recibirás para el Acceso: Copia fiel de tu cuadernillo y hoja de respuestas (funcionales, comportamentales, integridad), la hoja de claves y dos hojas en blanco para tomar apuntes sucintos. No se permite transcribir parcial o totalmente el contenido.</li>
          <li>Acuerdo de Confidencialidad: Deberás firmarlo y registrar tu huella dactilar como condición indispensable para acceder al material.</li>
          <li>Reclamaciones: Se presentan únicamente a través de SIMO dentro de los cinco (5) días hábiles siguientes a la publicación de resultados. Si solicitaste y accediste a las pruebas, podrás complementar tu reclamación durante los dos (2) días hábiles siguientes al acceso.</li>
        </ul>
      </section>

      {/* Sección "Para Repasar y Practicar" */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">Para Repasar y Practicar:</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
          <li><span className="font-semibold">Lectura Profunda:</span> Lee este material al menos dos veces. Subraya las ideas principales, fechas clave y reglas de las pruebas.</li>
          <li><span className="font-semibold">Elabora un Resumen:</span> Crea un resumen conciso de los puntos más importantes de esta introducción.</li>
          <li><span className="font-semibold">Preguntas de Auto-evaluación:</span> Responde mentalmente o por escrito las siguientes preguntas:
            <ul className="list-circle list-inside text-gray-700 ml-8">
              <li>¿Cuál es la fecha y horario exacto de mi examen?</li>
              <li>¿Qué documentos de identificación son válidos?</li>
              <li>¿Qué elementos puedo y no puedo llevar al salón?</li>
              <li>¿Cuál es el peso de la prueba funcional y cuánto debo sacar para pasar?</li>
              <li>¿Qué tipo de preguntas tendré en la prueba funcional? ¿Y en las comportamentales/integridad?</li>
              <li>¿Cuál es el total de preguntas para mi nivel?</li>
              <li>¿Qué debo hacer si quiero cambiar una respuesta en la hoja de respuestas?</li>
              <li>¿Cuáles son las principales causales de exclusión?</li>
              <li>¿Qué puedo y no puedo hacer durante el acceso a pruebas?</li>
            </ul>
          </li>
          <li><span className="font-semibold">Simulación Mental:</span> Imagina el día del examen, desde que te levantas hasta que sales del sitio. Visualiza cada paso para evitar sorpresas.</li>
        </ul>
      </section>

      {/* Botón "Ahora repasa lo que aprendiste y haz el simulacro" */}
      <section className="mt-8 pt-6 border-t border-gray-200 text-center">
        <h3 className="text-2xl font-semibold text-emerald-700 mb-4">¡Ahora, repasa lo que aprendiste!</h3>
        <p className="text-lg text-gray-700 mb-6">Pon a prueba tus conocimientos con un simulacro de este tema.</p>
        <button
          onClick={onStartSimulacro} 
          className="py-3 px-8 bg-emerald-600 text-white rounded-md font-bold text-lg hover:bg-emerald-700 transition-colors duration-200 shadow-md"
        >
          Hacer Simulacro de "Introducción al Proceso" (20 preguntas)
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

export default IntroDIAN2667;