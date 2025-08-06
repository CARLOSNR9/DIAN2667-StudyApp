// src/studyContent/CicloVidaDatos.jsx
import React from 'react';

const CicloVidaDatos = ({ onBack, onStartSimulacro }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-xl">
      <button
        onClick={onBack}
        className="mb-6 py-2 px-4 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors duration-200 font-semibold"
      >
        ← Volver al Cronograma
      </button>

      <h2 className="text-3xl font-bold text-gray-800 mb-6">Material de Estudio: Ciclo de Vida de Gestión de Datos</h2>

      {/* Bloque 1: Introducción y Etapas del Ciclo de Vida */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">El Dato como Activo Estratégico y las Etapas del Ciclo de Vida</h3>
        <p className="mb-4 text-gray-700">El Ciclo de Vida de Gestión de Datos (DGLC) describe las fases por las que pasa un dato, desde su creación hasta su disposición final. Comprender este ciclo es fundamental para un Gestor II, cuyo rol principal es asegurar la integridad y disponibilidad de la información.</p>

        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
          <li><span className="font-semibold">1. Planificación y Diseño:</span> Define los requisitos, fuentes y estándares de calidad antes de crear los datos. En la DIAN, esto incluye la planificación del Repositorio Único (DATAR).</li>
          <li><span className="font-semibold">2. Creación y Captura:</span> Recopila datos de fuentes diversas. Actividades clave son la recolección a través de formularios y la validación para asegurar datos válidos y completos.</li>
          <li><span className="font-semibold">3. Almacenamiento y Mantenimiento:</span> Guarda los datos de forma segura. Se clasifican por sensibilidad (Públicos, Restringidos, Confidenciales), se usan zonas de almacenamiento y se implementa cifrado y control de accesos.</li>
          <li><span className="font-semibold">4. Procesamiento y Transformación:</span> Limpia e integra los datos para el análisis. Se utilizan herramientas ETL y se registra el "lineage" para la trazabilidad de las transformaciones.</li>
          <li><span className="font-semibold">5. Análisis y Uso:</span> Utiliza los datos para generar conocimiento y tomar decisiones. Incluye análisis descriptivo y predictivo.</li>
          <li><span className="font-semibold">6. Distribución:</span> Comparte los datos con entidades autorizadas. Se validan permisos y se usan APIs seguras.</li>
          <li><span className="font-semibold">7. Mantenimiento de Datos:</span> Garantiza la actualidad y calidad continua de los datos a través de limpiezas periódicas y auditorías.</li>
          <li><span className="font-semibold">8. Disposición Final:</span> Elimina o archiva los datos de forma segura cuando ya no son necesarios, cumpliendo con las políticas de retención.</li>
        </ul>
      </section>

      {/* Bloque 2: Contexto Específico en la DIAN y tu Rol */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">Tu Rol como Gestor II en el Ciclo de Vida</h3>
        <p className="mb-2 text-gray-700">Tu cargo se ubica principalmente en las fases de <span className="font-semibold">Planificación, Procesamiento y Análisis</span>. Eres el guardián de la integridad y disponibilidad de la información.</p>
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
          <li><span className="font-semibold">Generar reportes:</span> Participas en la etapa de Análisis, consultando el Repositorio Único de Datos (DataR).</li>
          <li><span className="font-semibold">Aplicar el control y seguimiento:</span> En la etapa de Almacenamiento, supervisas que se cumplan las políticas de seguridad y los estándares de gobernanza.</li>
          <li><span className="font-semibold">Participar en el modelado:</span> Colaboras en la etapa de Planificación, diseñando la arquitectura de datos que servirá de base.</li>
        </ul>
      </section>

      {/* Bloque 3: Normativa y Conceptos Clave */}
      <section className="mb-8 bg-gray-50 p-4 rounded-md">
        <h3 className="text-xl font-semibold text-blue-600 mb-2">Normativa y Conceptos Clave</h3>
        <p className="mb-2 text-gray-700">El ciclo de vida se rige por normativas y conceptos técnicos esenciales:</p>
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
          <li><span className="font-semibold">Base Legal:</span> Resolución DIAN 067/2024, Política de Gobierno de Datos DIAN, Decreto 1071/2015, ISO 8000.</li>
          <li><span className="font-semibold">Conceptos Clave:</span>
            <ul className="list-circle list-inside text-gray-700 ml-8">
              <li><span className="font-semibold">DataR:</span> Repositorio Único de Datos de la DIAN.</li>
              <li><span className="font-semibold">Integridad y Disponibilidad:</span> Principios que aseguran la precisión y accesibilidad de los datos.</li>
              <li><span className="font-semibold">ETL:</span> Proceso de Extracción, Transformación y Carga de datos.</li>
              <li><span className="font-semibold">Lineage:</span> Rastro de transformaciones que sufren los datos (crucial para auditorías).</li>
              <li><span className="font-semibold">Data Owner:</span> Responsable legal y estratégico de un dato.</li>
              <li><span className="font-semibold">Data Steward:</span> Encargado de la calidad y gestión operativa del dato.</li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Bloque 4: Preguntas de Práctica */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">6. Preguntas de Práctica (Estilo CNSC)</h3>
        <div className="mb-4 bg-white p-4 rounded-md shadow-sm border border-gray-100">
          <p className="font-semibold text-gray-800">🧪 CASO 1:</p>
          <p className="mb-2 text-gray-700">Un formulario electrónico de la DIAN omite validar el dígito de verificación del NIT. ¿Qué etapa del ciclo de vida de gestión de datos falla?</p>
          <p className="font-bold text-emerald-700">✅ Respuesta: Captura.</p>
        </div>
        <div className="mb-4 bg-white p-4 rounded-md shadow-sm border border-gray-100">
          <p className="font-semibold text-gray-800">🧪 CASO 2:</p>
          <p className="mb-2 text-gray-700">¿Qué principio de las políticas de gobierno de datos se ve comprometido si los datos en el DATAR no son consistentes con los datos en los sistemas de aduanas?</p>
          <p className="font-bold text-emerald-700">✅ Respuesta: El principio de Consistencia.</p>
        </div>
      </section>

      {/* Botón para iniciar el simulacro */}
      <section className="mt-8 pt-6 border-t border-gray-200 text-center">
        <h3 className="text-2xl font-semibold text-emerald-700 mb-4">¡Ahora, repasa lo que aprendiste!</h3>
        <p className="text-lg text-gray-700 mb-6">Pon a prueba tus conocimientos con un simulacro de este tema.</p>
        <button
          onClick={onStartSimulacro}
          className="py-3 px-8 bg-emerald-600 text-white rounded-md font-bold text-lg hover:bg-emerald-700 transition-colors duration-200 shadow-md"
        >
          Hacer Simulacro de "Ciclo de Vida de Gestión de Datos" (20 preguntas)
        </button>
      </section>

      <button
        onClick={onBack}
        className="mt-6 py-2 px-4 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors duration-200 font-semibold"
      >
        ← Volver al Cronograma
      </button>
    </div>
  );
};

export default CicloVidaDatos;