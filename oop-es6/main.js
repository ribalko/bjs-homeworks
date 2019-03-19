// Задача 1

class StudentLog {
    
    constructor(name) {
        this.name = name;
        this.grades = {};
    }
    
    getName() {
        return this.name;
    }

    addGrade(grade, subject) {
        if (isNaN(grade) || (grade < 1) || (grade > 5)) {
            console.log (`ВЫ пытались поставить оценку ${grade} по предмету ${subject}. Допустимый предел: 1-5`);
        }
        else {
            currentSubject = this.grades[subject];
            currentSubject.push(grade);
        }
        return currentSubject.length;
    }

    getAverageBySubject(subject) {
        if (subject in this.grades) {
            currentSubject = this.grades[subject];
    
            if (currentSubject.length === 0) {
                return 0;
            }
            
            let sum = 0;
            for(let i = 0; i < currentSubject.length; i++) {
                sum += currentSubject[i];
            }
                
            return sum/currentSubject.length; 
        }
        return 0;
    }    

    getTotalAverage() {
        let totalSubjects = 0;
        let averageSum = 0;
        for (let subject in this.grades) {
            averageSum = this.getAverageBySubject(subject);
            totalSubjects += 1;
        }
        if (totalSubjects === 0) {
            return 0;
        }
        return averageSum/totalSubjects;
    }

    getGradesBySubject(subject) {
        if (subject in this.grades) {
            return this.grades[subject];
        }
        return [];
    }

    getGrades () {
        let totalGrades = 0;
        for (let subject in this.grades) {
            totalGrades += this.grades[subject].length;
        }  
        if (totalGrades === 0) {
            return {};
        }
        return this.grades;
    }


}

