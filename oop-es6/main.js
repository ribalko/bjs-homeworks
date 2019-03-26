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



// Задача 2


// класс оружия

class weapon {
    constructor(name) {
        this.attack = 10;
        this.durability = 100;
        this.range = 20;
    }

    takeDamage(damage) {
        this.durability = (this.durability - damage > 0) ? this.durability - damage : 0;
        return this.durability;
    }

    getDamage() {
        if (this.durability >= 30) {
            return this.attack;            
        }
        else if (this.durability > 0) {
            return this.attack/2;            
        }
        else {
            return 0; 
        }
    }

    isBroken() {
        return (this.durability === 0) ? true : false;
    }    

}

// обычное оружие

class arm extends weapon() {
    constructor() {
        this.name = 'Рука';
        this.attack = 1;
        this.durability = Infinity;
        this.range = 1;
    }    
}

class bow extends weapon() {
    constructor() {
        this.name = 'Лук';
        this.attack = 10;
        this.durability = 200;
        this.range = 3;
    }    
}

class sword extends weapon() {
    constructor() {
        this.name = 'Меч';
        this.attack = 25;
        this.durability = 500;
        this.range = 1;
    }    
}

class knife extends weapon() {
    constructor() {
        this.name = 'Нож';
        this.attack = 5
        this.durability = 300;
        this.range = 1;
    }    
}

class staff extends weapon() {
    constructor() {
        this.name = 'Посох';
        this.attack = 8;
        this.durability = 300;
        this.range = 2;
    }    
}

// улучшенное оружие

class longBow extends weapon() {
    constructor() {
        super(durability);
        this.name = 'Длинный лук';
        this.attack = 15;
        this.range = 4;
    }    
}

class axe extends weapon() {
    constructor() {
        super(range);        
        this.name = 'Секира';
        this.attack = 27;
        this.durability = 800;
    }    
}

class stormStaff extends weapon() {
    constructor() {
        super(durability);
        this.name = 'Посох Бури';
        this.attack = 10;
        this.range = 3;
    }    
}


// класс игрока

class player {
    constructor(name) {
        this.life = 100;
        this.magic = 20;
        this.speed = 1;
        this.attack = 10;
        this.agility = 5;
        this.luck = 10;
        this.description = 'Игрок';
        this.weapon = new Arm;
        this.name = name;
    }

    getLuck() {
        let randomNumber = Math.random() * 100;
        return (randomNumber + this.luck)/100;
    }

    getDamage(distance) {
        if (this.weapon.getRange() >= distance) {
            let damage = (attack + this.weapon.Damage) * this.getLuck() / distance;
            return damage;            
        }
        else {
            return 0;            
        }
    }

    takeDamage(damage) {
        this.life = (this.life - damage > 0) ? this.life - damage : 0;
        return this.life;
    }

    isDead() {
        return (this.life === 0) ? true : false;
    }

}


// классы бойцов

class warrior extends player() {
    constructor(name) {
        super(name,magic,agility,luck);
        this.life = 120;
        this.speed = 2;
        this.attack = 10;
        this.description = 'Воин';
        this.weapon = new sword();
        this.mainWeapon = [sword, knife, arm];
    }
    
    takeDamage(damage) {
        if ((this.life < 50) && (this.getLuck() > 0.8) && (this.magic > 0)) {
            if (this.magic - damage >= 0) {
                this.magic =  this.magic - damage;
            }
            else {
                this.life = (this.life - damage + this.magic > 0) ? this.life - damage + this.magic : 0;
            }
            return this.life;
        }
        else {
            this.life = (this.life - damage > 0) ? this.life - damage : 0;
            return this.life;
        }
    }
}


class archer extends player() {
    constructor(name) {
        super(name,speed,luck);
        this.life = 80;
        this.magic = 35;
        this.attack = 5;
        this.agility = 10;
        this.description = 'Лучник';
        this.weapon = new bow();
        this.mainWeapon = [bow, knife, arm];
    }

    getDamage(distance) {
        if (this.weapon.getRange() >= distance) {
            let damage = (attack + this.weapon.Damage) * this.getLuck() * distance / this.weapon.Range;
            return damage;            
        }
        else {
            return 0;            
        }
    }

}


class mage extends player() {
    constructor(name) {
        super(name,speed,luck);
        this.life = 70;
        this.magic = 100;
        this.attack = 5;
        this.agility = 8;
        this.description = 'Маг';
        this.weapon = new staff();
        this.mainWeapon = [staff, knife, arm];
    }

    takeDamage(damage) {
        if (this.magic > 50) {
            this.life = (this.life - damage/1.5 > 0) ? this.life - damage/1.5 : 0;
            this.magic = this.magic - 12;
            return this.life;            
        }
        else {
            this.life = (this.life - damage > 0) ? this.life - damage : 0;
            return this.life;
        }
    }

}


// классы улучшенных бойцов

class dwarf extends warrior() {
    constructor(name) {
        super(name,magic,speed,agility);
        this.life = 130;
        this.attack = 15;
        this.luck = 20;        
        this.description = 'Гном';
        this.weapon = new axe();
        this.mainWeapon = [axe, knife, arm];
        this.hitCounter = 0;
    }

    takeDamage(damage) {
        this.hitCounter ++;
        if ((this.hitCounter === 6) && (this.getLuck() > 0.5)) {
            this.hitCounter = 0;
            this.life = (this.life - damage/2 > 0) ? this.life - damage/2 : 0;
            return this.life;            
        }
        else {
            this.life = (this.life - damage > 0) ? this.life - damage : 0;
            return this.life;
        }
    }

}


class crossbowman extends player() {
    constructor(name) {
        super(name,magic,speed);
        this.life = 85;
        this.attack = 8;
        this.agility = 20;
        this.luck = 15;
        this.description = 'Арбалетчик';
        this.weapon = new longBow();
        this.mainWeapon = [longBow, knife, arm];
    }
}


class demiurge extends player() {
    constructor(name) {
        super(name,speed,agility);
        this.life = 80;
        this.magic = 120;
        this.attack = 6;
        this.aluck = 12;
        this.description = 'Демиург';
        this.weapon = new StormStaff();
        this.mainWeapon = [stormStaff, knife, arm];
    }

    getDamage(distance) {
        if (this.weapon.getRange() >= distance) {
            if ((this.magic > 0) && (this.getLuck() > 0.6)) {
                let damage = ((attack + this.weapon.Damage) * this.getLuck() / distance) * 1.5;
                return damage;        
            }
            else {
                let damage = (attack + this.weapon.Damage) * this.getLuck() / distance;
                return damage;        
            }       
        }
        else {
            return 0;            
        }
    }    

}


