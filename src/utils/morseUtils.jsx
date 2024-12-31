const morseCode = {
    A: '.-', B: '-...', C: '-.-.', D: '-..', E: '.',
    F: '..-.', G: '--.', H: '....', I: '..', J: '.---',
    K: '-.-', L: '.-..', M: '--', N: '-.', O: '---',
    P: '.--.', Q: '--.-', R: '.-.', S: '...', T: '-',
    U: '..-', V: '...-', W: '.--', X: '-..-', Y: '-.--', Z: '--..',
    1: '.----', 2: '..---', 3: '...--', 4: '....-', 5: '.....',
    6: '-....', 7: '--...', 8: '---..', 9: '----.', 0: '-----',
    ' ': '/',
  };
  
  const reverseMorseCode = Object.entries(morseCode).reduce((acc, [key, value]) => {
    acc[value] = key;
    return acc;
  }, {});
  
  export const convertToMorse = (text) => {
    return text.toUpperCase().split('').map(char => morseCode[char] || '').join(' ');
  };
  
  // export const convertToText = (morse) => {
  //   return morse.split(' ').map(code => reverseMorseCode[code] || '').join('');
  // };
  export const convertToText = (morse) => {
    return morse
      .trim() // Elimina espacios adicionales al principio o al final.
      .split(' ') // Divide el código Morse en palabras.
      .map(code => reverseMorseCode[code] || '') // Si el código no está definido, usa una cadena vacía.
      .join('');
  };