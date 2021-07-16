// Paste your code from the previous activity `03-RPG-Prototypes`
// Create a constructor function called `Character` that takes in 3 arguments: `name`, `strength`, `hitpoints`
class Character {
    constructor(name, strength, hitpoints) {
        this.name = name;
        this.strength = strength;
        this.hitpoints = hitpoints;
    }

// Create a prototype method called `printStats()` which prints all of the stats for a character
printStats() {
    console.table(
        {
            name: this.name,
            strength: this.strength,
            hitpoints: this.hitpoints,
        }
    )
}

// Create a prototype method called `isAlive()` which prints whether or not this character is alive
// by determining whether their `hitpoints` are above or below zero
isAlive() {
        if(this.hitpoints > 0) {
            console.log(this.name + " is alive");
            return true;
        }
        else {
            console.log(this.name + " is dead!");
            return false;
        }
}

// Create a prototype method called `attack()` which takes in a second character
// and subtracts this character's `strength` from their `hitpoints`
attack(enemy) {
    enemy.hitpoints -= this.strength;
    console.log(this.name + ' attacked ' + enemy.name + '!');
    console.log('\n-------------------\n');
}
}
// =============================================================

let warrior = new Character('Crusher', 10, 75);
let rogue = new Character('Dodger', 20, 50);

warrior.printStats();
rogue.printStats();

rogue.attack(warrior);
warrior.printStats();
warrior.isAlive();

let lebron = new Character('Lebron', 30, 95);
let kobe = new Character('Kobe',25,90);

lebron.printStats();
kobe.printStats();

lebron.attack(kobe);
kobe.printStats();
kobe.isAlive();
// Convert the constructor function, including the prototype methods, to ES6 Classes.

// =============================================================

// Create two new instances of a `Character`, giving them different names, strength, and hitPoints.

// Call a combination of `printStats()`, `attack()`, and `isAlive()` methods to have the two characters "fight" in your console.
