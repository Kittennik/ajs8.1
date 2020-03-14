import Bowman from '../js/bowman';
import Swordsman from '../js/swordsman';
import Magician from '../js/magician';
import Zombie from '../js/zombie';
import Team from '../js/app';

test('Добавление персонажа', () => {
  const player = new Magician('Kate');
  const team = new Team();
  team.add(player);

  const received = team.toArray();
  const expected = [{
    name: 'Kate',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  }];

  expect(received).toEqual(expected);
});

test('Добавление группы персонажей', () => {
  const firstPlayer = new Bowman('Leila');
  const secondPlayer = new Zombie('Petr');
  const team = new Team();
  team.addAll(firstPlayer, secondPlayer);

  const received = team.toArray();
  const expected = [{
    name: 'Leila',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  },
  {
    name: 'Petr',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  }];

  expect(received).toEqual(expected);
});

test('Повторное добавление персонажа', () => {
  const swordsman = new Swordsman('Serj');
  const team = new Team();
  team.add(swordsman);

  expect(() => {
    team.add(swordsman);
  }).toThrow();
});
