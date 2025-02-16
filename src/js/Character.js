export default class Character {
    static typeOfCharacter = [
        "Bowman",
        "Swordsman",
        "Magician",
        "Daemon",
        "Undead",
        "Zombie",
    ];

    constructor(name, type) {
        this.name = name
        if (name.length < 2 || name.length > 10) throw new Error("строка, min - 2 символа, max - 10")
        
        this.type = type;
        if(!Character.typeOfCharacter.includes(type)) throw new Error("Нету такого персонажа")
        
        this.health = 100;
        this.level = 1;
        this.attack = null;
        this.defence = null;
    }

    levelUp() {
        if (this.health !== 0) {
          this.level += 1;
          this.attack = this.attack + (this.attack * 20) / 100;
          this.defence = this.defence + (this.defence * 20) / 100;
          this.health = 100;
        } else {
          throw new Error("нельзя повысить левел умершего");
        }
      }
    
      damage(points) {
        if (this.health >= 0) {
          this.health -= points * (1 - this.defence / 100);
        } 
      }
}