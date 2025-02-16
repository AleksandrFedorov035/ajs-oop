import Character from "../Character";
import Zombie from "../Zombie";
import Daemon from "../Daemon";

test.each([
    ["m", "Bowman"],
    ["mmmmmmmmmmm", "Bowman"],
  ])("testing length of name", (name, type) => {
      expect(() => {new Character(name, type)}).toThrow(new Error("строка, min - 2 символа, max - 10"));
  });
  
  test('typeError', () => {
      expect(() => {new Character('Name', 'gnome')}).toThrow(new Error("Нету такого персонажа"));
  });
  
  test('levelUp умершего', () => {
    const zombie = new Zombie('name');
    zombie.health = 0;
    expect(() => {zombie.levelUp()}).toThrow(new Error("нельзя повысить левел умершего"));
  });
  
  test('levelUp', () => {
    const daemon = new Daemon('name');
    daemon.levelUp();
    expect([daemon.level, daemon.attack, daemon.defence]).toEqual([2, 12, 48]);
  });
  
  test('damage', () => {
    const daemon = new Daemon('name');
    daemon.damage(10);
    expect(daemon.health).toBeCloseTo(94);
  });

  test('корректное создание персонажа', () => {
    const daemon = new Daemon('Daemon')
    const result = {
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
      name: 'Daemon',
      type: 'Daemon',
    }
    expect(daemon).toEqual(result)
  })