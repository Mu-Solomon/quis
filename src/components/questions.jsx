import React from "react";
import Answers from "./answer";
import { useState } from "react";

import ProgressBar from "react-customizable-progressbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Questions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [marks, setMarks] = useState(0);
  const [count, setCount] = useState(1);
  const [trueCount, setTrueCount] = useState(0);
  const [globalCount, setGlobalCount] = useState(1);
  const [success, setSuccess] = useState(true);
  const [wrongQuestion, setWrongQuestion] = useState([]);
  const [randomWord, setRandomWord] = useState("");
  const successMessage = [
    "We're gonna pump you up!",
    "You did it buddy!",
    " You're a wisard, Harry! ",
    "There's no spoon!",
    "Power UP!",
    "Way to go! ",
    "Plus Ultra!",
    "Even Honey Badger cares!",
    "Woo-hoo!",
    "It's alive. It's alive!",
  ];

  function formatLabel(n) {
    let word = "";
    if (n === 0) {
      word += "one";
    } else if (n === 1) {
      word += "two";
    } else if (n === 2) {
      word += "three";
    } else {
      word += "four";
    }
    return word;
  }
  const questions = [
    {
      question: "31 - 23 is ",
      answers: [21, 8, 15, 17],
      answerIndex: 1,
      id: 1,
    },
    {
      question: "Uganda is a country in the horn of Africa",
      answers: ["false", "true", "I don't know!", "Who is Uganda?"],
      answerIndex: 0,
      id: 2,
    },
    {
      question: "How do you call your niece's uncle",
      answers: ["I don't have a niece", "Dad", "Mother in law ", "Brother"],
      answerIndex: 3,
      id: 3,
    },
    {
      question: "What is the Capital of France",
      answers: ["Javis", "Francain", "Paris", "Kampalas"],
      answerIndex: 2,
      id: 4,
    },
    {
      question: "Which of the following animals can run the fastest",
      answers: ["Cheeter", "Leopard", "Tiger", "Lion"],
      answerIndex: 0,
      id: 5,
    },
    {
      question: "Where did the powers of Spiderman come from",
      answers: [
        "He was born with them",
        "He was bitten by a radioactive spider",
        "He went through a scientific experiment",
        "He woke up with them after a dream",
      ],
      answerIndex: 1,
      id: 6,
    },
    {
      question: "Which of the following animals can run the fastest",
      answers: ["Cheeter", "Leopard", "Tiger", "Lion"],
      answerIndex: 0,
      id: 7,
    },
    {
      question:
        " We often use sodium bicarbonate in the kitchen. What is its other name ",
      answers: ["Vinegar", "Sugar", "Salt", "Baking soda"],
      answerIndex: 3,
      id: 8,
    },
    {
      question:
        " What is the name of the first book of the Old Testament in the Bible ",
      answers: ["Exodus", "Genesis", "Proverbs", "Matthew"],
      answerIndex: 0,
      id: 9,
    },
    {
      question: " Cu is the chemical symbol for which element ",
      answers: ["Oxygen", "Copper", "Zinc", "Helium"],
      answerIndex: 1,
      id: 10,
    },
    {
      question: " Which country containers most Billionaires. ",
      answers: ["France", "Uganda of Course!", "U.S.A", "Russia"],
      answerIndex: 2,
      id: 11,
    },
    {
      question: " Which website is most visited in the world ",
      answers: ["Jumia", "Facebook", "WhatsApp", "pH"],
      answerIndex: 3,
      id: 12,
    },
  ];

  const showQuestion = (n) => {
    const displayWord =
      successMessage[Math.floor(Math.random() * successMessage.length)];
    setRandomWord(displayWord);
    console.log(displayWord);

    const counter = 0;
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      if (globalCount > 1) {
        setCurrentQuestion(nextQuestion);
        // setCount(1);
        setGlobalCount(1);
        setCount(1);
        setTrueCount(0);
      } else {
        // setCurrentQuestion(n);
        return false;
      }

      // return counter;
    } else {
      // setCurrentQuestion(0);
      setSuccess(false);
      // return counter;
      return myMarkup;
    }
  };

  const retryQuis = () => {
    window.location.reload(true);
    // return counter;
  };

  // var count = 0;

  const addMarks = () => {
    const myPoints = marks + 1;
    setMarks(myPoints);
  };

  const validateAnswer = (n) => {
    let questionsArr = [];
    // count += 1;
    setCount(count + 1);
    setGlobalCount(globalCount + 1);
    if (n === questions[currentQuestion].answerIndex) {
      let trueCounter = trueCount + 1;
      setTrueCount(trueCounter);
      if (trueCounter <= 1) {
        addMarks();
        console.log("The right answer ", marks, " points.");
      } else {
        console.log("Input answer number exceeded!");
        return false;
      }
    } else {
      // setWrongQuestion(wrongQuestion.push(2));
      console.log("Wrong answer!", n);
      setCount(1);
      return count;
    }
  };

  const handleDisable = () => {
    return false;
  };

  let validateMarkup;

  const myMarkup = (
    <React.Fragment>
      <h2 className="text-2xl m-4 pt-5 font-bold font-puff text-[#618685]">
        Just Free{" "}
      </h2>
      <p className="text-lg text-slate-400 m-4 font-alumi">
        Question {currentQuestion + 1} / {questions.length}
      </p>
      <h1 className="text-3xl font-extrabold text-slate-600 pl-4 font-monts">
        {questions[currentQuestion].question} ?
      </h1>
      <div className="">
        {/* <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">How much do you expect to use each month?</h3> */}
        <ul className="grid gap-4 w-full md:grid-cols-2 mt-5">
          {questions[currentQuestion].answers.map((item, index) => (
            <Answers
              onValidate={() => validateAnswer(index)}
              answer={item}
              key={index}
              idWord={formatLabel(index)}
            />
          ))}
        </ul>
        <button
          onClick={showQuestion}
          className=" bg-[#80ced6] hover:bg-[#38a2ad] text-white font-bold py-2 px-6 m-3 mt-6 rounded-full font-poppins "
          disabled={handleDisable()}
        >
          Next
        </button>
      </div>
    </React.Fragment>
  );

  const percentage = ((marks / questions.length) * 100).toFixed(0);

  let question = "";
  marks == 1 ? (question += "question") : (question += "questions");
  const nextMarkup = (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-3xl font-extrabold text-slate-600 pt-5 text-center font-monts">
        {randomWord}
      </h1>
      <div className="flex items-center justify-center flex-col md:flex-row">
        {/* <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">How much do you expect to use each month?</h3> */}
        <h2 className="text-emerald-500 text-2xl font-semibold m-4 md:m-0 font-alumi">
          You got {marks} {question} right.{" "}
        </h2>

        <ProgressBar
          radius={100}
          progress={percentage}
          strokeWidth={4}
          strokeColor="indianred"
          trackStrokeWidth={4}
          pointerRadius={8}
          pointerStrokeWidth={5}
          pointerStrokeColor="indianred"
          transition="1s ease "
          initialAnimation={true}
          initialAnimationDelay={0.5}
        >
          <div className="indicator">
            {/* <div>{90}%</div> */}
            <h1 className="text-3xl font-extrabold text-teal-600 pl-4 font-josefin ">
              {percentage}%
            </h1>
          </div>
        </ProgressBar>

        <button
          onClick={retryQuis}
          className=" bg-[#80ced6] hover:bg-[#38a2ad] text-white font-bold py-2 px-6 m-3 mt-6 rounded-full font-poppins "
          disabled={handleDisable()}
        >
          Retry.
        </button>
      </div>
      <FontAwesomeIcon icon="fab fa-facebook-f" />
      <img src={require("../images/facebook.jpg")} alt="" />
    </div>
  );
  success ? (validateMarkup = myMarkup) : (validateMarkup = nextMarkup);

  return (
    <div className="shadow-xl m-4 mt-16 rounded-lg bg-white">
      {validateMarkup}
    </div>
  );
};

export default Questions;
