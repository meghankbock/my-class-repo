// Create a constructor function called `Character` that takes in 3 arguments: `name`, `strength`, `hitpoints`
function Character(name, strength, hitpoints) {
    this.name = name;
    this.strength = strength;
    this.hitpoints = hitpoints;
};

// Create a prototype method called `printStats()` which prints all of the stats for a character
Character.prototype.printStats = function() {
    console.table(
        {
            name: this.name,
            strength: this.strength,
            hitpoints: this.hitpoints,
        }
    )
};

// Create a prototype method called `isAlive()` which prints whether or not this character is alive
// by determining whether their `hitpoints` are above or below zero
Character.prototype.isAlive = function() {
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
Character.prototype.attack = function(enemy) {
    enemy.hitpoints -= this.strength;
    console.log(this.name + ' attacked ' + enemy.name + '!');
    console.log('\n-------------------\n');
};

// =============================================================

let warrior = new Character('Crusher', 10, 75);
let rogue = new Character('Dodger', 20, 50);

warrior.printStats();
rogue.printStats();

rogue.attack(warrior);
warrior.printStats();
warrior.isAlive();
