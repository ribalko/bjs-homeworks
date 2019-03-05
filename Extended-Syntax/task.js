"use strict";

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    // код для задачи №1 писать здесь
    
    
    // Вычислим Дискриминант
    let D = b * b - 4 * a * c;
    
    //Найдем корни уравнения
    if (D > 0) {
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
        let x = [x1, x2];
    }
    else if (D === 0) {
        let x = -b / (2 * a);
    }
    else {
        let x = "Действительных корней нет!";
    }
    
    return x;
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №2 писать здесь
    let today = new Date();
    let yearOfBirth = dateOfBirthday.getFullYear();
    let actualYear = today.getFullYear();
    let yearDelta = actualYear - yearOfBirth;

    today.setFullYear(yearOfBirth);

    if ((yearDelta > 18) || ((yearDelta == 18) && (today - dateOfBirthday >= 0))) {
        result = `Не желаете ли олд-фэшн, ${name}?`;        
    }
    else {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }
    
    console.log(result)
    return result;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    // код для задачи №3 писать здесь
    let sum = 0;
    for(let i = 0; i < 5; i++) {
        sum += marks[i];
    }
    averageMark = sum/marks.length;
    
    return averageMark;
}