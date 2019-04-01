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

        if (!(subject in this.grades)) {
          this.grades[subject] = [];
        }

        let currentSubject = this.grades[subject];

        if (isNaN(grade) || (grade < 1) || (grade > 5)) {
            console.log (`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допустимый предел: 1-5`);
        }
        else {
          currentSubject.push(grade);
        }
        return currentSubject.length;        

    }

    getAverageBySubject(subject) {
        if (!(subject in this.grades)) {
            return 0;
        }

        let currentSubject = this.grades[subject];
    
        if (currentSubject.length === 0) {
            return 0;
        }
        
        let sum = 0;
        for(let i = 0; i < currentSubject.length; i++) {
            sum += currentSubject[i];
        }
            
        return sum/currentSubject.length;         
    }    

    getTotalAverage() {
        let totalSubjects = 0;
        let averageSum = 0;
        for (let subject in this.grades) {
            averageSum += this.getAverageBySubject(subject);
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
        return this.grades;
    }


}

let log = new StudentLog('Олег Никифоров');

console.log(log.getName());

console.log(log.addGrade(2,'algebra'));
console.log(log.addGrade('отлично!','math'));
console.log(log.addGrade(4,'algebra'));
console.log(log.addGrade(5,'geometry'));
console.log(log.addGrade(4,'geometry'));
console.log(log.addGrade(25,'chemistry'));

console.log(log.getAverageBySubject('algebra'));
console.log(log.getAverageBySubject('geometry'));
console.log(log.getAverageBySubject('chemistry'));

console.log(log.getTotalAverage());

console.log(log.getGradesBySubject('algebra'));
console.log(log.getGradesBySubject('geometry'));
console.log(log.getGradesBySubject('chemistry'));

console.log(log.getGrades());


// Задача 2


// класс оружия

class Weapon {
    constructor(name) {
        this.attack = 10;
        this.durability = 100;
        this.range = 20;
    }

    takeDamage(damage) {
        this.durability = (this.durability - damage > 0) ? this.durability - damage : 0;
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
        return (this.durability === 0);
    }    

}

// обычное оружие

class Arm extends Weapon {
    constructor() {
        this.name = 'Рука';
        this.attack = 1;
        this.durability = Infinity;
        this.range = 1;
    }    
}

class Bow extends Weapon {
    constructor() {
        this.name = 'Лук';
        this.attack = 10;
        this.durability = 200;
        this.range = 3;
    }    
}

class Sword extends Weapon {
    constructor() {
        this.name = 'Меч';
        this.attack = 25;
        this.durability = 500;
        this.range = 1;
    }    
}

class Knife extends Weapon {
    constructor() {
        this.name = 'Нож';
        this.attack = 5
        this.durability = 300;
        this.range = 1;
    }    
}

class Staff extends Weapon {
    constructor() {
        this.name = 'Посох';
        this.attack = 8;
        this.durability = 300;
        this.range = 2;
    }    
}

// улучшенное оружие

class LongBow extends Weapon {
    constructor() {
        super(durability);
        this.name = 'Длинный лук';
        this.attack = 15;
        this.range = 4;
    }    
}

class Axe extends Weapon {
    constructor() {
        super(range);        
        this.name = 'Секира';
        this.attack = 27;
        this.durability = 800;
    }    
}

class StormStaff extends Weapon {
    constructor() {
        super(durability);
        this.name = 'Посох Бури';
        this.attack = 10;
        this.range = 3;
    }    
}


// класс игрока

class Player {
    constructor(name) {
        this.life = 100;
        this.magic = 20;
        this.speed = 1;
        this.attack = 10;
        this.agility = 5;
        this.luck = 10;
        this.description = 'Игрок';
        this.weapon = new Arm();
        this.name = name;
        this.position = 0;
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
    }

    isDead() {
        return (this.life === 0);
    }

    // методы для задачи 3

    moveLeft(distance) {
        this.position = (distance > this.speed) ? this.position - this.speed : this.position - distance;
    }
    
    moveRight(distance) {
        this.position = (distance > this.speed) ? this.position + this.speed : this.position + distance;
    }    

    move(distance) {
        if (distance > 0) {
            this.moveLeft(distance);
        }
        else {
            this.moveRight(distance);
        }
    }

    isAttackBlocked() {
       return (this.getLuck() > (100 - this.luck)/100);
    } 

    dodged() {
        return (this.getLuck() > (100 - this.agility - this.speed * 3) / 100);
    }

    takeAttack(damage) {
        if (this.isAttackBlocked()) {
            this.weapon.takeDamage();
        }
        else if (!enemy.dodged()) {
            this.getDamge(damage);
        }
    }  

    checkWeapon() {
        if (this.weapon.isBroken()) {
            this.weapon = this.mainWeapon[this.mainWeapon.indexOf(this.weapon) + 1];
        }
    }
    
    tryAttack(enemy) {
        let distance = Math.abs(this.position - enemy.position);
        if (!(this.weapon.range < distance)) {
            this.weapon.takeDamage = 10 * this.getLuck();
            if (distance === 0) {
                enemy.position = enemy.position + 1;
                enemy.takeAttack(this.getDamage(distance) * 2);
            }
            else {
                enemy.takeAttack(this.getDamage(distance));                
            }
        }
    
    }

    chooseEnemy(players) {
        let enemy = players[0];
        for (let i = 0; i < players.length; ++i) {
            if (players[i] == this) {
                continue;
            }
            enemy = (players[i].life > enemy.life) ? players[i] : enemy;
        }
        return enemy;
    }

    moveToEnemy(enemy) {
        this.move(this.position - enemy.position);
    }

    turn(players) {
        let enemy = chooseEnemy(players);
        moveToEnemy(enemy);
        tryAttack(enemy);
    }

}


// классы бойцов

class Warrior extends Player {
    constructor(name) {
        super(name,magic,agility,luck);
        this.life = 120;
        this.speed = 2;
        this.attack = 10;
        this.description = 'Воин';
        this.weapon = new Sword();
        this.mainWeapon = [Sword, Knife, Arm];
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


class Archer extends Player {
    constructor(name) {
        super(name,speed,luck);
        this.life = 80;
        this.magic = 35;
        this.attack = 5;
        this.agility = 10;
        this.description = 'Лучник';
        this.weapon = new Bow();
        this.mainWeapon = [Bow, Knife, Arm];
    }

    getDamage(distance) {
        if (this.weapon.getRange() >= distance) {
            let damage = (this.attack + this.weapon.Damage) * this.getLuck() * distance / this.weapon.Range;
            return damage;            
        }
        else {
            return 0;            
        }
    }

}


class Mage extends Player {
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

class Dwarf extends Warrior {
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


class Crossbowman extends Player {
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


class Demiurge extends Player {
    constructor(name) {
        super(name,speed,agility);
        this.life = 80;
        this.magic = 120;
        this.attack = 6;
        this.luck = 12;
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


function play(players) {
    for (let i = 0; players.length > 1; i++) {
        if (!players[i].isDead()) {
            players[i].turn(players);
        }
        else {
            delete(players[i]);
        }
    }
}


play([
    new Warrior({position: 10, name: 'Иван'}),
    new Warrior({position: 12, name: 'Олег'}),
    new Mage({position: 0, name: 'Дима'}),    
    new Archer({position: 20, name: 'Дима'}),
    new Archer({position: 25, name: 'Ильдар'}),
    new Mage({position: 15, name: 'Ольга'})       
]);