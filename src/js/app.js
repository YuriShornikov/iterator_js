const Character = require("./character.js");

class Team {
  constructor() {
    this.characters = [];
  }
  addCharacter(character) {
    this.characters.push(character);
  }

  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.characters.length) {
          return {
            value: this.characters[index++],
            done: false
          }
        } else {
          return {
            done: true
          }
        }
      }
    }
  }
}

const team = new Team();
const Bowman = new Character('Лучник', 'Bowman', 50, 1, 40, 10);
team.addCharacter(Bowman)
const Gladiator = new Character('Gladiator', 'Swords', 100, 1, 25, 20);
team.addCharacter(Gladiator)

for (let character of team) {
  console.log(character)
}