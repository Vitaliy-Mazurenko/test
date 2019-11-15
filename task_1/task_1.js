let money = prompt("Ваш бюджет на месяц?", "1000");
let time = prompt("Введите дату в формате YYYY-MM-DD", "2019-12-01");
let question1 = prompt("Введите обязательную статью расходов в этом месяце", "");
let question2 = prompt("Во сколько обойдется?", "");
let expenses = {
  question1,
  question2
};
let optionalExpenses = {};
let income = [];
let appData = {
  money,  
  time,
  expenses,
  optionalExpenses,
  income,
  savings:  false
};
alert(money / 30);
