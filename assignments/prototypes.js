/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/

/*
  === CharacterStats ===
  * healthPoints
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
 
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:

function GameObject(details) {
  this.createdAt = details.createdAt;
  this.dimensions = details.dimensions;
}

GameObject.prototype.destroy = function() {
  return `${this.name || "Object" } was removed from the game.`
} 


//Testing:
const sword = new GameObject({
  createdAt: '12pm',
  dimensions:'large'
})
console.log(sword.destroy())

//CharacterStats: inherits from parent (GameObject)
function CharacterStats(statAttributes) {
  GameObject.call(this, statAttributes);
  this.healthPoints = statAttributes.healthPoints;
  this.name = statAttributes.name;
}
//Prototype inheritance
CharacterStats.prototype = Object.create(GameObject.prototype)

//Prototype additions new to CharacterStats
CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage`
}

// testing:
// const statTest = new CharacterStats({
//   createdAt: '12pm',
//   dimensions:'large',
//   name: "Link"
// })
// console.log(statTest.takeDamage())


//Humanoid: inherits all properties of CharacterStat and GameObject
function Humanoid(humanoidAttributes) {
  CharacterStats.call(this, humanoidAttributes);
  this.team = humanoidAttributes.team;
  this.weapons = humanoidAttributes.weapons;
  this.language = humanoidAttributes.language;
}

//Humanoid prototype inheritance from GameObject
Humanoid.prototype = Object.create(CharacterStats.prototype)
//Humanoid prototype additions
Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}`
}

//Testing:
// const humTest = new Humanoid({
//   createdAt: '12pm',
//   dimensions:'large',
//   name: "Humanoid",
//   team: 'red',
//   healthPoints : '11pts',
//   language: "Dothraki"
// })
// console.log(humTest.greet())
 

  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!

//creates Hero and Villain objects that inherit the properties of a Humanoid
  function Hero(heroAttributes) {
    Humanoid.call(this, heroAttributes)
  }
  function Villain(villainAttributes) {
    Humanoid.call(this, villainAttributes)
  }


 //creates receiver health damaging methods on both Hero and Villain prototypes
  Hero.prototype.punch = function(receiver) {
    receiver.healthPoints -= 20;
    receiver.dead()
    return receiver.healthPoints
  } 
  
  Villain.prototype.kick = function(receiver) {
    receiver.healthPoints -= 20
    receiver.dead()
    return receiver.healthPoints
  } 
    
  //Each striking method calls the receivers dead() method to see if health is still above 0
  Hero.prototype.dead = function() {
    if (this.healthPoints < 1) {
      console.log(`${this.name} has died`)
    }
  }
  
  Villain.prototype.dead = function() {
    if (this.healthPoints < 1) {
      console.log(`${this.name} has died`)
    }
  }
  
  
  //Instatiates Hero and Villain objects
  const hero_character = new Hero({
    healthPoints: 100,
    name: "Hero"
  })
  
  const villain_character = new Villain({
    healthPoints: 100,
    name: "Villain"
  })
  
  
  
  //The Battle:
  console.log(villain_character.kick(hero_character))
  console.log(hero_character.punch(villain_character))
  console.log(villain_character.kick(hero_character))
  console.log(hero_character.punch(villain_character))
  console.log(villain_character.kick(hero_character))
  console.log(hero_character.punch(villain_character))
  console.log(hero_character.punch(villain_character))
  console.log(villain_character.kick(hero_character))
  //Death blow recieved by the Villain
  console.log(hero_character.punch(villain_character))
  
  
  
  