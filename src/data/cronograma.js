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
      // ... Puedes añadir más días y semanas aquí siguiendo tu cronograma real 
      // Solo he puesto los dos primeros días para mantener el ejemplo manejable.
      // Asegúrate de copiar con cuidado los datos de tu documento para que coincidan con la estructura. 
    ]
  },
  {
    semana: "Semana 2: Metodologías Ágiles y Competencias Transversales",
    dias: [
      {
        fecha: "Lunes, 4 de agosto",
        jornadas: [
          {
            nombre: "Mañana (9:00 AM - 12:00 PM)",
            temas: [
              "Conceptos Generales de Metodología Ágil para Datos"
            ],
            tipoSimulacro: "funcional"
          },
          {
            nombre: "Tarde (2:00 PM - 5:00 PM)",
            temas: [
              "Roles y Responsabilidades en Metodología Ágil para Procesamiento de Datos"
            ],
            tipoSimulacro: "funcional"
          },
          {
            nombre: "Noche (7:00 PM - 8:30 PM)",
            temas: [
              "Competencia Comportamental: Comunicación Efectiva (Nivel 1 y 3)"
            ],
            tipoSimulacro: "comportamental"
          }
        ]
      },
      // ... más días de la semana 2
    ]
  }
  // ... y así sucesivamente para Semana 3 y el día del examen.
];

export default cronograma;