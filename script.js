const questions = {
  question1: {
    questionText: "Which of these is not a Data type in Javascript?",
    optionA: "Booleans",
    optionB: "String",
    optionC: "Parameters",
    optionD: "Numbers",
    correctAnswer: "optionC",
  },
  question2: {
    questionText: "Which of these is not an Arithmetic Operator in Javascript?",
    optionA: "**",
    optionB: "//",
    optionC: "++",
    optionAD: "--",
    correctAnswer: "optionB",
  },
  question3: {
    questionText: "Which option is a Semantic Element in HTML?",
    optionA: "figcaption",
    optionB: "sidebar",
    optionC: "content",
    optionAD: "cover",
    correctAnswer: "optionA",
  },
  question4: {
    questionText: "Which formating element italisizes text?",
    optionA: "ital",
    optionB: "it",
    optionC: "italic",
    optionAD: "i",
    correctAnswer: "optionD",
  },
  question5: {
    questionText: "Which of these is not part of the CSS Box Model?",
    optionA: "Content",
    optionB: "Outline",
    optionC: "Padding",
    optionAD: "Border",
    correctAnswer: "optionB",
  },
  question6: {
    questionText: "Select the option that is a flex container property",
    optionA: "align-border",
    optionB: "flex-flow",
    optionC: "flex-border",
    optionAD: "justify-border",
    correctAnswer: "optionB",
  },
};

function questionTextInjector(currentQuestion) {
  let questionKey = currentQuestion;
  let questionText = document.querySelector("#questionText");

  questionText.innerHTML = `<h1>${questionKey}</h1>`;
}

questionTextInjector(questions.question1.questionText);

function questionOptionInjector(currentQuestion) {
  let questionKey = currentQuestion;
  let questionOption = document.querySelector("#optionA");

  questionOption.innerHTML = `${questionKey}`;
}

questionOptionInjector(questions.question1.optionA);
