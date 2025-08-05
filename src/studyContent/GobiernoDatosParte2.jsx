// src/studyContent/GobiernoDatosParte2.jsx
import React from 'react';

const GobiernoDatosParte2 = ({ onBack, onStartSimulacro }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-xl">
      <button
        onClick={onBack}
        className="mb-6 py-2 px-4 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors duration-200 font-semibold"
      >
        ← Volver al Cronograma
      </button>

      <h2 className="text-3xl font-bold text-gray-800 mb-6">Material de Estudio: Gobierno de Datos (Parte 2): Estándares y Políticas</h2>

      {/* Bloque 1: ¿Qué son los Estándares y Políticas? */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">1. Tipos de Políticas y Estándares de Datos</h3>
        <p className="mb-2 text-gray-700">El Gobierno de Datos no es solo una idea, sino un conjunto de reglas que se materializan en políticas y estándares para garantizar que la información sea confiable y segura.</p>
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
          <li><span className="font-semibold">Políticas de Calidad de Datos:</span> Se centran en la precisión, completitud, consistencia y validez de la información.</li>
          <li><span className="font-semibold">Políticas de Seguridad de la Información:</span> Garantizan la confidencialidad, integridad y disponibilidad de los datos contra el acceso no autorizado.</li>
          <li><span className="font-semibold">Políticas de Privacidad y Confidencialidad:</span> Protegen los datos personales, asegurando el cumplimiento de leyes como el habeas data (ej. Ley 1581 de 2012).</li>
          <li><span className="font-semibold">Políticas de Estandarización:</span> Definen reglas para la nomenclatura de datos, facilitando la interoperabilidad entre sistemas.</li>
          <li><span className="font-semibold">Políticas de Retención y Archivo:</span> Establecen por cuánto tiempo se conservan los datos para cumplir con requisitos legales.</li>
        </ul>
      </section>

      {/* Bloque 2: Relación de las Políticas con la Misión de la DIAN */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">2. Relación de las Políticas con la Misión de la DIAN</h3>
        <p className="mb-2 text-gray-700">Las políticas y estándares de datos están intrínsecamente ligadas a la misión de la DIAN, siendo fundamentales para la recaudación, el control y la fiscalización.</p>
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
          <li><span className="font-semibold">Integridad y Disponibilidad:</span> Tu rol como Gestor II se enfoca en asegurar estos principios, cruciales para que la DIAN confíe en sus datos.</li>
          <li><span className="font-semibold">Lucha contra Evasión y Contrabando:</span> Los estándares de calidad y seguridad de los datos son la base para el análisis que detecta estas actividades ilícitas.</li>
          <li><span className="font-semibold">Gobierno de Datos y Arquitectura Digital:</span> El Gobierno de Datos provee las reglas para que la arquitectura tecnológica de la DIAN funcione de manera eficiente y segura.</li>
        </ul>
      </section>

      {/* Bloque 3: Estándares y Componentes Clave */}
      <section className="mb-8 bg-gray-50 p-4 rounded-md">
        <h3 className="text-xl font-semibold text-blue-600 mb-2">3. Componentes y Estándares de Gobierno de Datos en la DIAN</h3>
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b bg-gray-100 text-left text-sm font-semibold text-gray-600">Componente / Estándar</th>
                <th className="py-2 px-4 border-b bg-gray-100 text-left text-sm font-semibold text-gray-600">Función Principal</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="py-2 px-4 border-b border-gray-200">Política de Calidad del Dato</td><td className="py-2 px-4 border-b border-gray-200">Garantizar exactitud, completitud y validez.</td></tr>
              <tr><td className="py-2 px-4 border-b border-gray-200">Política de Seguridad y Privacidad</td><td className="py-2 px-4 border-b border-gray-200">Proteger contra accesos no autorizados.</td></tr>
              <tr><td className="py-2 px-4 border-b border-gray-200">ISO 8000 / ISO 11179</td><td className="py-2 px-4 border-b border-gray-200">Estándares de calidad y gestión del dato.</td></tr>
              <tr><td className="py-2 px-4 border-b border-gray-200">Metadata Dublin Core</td><td className="py-2 px-4 border-b border-gray-200">Estándares para describir metadatos.</td></tr>
              <tr><td className="py-2 px-4 border-b border-gray-200">ISO 27001</td><td className="py-2 px-4 border-b border-gray-200">Estándares de seguridad de la información.</td></tr>
              <tr><td className="py-2 px-4 border-b border-gray-200">Modelo de Arquitectura Empresarial</td><td className="py-2 px-4 border-b border-gray-200">Modelo de referencia para el Estado Colombiano.</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mb-2 text-gray-700"><span className="font-semibold">Principios Rectores:</span> Datos como Activo Estratégico, Calidad desde el Origen, Acceso Controlado, Transparencia.</p>
      </section>

      {/* Bloque 4: Tu Rol como Gestor II en la Aplicación de Estándares */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">4. Tu Rol como Gestor II en la Aplicación de Estándares</h3>
        <p className="mb-2 text-gray-700">Como Gestor II, no defines las políticas, pero eres clave en su aplicación y monitoreo. Tus responsabilidades incluyen:</p>
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
          <li><span className="font-semibold">Ejecutar y Monitorear:</span> Aplicar las reglas y estándares establecidos en tu trabajo diario y reportar su cumplimiento.</li>
          <li><span className="font-semibold">Asegurar la Integridad y Disponibilidad:</span> Vigilar los lineamientos para mantener la integridad de los datos.</li>
          <li><span className="font-semibold">Participar en la Arquitectura:</span> Colaborar en el modelado y la organización de la arquitectura de datos, asegurando el cumplimiento de las políticas.</li>
          <li><span className="font-semibold">Lineamientos Clave:</span> Todo dato debe tener un responsable (Data Owner), todo acceso debe estar autorizado y trazado (Lineage), y se deben aplicar las dimensiones de calidad (precisión, completitud, etc.).</li>
        </ul>
      </section>

      {/* Bloque 5: Preguntas de Juicio Situacional */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">5. Posibles Preguntas en el Examen</h3>
        <div className="mb-4 bg-white p-4 rounded-md shadow-sm border border-gray-100">
          <p className="font-semibold text-gray-800">🧪 CASO 1:</p>
          <p className="mb-2 text-gray-700">"En una Dirección Seccional, un funcionario propone compartir una base de datos tributaria con una entidad externa sin revisar las políticas vigentes. ¿Qué debe indicar el Gestor II como medida inicial?"</p>
          <p className="font-bold text-emerald-700">✅ Respuesta Correcta: Validar que exista una política de acceso y compartir solo si hay respaldo legal.</p>
        </div>
        <div className="mb-4 bg-white p-4 rounded-md shadow-sm border border-gray-100">
          <p className="font-semibold text-gray-800">🧪 CASO 2:</p>
          <p className="mb-2 text-gray-700">"Un reporte institucional es generado por una dependencia con datos no certificados por el Data Owner ni alineados con estándares oficiales. ¿Qué principio está siendo vulnerado?"</p>
          <p className="font-bold text-emerald-700">✅ Respuesta Correcta: Principio de integridad y responsabilidad sobre la fuente.</p>
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
          Hacer Simulacro de "Gobierno de Datos (Parte 2)" (20 preguntas)
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

export default GobiernoDatosParte2;