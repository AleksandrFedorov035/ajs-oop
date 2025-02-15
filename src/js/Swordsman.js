import Character from '../js/Сharacter';

export default class Bowman extends Character {
  constructor(name) {
      super(name, 'Swordsman');
      this.attack = 40;
      this.defence = 10;
  }
}