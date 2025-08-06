// src/studyContent/DisenoSoluciones.jsx
import React from 'react';

const DisenoSoluciones = ({ onBack, onStartSimulacro }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-xl">
      <button
        onClick={onBack}
        className="mb-6 py-2 px-4 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors duration-200 font-semibold"
      >
        ← Volver al Cronograma
      </button>

      <h2 className="text-3xl font-bold text-gray-800 mb-6">Material de Estudio: Diseño de Soluciones de Gestión de Datos</h2>

      {/* Bloque 1: Introducción y Conceptos Clave */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">1. Introducción y Conceptos Clave</h3>
        <p className="mb-2 text-gray-700">El diseño de soluciones de gestión de datos es la disciplina que se encarga de crear arquitecturas y sistemas para recolectar, almacenar, procesar y utilizar la información de manera eficiente y segura. Para la DIAN, un diseño robusto es la columna vertebral de su operación.</p>
        <h4 className="text-xl font-medium text-gray-700 mb-2 mt-4">Plataformas de Gestión de Datos</h4>
        <p className="mb-2 text-gray-700">Son las infraestructuras tecnológicas que soportan los procesos de datos, incluyendo:</p>
        <ul className="list-disc list-inside text-gray-700 mb-2 ml-4">
          <li><span className="font-semibold">Sistemas de Gestión de Bases de Datos (DBMS):</span> Software para definir, crear, mantener y controlar el acceso a la base de datos. Ejemplos en la DIAN: Oracle, SQL Server.</li>
          <li><span className="font-semibold">Tipos de Bases de Datos:</span> Relacionales (SQL) para datos estructurados y No Relacionales (NoSQL) para datos flexibles.</li>
          <li><span className="font-semibold">Almacenes de Datos (Data Warehouse):</span> Repositorios centrales para análisis, como el <span className="font-semibold">Repositorio Único de Datos-DataR</span> de la DIAN.</li>
          <li><span className="font-semibold">Lagos de Datos (Data Lake):</span> Almacenan datos en su formato nativo para análisis a gran escala.</li>
        </ul>
        <h4 className="text-xl font-medium text-gray-700 mb-2 mt-4">Integración de Datos (ETL/ELT)</h4>
        <p className="mb-2 text-gray-700">Proceso de combinar datos de diferentes fuentes en un único destino:</p>
        <ul className="list-disc list-inside text-gray-700 mb-2 ml-4">
          <li><span className="font-semibold">ETL (Extract, Transform, Load):</span> Extrae, transforma y luego carga.</li>
          <li><span className="font-semibold">ELT (Extract, Load, Transform):</span> Extrae, carga y luego transforma.</li>
        </ul>
        <h4 className="text-xl font-medium text-gray-700 mb-2 mt-4">Modelado de Datos</h4>
        <p className="mb-2 text-gray-700">Técnica para representar la estructura de la información, definiendo entidades, atributos y relaciones (conceptual, lógico, físico).</p>
        <h4 className="text-xl font-medium text-gray-700 mb-2 mt-4">Gobernanza y Trazabilidad</h4>
        <ul className="list-disc list-inside text-gray-700 mb-2 ml-4">
          <li><span className="font-semibold">Gobernanza de Datos:</span> Marco de gestión que asegura la confiabilidad, seguridad y utilidad de los datos.</li>
          <li><span className="font-semibold">Linaje de Datos:</span> Rastro de la vida de un dato, desde su origen hasta su uso final.</li>
        </ul>
        <h4 className="text-xl font-medium text-gray-700 mb-2 mt-4">Seguridad de Datos</h4>
        <p className="mb-2 text-gray-700">Medidas de protección para garantizar la confidencialidad, integridad y disponibilidad de la información.</p>
      </section>

      {/* Bloque 2: Componentes Esenciales del Diseño de Soluciones */}
      <section className="mb-8 bg-gray-50 p-4 rounded-md">
        <h3 className="text-2xl font-semibold text-blue-600 mb-2">2. Componentes Esenciales del Diseño y su Aplicación en la DIAN</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
          <li><span className="font-semibold">Arquitectura de Datos:</span> El plano de la solución. La <span className="font-semibold">Arquitectura Digital de la DIAN</span> es el marco de referencia.</li>
          <li><span className="font-semibold">Escalabilidad:</span> Capacidad de la solución para manejar un crecimiento exponencial en el volumen de datos.</li>
          <li><span className="font-semibold">Interoperabilidad:</span> Capacidad de los sistemas para intercambiar datos de manera coherente.</li>
          <li><span className="font-semibold">Cumplimiento Normativo:</span> Adherirse a normativas como el <span className="font-semibold">Decreto 2242 de 2015</span> (Facturación Electrónica), <span className="font-semibold">Ley 1581 de 2012</span> (Protección de Datos Personales), y <span className="font-semibold">Resolución 019 de 2016</span>.</li>
          <li><span className="font-semibold">Mejores Prácticas y Metodologías:</span> Utilizar el marco <span className="font-semibold">DAMA-DMBOK</span> y el enfoque <span className="font-semibold">Data-Driven</span>.</li>
        </ul>
      </section>

      {/* Bloque 3: Ejemplos Prácticos y Funciones del Gestor II */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">3. Contexto Aplicado a la DIAN</h3>
        <h4 className="text-xl font-medium text-gray-700 mb-2">Funciones Clave del Gestor II:</h4>
        <p className="mb-2 text-gray-700">Tu rol de Gestor II se ubica en el área de <span className="font-semibold">información, innovación y tecnología</span> y es clave en la gestión de estas soluciones. Esto incluye:</p>
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
          <li>Diseño de sistemas para auditorías fiscales y gestión de datos tributarios.</li>
          <li>Integración de datos de contribuyentes para una visión 360°.</li>
          <li>Implementación de soluciones de Facturación Electrónica según el estándar <span className="font-semibold">UBL 2.1</span>.</li>
          <li>Uso de herramientas ETL para automatizar reportes y evitar inconsistencias.</li>
        </ul>
        <h4 className="text-xl font-medium text-gray-700 mb-2">Normativa y Estándares Relevantes:</h4>
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
          <li><span className="font-semibold">Decreto 2242 de 2015:</span> Regula la facturación electrónica.</li>
          <li><span className="font-semibold">Ley 1581 de 2012:</span> Protección de datos personales.</li>
          <li><span className="font-semibold">ISO 27001:</span> Estándar de seguridad de la información.</li>
          <li><span className="font-semibold">GDPR:</span> Normativa europea con influencia en el tratamiento de datos.</li>
          <li><span className="font-semibold">BCBS 239:</span> Gestión de riesgos en datos financieros.</li>
        </ul>
      </section>

      {/* Bloque 4: Preguntas y Glosario */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">4. Preguntas de Práctica y Glosario</h3>
        <h4 className="text-xl font-medium text-gray-700 mb-2">Preguntas de Práctica:</h4>
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
          <li>¿Qué normativa colombiana regula la facturación electrónica?</li>
          <li>¿Cuál es la principal diferencia entre un Data Warehouse y un Data Lake?</li>
          <li>¿Qué estándar internacional se enfoca en la seguridad de la información?</li>
          <li>Explique la importancia del linaje de datos en la DIAN.</li>
        </ul>
        <h4 className="text-xl font-medium text-gray-700 mb-2 mt-6">Glosario:</h4>
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
          <li><span className="font-semibold">Arquitectura de Datos:</span> Estructura que define cómo se organizan, almacenan y fluyen los datos en la entidad.</li>
          <li><span className="font-semibold">Data Warehouse:</span> Repositorio centralizado para el análisis de datos.</li>
          <li><span className="font-semibold">ETL:</span> Proceso de Extracción, Transformación y Carga de datos.</li>
          <li><span className="font-semibold">DAMA-DMBOK:</span> Conjunto de mejores prácticas para la gestión de datos.</li>
          <li><span className="font-semibold">Linaje de Datos:</span> Rastro de la vida de un dato.</li>
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
          Hacer Simulacro de "Diseño de Soluciones" (20 preguntas)
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

export default DisenoSoluciones;