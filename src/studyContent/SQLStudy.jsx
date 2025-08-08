// src/studyContent/SQLStudy.jsx
import React from 'react';

const SQLStudy = ({ onBack, onStartSimulacro }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-xl">
      <button
        onClick={onBack}
        className="mb-6 py-2 px-4 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors duration-200 font-semibold"
      >
        ← Volver al Cronograma
      </button>

      <h2 className="text-3xl font-bold text-gray-800 mb-6">Material de Estudio: SQL (Structured Query Language) para Gestor II – DIAN 2667</h2>

      {/* Sección 1: Introducción */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">1. Introducción: El Rol Estratégico de SQL en la DIAN</h3>
        <p className="mb-2 text-gray-700">SQL es el lenguaje estándar para interactuar con bases de datos relacionales, una habilidad crucial para el cargo de Gestor II en la DIAN. En este rol, SQL es una herramienta estratégica para la gestión de datos tributarios, aduaneros y cambiarios en el marco del Gobierno de Datos y la Arquitectura Digital de la entidad.</p>
        <p className="text-gray-700">El conocimiento de SQL te permitirá:</p>
        <ul className="list-disc list-inside text-gray-700 ml-4 mt-2">
          <li>Generar reportes y consolidar información para la toma de decisiones.</li>
          <li>Asegurar la integridad, calidad y disponibilidad de los datos en el Repositorio Único de Datos (DataR).</li>
          <li>Participar en procesos de integración de datos (ETL) y optimización de consultas.</li>
          <li>Garantizar el cumplimiento de normativas de seguridad y privacidad.</li>
        </ul>
      </section>

      {/* Sección 2: Fundamentos de SQL */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">2. Fundamentos de SQL: Comandos Clave y Conceptos</h3>
        <h4 className="text-xl font-medium text-gray-700 mb-2">2.1. Tipos de Comandos SQL</h4>
        <ul className="list-disc list-inside text-gray-700 ml-4">
          <li><span className="font-semibold">DDL (Data Definition Language):</span> <span className="font-mono bg-gray-100 p-1 rounded">CREATE</span>, <span className="font-mono bg-gray-100 p-1 rounded">ALTER</span>, <span className="font-mono bg-gray-100 p-1 rounded">DROP</span>.</li>
          <li><span className="font-semibold">DML (Data Manipulation Language):</span> <span className="font-mono bg-gray-100 p-1 rounded">SELECT</span>, <span className="font-mono bg-gray-100 p-1 rounded">INSERT</span>, <span className="font-mono bg-gray-100 p-1 rounded">UPDATE</span>, <span className="font-mono bg-gray-100 p-1 rounded">DELETE</span>.</li>
          <li><span className="font-semibold">DCL (Data Control Language):</span> <span className="font-mono bg-gray-100 p-1 rounded">GRANT</span>, <span className="font-mono bg-gray-100 p-1 rounded">REVOKE</span>.</li>
          <li><span className="font-semibold">TCL (Transaction Control Language):</span> <span className="font-mono bg-gray-100 p-1 rounded">COMMIT</span>, <span className="font-mono bg-gray-100 p-1 rounded">ROLLBACK</span>.</li>
          <li><span className="font-semibold">DQL (Data Query Language):</span> <span className="font-mono bg-gray-100 p-1 rounded">SELECT</span>.</li>
        </ul>
        <h4 className="text-xl font-medium text-gray-700 mb-2 mt-4">2.2. Restricciones, Índices y Optimización</h4>
        <p className="mb-2 text-gray-700">Las restricciones como <span className="font-semibold">PRIMARY KEY</span> y <span className="font-semibold">FOREIGN KEY</span> aseguran la integridad de los datos. Los índices optimizan las consultas, haciendo que las operaciones de búsqueda sean más rápidas.</p>
      </section>

      {/* Sección 3: SQL en el Contexto de la DIAN */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">3. SQL en el Contexto de la DIAN: Aplicaciones y Normativa</h3>
        <h4 className="text-xl font-medium text-gray-700 mb-2">3.1. Aplicaciones Prácticas</h4>
        <ul className="list-disc list-inside text-gray-700 ml-4">
          <li><span className="font-semibold">Generación de Reportes en DataR:</span> Se utiliza <span className="font-mono bg-gray-100 p-1 rounded">SELECT</span> con cláusulas como <span className="font-mono bg-gray-100 p-1 rounded">WHERE</span>, <span className="font-mono bg-gray-100 p-1 rounded">JOIN</span> y <span className="font-mono bg-gray-100 p-1 rounded">GROUP BY</span>.</li>
          <li><span className="font-semibold">Integración y Transformación de Datos (ETL):</span> Se usan sentencias SQL para limpiar y estandarizar datos antes de cargarlos en el DataR.</li>
          <li><span className="font-semibold">Gobernanza y Seguridad:</span> Los comandos <span className="font-mono bg-gray-100 p-1 rounded">GRANT</span> y <span className="font-mono bg-gray-100 p-1 rounded">REVOKE</span> son esenciales para el control de acceso, cumpliendo con la Ley 1581 de 2012.</li>
        </ul>
      </section>

      {/* Sección 4: Ejercicios Prácticos */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">4. Ejercicios Prácticos de SQL</h3>
        <p className="text-gray-700 mb-4">A continuación, 10 ejercicios con soluciones para practicar los comandos más comunes de SQL en un contexto relevante a la DIAN.</p>
        <div className="space-y-4">
          {/* Aquí puedes agregar los ejercicios prácticos de SQL que te proporcioné */}
          {/* Ejemplo de un ejercicio: */}
          <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
            <p className="font-semibold text-gray-800">1. Consulta de Registros Específicos:</p>
            <p className="text-gray-700 mb-2">Obtener el NIT y el nombre de todos los contribuyentes cuyo estado en el RUT es 'Activo'.</p>
            <pre className="bg-gray-800 text-white p-2 rounded text-sm overflow-x-auto">
              <code>
                SELECT nit, nombre<br/>
                FROM contribuyentes<br/>
                WHERE estado_rut = 'Activo';
              </code>
            </pre>
          </div>
          {/* ... y así sucesivamente para los demás ejercicios ... */}
        </div>
      </section>

      {/* Sección 5: Preguntas Tipo CNSC */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">5. Preguntas Tipo CNSC (Juicio Situacional)</h3>
        <p className="text-gray-700 mb-4">A continuación, 10 preguntas estilo CNSC para practicar la aplicación de conceptos de SQL en escenarios laborales de la DIAN.</p>
        <div className="space-y-4">
          {/* Aquí puedes agregar las preguntas tipo CNSC que te proporcioné */}
          {/* Ejemplo de una pregunta: */}
          <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
            <p className="font-semibold text-gray-800">Pregunta 1:</p>
            <p className="text-gray-700 mb-2">Al migrar datos al DataR, se encuentra que el 10% de los NITs no cumplen con el formato estándar requerido por la Resolución 067 de 2024. Estos NITs tienen caracteres no numéricos que deben ser eliminados. ¿Qué comando SQL, alineado con las políticas de estandarización de la DIAN, prioriza el Gestor II?</p>
            <ul className="list-alpha list-inside text-gray-700 ml-4">
              <li>A. <span className="font-mono bg-gray-100 p-1 rounded">DELETE FROM contribuyentes WHERE nit NOT LIKE '9[0-9]%';</span></li>
              <li>B. <span className="font-mono bg-gray-100 p-1 rounded">UPDATE contribuyentes SET nit = REGEXP_REPLACE(nit, '[^0-9]', '');</span></li>
              <li>C. <span className="font-mono bg-gray-100 p-1 rounded">INSERT INTO errores SELECT * FROM contribuyentes WHERE LENGTH(nit) != 10;</span></li>
            </ul>
            <p className="mt-2 text-sm text-emerald-700 font-semibold">Respuesta Correcta: B</p>
            <p className="text-sm text-gray-600">Explicación: La Resolución 067 exige la estandarización y no la eliminación de datos. El comando UPDATE con REGEXP_REPLACE es el más adecuado, ya que corrige el formato de los NITs, conservando la información y cumpliendo con las políticas de calidad de datos.</p>
          </div>
          {/* ... y así sucesivamente para las demás preguntas ... */}
        </div>
      </section>

      {/* Sección 6: Recursos Adicionales */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">6. Recursos Adicionales</h3>
        <ul className="list-disc list-inside text-gray-700 ml-4">
          <li><span className="font-semibold">Cursos y Plataformas:</span> DataCamp, Coursera, Platzi.</li>
          <li><span className="font-semibold">Libros y Documentación:</span> “SQL in 10 Minutes” (Ben Forta), documentación oficial de la DIAN y la CNSC.</li>
          <li><span className="font-semibold">Sitios web:</span> <a href="www.dian.gov.co" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.dian.gov.co</a>, <a href="www.cnsc.gov.co" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.cnsc.gov.co</a>.</li>
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
          Hacer Simulacro de SQL (20 preguntas)
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

export default SQLStudy;