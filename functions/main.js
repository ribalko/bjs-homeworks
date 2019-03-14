"use strict";

//Задача 1

function getSolution(a, b, c) {
    // Вычислим Дискриминант
    let D = b * b - 4 * a * c;

    let result = new Object;
    
    //Найдем корни уравнения
    if (D > 0) {
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
        result.roots = ['x1: ${x1}', 'x2: ${x2}'];
        result.D = D;
    }
    else if (D === 0) {
        let x = -b / (2 * a);
        result.roots = ['x1: ${x1}']
        result.D = D;
    }
    else {
        result.roots = [];
        result.D = D;
    }
    
    return result; 
}


function showSolutionsMessage(a, b, c) {
    
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    let result = getSolutions(a, b, c);

    console.log(`Значение дискриминанта: ${result.D}`);
    
    switch(result.roots.length) {
        case 0:
            console.log('Уравнение не имеет вещественных корней!');
            break;
        case 1:
            console.log(`Уравнение имеет один корень ${result.roots}`);
            break;            
        case 2:
            console.log(`Уравнение имеет два корня ${result.roots}`);            
            break;
        default:
            console.log('В процессе вычисления произошла непредвиденная ошибка!');
    }

}



// Задача 2

function getName(secretCode) {
    if (secretCode == 0)
        return 'Родриго';
    else if (secretCode == 1)
        return 'Эмильо';
    else
        return undefined;
    
}

function getPersonData(secretData) {
    firstName = getName(secretData.aaa);
    lastName = getName(secretData.bbb);
    let bandit = { firstName : firstName, lastName : lastName};
    return bandit;
}

let secretData = { aaa: 0 , bbb: 1 };
let bandit = getPersonData(secretData);
for (let name in bandit) {
    console.log(name + ': ' + bandit[name]);
}



// Задача 3

function getAverageMark(marks){
    
    if (marks.length === 0) {
        averageMark = 0;
        return averageMark;
    }
       
        
    let targetCount = 5;
    let sum = 0;

    if (marks.length > targetCount) {
        marks.splice(targetCount);    
    }

    for(let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    
    averageMark = sum/marks.length; 

    return averageMark;
}

function getAverageScoreData(data) {

    let averageScores = {};
    let disciplineCount = 0;
    let disciplineSum = 0;
    
    for (let discipline in data) {
        let marks = data[discipline];
        let averageMark = getAverageMark(marks);
        averageScores[discipline] = averageMark;
        disciplineCount += 1;
        disciplineSum += averageMark;
    }  

    let average = (disciplineCount === 0) ? 0 : disciplineSum/disciplineCount;
    averageScores[discipline] = average;

    return averageScores;
}

let data = {
    algebra: [5,3,4,2,5],
    geometry: [3,3,4,4,5],
    russian: [5,5,4,5,5],
    physics: [5,3,4,5],
    music: [3,4,5],
    english: [5,5,4,5,5,1]    
};

let averageData = getAverageScoreData(data);

for (let discipline in averageData) {
    console.log(discipline + ': ' + averageData[discipline]);
}