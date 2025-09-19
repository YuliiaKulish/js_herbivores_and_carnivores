'use strict';

class Animal {
  static alive = [];

  constructor(name, health) {
    this.name = name;
    this.health = health || 100;

    Animal.alive.push(this);
  }

  checkAlive() {
    if (this.health <= 0) {
      const index = Animal.alive.indexOf(this);

      if (index > -1) {
        Animal.alive.splice(index, 1);
      }
    }
  }
}

class Herbivore extends Animal {
  hidden = false;
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= 50;
      target.checkAlive();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
