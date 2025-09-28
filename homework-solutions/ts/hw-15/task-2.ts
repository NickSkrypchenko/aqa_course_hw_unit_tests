/*
Напишите дженерик-функцию getKeyByValue, которая принимает объект и значение, и возвращает ключ, соответствующий этому значению.
Если значение не найдено, функция должна возвращать undefined.
Используйте keyof для типизации ключей объекта.
*/

function getKeyByValue<T extends object>(obj: T, value: T[keyof T]): keyof T | undefined {
  for (let key in obj) {
    if (obj[key] === value) {
      return key;
    }
  }
  return undefined;
}


//test
const user = {
  name: "Nick",
  age: 25,
  country: "Ukraine",
};

console.log(getKeyByValue(user, 25));
console.log(getKeyByValue(user, "USA"));