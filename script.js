$(document).ready(function () {
  const questions = {
    question1: {
      questionText: ["Which of these is not a Data type in Javascript?"],
      questionOptions: {
        optionA: "1. Booleans",
        optionB: "2. String",
        optionC: "3. Parameters",
        optionD: "4. Numbers",
      },
      questionAnswer: 2,
    },
    question2: {
      questionText: [
        "Which of these is not an Arithmetic Operator in Javascript?",
      ],
      questionOptions: {
        optionA: "1. **",
        optionB: "2. //",
        optionC: "3. ++",
        optionD: "4. --",
      },
      questionAnswer: 1,
    },
    question3: {
      questionText: ["Which option is a Semantic Element in HTML?"],
      questionOptions: {
        optionA: "1. figcaption",
        optionB: "2. sidebar",
        optionC: "3. content",
        optionD: "4. cover",
      },
      questionAnswer: 0,
    },
    question4: {
      questionText: ["Which formating element italisizes text?"],
      questionOptions: {
        optionA: "1. ital",
        optionB: "2. it",
        optionC: "3. italic",
        optionD: "4. i",
      },
      questionAnswer: 3,
    },
    question5: {
      questionText: ["Which of these is not part of the CSS Box Model?"],
      questionOptions: {
        optionA: "1. Content",
        optionB: "2. Outline",
        optionC: "3. Padding",
        optionD: "4. Border",
      },
      questionAnswer: 1,
    },
    question6: {
      questionText: ["Select the option that is a flex container property"],
      questionOptions: {
        optionA: "1. align-border",
        optionB: "2. flex-flow",
        optionC: "3. flex-border",
        optionD: "4. justify-border",
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
    event.stopPropagation();
    resultsView.classList.add("hidden");
    highscoresView.classList.remove("hidden");
    console.log(wrongAnswer);
  });

  backBtn.addEventListener("click", function (event) {
    event.stopPropagation();
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
    console.log(lis);
    for (let i = 0; i < lis.length; i++) {
      lis[i].addEventListener("click", function (event) {
        event.stopPropagation();
        optionClickHandler(i, questionNumber);
      });
    }
  }

  function optionClickHandler(i, questionNumber) {
    if (questionNumber === questions.question1) {
      console.log(questionNumber);
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
