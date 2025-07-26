/*

Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются

*/

let n = 5;
let nn = String(n) + n;
let nnn = String(n) + n + n;
console.log( Number(n) + Number(nn) + Number(nnn));