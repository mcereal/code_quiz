$(document).ready(function () {
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
        "Try to answer the following code related questions within the time limit. Keep in mind that incorrect answers will penelize your score time by ten seconds!",
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
  const currentPage = document.querySelector("#currentPage");

  currentPage.addEventListener("click", function (event) {
    event.preventDefault();
    alert(event.target.id);
    // alert($(event.target).text());
  });

  function main() {
    titlePage();
  }

  function titlePage() {
    textInjector(Object.entries(pages.titlepage.title), content, "h1");
    textInjector(Object.entries(pages.titlepage.introText), content, "p");
    textInjector(
      Object.entries(pages.titlepage.startBtnText),
      content,
      "button",
      "class",
      "btn btn-primary"
    );
  }

  function questionsPage() {
    textInjector(
      Object.entries(questions.question1.questionText),
      content,
      "h1"
    );
    textInjector(
      Object.entries(questions.question1.questionOptions),
      optionList,
      "button",
      "class",
      "btn btn-primary"
    );
  }

  // function questionGetter(){
  //   for (const [key, value] of Object.entries(objectKey)){

  //   }
  // }

  //creates new html elements and inserts text
  function textInjector(
    value,
    getID,
    elementType,
    attribute,
    attributeName,
    setID
  ) {
    value.forEach((element) => {
      let newElement = document.createElement(elementType);
      getID.appendChild(newElement);
      newElement.textContent = element[1];
      newElement.setAttribute(attribute, attributeName);
      newElement.id = element[0];
    });
  }

  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }
  main();
});
