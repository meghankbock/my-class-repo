const Character = require("../rpg-tdd");

test("creates a character object", () => {
  // Create a new character with a `name`, `strength`, and `hitpoints` values
  const character = new Character("boy", 10, 50);
  expect(character.name).toBe("boy");
  expect(character.strength).toBe(10);
  expect(character.hitpoints).toBe(50);
});
  //
  // Create a test that checks if the `name` is a `string`
  test('checks if the "name" is a "string"', () => {
    const character = new Character("boy", 10, 50);
    expect(character.name).toEqual(expect.any(String));
  });
  //
  // Create a test that checks if the `strength` and `hitpoints` are `numbers`
  test('checks if the "strengh" and "hitpoints" are "numbers"', () => {
    const character = new Character("boy", 10, 50);
    expect(character.strength).toEqual(expect.any(Number));
    expect(character.hitpoints).toEqual(expect.any(Number));
  });
  //
  // Create a test that checks if the `hitpoints` is greater than the `strength`

  test('checks if the "hitpoints" is greater than the "strength"', () => {
    const character = new Character("boy", 10, 50);
    expect(character.hitpoints).toBeGreaterThan(character.strength);
  });
  //

// Bonus: write a test that will check if the character is alive or not
test("checks if character is alive or not", () => {
  const character = new Character("boy", 10, 50);
  expect(character.isAlive()).toBeTruthy();
  character.hitpoints = 0;
  expect(character.isAlive()).toBeFalsy();
});
