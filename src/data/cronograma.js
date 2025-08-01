// src/data/cronograma.js

const cronograma = [
  {
    semana: "Semana 1: Fundamentos y Gestión de Datos",
    dias: [
      {
        fecha: "Lunes, 28 de julio",
        jornadas: [
          {
            nombre: "Mañana (9:00 AM - 12:00 PM)",
            temas: [
              "Introducción al Proceso de Selección DIAN 2667",
              "Estructura Organizacional y Misionalidad de la DIAN"
            ],
            tipoSimulacro: "funcional"
          },
          {
            nombre: "Tarde (2:00 PM - 5:00 PM)",
            temas: [
              "Gobierno de Datos (Parte 1): Conceptos Fundamentales"
            ],
            tipoSimulacro: "funcional"
          },
          {
            nombre: "Noche (7:00 PM - 8:30 PM)",
            temas: [
              "Competencia Comportamental: Comportamiento Ético (Nivel 1 y 4)"
            ],
            tipoSimulacro: "comportamental"
          }
        ]
      },
      {
        fecha: "Martes, 29 de julio",
        jornadas: [
          {
            nombre: "Mañana (9:00 AM - 12:00 PM)",
            temas: [
              "Gobierno de Datos (Parte 2): Estándares y Políticas"
            ],
            tipoSimulacro: "funcional"
          },
          {
            nombre: "Tarde (2:00 PM - 5:00 PM)",
            temas: [
              "Ciclo de Vida de Gestión de Datos"
            ],
            tipoSimulacro: "funcional"
          },
          {
            nombre: "Noche (7:00 PM - 8:30 PM)",
            temas: [
              "Competencia Comportamental: Honestidad y Justicia"
            ],
            tipoSimulacro: "comportamental"
          }
        ]
      },
      {
        fecha: "Miércoles, 30 de julio",
        jornadas: [
          {
            nombre: "Mañana (9:00 AM - 12:00 PM)",
            temas: [
              "Diseño de Soluciones de Gestión de Datos"
            ],
            tipoSimulacro: "funcional"
          },
          {
            nombre: "Tarde (2:00 PM - 5:00 PM)",
            temas: [
              "Herramientas ETL (Extract, Transform, Load)"
            ],
            tipoSimulacro: "funcional"
          },
          {
            nombre: "Noche (7:00 PM - 8:30 PM)",
            temas: [
              "Competencia Comportamental: Diligencia y Compromiso"
            ],
            tipoSimulacro: "comportamental"
          }
        ]
      },
      {
        fecha: "Jueves, 31 de julio",
        jornadas: [
          {
            nombre: "Mañana (9:00 AM - 12:00 PM)",
            temas: [
              "SQL (Structured Query Language)"
            ],
            tipoSimulacro: "funcional"
          },
          {
            nombre: "Tarde (2:00 PM - 5:00 PM)",
            temas: [
              "Python (Fundamentos para Datos)"
            ],
            tipoSimulacro: "funcional"
          },
          {
            nombre: "Noche (7:00 PM - 8:30 PM)",
            temas: [
              "Repaso General de la Semana 1"
            ],
            tipoSimulacro: "mixto" // Ojo: Este simulacro podría ser especial (mixto de la semana)
          }
        ]
      },
      {
        fecha: "Viernes, 1 de agosto",
        jornadas: [
          {
            nombre: "Mañana (9:00 AM - 1:00 PM)",
            temas: [
              "Simulacro Parcial 1 (Funcionales - 2.5 horas)",
              "Análisis del Simulacro (1.5 horas)"
            ],
            tipoSimulacro: "funcional-parcial" // Nuevo tipo para simulacros parciales grandes
          }
        ]
      },
      {
        fecha: "Sábado, 2 de agosto",
        jornadas: [
          {
            nombre: "Mañana (9:00 AM - 12:00 PM)",
            temas: [
              "Profundización en Puntos Débiles (Funcionales)"
            ],
            tipoSimulacro: "funcional" // Se usarán preguntas funcionales de los temas débiles
          },
          {
            nombre: "Tarde (2:00 PM - 5:00 PM)",
            temas: [
              "Competencia Comportamental: Adaptabilidad (Nivel 1)",
              "Competencia Comportamental: Orientación al Logro (Nivel 1)"
            ],
            tipoSimulacro: "comportamental"
          },
          {
            nombre: "Noche (Libre / Repaso Ligero)",
            temas: [], // Sin temas específicos de estudio activo
            tipoSimulacro: "ninguno" // No hay simulacro definido para esta jornada
          }
        ]
      },
      {
        fecha: "Domingo, 3 de agosto",
        jornadas: [
          {
            nombre: "Descanso Activo",
            temas: [], // Sin temas de estudio activo
            tipoSimulacro: "ninguno" // No hay simulacro definido para esta jornada
          }
        ]
      }
    ]
  }
  // Aquí iría el resto de las semanas, como Semana 2 y Semana 3
  // Por ahora, solo tenemos la Semana 1 completa.
];

export default cronograma;