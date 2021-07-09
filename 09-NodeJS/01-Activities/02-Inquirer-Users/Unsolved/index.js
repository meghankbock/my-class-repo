const fs = require('fs');

const inquirer = require('inquirer');
// Install the `inquirer` dependency HERE

const promptUser = () => {
return inquirer
.prompt([
  {
  type: 'input',
  name: 'name',
  message: 'what is your name?'
  },
  {
    type: 'list',
    name: 'communication',
    message: 'what is your preferred method of communication?',
    choices: ['Slack', 'Text', 'Email', 'Phone']
    },
    {
      type: 'checkbox',
      name: 'languages',
      message: 'what language do you know?',
      choices: ['Javascript', 'Java', 'Ruby', 'Python']
      },
])};

promptUser().then(answers => console.log(answers));
// Prompt the user for their name, preferred method of communication, and known languages
// YOUR CODE HERE
//

// Write the user response to a file by chaining the below callback method to the prompt above.
promptUser().then(function(data) {

  // Bonus: Generate the name of your user file from their input
  // Your bonus code here
  const filename = data.name.toLowerCase().split(' ').join('') + '.json';

  fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {

    if (err) {
      return console.log(err);
    }

    console.log("Success!");

  });
});
