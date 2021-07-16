// Dependencies
// ===========================================================
const express = require('express');

const app = express();
const PORT = 3001;

// Data
// ===========================================================
const characters = [
  {
    routeName: 'yoda',
    name: 'Yoda',
    role: 'Jedi Master',
    age: 900,
    forcePoints: 2000
  },
  {
    routeName: 'darthmaul',
    name: 'Darth Maul',
    role: 'Sith Lord',
    age: 200,
    forcePoints: 1200
  },
  {
    routeName: 'obiwankenobi',
    name: 'Obi Wan Kenobi',
    role: 'Jedi Knight',
    age: 60,
    forcePoints: 1350
  }
];

// Routes
// ===========================================================
app.get('/', (req, res) => {
  res.send('Welcome to the Star Wars Page!');
});

// Create a GET route `/api/characters` that returns all of the characters
//
app.get('/api/characters', (req, res) => {
  res.json(characters);
});

// Create just one GET route that returns any given specific character
// Iterate through the characters' routeNames to check if it matches `req.params.character`
// If there is no such character, send back a message "No character found"
//
function findByRouteName(routeName, characterArray) {
  const result = characterArray.filter(characters => characters.routeName === routeName)[0];
  return result;
};

app.get('/api/characters/:routeName', (req, res) => {
  const chosenCharacter = req.params.routeName;
  console.log(chosenCharacter);
  const result = findByRouteName(chosenCharacter, characters);
  if(result) {
    res.json(result);
  } else {
    res.send('No characters found');
  }
});

/*app.get('/api/characters/:character', (req, res) => {
  const chosenCharacter = req.params.character;
  console.log(chosenCharacter);
  characters.forEach(character => {
    if(chosenCharacter == character.routeName) {
      return res.json(character);
    }
    return res.send('No characters found');
  });
});*/

// Listener
// ===========================================================
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
