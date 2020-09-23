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
const optionList = document.querySelector("#optionList");
const heading = document.querySelector("#heading");

function main() {
  textInjector(valueSelector(questions.question1.questionText), heading, "h1");
  textInjector(
    valueSelector(questions.question1.questionOptions),
    optionList,
    "li"
  );
}

function textInjector(array, list, elementType) {
  array.forEach((element) => {
    let newElement = document.createElement(elementType);
    list.appendChild(newElement);
    newElement.textContent = element;
  });
}

function valueSelector(question) {
  const results = [];
  for (const [key, value] of Object.entries(question)) {
    results.push(`${value}`);
  }
  return results;
}

main();
