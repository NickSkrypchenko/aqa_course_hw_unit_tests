/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if (typeof word !== "string") return false;
  let normal = word.toLowerCase();
  let reversed = normal.split("").reverse().join("");

  return normal === reversed;
}


/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  if (typeof sentence !== "string") return [];
  const words = sentence.split(" ").filter(Boolean);
  if (words.length === 0) return [];
  const sorted = words.toSorted((a, b) => b.length - a.length);
  const maxLength = sorted[0].length;

  return sorted.filter(word => word.length === maxLength);
}

export { isPalindrom, findLongestWords };
