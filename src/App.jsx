import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti'; // <-- Importación de la librería de confeti
import PomodoroTimer from './components/PomodoroTimer';
import cronograma from './data/cronograma';
import Simulacro from './components/Simulacro';
import IntroDIAN2667 from './studyContent/IntroDIAN2667';
import DianOrgMission from './studyContent/DianOrgMission';
import GobiernoDatosParte1 from './studyContent/GobiernoDatosParte1';
import GobiernoDatosParte2 from './studyContent/GobiernoDatosParte2';
import CicloVidaDatos from './studyContent/CicloVidaDatos';
import DisenoSoluciones from './studyContent/DisenoSoluciones';

// Importa TODOS tus archivos JSON de preguntas aquí
import comportamentalesEtica from './data/preguntas/comportamentales_etica.json';
import preguntasDianOrgMission from './data/preguntas/funcionales_dian_org_mission.json';
import funcionalesGobiernoDatos from './data/preguntas/funcionales_gobierno_datos.json';
import preguntasGobiernoDatosParte2 from './data/preguntas/funcionales_gobierno_datos_parte2.json';
import preguntasCicloVidaDatos from './data/preguntas/funcionales_ciclo_vida_datos.json';
import preguntasDisenoSoluciones from './data/preguntas/funcionales_diseno_soluciones.json';
// ... otros imports de JSON ...

function App() {
  const [activeSimulacro, setActiveSimulacro] = useState(null);
  const [activeStudyMaterial, setActiveStudyMaterial] = useState(null);
  const [completedJornadas, setCompletedJornadas] = useState(() => {
    try {
      const storedCompleted = localStorage.getItem('completedJornadas');
      return storedCompleted ? JSON.parse(storedCompleted) : [];
    } catch (error) {
      console.error("Error al cargar jornadas completadas de localStorage:", error);
      return [];
    }
  });
  const [simulacroHistory, setSimulacroHistory] = useState(() => {
    try {
      const storedHistory = localStorage.getItem('simulacroHistory');
      return storedHistory ? JSON.parse(storedHistory) : {};
    } catch (error) {
      console.error("Error al cargar historial de simulacros de localStorage:", error);
      return {};
    }
  });

  // --- NUEVO ESTADO PARA EL CONFETI ---
  const [showConfetti, setShowConfetti] = useState(false);

  // --- Mapeo de Preguntas por Tema ---
  const questionBanks = {
    "Introducción al Proceso de Selección DIAN 2667": funcionalesGobiernoDatos,
    "Estructura Organizacional y Misionalidad de la DIAN": preguntasDianOrgMission,
    "Gobierno de Datos (Parte 1): Conceptos Fundamentales": funcionalesGobiernoDatos,
    "Gobierno de Datos (Parte 2): Estándares y Políticas": preguntasGobiernoDatosParte2,
    "Ciclo de Vida de Gestión de Datos": funcionalesGobiernoDatos,
    "Diseño de Soluciones de Gestión de Datos": funcionalesGobiernoDatos,
    "Herramientas ETL (Extract, Transform, Load)": funcionalesGobiernoDatos,
    "SQL (Structured Query Language)": funcionalesGobiernoDatos,
    "Python (Fundamentos para Datos)": funcionalesGobiernoDatos,
    "Gobierno de Datos (Parte 1): Conceptos Fundamentales": funcionalesGobiernoDatos,
    "Ciclo de Vida de Gestión de Datos": preguntasCicloVidaDatos,
    "Diseño de Soluciones de Gestión de Datos": preguntasDisenoSoluciones, 

    "Competencia Comportamental: Comportamiento Ético (Nivel 1 y 4)": comportamentalesEtica,
    "Competencia Comportamental: Honestidad y Justicia": comportamentalesEtica,
    "Competencia Comportamental: Diligencia y Compromiso": comportamentalesEtica,
    "Competencia Comportamental: Adaptabilidad (Nivel 1)": comportamentalesEtica,
    "Competencia Comportamental: Orientación al Logro (Nivel 1)": comportamentalesEtica,
    "Competencia Comportamental: Comunicación Efectiva (Nivel 1 y 3)": comportamentalesEtica,
    "Competencia Comportamental: Trabajo en Equipo (Nivel 1 y 3)": comportamentalesEtica,
    "Competencia Comportamental: Orientación al Usuario y al Ciudadano (Nivel 1)": comportamentalesEtica,

    "Conceptos Generales de Metodología Ágil para Datos": funcionalesGobiernoDatos,
    "Roles y Responsabilidades en Metodología Ágil para Procesamiento de Datos": funcionalesGobiernoDatos,
    "Herramientas de Metodologías Ágiles para Procesamiento de Datos": funcionalesGobiernoDatos,
    "Integridad (Prueba de Integridad)": comportamentalesEtica,
  };

  // --- Mapeo de Material de Estudio por Tema ---
  const studyMaterials = {
    "Introducción al Proceso de Selección DIAN 2667": (
      <IntroDIAN2667
        onBack={() => setActiveStudyMaterial(null)}
        onStartSimulacro={() => startTopicSimulacro("Introducción al Proceso de Selección DIAN 2667")}
      />
    ),

    "Estructura Organizacional y Misionalidad de la DIAN": (
      <DianOrgMission
        onBack={() => setActiveStudyMaterial(null)}
        onStartSimulacro={() => startTopicSimulacro("Estructura Organizacional y Misionalidad de la DIAN")}
      />
    ),

    "Gobierno de Datos (Parte 1): Conceptos Fundamentales": (
      <GobiernoDatosParte1
        onBack={() => setActiveStudyMaterial(null)}
        onStartSimulacro={() => startTopicSimulacro("Gobierno de Datos (Parte 1): Conceptos Fundamentales")}
      />
    ),

    "Gobierno de Datos (Parte 2): Estándares y Políticas": (
      <GobiernoDatosParte2
        onBack={() => setActiveStudyMaterial(null)}
        onStartSimulacro={() => startTopicSimulacro("Gobierno de Datos (Parte 2): Estándares y Políticas")}
      />
    ),

    "Ciclo de Vida de Gestión de Datos": ( // <-- ¡NUEVO MAPEADO!
      <CicloVidaDatos
        onBack={() => setActiveStudyMaterial(null)}
        onStartSimulacro={() => startTopicSimulacro("Ciclo de Vida de Gestión de Datos")}
      />
    ),

    "Diseño de Soluciones de Gestión de Datos": ( // <-- ¡NUEVO MAPEADO!
      <DisenoSoluciones
        onBack={() => setActiveStudyMaterial(null)}
        onStartSimulacro={() => startTopicSimulacro("Diseño de Soluciones de Gestión de Datos")}
      />
    ),
    
  };

  // Efecto para guardar completedJornadas en localStorage
  useEffect(() => {
    try {
      localStorage.setItem('completedJornadas', JSON.stringify(completedJornadas));
    } catch (error) {
      console.error("Error al guardar jornadas completadas en localStorage:", error);
    }
  }, [completedJornadas]);

  // Efecto para guardar simulacroHistory en localStorage
  useEffect(() => {
    try {
      localStorage.setItem('simulacroHistory', JSON.stringify(simulacroHistory));
    } catch (error) {
      console.error("Error al guardar historial de simulacros en localStorage:", error);
    }
  }, [simulacroHistory]);


  // Funciones para marcar jornada (sin cambios)
  const markJornadaAsCompleted = (jornadaId) => {
    setCompletedJornadas(prev => {
      if (!prev.includes(jornadaId)) {
        return [...prev, jornadaId];
      }
      return prev;
    });
  };

  const markJornadaAsIncomplete = (jornadaId) => {
    setCompletedJornadas(prev => prev.filter(id => id !== jornadaId));
  };


  // Función auxiliar para obtener las preguntas
  const getQuestionsByTopicOrType = (topics, simulacroType) => {
    let questions = [];

    if (simulacroType === 'diario-general') {
      Object.values(questionBanks).forEach(bank => {
        questions.push(...bank);
      });
      return Array.from(new Set(questions.map(q => q.id)))
                  .map(id => questions.find(q => q.id === id));
    } else if (simulacroType === 'tema-especifico') {
      topics.forEach(topic => {
        if (questionBanks[topic]) {
          questions.push(...questionBanks[topic]);
        } else {
          console.warn(`Advertencia: No se encontraron preguntas para el tema '${topic}'. Asegúrate de que el tema esté mapeado en 'questionBanks' y el JSON exista.`);
        }
      });
    } else { // Para simulacros de jornada
        topics.forEach(topic => {
            if (questionBanks[topic]) {
                questions.push(...questionBanks[topic]);
            } else {
                console.warn(`Advertencia: No se encontraron preguntas para el tema '${topic}'. Asegúrate de que el tema esté mapeado en 'questionBanks' y el JSON exista.`);
            }
        });
    }
    return questions;
  };

  // Funciones para iniciar simulacros
  const startJornadaSimulacro = (jornada, diaFecha) => {
    setActiveStudyMaterial(null);
    const preguntasParaSimulacro = getQuestionsByTopicOrType(jornada.temas, jornada.tipoSimulacro);

    if (preguntasParaSimulacro.length >= 20) {
      setActiveSimulacro({
        tipo: 'jornada',
        numPreguntas: 20,
        preguntas: preguntasParaSimulacro,
        titulo: `Simulacro de Jornada: ${jornada.nombre} (${diaFecha})`,
        id: `${diaFecha}-${jornada.nombre}`
      });
    } else {
      alert(`Advertencia: No hay suficientes preguntas (${preguntasParaSimulacro.length}) para un simulacro de 20 preguntas para ${jornada.tipoSimulacro} de ${jornada.nombre}. Por favor, añade más preguntas al archivo JSON correspondiente.`);
    }
  };

  const startDiaSimulacro = (dia) => {
    setActiveStudyMaterial(null);
    const preguntasParaSimulacro = getQuestionsByTopicOrType(dia.temas, 'diario-general');

    if (preguntasParaSimulacro.length >= 50) {
      setActiveSimulacro({
        tipo: 'diario',
        numPreguntas: 50,
        preguntas: preguntasParaSimulacro,
        titulo: `Simulacro General del Día: ${dia.fecha}`,
        id: `${dia.fecha}-general`
      });
    } else {
      alert(`Advertencia: No hay suficientes preguntas (${preguntasParaSimulacro.length}) para un simulacro diario general de 50 preguntas para el ${dia.fecha}. ¡Añade más preguntas a tus archivos JSON!`);
    }
  };

  const startTopicSimulacro = (topicName) => {
    setActiveStudyMaterial(null);
    const preguntasParaSimulacro = getQuestionsByTopicOrType([topicName], 'tema-especifico');

    if (preguntasParaSimulacro.length >= 20) {
      setActiveSimulacro({
        tipo: 'tema',
        numPreguntas: 20,
        preguntas: preguntasParaSimulacro,
        titulo: `Simulacro del Tema: ${topicName}`,
        id: `topic-${topicName}`
      });
    } else {
      alert(`Advertencia: No hay suficientes preguntas (${preguntasParaSimulacro.length}) para un simulacro de 20 preguntas para el tema '${topicName}'. Por favor, añade más preguntas al archivo JSON correspondiente.`);
    }
  };

  // --- MODIFICACIÓN DE handleSimulacroEnd ---
  const handleSimulacroEnd = (score, wrongQuestions) => {
    if (activeSimulacro) {
      const { id, numPreguntas } = activeSimulacro;
      const newEntry = {
        score: score,
        timestamp: new Date().toISOString(),
        wrongQuestionsCount: wrongQuestions.length,
        failedQuestionIds: wrongQuestions.map(q => q.id),
      };

      setSimulacroHistory(prevHistory => ({
        ...prevHistory,
        [id]: [newEntry, ...(prevHistory[id] || [])].slice(0, 5) // Guarda solo los últimos 5 intentos
      }));

      // Lógica para el confeti y mensaje de felicitación
      const puntosPorPregunta = 100 / numPreguntas;
      // Verificamos si la puntuación es exactamente 100 (ajustando por posibles errores de punto flotante)
      if (Math.abs(score - 100) < 0.001) { 
        setShowConfetti(true);
        setTimeout(() => {
          setShowConfetti(false);
          alert(`¡INCREÍBLE! ¡Has obtenido un puntaje perfecto de 100 puntos en este simulacro!`);
          setActiveSimulacro(null); // Ocultar el simulacro después del mensaje
        }, 5000); // 5 segundos de confeti
      } else {
        alert(`Simulacro finalizado. Puntuación: ${score} puntos. Necesitas 70 para clasificar.`);
        setActiveSimulacro(null); // Ocultar el simulacro
      }
    }
  };

  // Funciones de navegación (sin cambios)
  const showStudyMaterial = (topicName) => {
    setActiveSimulacro(null);
    setActiveStudyMaterial(topicName);
  };

  const resetAppToHome = () => {
    setActiveSimulacro(null);
    setActiveStudyMaterial(null);
  };

  // Función para obtener todas las preguntas fallidas de todo el historial
  const getAllFailedQuestions = () => {
    const allFailedIds = new Set();
    for (const simulacroId in simulacroHistory) {
      simulacroHistory[simulacroId].forEach(attempt => {
        if (attempt && Array.isArray(attempt.failedQuestionIds)) {
          attempt.failedQuestionIds.forEach(qId => allFailedIds.add(qId));
        }
      });
    }
    let uniqueFailedQuestions = [];
    const allAvailableQuestions = Object.values(questionBanks).flat();
    allFailedIds.forEach(failedId => {
      const question = allAvailableQuestions.find(q => q.id === failedId);
      if (question) {
        uniqueFailedQuestions.push(question);
      }
    });
    return uniqueFailedQuestions;
  };

  // Función para iniciar el simulacro de "Mis Errores"
  const startMisErroresSimulacro = () => {
    setActiveStudyMaterial(null);
    const failedQuestions = getAllFailedQuestions();

    if (failedQuestions.length > 0) {
      setActiveSimulacro({
        tipo: 'mis-errores',
        numPreguntas: failedQuestions.length,
        preguntas: failedQuestions,
        titulo: `Simulacro: Mis Errores (${failedQuestions.length} preguntas)`,
        id: 'simulacro-mis-errores'
      });
    } else {
      alert("¡Excelente! No tienes preguntas falladas registradas, o aún no has completado ningún simulacro.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-4 md:p-8">
      {/* El componente Confetti se renderiza condicionalmente */}
      {showConfetti && <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        numberOfPieces={200}
        recycle={false}
      />}
      <header className="text-center mb-8 md:mb-12 relative">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-2 md:mb-4">DIAN ProExam</h1>
        <p className="text-lg md:text-xl text-gray-600">Tu plataforma de estudio personalizada para la DIAN 2667</p>

        {(activeSimulacro || activeStudyMaterial) && (
          <button
            onClick={resetAppToHome}
            className="absolute top-2 left-2 md:top-4 md:left-4 py-1.5 px-3 md:py-2 md:px-4 bg-purple-600 text-white rounded-md font-semibold hover:bg-purple-700 transition-colors duration-200 shadow-md text-sm md:text-base"
          >
            ← Volver al Cronograma
          </button>
        )}
      </header>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 max-w-full lg:max-w-7xl mx-auto">
        <aside className="w-full lg:w-1/3 p-4 bg-white rounded-lg shadow-xl lg:sticky lg:top-8 lg:h-fit">
          <PomodoroTimer />
          <div className="mt-4 md:mt-8 text-center text-xs md:text-sm text-gray-500">
            <p>El Pomodoro te ayuda a estudiar de forma concentrada.</p>
            <p>25 min estudio / 5 min descanso / 15 min descanso largo (cada 4 ciclos).</p>
          </div>
          <div className="mt-6 border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-700">Refuerzo Personalizado</h3>
            <button
              onClick={startMisErroresSimulacro}
              className="w-full py-2 px-4 bg-red-600 text-white rounded-md font-semibold hover:bg-red-700 transition-colors duration-200 shadow-md"
            >
              Simulacro: Mis Errores
            </button>
            {getAllFailedQuestions().length > 0 && (
              <p className="mt-2 text-center text-sm text-gray-600">
                ({getAllFailedQuestions().length} preguntas registradas)
              </p>
            )}
          </div>
        </aside>

        <main className="w-full lg:w-2/3 bg-white p-4 md:p-6 rounded-lg shadow-xl">
          {activeSimulacro ? (
            <Simulacro
              preguntas={activeSimulacro.preguntas}
              tipoSimulacro={activeSimulacro.tipo}
              numPreguntas={activeSimulacro.numPreguntas}
              onSimulacroEnd={handleSimulacroEnd}
            />
          ) : activeStudyMaterial ? (
            studyMaterials[activeStudyMaterial] || (
              <div>
                <button
                  onClick={resetAppToHome}
                  className="mb-4 py-1.5 px-3 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors duration-200 font-semibold text-sm"
                >
                  ← Volver al Cronograma
                </button>
                <p className="text-red-500">Error: Material de estudio no encontrado para: "{activeStudyMaterial}".</p>
                <p className="text-red-500">Asegúrate de que el tema esté mapeado en `studyMaterials` en App.jsx y que el componente exista.</p>
              </div>
            )
          ) : (
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-700">Mi Cronograma de Estudio</h2>

              {cronograma.map((semana, semanaIndex) => (
                <div key={semanaIndex} className="mb-6 md:mb-8 border-b border-gray-200 pb-3 md:pb-4">
                  <h3 className="text-xl md:text-2xl font-semibold text-emerald-700 mb-3 md:mb-4">{semana.semana}</h3>
                  {semana.dias.map((dia, diaIndex) => (
                    <div key={diaIndex} className="mb-4 md:mb-6 p-3 md:p-4 border border-gray-100 rounded-md bg-gray-50 shadow-sm">
                      <h4 className="text-lg md:text-xl font-medium text-blue-700 mb-2 md:mb-3">{dia.fecha}</h4>
                      {dia.jornadas.map((jornada, jornadaIndex) => {
                        const jornadaId = `${dia.fecha}-${jornada.nombre}`;
                        const isJornadaCompleted = completedJornadas.includes(jornadaId);
                        const jornadaSimulacros = simulacroHistory[jornadaId] || [];

                        return (
                          <div
                            key={jornadaIndex}
                            className={`mb-3 md:mb-4 pl-3 md:pl-4 border-l-4 ${isJornadaCompleted ? 'border-emerald-500 bg-emerald-50' : 'border-blue-400'}`}
                          >
                            <p className="font-semibold text-base md:text-lg text-gray-700">{jornada.nombre}</p>
                            <ul className="list-disc list-inside text-sm md:text-base text-gray-600 ml-3 md:ml-4 mt-1">
                              {jornada.temas.map((tema, temaIndex) => {
                                const topicSimulacroId = `topic-${tema}`;
                                const topicSimulacros = simulacroHistory[topicSimulacroId] || [];

                                return (
                                  <li
                                    key={temaIndex}
                                    className="cursor-pointer hover:text-blue-600 hover:underline transition-colors duration-200"
                                    onClick={() => showStudyMaterial(tema)}
                                  >
                                    {tema}
                                    {topicSimulacros.length > 0 && (
                                      <div className="ml-2 md:ml-4 text-xs md:text-sm text-gray-600">
                                        Historial tema:
                                        <ul className="list-none p-0 ml-1 md:ml-2">
                                          {topicSimulacros.map((res, i) => (
                                            <li key={i} className="mt-0.5">
                                              Intento {topicSimulacros.length - i}: <span className={`font-semibold ${res.score >= 70 ? 'text-emerald-700' : 'text-red-700'}`}>{res.score} pts</span>
                                              {res.score >= 70 ? ' ✓' : ' ✗'} ({new Date(res.timestamp).toLocaleDateString()})
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}
                                  </li>
                                );
                              })}
                            </ul>

                            <div className="flex flex-wrap gap-2 mt-2 md:mt-3">
                              <button
                                className="py-1 px-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200 text-xs md:text-sm"
                                onClick={() => startJornadaSimulacro(jornada, dia.fecha)}
                              >
                                Hacer Simulacro de Jornada (20 preguntas)
                              </button>

                              {jornadaSimulacros.length > 0 && (
                                <div className="mt-1 text-xs text-gray-600 w-full text-left pl-1">
                                  Historial jornada:
                                  <ul className="list-none p-0 ml-1 md:ml-2">
                                    {jornadaSimulacros.map((res, i) => (
                                      <li key={i} className="mt-0.5">
                                        Intento {jornadaSimulacros.length - i}: <span className={`font-semibold ${res.score >= 70 ? 'text-emerald-700' : 'text-red-700'}`}>{res.score} pts</span>
                                        {res.score >= 70 ? ' ✓' : ' ✗'} ({new Date(res.timestamp).toLocaleDateString()})
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {isJornadaCompleted ? (
                                <button
                                  onClick={() => markJornadaAsIncomplete(jornadaId)}
                                  className="py-1 px-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200 text-xs md:text-sm flex items-center"
                                >
                                  <span className="mr-0.5">✓</span> Marcar como Pendiente
                                </button>
                              ) : (
                                <button
                                  onClick={() => markJornadaAsCompleted(jornadaId)}
                                  className="py-1 px-3 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition-colors duration-200 text-xs md:text-sm flex items-center"
                                >
                                  <span className="mr-0.5">◎</span> Marcar como Completada
                                </button>
                              )}
                            </div>
                          </div>
                        );
                      })}
                      {(() => {
                        const dailySimulacroId = `${dia.fecha}-general`;
                        const dailySimulacros = simulacroHistory[dailySimulacroId] || [];
                        return (
                          <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-gray-200">
                            <button
                              className="w-full py-2 px-6 bg-emerald-600 text-white rounded-md font-semibold hover:bg-emerald-700 transition-colors duration-200 text-sm md:text-base"
                              onClick={() => startDiaSimulacro(dia)}
                            >
                              Simulacro General del Día (50 preguntas)
                            </button>
                            {dailySimulacros.length > 0 && (
                              <div className="mt-2 text-xs md:text-sm text-center text-gray-600">
                                Historial diario:
                                <ul className="list-none p-0 ml-1 md:ml-2">
                                  {dailySimulacros.map((res, i) => (
                                    <li key={i} className="mt-0.5">
                                      Intento {dailySimulacros.length - i}: <span className={`font-semibold ${res.score >= 70 ? 'text-emerald-700' : 'text-red-700'}`}>{res.score} pts</span>
                                      {res.score >= 70 ? ' ✓' : ' ✗'} ({new Date(res.timestamp).toLocaleDateString()})
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        );
                      })()}
                    </div>
                  ))}
                </div>
              ))}
            </div> 
          )}
        </main>
      </div>
    </div>
  );
}

export default App;