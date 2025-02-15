import Character from "../Character";
import Zombie from "../Zombie";
import Daemon from "../Daemon";

test.each([
    ["name", "m", "Bowman"],
    ["name", "mmmmmmmmmmm", "Bowman"],
  ])("testing lenght of name", (_, name, length) => {
      expect(() => {new Character(name, length)}).toThrow(new Error("строка, min - 2 символа, max - 10"));
  });
  
  test('typeError', () => {
      expect(() => { new Character('Name', 'gnome')}).toThrow(new Error("Выберите другой тип игрока"));
  });
  
  test('levelUp check', () => {
    const zombie = new Zombie('name');
    zombie.health = 0;
    expect(() => {zombie.levelUp()}).toThrow(new Error("Показатель жизни равен 0"));
  });
  
  test('levelUp', () => {
    const daemon = new Daemon('name');
    daemon.levelUp();
    expect([daemon.level, daemon.attack, daemon.defence]).toEqual([2, 12, 48]);
  });
  
  test('points check', () => {
    const daemon = new Daemon('name');
    daemon.health = 50;
    daemon.defence = 20;
    expect(() => {daemon.damage(100)}).toThrow(new Error("Показатель жизни < 0"));
  });
  
  test('damage', () => {
    const daemon = new Daemon('name');
    daemon.damage(10);
    expect(daemon.health).toBeCloseTo(94);
  });