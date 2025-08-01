// src/studyContent/GobiernoDatosParte1.jsx
import React from 'react';

const GobiernoDatosParte1 = ({ onBack, onStartSimulacro }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-xl">
      <button
        onClick={onBack}
        className="mb-6 py-2 px-4 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors duration-200 font-semibold"
      >
        ← Volver al Cronograma
      </button>

      <h2 className="text-3xl font-bold text-gray-800 mb-6">Material de Estudio: Gobierno de Datos (Parte 1)</h2>

      {/* Bloque 1: ¿Qué es el Gobierno de Datos? */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">1. ¿Qué es el Gobierno de Datos?</h3>
        <p className="mb-2 text-gray-700">El Gobierno de Datos es un marco de gestión que establece las políticas, estándares, procesos y responsabilidades para el uso y manejo de los datos de una organización. Es el sistema que garantiza la integridad, la disponibilidad, la usabilidad, la seguridad y la consistencia de los datos, a lo largo de todo su ciclo de vida, en una empresa u organismo.</p>
        <p className="mb-2 text-gray-700">El propósito principal del gobierno de datos es asegurar que los datos sean un activo estratégico de la entidad, que se utilicen de manera eficiente y que su gestión se alinee con los objetivos institucionales. Para la DIAN, esto significa que los datos tributarios, aduaneros y cambiarios son manejados de forma rigurosa y confiable para la toma de decisiones.</p>
      </section>

      {/* Bloque 2: Componentes Fundamentales */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">2. Componentes Clave del Gobierno de Datos</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
          <li><span className="font-semibold">Definición de Roles y Responsabilidades:</span> Establece roles claros como el Data Owner (dueño), Data Steward (administrador) y Data Custodian (custodio) para la gestión de los datos.</li>
          <li><span className="font-semibold">Políticas y Estándares de Datos:</span> Reglas para la calidad, seguridad, privacidad y nomenclatura de los datos.</li>
          <li><span className="font-semibold">Procesos y Procedimientos:</span> Flujos de trabajo para la gestión de los datos a lo largo de su ciclo de vida.</li>
          <li><span className="font-semibold">Tecnología y Herramientas:</span> Infraestructura y sistemas que soportan la gestión de datos, como el Repositorio Único de Datos (DataR) de la DIAN.</li>
        </ul>
      </section>

      {/* Bloque 3: Importancia del Gobierno de Datos en la DIAN */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">3. La Importancia del Gobierno de Datos en la DIAN</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
          <li><span className="font-semibold">Mantener la Integridad y Disponibilidad de los Datos:</span> Clave para la misión de tu cargo de Gestor II.</li>
          <li><span className="font-semibold">Alinear la Gestión con la Misión de la DIAN:</span> Asegura que los datos apoyen objetivos de recaudación y control.</li>
          <li><span className="font-semibold">Tomar Decisiones Basadas en Evidencia:</span> La calidad de los datos garantiza decisiones estratégicas confiables.</li>
          <li><span className="font-semibold">Cumplir con la Normativa Vigente:</span> Permite a la DIAN cumplir con leyes de protección y transparencia.</li>
          <li><span className="font-semibold">Mejorar la Eficiencia y la Colaboración:</span> Con roles definidos, los equipos trabajan de forma más fluida.</li>
        </ul>
      </section>

      {/* Bloque 4: Normativa y Principios (Consolidado) */}
      <section className="mb-8 bg-gray-50 p-4 rounded-md">
        <h3 className="text-xl font-semibold text-blue-600 mb-2">Normativa y Principios Clave</h3>
        <p className="mb-2 text-gray-700">El Gobierno de Datos en la DIAN se rige por principios y marcos normativos específicos:</p>
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
          <li><span className="font-semibold">Base Legal:</span> Política de Gobierno de Datos DIAN 2024, Decreto 1071 de 2015, Ley 2015 de 2020.</li>
          <li><span className="font-semibold">Principios Rectores:</span> Datos como Activo Estratégico, Calidad desde el Origen, Acceso Controlado y Transparencia.</li>
          <li><span className="font-semibold">Marcos Normativos Nacionales:</span> Ley 1581 (Protección de Datos), Decreto 1081 (Seguridad Digital), CONPES 3975 (Estrategia de Datos).</li>
        </ul>
        <p className="text-gray-700">📌 Enlace Oficial: <a href="https://www.datos.gov.co/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">MinTIC - Estrategia Nacional de Datos</a></p>
      </section>

      {/* Bloque 5: Ciclo de Vida y Roles del Gestor II */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">4. Ciclo de Vida de los Datos y tu Rol como Gestor II</h3>
        <p className="mb-2 text-gray-700">El Gobierno de Datos supervisa el ciclo de vida de la información:</p>
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b bg-gray-100 text-left text-sm font-semibold text-gray-600">Fase</th>
                <th className="py-2 px-4 border-b bg-gray-100 text-left text-sm font-semibold text-gray-600">Responsabilidad del Gestor II</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="py-2 px-4 border-b border-gray-200">Captura</td><td className="py-2 px-4 border-b border-gray-200">Validar que los datos cumplan estándares de calidad.</td></tr>
              <tr><td className="py-2 px-4 border-b border-gray-200">Almacenamiento</td><td className="py-2 px-4 border-b border-gray-200">Asegurar que se clasifiquen según sensibilidad.</td></tr>
              <tr><td className="py-2 px-4 border-b border-gray-200">Procesamiento</td><td className="py-2 px-4 border-b border-gray-200">Aplicar reglas de transformación (ETL) sin alterar integridad.</td></tr>
              <tr><td className="py-2 px-4 border-b border-gray-200">Distribución</td><td className="py-2 px-4 border-b border-gray-200">Verificar permisos antes de compartir datos.</td></tr>
              <tr><td className="py-2 px-4 border-b border-gray-200">Destrucción</td><td className="py-2 px-4 border-b border-gray-200">Ejecutar protocolos seguros.</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mb-2 text-gray-700"><span className="font-semibold">Conceptos Técnicos:</span> Metadatos (información sobre datos), Lineage (rastreo de transformaciones), Data Quality Dimensions (exactitud, completitud, etc.).</p>
      </section>

      {/* Bloque 6: Posibles Preguntas CNSC */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">5. Posibles Preguntas en el Examen</h3>
        <div className="mb-4 bg-white p-4 rounded-md shadow-sm border border-gray-100">
          <p className="font-semibold text-gray-800">🧪 CASO 1:</p>
          <p className="mb-2 text-gray-700">"Como Gestor II, identifica que datos del RUT están incompletos en el Repositorio Único. ¿Qué debe hacer primero?"</p>
          <p className="font-bold text-emerald-700">✅ Respuesta Correcta: Reportar al área generadora para que valide y complete la información.</p>
          <p className="text-sm text-gray-600">Justificación: El principio de calidad exige validar con la fuente primaria. El Gestor II no debe completar datos por su cuenta, sino asegurar que se siga el proceso correcto.</p>
        </div>
        <div className="mb-4 bg-white p-4 rounded-md shadow-sm border border-gray-100">
          <p className="font-semibold text-gray-800">🧪 CASO 2:</p>
          <p className="mb-2 text-gray-700">Una Dirección Seccional está generando reportes con datos no validados del sistema, lo que genera inconsistencias con los reportes del nivel central. ¿Cuál sería la recomendación más pertinente desde el rol del Gestor II?</p>
          <p className="font-bold text-emerald-700">✅ Respuesta Correcta: Coordinar con los data stewards para validar los datos con el repositorio único y garantizar la calidad.</p>
          <p className="text-sm text-gray-600">Justificación: El gobierno de datos se enfoca en asegurar calidad, disponibilidad y validación desde fuentes certificadas, con acompañamiento técnico.</p>
        </div>
      </section>

      {/* Botón "Ahora repasa lo que aprendiste y haz el simulacro" */}
      <section className="mt-8 pt-6 border-t border-gray-200 text-center">
        <h3 className="text-2xl font-semibold text-emerald-700 mb-4">¡Ahora, repasa lo que aprendiste!</h3>
        <p className="text-lg text-gray-700 mb-6">Pon a prueba tus conocimientos con un simulacro de este tema.</p>
        <button
          onClick={onStartSimulacro}
          className="py-3 px-8 bg-emerald-600 text-white rounded-md font-bold text-lg hover:bg-emerald-700 transition-colors duration-200 shadow-md"
        >
          Hacer Simulacro de "Gobierno de Datos" (20 preguntas)
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

export default GobiernoDatosParte1;
