/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding : unless otherwise spacified. Using "this" will refer to the global/window context of this. The global context is JavaScript in its entirety 
* 2. Implicit binding: In this context "this" refers to the object in which it is referenced
* 3. New binding: In this context "this" will refer to the new Object that was created, not the origin object
* 4. Explicit Binding: Using the .call() or .apply() function it will be made known explicitly what object "this" will be in reference to
*
*
* write out a code example of each explanation above
*/

// Principle 1 : Window

console.log(this)

// Principle 2: Implicit

const Person = {
    firstname: 'Kory',
    lastname: 'Newton',
    introduction: function() {
        console.log(`Hello my name is ${this.firstname} ${this.lastname}`)
    }
  };
  Person.introduction();

// Principle 3: New  

function PerferedBeverage(beverage) {
    this.first = 'My favorite drink in the morning is ';
    this.beverage = beverage;
    this.sentence = function() {
      console.log(this.first + this.beverage);
    };
  }
  
  const coffee = new PerferedBeverage('coffee');
  const tea = new PerferedBeverage('tea');
  
  coffee.sentence();
  tea.sentence();

// Principle 4: Explicit

const list = ['water', 'soda', 'milk', 'orange juice']

function fullSentence(item1, item2, item3){
    return `While I prefer ${this.beverage} in the morning, I also enjoy ${item1}, ${item2}, and ${item3}.`
  }

  console.log(fullSentence.apply(coffee, list))
