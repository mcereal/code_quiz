const questions = {
  question1: {
    questionText: ["Which of these is not a Data type in Javascript?"],
    questionOptions: {
      optionA: "Booleans",
      optionB: "String",
      optionC: "Parameters",
      optionD: "Numbers",
    },
    questionAnswer: "optionC",
  },
  question2: {
    questionText: [
      "Which of these is not an Arithmetic Operator in Javascript?",
    ],
    questionOptions: {
      optionA: "**",
      optionB: "//",
      optionC: "++",
      optionAD: "--",
    },
    questionAnswer: "optionB",
  },
  question3: {
    questionText: ["Which option is a Semantic Element in HTML?"],
    questionOptions: {
      optionA: "figcaption",
      optionB: "sidebar",
      optionC: "content",
      optionD: "cover",
    },
    questionAnswer: "optionA",
  },
  question4: {
    questionText: ["Which formating element italisizes text?"],
    questionOptions: {
      optionA: "ital",
      optionB: "it",
      optionC: "italic",
      optionD: "i",
    },
    questionAnswer: "optionD",
  },
  question5: {
    questionText: ["Which of these is not part of the CSS Box Model?"],
    questionOptions: {
      optionA: "Content",
      optionB: "Outline",
      optionC: "Padding",
      optionD: "Border",
    },
    questionAnswer: "optionB",
  },
  question6: {
    questionText: ["Select the option that is a flex container property"],
    questionOptions: {
      optionA: "align-border",
      optionB: "flex-flow",
      optionC: "flex-border",
      optionD: "justify-border",
    },
    questionAnswer: "optionB",
  },
};

const pages = {
  titlepage: {
    title: ["Coding Quiz Challenge"],
    introText: [
      "Try to answer the following code related questions within the time limit. Keep in mind that incorreect answers will penelize your score time by ten seconds!",
    ],
    startBtnText: ["Start Quiz!"],
  },
  highscorePage: {
    title: ["Highscores"],
    backBtn: ["Go back"],
    clearBtn: ["Clear Highscores"],
  },
  resultsPage: {
    title: ["All Done!"],
    scoreText: ["Your final scrore is: "],
    initials: ["Enter initials"],
    submitBtnText: ["Submit"],
  },
};
const optionList = document.querySelector("#optionList");
const content = document.querySelector("#content");

function main() {
  textInjector(valueSelector(pages.titlepage.title), content, "h1");
  textInjector(valueSelector(pages.titlepage.introText), content, "p");
  textInjector(
    valueSelector(pages.titlepage.startBtnText),
    content,
    "button",
    "class",
    "btn btn-primary"
  );
}

//creates new html elements and inserts text
function textInjector(value, getID, elementType, attribute, attributeName) {
  value.forEach((element) => {
    let newElement = document.createElement(elementType);
    getID.appendChild(newElement);
    newElement.textContent = element;
    newElement.setAttribute(attribute, attributeName);
  });
}

//gets values from specific keys
function valueSelector(question) {
  const results = [];
  for (const [key, value] of Object.entries(question)) {
    results.push(`${value}`);
  }
  return results;
}

main();

// textInjector(valueSelector(questions.question1.questionText), content, "h1");
//   textInjector(
//     valueSelector(questions.question1.questionOptions),
//     optionList,
//     "button",
//     "class",
//     "btn btn-primary"
//   );
