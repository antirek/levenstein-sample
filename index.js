const levenshtein = require('fast-levenshtein');
const dlevenshtein = require('damerau-levenshtein');
 
const message11 = 'Ирина, лучше весны может быть только ХОРОШЕЕ ПРЕДЛОЖЕНИЕ! 😊 🏠 Воспользуйтесь весенней скидкой 10% на облицовку и утепление вашего дома! ✅';
const message12 = 'Наталья, лучше весны может быть только ХОРОШЕЕ ПРЕДЛОЖЕНИЕ! 😊 🏠 Воспользуйтесь весенней скидкой 10% на облицовку и утепление вашего дома! ✅';
const message13 = 'Дарина, лопата, как дела? Что ты ходишь без цветка? лучше весны может быть только ХОРОШЕЕ ПРЕДЛОЖЕНИЕ! 😊 🏠 Воспользуйтесь весенней скидкой 10% на облицовку и утепление вашего дома! ✅';

const distance31 = levenshtein.get(message11, message12);
const distance32 = levenshtein.get(message12, message13);
const distance33 = levenshtein.get(message13, message11);
console.log('dist', distance31, distance32, distance33);

const d1 = dlevenshtein(message11, message12);
const d2 = dlevenshtein(message12, message13);
console.log('dd', d1)
/* 
{
  steps: 7,
  relative: 0.04964539007092199,
  similarity: 0.950354609929078
} 
*/
console.log(d2);
/**
 * { steps: 46, 
 *   relative: 0.25, 
 *   similarity: 0.75 
 * }
 */

const message3 = 'Высылаю учетные данные и инструкцию для настройки софтфона. Домен подключения.';
const message4 = 'Добрый день! Не получилось произвести авторизацию?';

const d21 = dlevenshtein(message3, message4);
console.log('dd2', d21);
/**
 * dd2 {
  steps: 62,
  relative: 0.7948717948717948,
  similarity: 0.20512820512820518
}

 */

