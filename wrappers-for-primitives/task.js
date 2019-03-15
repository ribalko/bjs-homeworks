"use strict";

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let startDate = new Date();

    let result = calculateTotalMortgage(percent, contribution, amount, monthCount(startDate,date);
    let span = window.mortageResult;
    span.textContent = result;
}

function monthCount(dateStart,dateEnd) {
    years = dateEnd.getFullYear() - dateStart.getFullYear();
    months = dateEnd.getMonth() - dateStart.getMonth();
    return years * 12 + months;
}

function convetToNumber(paramName,paramValue) {
    if (isNaN(parseInt(percent))) {
        console.log(`Параметр ${paramName} содержит неправильное значение ${paramValue}`);
        return -1;
    }
    else {
        return parseInt(paramValue);
    }
}

function calculateTotalMortgage(percent, contribution, amount, date) {

    // код для задачи №1 писать здесь

    // Преобразуем параметры функции в числа
    percent = convetToNumber('percent',percent);
    contribution = convetToNumber('contribution',contribution);
    amount = convetToNumber('amount',amount);
    n = convetToNumber('date',date);

    if ((percent == -1) || (contribution == -1) || (amount == -1) || (n == -1)) {
        return 0;
    }

    S = amount - contribution;
    P = percent/12;

    monthlyPayment = S*(P+P/(((1+P)^n)-1));

    totalAmount = monthlyPayment * n;

    return totalAmount;
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    //return greeting;
}