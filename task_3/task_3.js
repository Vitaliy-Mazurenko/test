let money, time;

function start(){
	money = +prompt("Ваш бюджет на месяц?", '');
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

	while(isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц?", '');	
	}
}
start();

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true
};

function chooseExpenses(){
	for (let i = 0; i < 2; i++){
		let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
			b = prompt("Во сколько обойдется?", '');
	
		if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
			&& a != '' && b != '' && a.length < 5) {
			console.log("done");
			appData.expenses[a] = b;		
		} else{
			i = i - 1;		
		}	
	};
}
chooseExpenses();
function chooseOptExpenses(){
	for (let i = 0; i < 3; i++){
		let a = prompt("Введите статью необязательных расходов в этом месяце", ''),
			b = prompt("Во сколько обойдется?", '');
	
		if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
			&& a != '' && b != '' && a.length < 5) {
			console.log("done");
			appData.optionalExpenses[a] = b;		
		} else{
			i = i - 1;		
		}	
	};
}
chooseOptExpenses();
function detectDayBudget (){
appData.moneyPerDey = (appData.budget / 30).toFixed();
alert("Ежедневный бюджет: " + appData.moneyPerDey);
}
detectDayBudget();
function detectLevel () {
if(appData.moneyPerDey < 100){
	console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDey > 100 && appData.moneyPerDey < 2000){
	console.log("Средний уровень достатка");
} else if (appData.moneyPerDey > 2000){
	console.log("Высокий уровень достатка");
} else {
	console.log("Произошла ошибка");
}
}
detectLevel();
function checkSavings() {
	if (appData.savings == true) {
		let save = +prompt("Какова сумма накоплений?"),
		percent = +prompt("Под какой процент?");

		appData.monthIncome = save/100/12*percent;
		alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
	}
}
checkSavings();
console.log(appData);