// import React, { useState, useEffect } from 'react';
// import { convertToMorse, convertToText } from '../utils/morseUtils';

// const Translator = () => {
//   const [input, setInput] = useState('');
//   const [result, setResult] = useState('');
//   const [mode, setMode] = useState('textToMorse');
//   const [displayResult, setDisplayResult] = useState(''); // Resultado mostrado con efecto.
//   const [isTyping, setIsTyping] = useState(false); // Control del efecto de escritura.

//   const handleTranslate = () => {
//     const translation = mode === 'textToMorse' ? convertToMorse(input) : convertToText(input);
//     setResult(translation);
//     setDisplayResult(''); // Reinicia la visualización antes del efecto.
//     setIsTyping(true); // Activa el efecto de escritura.
//   };

//   // useEffect(() => {
//   //   if (isTyping && result) {
//   //     let index = 0;
//   //     const interval = setInterval(() => {
//   //       setDisplayResult((prev) => prev + result[index]);
//   //       index += 1;
//   //       if (index >= result.length) {
//   //         clearInterval(interval);
//   //         setIsTyping(false); // Finaliza el efecto de escritura.
//   //       }
//   //     }, 75); // Velocidad del efecto (en milisegundos).
//   //     return () => clearInterval(interval);
//   //   }
//   // }, [isTyping, result]);

//   useEffect(() => {
//     if (isTyping && result) {
//       let index = 0; // Asegura que el índice comience desde el inicio.
//       setDisplayResult(''); // Limpia la visualización antes de comenzar.
//       const interval = setInterval(() => {
//         if (index < result.length) {
//           setDisplayResult((prev) => prev + result.charAt(index)); // Usa `charAt` para evitar problemas con índices fuera de rango.
//           index += 1;
//         } else {
//           clearInterval(interval); // Detiene el intervalo al completar.
//           setIsTyping(false); // Indica que el efecto ha terminado.
//         }
//       }, 75); // Ajusta la velocidad según prefieras.
//       return () => clearInterval(interval); // Limpia cualquier intervalo restante al desmontar.
//     }
//   }, [isTyping, result]);
  

//   return (
//     <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg">
//       <h1 className="text-2xl font-bold text-center mb-4">Morse Translator</h1>
//       <textarea
//         className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder={mode === 'textToMorse' ? 'Enter text' : 'Enter Morse code'}
//       />
//       <button
//         className="w-full mt-4 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
//         onClick={handleTranslate}
//         disabled={isTyping} // Desactiva el botón mientras está escribiendo.
//       >
//         {isTyping ? 'Translating...' : 'Translate'}
//       </button>
//       <button
//         className="w-full mt-2 bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600"
//         onClick={() => setMode(mode === 'textToMorse' ? 'morseToText' : 'textToMorse')}
//         disabled={isTyping} // Desactiva el cambio de modo mientras está escribiendo.
//       >
//         Switch to {mode === 'textToMorse' ? 'Morse to Text' : 'Text to Morse'}
//       </button>
//       {displayResult && (
//         <div className="mt-4 p-3 bg-gray-100 rounded-md">
//           <strong>Result:</strong>
//           <p className="mt-2 text-lg font-mono">{displayResult}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Translator;


import React, { useState } from 'react';
import { convertToMorse, convertToText } from '../utils/morseUtils';

const Translator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [mode, setMode] = useState('textToMorse');

  const handleTranslate = () => {
    setResult(mode === 'textToMorse' ? convertToMorse(input) : convertToText(input));
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-4">Morse Translator</h1>
      <textarea
        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={mode === 'textToMorse' ? 'Enter text' : 'Enter Morse code'}
      />
      <button
        className="w-full mt-4 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        onClick={handleTranslate}
      >
        Translate
      </button>
      <button
        className="w-full mt-2 bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600"
        onClick={() => setMode(mode === 'textToMorse' ? 'morseToText' : 'textToMorse')}
      >
        Switch to {mode === 'textToMorse' ? 'Morse to Text' : 'Text to Morse'}
      </button>
      {result && (
        <div className="mt-4 p-3 bg-gray-100 rounded-md">
          <strong>Result:</strong>
          <p className="mt-2">{result}</p>
        </div>
      )}
    </div>
  );
};

export default Translator;
