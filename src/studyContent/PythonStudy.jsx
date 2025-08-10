// src/studyContent/PythonStudy.jsx
import React from 'react';

const PythonStudy = ({ onBack, onStartSimulacro }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-xl">
      <button
        onClick={onBack}
        className="mb-6 py-2 px-4 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors duration-200 font-semibold"
      >
        ← Volver al Cronograma
      </button>

      <h2 className="text-3xl font-bold text-gray-800 mb-6">Material de Estudio: Python (Fundamentos para Datos)</h2>

      {/* Sección 1: Introducción y Fundamentos */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">1. Introducción y Fundamentos</h3>
        <p className="mb-2 text-gray-700">Python es un lenguaje de programación de alto nivel, ideal para el análisis y la gestión de datos debido a su sintaxis simple y clara. Es una herramienta clave para automatizar tareas, procesar información y generar reportes para un Gestor II en la DIAN.</p>

        <h4 className="text-xl font-medium text-gray-700 mb-2 mt-4">1.1. Fundamentos del Lenguaje</h4>
        <p className="mb-2 text-gray-700">Se recomienda usar Python 3.12+ por sus mejoras de rendimiento. Tópicos esenciales incluyen:</p>
        <ul className="list-disc list-inside text-gray-700 ml-4">
          <li>Variables y Tipos de Datos: <span className="font-mono bg-gray-100 p-1 rounded">str</span> (texto), <span className="font-mono bg-gray-100 p-1 rounded">int</span> (enteros), <span className="font-mono bg-gray-100 p-1 rounded">float</span> (decimales), <span className="font-mono bg-gray-100 p-1 rounded">bool</span> (verdadero/falso).</li>
          <li>Estructuras de Control: <span className="font-mono bg-gray-100 p-1 rounded">if</span>, <span className="font-mono bg-gray-100 p-1 rounded">for</span>, <span className="font-mono bg-gray-100 p-1 rounded">while</span>.</li>
          <li>Funciones y Módulos: Permiten reutilizar código y organizar la lógica.</li>
        </ul>

        <h4 className="text-xl font-medium text-gray-700 mb-2 mt-4">1.2. Estructuras de Datos para Datos</h4>
        <p className="mb-2 text-gray-700">Las estructuras de datos nativas de Python son esenciales para manipular información:</p>
        <ul className="list-disc list-inside text-gray-700 ml-4">
          <li><span className="font-semibold">Listas</span> (<span className="font-mono bg-gray-100 p-1 rounded">[ ]</span>): Colecciones ordenadas y mutables. Ej: una lista de NITs.</li>
          <li><span className="font-semibold">Tuplas</span> (<span className="font-mono bg-gray-100 p-1 rounded">( )</span>): Colecciones ordenadas e inmutables.</li>
          <li><span className="font-semibold">Diccionarios</span> (<span className="font-mono bg-gray-100 p-1 rounded">{'{ }'}</span>): Pares clave-valor, ideales para datos estructurados como registros de facturas.</li>
        </ul>
      </section>

      {/* Sección 2: Python para Procesamiento de Datos */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">2. Python para Procesamiento de Datos</h3>
        <p className="mb-2 text-gray-700">Python se potencia con bibliotecas especializadas para tareas de gestión de datos.</p>

        <h4 className="text-xl font-medium text-gray-700 mb-2 mt-4">2.1. Bibliotecas Clave</h4>
        <ul className="list-disc list-inside text-gray-700 ml-4">
          <li><span className="font-semibold">Pandas:</span> La biblioteca más importante para el análisis de datos estructurados. Introduce los <span className="font-semibold">DataFrames</span>, similares a una hoja de cálculo, perfectos para manejar datos tributarios.</li>
          <li><span className="font-semibold">NumPy:</span> La base para operaciones numéricas y matemáticas de alto rendimiento.</li>
          <li><span className="font-semibold">Matplotlib / Seaborn:</span> Para la visualización de datos y creación de gráficos.</li>
          <li><span className="font-semibold">xml.etree:</span> Esencial para procesar y validar archivos de facturación electrónica con formato UBL 2.1.</li>
        </ul>

        <h4 className="text-xl font-medium text-gray-700 mb-2 mt-4">2.2. Operaciones Comunes y ETL en Python</h4>
        <p className="mb-2 text-gray-700">El proceso ETL (Extract, Transform, Load) puede ser implementado con Python y sus bibliotecas:</p>
        <ul className="list-disc list-inside text-gray-700 ml-4">
          <li><span className="font-semibold">Extracción:</span> Leer datos de archivos (<span className="font-mono bg-gray-100 p-1 rounded">pd.read_csv</span>), bases de datos o APIs.</li>
          <li><span className="font-semibold">Transformación:</span> Limpiar datos (<span className="font-mono bg-gray-100 p-1 rounded">.dropna()</span>, <span className="font-mono bg-gray-100 p-1 rounded">.fillna()</span>), aplicar validaciones, normalizar formatos o anonimizar información (<span className="font-mono bg-gray-100 p-1 rounded">hashlib</span>).</li>
          <li><span className="font-semibold">Carga:</span> Escribir los datos procesados en el Repositorio Único de Datos (DataR) o en un almacén de datos.</li>
        </ul>
      </section>

      {/* Sección 3: Aplicaciones en la DIAN y Normativa */}
      <section className="mb-8 bg-gray-50 p-4 rounded-md">
        <h3 className="text-xl font-semibold text-blue-600 mb-2">3. Aplicaciones en la DIAN y Normativa</h3>
        <h4 className="text-lg font-medium text-gray-700 mb-2">Casos Prácticos:</h4>
        <ul className="list-disc list-inside text-gray-700 ml-4">
          <li><span className="font-semibold">Automatización de Reportes:</span> Generación de reportes automáticos para el DataR, combinando datos y aplicando lógica de negocio.</li>
          <li><span className="font-semibold">Análisis de Facturación Electrónica:</span> Validación y procesamiento de archivos UBL 2.1 (Decreto 2242 de 2015).</li>
          <li><span className="font-semibold">Auditoría:</span> Comparación de patrones de evasión fiscal y detección de inconsistencias.</li>
        </ul>
        <h4 className="text-lg font-medium text-gray-700 mb-2 mt-4">Contexto Normativo:</h4>
        <p className="mb-2 text-gray-700">La gestión de datos con Python debe alinearse con:</p>
        <ul className="list-disc list-inside text-gray-700 ml-4">
          <li><span className="font-semibold">Ley 1581 de 2012:</span> Protección de Datos Personales, aplicando técnicas como la pseudonimización.</li>
          <li><span className="font-semibold">Decreto 927 de 2023:</span> Establece el sistema de carrera de la DIAN y la importancia de la gestión de datos.</li>
          <li><span className="font-semibold">Resolución 019 de 2016:</span> Requisitos técnicos para la facturación electrónica.</li>
        </ul>
      </section>

      {/* Sección 4: Ejercicios y Preguntas de Práctica */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">4. Ejercicios y Preguntas de Práctica</h3>
        <h4 className="text-xl font-medium text-gray-700 mb-2">Ejercicios Prácticos:</h4>
        <p className="mb-2 text-gray-700">Ejemplos para practicar tareas comunes con pandas:</p>
        <ul className="list-disc list-inside text-gray-700 ml-4">
          <li>Crear un script que lea un CSV de contribuyentes, limpie los valores nulos en el NIT y genere un conteo por región.</li>
          <li>Transformar y consolidar datos de pagos mensuales, generando un resumen por contribuyente.</li>
        </ul>
        <h4 className="text-xl font-medium text-gray-700 mb-2 mt-4">Preguntas Tipo CNSC (Juicio Situacional):</h4>
        <div className="mb-4 bg-white p-4 rounded-md shadow-sm border border-gray-100">
          <p className="font-semibold text-gray-800">Caso 1:</p>
          <p className="mb-2 text-gray-700">Un Gestor II necesita cruzar datos de declaraciones de renta con el RUT para verificar la actividad económica. ¿Qué función de pandas usaría para combinar estos dos DataFrames?</p>
          <p className="font-bold text-emerald-700">✅ Respuesta: <span className="font-mono bg-gray-100 p-1 rounded">merge()</span>.</p>
        </div>
        <div className="mb-4 bg-white p-4 rounded-md shadow-sm border border-gray-100">
          <p className="font-semibold text-gray-800">Caso 2:</p>
          <p className="mb-2 text-gray-700">En un reporte fiscal, un analista de la DIAN necesita un script de Python para aplicar la Ley 1581 de 2012 y anonimizar el campo de 'Nombre' de los contribuyentes. ¿Qué técnica debería usar?</p>
          <p className="font-bold text-emerald-700">✅ Respuesta: El uso de una función de hash como <span className="font-mono bg-gray-100 p-1 rounded">hashlib.sha256()</span> para pseudonimizar el campo.</p>
        </div>
      </section>

      {/* Sección 5: Recursos Adicionales */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">5. Recursos Adicionales</h3>
        <ul className="list-disc list-inside text-gray-700 ml-4">
          <li><span className="font-semibold">Cursos:</span> DataCamp, Coursera ("Python for Everybody"), Platzi.</li>
          <li><span className="font-semibold">Libros:</span> "Python Crash Course" (Eric Matthes), "SQL in 10 Minutes" (Ben Forta).</li>
          <li><span className="font-semibold">Documentación:</span> Sitio web oficial de Python (python.org) y la documentación de pandas.</li>
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
          Hacer Simulacro de Python (20 preguntas)
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

export default PythonStudy;