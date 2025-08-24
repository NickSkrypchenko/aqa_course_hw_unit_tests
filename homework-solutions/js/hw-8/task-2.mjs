/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];

function countVowels(word) {
  const vowels = "aeiou";
  let count = 0;
  for (let char of word.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
function sortedByVowels(wordsArr) {
  return [...wordsArr].sort((a, b) => countVowels(a) - countVowels(b));
}

export { sortedByVowels };
