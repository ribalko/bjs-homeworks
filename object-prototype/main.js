function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    // код для задачи №1 писать здесь
    let now = new Date(); 
    yearDiff = now.getFullYear() - birthday.getFullYear();
    if (yearDiff === 18) {
        now.setFullYear(birthday.getFullYear());
        diff = (now - birthday);
        if (diff > 0) {
            return "Нет";
        }
        else {
            return "Да";
        }
    }
    else if (yearDiff > 18) {
        return "Да";
    }
    else {
        return "Нет";
    }
}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    // код для задачи №2 писать здесь
    if (animal != undefined) {
        return animal.sound;        
    }
    else {
        return null;
    }
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    // код для задачи №3 писать здесь
    let roundedAverage = 0;

    if (marks.length === 0) {
        return roundedAverage;
    }

    let sum = 0;

    for(let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    
    roundedAverage = Math.round(sum/marks.length); 

    return roundedAverage;

}