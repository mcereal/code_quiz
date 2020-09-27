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
      questionAnswer: 2,
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
      questionAnswer: 1,
    },
    question3: {
      questionText: ["Which option is a Semantic Element in HTML?"],
      questionOptions: {
        optionA: "figcaption",
        optionB: "sidebar",
        optionC: "content",
        optionD: "cover",
      },
      questionAnswer: 0,
    },
    question4: {
      questionText: ["Which formating element italisizes text?"],
      questionOptions: {
        optionA: "ital",
        optionB: "it",
        optionC: "italic",
        optionD: "i",
      },
      questionAnswer: 3,
    },
    question5: {
      questionText: ["Which of these is not part of the CSS Box Model?"],
      questionOptions: {
        optionA: "Content",
        optionB: "Outline",
        optionC: "Padding",
        optionD: "Border",
      },
      questionAnswer: 1,
    },
    question6: {
      questionText: ["Select the option that is a flex container property"],
      questionOptions: {
        optionA: "align-border",
        optionB: "flex-flow",
        optionC: "flex-border",
        optionD: "justify-border",
      },
      questionAnswer: 1,
    },
  };

  const startButton = document.querySelector("#startButton");
  const questionView = document.querySelector("#questionView");
  const titleView = document.querySelector("#titleView");
  const resultsView = document.querySelector("#resultsView");
  const submitHighscoresBtn = document.querySelector("#submitHighscoresBtn");
  const backBtn = document.querySelector("#backBtn");
  const clearBtn = document.querySelector("#clearBtn");
  let wrongAnswer = 0;
  let rightAnswer = 0;

  startButton.addEventListener("click", function (event) {
    titleView.classList.add("hidden");
    questionView.classList.remove("hidden");
    viewLoader(questions.question1);
  });

  submitHighscoresBtn.addEventListener("click", function (event) {
    resultsView.classList.add("hidden");
    highscoresView.classList.remove("hidden");
    console.log(wrongAnswer);
  });

  backBtn.addEventListener("click", function (event) {
    highscoresView.classList.add("hidden");
    titleView.classList.remove("hidden");
  });

  function viewLoader(questionNumber) {
    const question = document.querySelector("#question");
    question.textContent = questionNumber.questionText;
    optionA.textContent = questionNumber.questionOptions.optionA;
    optionB.textContent = questionNumber.questionOptions.optionB;
    optionC.textContent = questionNumber.questionOptions.optionC;
    optionD.textContent = questionNumber.questionOptions.optionD;
    const lis = document.getElementsByTagName("li");
    for (let i = 0; i < lis.length; i++) {
      lis[i].addEventListener("click", function (event) {
        optionClickHandler(i, questionNumber);
      });
    }
  }

  function optionClickHandler(i, questionNumber) {
    if (questionNumber === questions.question1) {
      if (i === questionNumber.questionAnswer) {
        console.log("this is correct");
        rightAnswer++;
      } else {
        wrongAnswer++;
        console.log("this is incorrect");
      }
      viewLoader(questions.question2);
    } else if (questionNumber === questions.question2) {
      if (i === questionNumber.questionAnswer) {
        rightAnswer++;
        console.log("this is correct");
      } else {
        wrongAnswer++;
        console.log("this is incorrect");
      }
      viewLoader(questions.question3);
    } else if (questionNumber === questions.question3) {
      if (i === questionNumber.questionAnswer) {
        rightAnswer++;
        console.log("this is correct");
      } else {
        wrongAnswer++;
        console.log("this is incorrect");
      }
      viewLoader(questions.question4);
    } else if (questionNumber === questions.question4) {
      if (i === questionNumber.questionAnswer) {
        rightAnswer++;
        console.log("this is correct");
      } else {
        wrongAnswer++;
        console.log("this is incorrect");
      }
      viewLoader(questions.question5);
    } else if (questionNumber === questions.question5) {
      if (i === questionNumber.questionAnswer) {
        rightAnswer++;
        console.log("this is correct");
      } else {
        wrongAnswer++;
        console.log("this is incorrect");
      }
      viewLoader(questions.question6);
    } else {
      if (i === questionNumber.questionAnswer) {
        rightAnswer++;
        console.log("this is correct");
      } else {
        wrongAnswer++;
        console.log("this is incorrect");
      }
      questionView.classList.add("hidden");
      resultsView.classList.remove("hidden");
    }
  }
});
