"use strict";

console.log("linked ⚡");

/*🔴//lets create the class

class Pet {
  // setup a constructor
  constructor(name, guardian) {
    this.name = name;
    this.guardian = guardian;
  }
} //end of class

//test one: Lets see if our pet exists!
const myPet = new Pet("Lobo", "David");
console.log(myPet);
🔴*/

//---------------------------------------
//Step:2 'Lets add the pet's other properties like boredom, hunger, and sleepiness levels

class Pet {
  // setup a constructor
  constructor(name, guardian) {
    this.name = name;
    this.guardian = guardian;
    this.hunger = 0; //⭐
    this.sleepiness = 0; //⭐
    this.boredom = 0; //⭐
  }
} //end of class

//test 2: Lets see if our pet exists!
const myPet = new Pet("Lobo", "David");
// console.log(myPet);

//---------------------------------------

const fishTank = document.querySelector(".fishTank");
const boombox = document.querySelector(".boombox");
const pet = document.querySelector(".pet");

fishTank.addEventListener("click", () => {
  console.log("FISH!!!!!!!!!");
});

boombox.addEventListener("click", () => {
  console.log("MUSIC 🎧🎶🎵🎹🎼");
  boombox.classList.toggle("boomboxOn");
  pet.classList.toggle("dancing");

  setTimeout(() => {
    boombox.classList.toggle("boomboxOn");
    pet.classList.toggle("dancing");
  }, 5000);
});
