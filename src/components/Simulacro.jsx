// src/components/Simulacro.jsx
import React, { useState, useEffect } from 'react';

// Función auxiliar para mezclar un array (Algoritmo de Fisher-Yates)
const shuffleArray = (array) => {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
};

const Simulacro = ({ preguntas, tipoSimulacro, numPreguntas = 20, onSimulacroEnd }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0); // Para llevar la puntuación
  const [wrongQuestions, setWrongQuestions] = useState([]); // Para el modo "Mis Errores"

  // Efecto para barajar las preguntas cuando el componente se monta o las preguntas cambian
  useEffect(() => {
    if (preguntas && preguntas.length > 0) {
      // Tomar un número específico de preguntas aleatorias y barajarlas
      const questionsToUse = shuffleArray([...preguntas]).slice(0, numPreguntas);
      setShuffledQuestions(questionsToUse);
      setCurrentQuestionIndex(0); // Reiniciar el índice si las preguntas cambian
      setScore(0); // Resetear puntuación
      setWrongQuestions([]); // Resetear preguntas falladas
      setSelectedAnswer(null); // Resetear selección
      setShowFeedback(false); // Resetear feedback
    }
  }, [preguntas, numPreguntas]); // Depende de las preguntas y el número de preguntas

  // Manejar la selección de respuesta
  const handleAnswerSelect = (index) => {
    setSelectedAnswer(index);
    setShowFeedback(true); // Mostrar feedback inmediatamente después de seleccionar

    // Lógica para actualizar la puntuación y preguntas falladas
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    if (index === currentQuestion.respuesta_correcta_index) {
      setScore(prevScore => prevScore + 5); // Por ejemplo, 5 puntos por pregunta correcta
    } else {
      // Solo añadir a preguntas falladas si no se ha añadido ya y si realmente falló
      if (!wrongQuestions.some(q => q.id === currentQuestion.id)) {
        setWrongQuestions(prev => [...prev, currentQuestion]);
      }
    }
  };

  // Manejar el botón "Siguiente Pregunta"
  const handleNextQuestion = () => {
    setSelectedAnswer(null); // Limpiar selección
    setShowFeedback(false); // Ocultar feedback
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Simulacro terminado
      alert(`Simulacro Finalizado! Tu puntuación: ${score} puntos. Necesitas 70 para clasificar.`);
      if (onSimulacroEnd) {
        onSimulacroEnd(score, wrongQuestions); // Notificar al componente padre que el simulacro terminó
      }
      // Podríamos redirigir o mostrar un resumen aquí
    }
  };

  if (shuffledQuestions.length === 0) {
    return <div className="text-center p-4 text-gray-600">Cargando preguntas...</div>;
  }

  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  const isCorrect = selectedAnswer === currentQuestion.respuesta_correcta_index;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
      <h3 className="text-xl font-semibold mb-4 text-gray-700">
        Simulacro ({tipoSimulacro.charAt(0).toUpperCase() + tipoSimulacro.slice(1)}) - Pregunta {currentQuestionIndex + 1} / {numPreguntas}
      </h3>

      <p className="text-lg mb-6 text-gray-800">{currentQuestion.pregunta}</p>

      <div className="space-y-3 mb-6">
        {currentQuestion.opciones.map((opcion, index) => (
          <button
            key={index}
            onClick={() => handleAnswerSelect(index)}
            disabled={showFeedback} // Deshabilita botones una vez que se selecciona una respuesta
            className={`w-full text-left p-3 rounded-md border text-gray-800 transition-colors duration-200
              ${selectedAnswer === index
                ? (isCorrect ? 'bg-emerald-100 border-emerald-500' : 'bg-red-100 border-red-500')
                : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
              }
              ${showFeedback && currentQuestion.respuesta_correcta_index === index && selectedAnswer !== index
                ? 'border-emerald-500 bg-emerald-50' // Resalta la correcta si la fallaste
                : ''
              }
            `}
          >
            {opcion}
          </button>
        ))}
      </div>

      {showFeedback && (
        <div className={`p-4 rounded-md mb-6 ${isCorrect ? 'bg-emerald-50 border border-emerald-300' : 'bg-red-50 border border-red-300'}`}>
          <p className={`font-semibold ${isCorrect ? 'text-emerald-700' : 'text-red-700'}`}>
            {isCorrect ? '¡Correcto!' : 'Incorrecto.'} La respuesta correcta era: <span className="font-bold">{currentQuestion.opciones[currentQuestion.respuesta_correcta_index]}</span>
          </p>
          <p className="mt-2 text-gray-700">{currentQuestion.explicacion}</p>
        </div>
      )}

      <button
        onClick={handleNextQuestion}
        disabled={!showFeedback} // Deshabilita hasta que se vea el feedback
        className={`w-full py-2 px-6 rounded-md text-white font-semibold transition-colors duration-200
          ${showFeedback ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'}
        `}
      >
        {currentQuestionIndex < shuffledQuestions.length - 1 ? 'Siguiente Pregunta' : 'Finalizar Simulacro'}
      </button>
    </div>
  );
};

export default Simulacro;