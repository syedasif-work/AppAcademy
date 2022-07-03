const {Character} = require('./character');
const {Enemy} = require('./enemy');
const {Food} = require('./food');

class Player extends Character {

  constructor(name, startingRoom) {
    super(name, "main character", startingRoom);
  }

  move(direction) {

    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;

      nextRoom.printRoom(this);
    } else {
      console.log("You cannot move in that direction");
    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0 ; i < this.items.length ; i++) {
        console.log(`  ${this.items[i].name}`);
      }
    }
  }

  takeItem(itemName) {
    let item;
    for (let i = 0; i < this.currentRoom.items.length; i++) {
      if (this.currentRoom.items[i].name === itemName) {
        item = this.currentRoom.items.splice(i, 1)[0];
      }
    }
    if (item !== undefined) {
      this.items.push(item);
    }
    // Fill this in

  }

  dropItem(itemName) {
    let item;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name === itemName) {
        item = this.items.splice(i, 1)[0];
      }
    }
    if (item !== undefined) {
      this.currentRoom.items.push(item);
    }
    // Fill this in

  }

  eatItem(itemName) {
    let item;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name === itemName && this.items[i] instanceof Food) {
        item = this.items.splice(i, 1)[0];
      }
    }
    // Fill this in

  }

  getItemByName(name) {
    return this.items.filter(item => item.name === name)[0];
    // Fill this in

  }

  hit(name) {
    const enemies  = this.currentRoom.getEnemies();
    // Fill this in
    for (let enemy of enemies){
      if (enemy.name === name){
        enemy.attackTarget = this;
      }
    }


  }

  die() {
    console.log("You are dead!");
    process.exit();
  }

}

module.exports = {
  Player,
};
