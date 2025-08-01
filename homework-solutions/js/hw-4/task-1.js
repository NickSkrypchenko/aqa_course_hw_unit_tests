/*

 - Создайте переменную salary со значением 1000
  - Создайте переменную grade, которая должна получить значение "middle" если salary больше или равна 1000, и значение "junior" - если меньше
  */

  let salary = 1000;
  let grade;
  if (salary >= 1000) {
    grade = "middle";
  } else {
    grade = "junior";
  }
console.log(grade);

// вариант с тернарным оператором 

let Salary = 1000;
let Grade;
Salary >= 1000 ? Grade = "middle" : Grade = "junior";
console.log(Grade);

//или

let SALARY = 1000;
let GRADE = SALARY >= 1000 ? "middle" : "junior";

console.log(grade);