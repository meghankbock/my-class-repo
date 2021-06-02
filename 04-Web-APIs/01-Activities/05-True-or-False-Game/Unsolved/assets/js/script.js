// TODO: Create an array with five question objects
var questionObj = [
    {
    id: 1,
    question: "Does 2 + 2 = 4?",
    answer: true,
    },

    {
    id: 2,
    question: "Is a banana yellow?",
    answer: true,
    },

    {
    id: 3,
    question: "Is Obama still the president?",
    answer: false,
    },

    {
    id: 4,
    question: "Are strawberries purple?",
    answer: false,
    },

    {
    id: 5,
    question: "Is it still 2020?",
    answer: false,
    }

];

// TODO: Create a variable to keep track of the score
var score = 0;

// TODO: Iterate over the questions array and display each question in a confirmation box
for (var i = 0; i < questionObj.length; i++) {
    var answer = window.confirm(questionObj[i].question);

    // TODO: Check the user's answer against the correct answer
    if(answer === questionObj[i].answer) {
        window.alert("You answered correctly. 1 point for you.");
        score += 1;
    }
    else {
        window.alert("You answered incorrectly. No points for you.");
    }
    // TODO: Alert the user if they are correct or wrong. Increment the score accordingly
}
// TODO: At the end of the game, alert the user with the final score
    window.alert("Your final score is " + score + "/5");

