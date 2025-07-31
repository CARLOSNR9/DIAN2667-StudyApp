import React, { useState, useEffect, useRef } from 'react';

const PomodoroTimer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [isBreak, setIsBreak] = useState(false);
  const [pomodorosCompleted, setPomodorosCompleted] = useState(0);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [nextPhaseDuration, setNextPhaseDuration] = useState(0);
  const [isLongBreakPending, setIsLongBreakPending] = useState(false);

  const timerRef = useRef(null);

  const toggle = () => {
    setIsActive(!isActive);
  };

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
    setIsActive(true);
  };

  const handleAceptar = () => {
    setShowNotification(false);

    if (isBreak) {
      setIsBreak(false);
      setMinutes(25);
      setSeconds(0);
    } else {
      setPomodorosCompleted(prev => prev + 1);
      setIsBreak(true);

      if (isLongBreakPending) {
        setMinutes(15);
        setIsLongBreakPending(false);
      } else {
        setMinutes(5);
      }
      setSeconds(0);
    }
    setIsActive(true);
  };

  useEffect(() => {
    if (isActive && !showNotification) {
      timerRef.current = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(timerRef.current);
            setIsActive(false);

            if (isBreak) {
              setNotificationMessage('¡Hora de volver a estudiar!');
              setShowNotification(true);
              setNextPhaseDuration(25);
            } else {
              setPomodorosCompleted(prev => prev + 1);
              if ((pomodorosCompleted + 1) % 4 === 0) {
                setNotificationMessage('¡Felicidades! Es hora de una PAUSA LARGA (15 minutos).');
                setNextPhaseDuration(15);
                setIsLongBreakPending(true);
              } else {
                setNotificationMessage('¡Bien hecho! Es hora de un DESCANSO CORTO (5 minutos).');
                setNextPhaseDuration(5);
              }
              setShowNotification(true);
            }
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [isActive, minutes, seconds, isBreak, pomodorosCompleted, showNotification, isLongBreakPending]);

  const formatTime = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    // Contenedor principal del Pomodoro. Reducimos el padding en pantallas pequeñas (p-4)
    // y aumentamos en medianas/grandes (md:p-6).
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg text-center relative max-w-sm mx-auto">
      <h2 className="text-lg md:text-xl font-semibold mb-2 md:mb-4 text-gray-700"> {/* Reducimos tamaño de título */}
        {isBreak ? 'Tiempo de Descanso' : 'Tiempo de Estudio'}
      </h2>
      <div className="text-5xl md:text-6xl font-extrabold mb-4 md:mb-6 text-gray-900"> {/* Reducimos tamaño del timer */}
        {formatTime(minutes)}:{formatTime(seconds)}
      </div>
      <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4"> {/* Botones se apilan en móviles */}
        <button
          onClick={toggle}
          className={`py-1.5 px-4 text-sm rounded-md text-white font-semibold transition-colors duration-200 ${ /* Reducimos tamaño de botones */
            isActive ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {isActive ? 'Pausar' : 'Iniciar'}
        </button>
        <button
          onClick={reset}
          className="py-1.5 px-4 text-sm rounded-md bg-gray-300 text-gray-800 font-semibold hover:bg-gray-400 transition-colors duration-200"
        >
          Reiniciar
        </button>
      </div>
      <p className="mt-3 text-xs md:text-sm text-gray-600">Pomodoros Completados: {pomodorosCompleted}</p> {/* Reducimos tamaño de texto */}

      {showNotification && (
        // El modal de notificación es un div que ocupa todo el espacio disponible.
        // Sus hijos se centran y ajustan al contenido.
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 rounded-lg z-10"> {/* Añadido z-10 para asegurar que esté por encima */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl text-center max-w-xs md:max-w-sm w-full"> {/* Reducimos el tamaño del modal interno */}
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-900">{notificationMessage}</h3>
            <p className="text-md md:text-lg text-gray-700 mb-4 md:mb-6">
              {isBreak ? '¡Prepárate para la siguiente sesión de estudio!' : `Tu próxima sesión será de ${nextPhaseDuration} minutos.`}
            </p>
            <button
              onClick={handleAceptar}
              className="py-2 px-6 md:py-3 md:px-8 rounded-md bg-emerald-600 text-white font-bold text-md md:text-lg hover:bg-emerald-700 transition-colors duration-200"
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