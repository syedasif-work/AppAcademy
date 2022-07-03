class Character {

  constructor(name, description, currentRoom) {
    // Fill this in
    this.name = name;
    this.description = description;
    this.currentRoom = currentRoom;
    this.items = [];
    this.health = 100;
    this.strength = 10;
  }

  applyDamage(amount) {
    // Fill this in
    this.health -= amount;
    if (this.health <= 0) {
      this.die();
    }
  }

  die() {
    // Fill this in
    let room = this.currentRoom;
    this.currentRoom = null;
    room.items.push(...this.items);
  }

}

module.exports = {
  Character,
};
