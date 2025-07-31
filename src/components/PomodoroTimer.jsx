import React, { useState, useEffect, useRef } from 'react';

const PomodoroTimer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true); // Se inicia automáticamente al cargar la página
  const [isBreak, setIsBreak] = useState(false); // false para estudio, true para descanso
  const [pomodorosCompleted, setPomodorosCompleted] = useState(0); // Para contar los ciclos
  const [showNotification, setShowNotification] = useState(false); // Para mostrar/ocultar la notificación
  const [notificationMessage, setNotificationMessage] = useState(''); // Mensaje de la notificación
  const [nextPhaseDuration, setNextPhaseDuration] = useState(0); // Duración de la siguiente fase
  const [isLongBreakPending, setIsLongBreakPending] = useState(false); // Nuevo estado para controlar si hay una pausa larga pendiente

  const timerRef = useRef(null);

  // Función para iniciar/pausar el temporizador (mantendremos los botones por si el usuario quiere pausar manualmente)
  const toggle = () => {
    setIsActive(!isActive);
  };

  // Función para resetear el temporizador
  const reset = () => {
    setIsActive(false);
    setIsBreak(false);
    setMinutes(25);
    setSeconds(0);
    setPomodorosCompleted(0);
    setShowNotification(false);
    setNotificationMessage('');
    setNextPhaseDuration(0);
    setIsLongBreakPending(false);
    clearInterval(timerRef.current);
    setIsActive(true); // Opcional: reiniciar y empezar automáticamente de nuevo si se resetea.
  };

  // Función para manejar la confirmación de la notificación y pasar a la siguiente fase
  const handleAceptar = () => {
    setShowNotification(false); // Oculta la notificación

    if (isBreak) { // Si veníamos de un descanso, pasamos a estudio
      setIsBreak(false);
      setMinutes(25); // 25 minutos de estudio
      setSeconds(0);
    } else { // Si veníamos de estudio, pasamos a descanso (o descanso largo)
      setPomodorosCompleted(prev => prev + 1); // Incrementamos pomodoros completados
      setIsBreak(true); // Marcamos que estamos en descanso

      if (isLongBreakPending) { // Si hay una pausa larga pendiente
        setMinutes(15); // Pausa larga de 15 minutos
        setIsLongBreakPending(false); // Reseteamos el estado de pausa larga pendiente
      } else {
        setMinutes(5); // Pausa corta de 5 minutos
      }
      setSeconds(0);
    }
    setIsActive(true); // Inicia el timer de la nueva fase
  };


  // Efecto para manejar la lógica del temporizador
  useEffect(() => {
    // Al cargar la página, el timer se inicia automáticamente (gracias a useState(true) en isActive)

    if (isActive && !showNotification) { // Solo corre si está activo y no hay una notificación visible
      timerRef.current = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            // *** El tiempo ha terminado para la fase actual ***
            clearInterval(timerRef.current); // Detenemos el intervalo
            setIsActive(false); // Desactivamos el timer hasta que el usuario acepte

            if (isBreak) {
              // Si terminó un período de DESCANSO (corto o largo)
              setNotificationMessage('¡Hora de volver a estudiar!');
              setShowNotification(true);
              // La duración de la siguiente fase ya será 25 minutos de estudio
              setNextPhaseDuration(25);
            } else {
              // Si terminó un período de ESTUDIO (Pomodoro)
              setPomodorosCompleted(prev => prev + 1); // Incrementamos el contador aquí para la lógica de pausa larga
              if ((pomodorosCompleted + 1) % 4 === 0) {
                // Si este es el 4to pomodoro completado (o múltiplo de 4)
                setNotificationMessage('¡Felicidades! Es hora de una PAUSA LARGA (15 minutos).');
                setNextPhaseDuration(15);
                setIsLongBreakPending(true); // Indicamos que la próxima pausa es larga
              } else {
                setNotificationMessage('¡Bien hecho! Es hora de un DESCANSO CORTO (5 minutos).');
                setNextPhaseDuration(5);
              }
              setShowNotification(true); // Mostramos la notificación
            }
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000); // Se ejecuta cada 1 segundo (1000 ms)
    } else {
      // Si el timer no está activo o hay una notificación, limpiamos el intervalo
      clearInterval(timerRef.current);
    }

    // Función de limpieza para evitar fugas de memoria
    return () => clearInterval(timerRef.current);
  }, [isActive, minutes, seconds, isBreak, pomodorosCompleted, showNotification, isLongBreakPending]); // Dependencias del efecto

  // Formatear el tiempo para mostrar (00:00)
  const formatTime = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center relative max-w-sm mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">
        {isBreak ? 'Tiempo de Descanso' : 'Tiempo de Estudio'}
      </h2>
      <div className="text-6xl font-extrabold mb-6 text-gray-900">
        {formatTime(minutes)}:{formatTime(seconds)}
      </div>
      <div className="flex justify-center space-x-4">
        <button
          onClick={toggle}
          className={`py-2 px-6 rounded-md text-white font-semibold transition-colors duration-200 ${
            isActive ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {isActive ? 'Pausar' : 'Iniciar'}
        </button>
        <button
          onClick={reset}
          className="py-2 px-6 rounded-md bg-gray-300 text-gray-800 font-semibold hover:bg-gray-400 transition-colors duration-200"
        >
          Reiniciar
        </button>
      </div>
      <p className="mt-4 text-gray-600">Pomodoros Completados: {pomodorosCompleted}</p>

      {/* Notificación/Modal para la confirmación */}
      {showNotification && (
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 rounded-lg">
          <div className="bg-white p-8 rounded-lg shadow-xl text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">{notificationMessage}</h3>
            <p className="text-lg text-gray-700 mb-6">
              {isBreak ? '¡Prepárate para la siguiente sesión de estudio!' : `Tu próxima sesión será de ${nextPhaseDuration} minutos.`}
            </p>
            <button
              onClick={handleAceptar}
              className="py-3 px-8 rounded-md bg-emerald-600 text-white font-bold text-lg hover:bg-emerald-700 transition-colors duration-200"
            >
              Aceptar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PomodoroTimer;