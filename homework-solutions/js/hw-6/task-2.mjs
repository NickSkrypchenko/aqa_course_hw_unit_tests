/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
  const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
*/

const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
let resultUnique;
let resultNull;

let competitorPizzasLow = [];
for(let i = 0; i < competitorPizzas.length; i++) {
  competitorPizzasLow.push(competitorPizzas[i].toLowerCase());
}

let myPizzasT1Low = [];
for(let i = 0; i < myPizzasT1.length; i++) {
  myPizzasT1Low.push(myPizzasT1[i].toLowerCase());
}

let myPizzasT2Low = [];
for(let i = 0; i < myPizzasT2.length; i++) {
  myPizzasT2Low.push(myPizzasT2[i].toLowerCase());
}


let resultUniqueT1 = [];
for (let i = 0; i < myPizzasT1.length; i++) {
  if (!competitorPizzasLow.includes(myPizzasT1[i].toLowerCase())) {
    resultUniqueT1.push(myPizzasT1[i]);
  }
}
if (resultUniqueT1.length === 0) {
  resultNull = null; 
} else {
  resultUnique = resultUniqueT1;
}


let resultUniqueT2 = [];
for (let i = 0; i < myPizzasT2.length; i++) {
  if (!competitorPizzasLow.includes(myPizzasT2[i].toLowerCase())) {
    resultUniqueT2.push(myPizzasT2[i]);
  }
}

if (resultUniqueT2.length === 0) {
  resultNull = null; 
} else {
  resultUnique = resultUniqueT2;
}
console.log(resultUnique);
console.log(resultNull);

export { resultNull, resultUnique };