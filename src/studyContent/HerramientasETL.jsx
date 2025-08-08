// src/studyContent/HerramientasETL.jsx
import React from 'react';

const HerramientasETL = ({ onBack, onStartSimulacro }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-xl">
      <button
        onClick={onBack}
        className="mb-6 py-2 px-4 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors duration-200 font-semibold"
      >
        ← Volver al Cronograma
      </button>

      <h2 className="text-3xl font-bold text-gray-800 mb-6">Material de Estudio: Herramientas ETL (Extract, Transform, Load)</h2>

      {/* Bloque 1: Introducción y Conceptos Clave de ETL */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">1. Conceptos Clave de ETL</h3>
        <p className="mb-2 text-gray-700">Las herramientas <span className="font-semibold">ETL (Extract, Transform, Load)</span> son componentes clave en el diseño de soluciones de gestión de datos, cruciales para integrar y procesar grandes volúmenes de información en la DIAN.</p>

        <h4 className="text-xl font-medium text-gray-700 mb-2 mt-4">Etapas de ETL</h4>
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b bg-gray-100 text-left text-sm font-semibold text-gray-600">Etapa</th>
                <th className="py-2 px-4 border-b bg-gray-100 text-left text-sm font-semibold text-gray-600">Descripción</th>
                <th className="py-2 px-4 border-b bg-gray-100 text-left text-sm font-semibold text-gray-600">Ejemplo en la DIAN</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="py-2 px-4 border-b border-gray-200">Extracción</td><td className="py-2 px-4 border-b border-gray-200">Obtención de datos de fuentes heterogéneas (BBDD, APIs, archivos).</td><td className="py-2 px-4 border-b border-gray-200">Extraer datos del RUT y facturas electrónicas (UBL 2.1).</td></tr>
              <tr><td className="py-2 px-4 border-b border-gray-200">Transformación</td><td className="py-2 px-4 border-b border-gray-200">Aplicación de reglas de limpieza, validación y enriquecimiento.</td><td className="py-2 px-4 border-b border-gray-200">Validar NITs, cruzar datos con SIISCOMEX.</td></tr>
              <tr><td className="py-2 px-4 border-b border-gray-200">Carga</td><td className="py-2 px-4 border-b border-gray-200">Almacenamiento en destinos como data warehouses.</td><td className="py-2 px-4 border-b border-gray-200">Cargar datos depurados en un almacén para auditorías fiscales.</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mb-2 text-gray-700">El proceso <span className="font-semibold">ETL</span> se diferencia de <span className="font-semibold">ELT</span>, donde los datos se cargan primero en un Data Lake en su formato nativo, y luego se transforman.</p>
      </section>

      {/* Bloque 2: Componentes Clave de las Herramientas ETL */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">2. Componentes Clave de las Herramientas ETL</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
          <li><span className="font-semibold">Conectores de datos:</span> Permiten la conexión con diversas fuentes y destinos.</li>
          <li><span className="font-semibold">Reglas de transformación:</span> Validaciones, filtros y reglas para limpiar y estandarizar los datos.</li>
          <li><span className="font-semibold">Flujos de trabajo:</span> Orquestan y programan los procesos ETL para que se ejecuten de forma automatizada.</li>
          <li><span className="font-semibold">Monitoreo:</span> Seguimiento constante de las tareas para detectar errores y cuellos de botella.</li>
        </ul>
      </section>

      {/* Bloque 3: Principales Herramientas ETL y Aplicación en la DIAN */}
      <section className="mb-8 bg-gray-50 p-4 rounded-md">
        <h3 className="text-xl font-semibold text-blue-600 mb-2">3. Herramientas y Aplicaciones en la DIAN</h3>
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b bg-gray-100 text-left text-sm font-semibold text-gray-600">Herramienta</th>
                <th className="py-2 px-4 border-b bg-gray-100 text-left text-sm font-semibold text-gray-600">Uso en la DIAN</th>
                <th className="py-2 px-4 border-b bg-gray-100 text-left text-sm font-semibold text-gray-600">Normativas Relacionadas</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="py-2 px-4 border-b border-gray-200">Informatica PowerCenter</td><td className="py-2 px-4 border-b border-gray-200">Procesamiento masivo de declaraciones.</td><td className="py-2 px-4 border-b border-gray-200">ISO 27001, Manual de Seguridad DIAN.</td></tr>
              <tr><td className="py-2 px-4 border-b border-gray-200">Talend Open Studio</td><td className="py-2 px-4 border-b border-gray-200">Transformación de facturas electrónicas (UBL 2.1).</td><td className="py-2 px-4 border-b border-gray-200">Decreto 2242 de 2015.</td></tr>
              <tr><td className="py-2 px-4 border-b border-gray-200">Microsoft SSIS</td><td className="py-2 px-4 border-b border-gray-200">Migración de datos legacy.</td><td className="py-2 px-4 border-b border-gray-200">Resolución 019 de 2016.</td></tr>
              <tr><td className="py-2 px-4 border-b border-gray-200">Apache Nifi</td><td className="py-2 px-4 border-b border-gray-200">Monitoreo de transacciones aduaneras en tiempo real.</td><td className="py-2 px-4 border-b border-gray-200">BCBS 239.</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mb-2 text-gray-700">Estas herramientas son cruciales para la integración de datos tributarios, la gestión de la facturación electrónica y el procesamiento de procesos aduaneros.</p>
      </section>

      {/* Bloque 4: Mejores Prácticas y Enfoque Normativo */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">4. Mejores Prácticas y Enfoque Normativo</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
          <li><span className="font-semibold">Optimización:</span> Usar cargas incrementales y particionamiento de datos para un mejor rendimiento.</li>
          <li><span className="font-semibold">Manejo de Errores:</span> Implementar alertas y reintentos automáticos para garantizar la fiabilidad del proceso.</li>
          <li><span className="font-semibold">Calidad de Datos:</span> Aplicar reglas de validación y auditar la calidad de los datos después de cada carga.</li>
          <li><span className="font-semibold">Enfoque Normativo:</span> El uso de herramientas ETL debe cumplir con normativas como el Decreto 2242 de 2015 (facturación electrónica) y la Ley 1581 de 2012 (protección de datos personales), asegurando la <span className="font-semibold">seguridad</span> y <span className="font-semibold">privacidad</span> de los datos.</li>
        </ul>
      </section>

      {/* Bloque 5: Preguntas de Práctica y Glosario */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">5. Preguntas de Práctica y Glosario</h3>
        <h4 className="text-xl font-medium text-gray-700 mb-2">Preguntas de Práctica:</h4>
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
          <li>¿Qué proceso se realiza durante la transformación de datos en una herramienta ETL?</li>
          <li>¿Qué característica debe tener una herramienta ETL para asegurar escalabilidad en la DIAN?</li>
          <li>¿Qué herramienta ETL es más adecuada para la integración de datos de contribuyentes provenientes de diferentes fuentes?</li>
          <li>¿Cuál es el propósito de monitorizar los procesos ETL en la DIAN?</li>
        </ul>
        <h4 className="text-xl font-medium text-gray-700 mb-2 mt-6">Glosario:</h4>
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
          <li><span className="font-semibold">ETL:</span> Proceso de Extracción, Transformación y Carga de datos.</li>
          <li><span className="font-semibold">UBL 2.1:</span> Estándar para facturación electrónica en Colombia.</li>
          <li><span className="font-semibold">Data Warehouse:</span> Repositorio centralizado donde se almacenan datos estructurados para su análisis.</li>
          <li><span className="font-semibold">Conector de Datos:</span> Componente que permite la conexión entre las fuentes de datos y las plataformas de gestión.</li>
          <li><span className="font-semibold">Data Steward:</span> Persona encargada de la gestión operativa de los datos, asegurando su calidad y acceso adecuado.</li>
        </ul>
      </section>

      {/* Botón para iniciar el simulacro */}
      <section className="mt-8 pt-6 border-t border-gray-200 text-center">
        <h3 className="text-2xl font-semibold text-emerald-700 mb-4">¡Ahora, repasa lo que aprendiste!</h3>
        <p className="text-lg text-gray-700 mb-6">Pon a prueba tus conocimientos con un simulacro de este tema.</p>
        <button
          onClick={onStartSimulacro}
          className="py-3 px-8 bg-emerald-600 text-white rounded-md font-bold text-lg hover:bg-emerald-700 transition-colors duration-200 shadow-md"
        >
          Hacer Simulacro de "Herramientas ETL" (20 preguntas)
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

export default HerramientasETL;