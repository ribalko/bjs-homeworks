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
        result.roots: ['x1: ${x1}']
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