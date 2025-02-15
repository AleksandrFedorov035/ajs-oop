import Character from '../js/Сharacter';

export default class Daemon extends Character {
  constructor(name) {
      super(name, 'Daemon');
      this.attack = 10;
      this.defence = 40;
  }
}