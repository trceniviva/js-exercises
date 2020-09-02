/*Work with a partner to create a monkey object, which has the following properties:
* name
* species
* foodsEaten
And the following methods:
* eatSomething(thingAsString)
* introduce: producers a string introducing itself, including its name, species, and what it's eaten.
Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.
Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes
for retrieving properties (dot notation and brackets).
*/

var NewMonkey = function (name, species) {
    this.name = name;
    this.species = species;
    this.foodsEaten = [];
    this.eatSomething = function (eat) {
        this.foodsEaten.push(eat)
    };
    this.introduce = function () {
        var printEaten;
        if (this.foodsEaten.length === 0) {
            printEaten = "nothing!"
        } else {printEaten = this.foodsEaten};
        console.log(`I am ${this.name}, a ${this.species}! Today I have eaten ${printEaten}.`)
    }
};

monkeyOne = {
    name: "Jack-jack",
    species: "gorilla",
    foodsEaten: [],
    eatSomething: function(eat) {
        this.foodsEaten.push(eat)  
    },
    introduce: function() {
        var printEaten;
        if (this.foodsEaten.length === 0) {
            printEaten = "nothing!"
        } else {printEaten = this.foodsEaten};
        console.log(`I am ${this.name}, a ${this.species}! Today I have eaten ${printEaten}`)
    }
}

monkeyTwo = {
    name: "Simon",
    species: "orangutang",
    foodsEaten: [],
    eatSomething: function(eat) {
        this.foodsEaten.push(eat)  
    },
    introduce: function() {
        var printEaten;
        if (this.foodsEaten.length === 0) {
            printEaten = "nothing!"
        } else {printEaten = this.foodsEaten};
        console.log(`I am ${this.name}, a ${this.species}! Today I have eaten ${printEaten}`)
    }
}

monkeyThree = {
    name: "Caesar",
    species: "ape",
    foodsEaten: [],
    eatSomething: function(eat) {
        this.foodsEaten.push(eat)  
    },
    introduce: function() {
        var printEaten;
        if (this.foodsEaten.length === 0) {
            printEaten = "nothing!"
        } else {printEaten = this.foodsEaten};
        console.log(`I am ${this.name}, a ${this.species}! Today I have eaten ${printEaten}`)
    }
}