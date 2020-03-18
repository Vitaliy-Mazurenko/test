console.log(calc(3,4));
console.log(calc(8,4));
// (Function Declaration)Декларация функции создается до выполнения любого кода.
function calc(a,b){
	return (a + b);
}

function retVar () {
	let num = 50;
	return num;
}
let anothetNum = retVar();
console.log(anothetNum);
// (Function Expression) будет создано только в момент, когда интерпретатор дойдёт до данной строки кода.
/*
let calc = function (a,b){
	return (a + b);
}
*/
//  «стрелочные функции» (arrow functions)
/*
let calc = (a,b) => a+b;
*/
// Методы у строк и чисел это - вспомагательные функции,
// а Свойства - вспомагательные значения.
let str = "test";
// Свойства:
console.log(str.length);
// Методы;
console.log(str.toUpperCase());
console.log(str.toLowerCase());
let twelve = "12.2px";
console.log(Math.round(twelve));
console.log(parseInt(twelve));
console.log(parseFloat(twelve));